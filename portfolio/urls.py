from django.urls import path
from . import views

app_name = 'portfolio'

urlpatterns = [
    path('', views.home_view, name='home'),
    path('contact/', views.contact_view, name='contact'),
    path('dashboard/', views.messages_dashboard_view, name='dashboard'),
    path('dashboard/delete/<int:msg_id>/', views.delete_message_view, name='delete_message'),
]
