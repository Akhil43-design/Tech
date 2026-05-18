export function renderErrorPage(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Application Error | Akhil Palaparthi</title>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;600&display=swap" rel="stylesheet">
  <style>
    :root {
      --background: oklch(0.13 0.02 270);
      --foreground: oklch(0.97 0.01 250);
      --card: oklch(0.18 0.025 270);
      --neon-blue: oklch(0.7 0.22 250);
      --neon-purple: oklch(0.65 0.25 300);
      --border: oklch(1 0 0 / 0.08);
    }
    body {
      background-color: var(--background);
      color: var(--foreground);
      font-family: 'Inter', sans-serif;
      margin: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
      box-sizing: border-box;
      overflow: hidden;
    }
    .glass-card {
      background: color-mix(in oklab, var(--card) 75%, transparent);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      border: 1px solid var(--border);
      border-radius: 1.5rem;
      padding: 2.5rem 2rem;
      max-width: 480px;
      width: 100%;
      text-align: center;
      box-shadow: 0 0 80px -20px oklch(0.65 0.25 300 / 0.3);
      position: relative;
    }
    .logo {
      display: inline-grid;
      height: 3.5rem;
      width: 3.5rem;
      place-items: center;
      border-radius: 1rem;
      background: linear-gradient(135deg, var(--neon-blue), var(--neon-purple));
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--background);
      margin-bottom: 1.5rem;
      box-shadow: 0 0 30px oklch(0.7 0.22 250 / 0.4);
    }
    h1 {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.75rem;
      font-weight: 700;
      margin: 0 0 0.75rem;
      letter-spacing: -0.02em;
    }
    p {
      color: oklch(0.7 0.03 260);
      font-size: 0.95rem;
      line-height: 1.6;
      margin: 0 0 2rem;
    }
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, var(--neon-blue), var(--neon-purple));
      color: var(--background);
      font-weight: 600;
      font-size: 0.9rem;
      text-decoration: none;
      padding: 0.75rem 1.5rem;
      border-radius: 9999px;
      transition: transform 0.2s, box-shadow 0.2s;
      box-shadow: 0 0 40px -10px oklch(0.65 0.25 300 / 0.4);
      cursor: pointer;
      border: none;
      outline: none;
    }
    .btn:hover {
      transform: scale(1.02);
    }
    .btn:active {
      transform: scale(0.98);
    }
  </style>
</head>
<body>
  <div class="glass-card">
    <div class="logo">AP</div>
    <h1>Premium Space Interrupted</h1>
    <p>A minor technical disruption occurred during SSR compilation. Our digital systems are self-healing. Try refreshing the page or head back home.</p>
    <button onclick="window.location.reload()" class="btn">Reload Experience</button>
  </div>
</body>
</html>`;
}
