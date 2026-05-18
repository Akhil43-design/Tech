import json
from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.admin.views.decorators import staff_member_required
from django.views.decorators.http import require_POST
from .models import ContactMessage

def home_view(request):
    return render(request, 'index.html')

def contact_view(request):
    if request.method == 'POST':
        name = ''
        email = ''
        project_type = ''
        budget = ''
        message = ''
        
        # Check if the content type is JSON
        if request.content_type == 'application/json':
            try:
                data = json.loads(request.body)
                name = data.get('name', '').strip()
                email = data.get('email', '').strip()
                project_type = data.get('type', data.get('project_type', '')).strip()
                budget = data.get('budget', '').strip()
                message = data.get('message', '').strip()
            except json.JSONDecodeError:
                return JsonResponse({'success': False, 'error': 'Invalid JSON data'}, status=400)
        else:
            # Fallback to standard POST form data
            name = request.POST.get('name', '').strip()
            email = request.POST.get('email', '').strip()
            project_type = request.POST.get('type', request.POST.get('project_type', '')).strip()
            budget = request.POST.get('budget', '').strip()
            message = request.POST.get('message', '').strip()
            
        # Basic validation
        if not name or not email or not message:
            return JsonResponse({'success': False, 'error': 'Name, email, and message are required.'}, status=400)
            
        try:
            # Save the message
            msg = ContactMessage.objects.create(
                name=name,
                email=email,
                project_type=project_type,
                budget=budget,
                message=message
            )
            return JsonResponse({'success': True, 'message': 'Thank you! Your message has been received.'})
        except Exception as e:
            return JsonResponse({'success': False, 'error': f'Failed to save message: {str(e)}'}, status=500)
            
    return JsonResponse({'success': False, 'error': 'Method not allowed'}, status=405)

@staff_member_required
def messages_dashboard_view(request):
    messages = ContactMessage.objects.all().order_by('-created_at')
    total_count = messages.count()
    
    # Group by project type and calculate percentage
    project_types = ['Portfolio Site', 'Personal Branding', 'Portfolio Redesign', 'Other']
    project_stats = []
    for p_type in project_types:
        count = messages.filter(project_type=p_type).count()
        percentage = int((count / total_count) * 100) if total_count > 0 else 0
        project_stats.append({
            'type': p_type,
            'count': count,
            'percentage': percentage
        })
        
    # Group by budget ranges
    budget_counts = {
        'under_1000': messages.filter(budget='< ₹1,000').count(),
        'mid_range': messages.filter(budget='₹1,000 – ₹2,500').count(),
        'high_range': messages.filter(budget='₹2,500+').count(),
        'other': messages.filter(budget='Other').count(),
    }
    
    context = {
        'messages': messages,
        'total_count': total_count,
        'project_stats': project_stats,
        'budget_counts': budget_counts,
    }
    return render(request, 'messages_dashboard.html', context)

@staff_member_required
@require_POST
def delete_message_view(request, msg_id):
    try:
        msg = ContactMessage.objects.get(id=msg_id)
        msg.delete()
        return JsonResponse({'success': True, 'message': 'Message deleted successfully.'})
    except ContactMessage.DoesNotExist:
        return JsonResponse({'success': False, 'error': 'Message not found.'}, status=404)
    except Exception as e:
        return JsonResponse({'success': False, 'error': str(e)}, status=500)
