---
layout: null
---
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Pablo Sagarna - Director of Architecture / Researcher</title>
  <meta name="description" content="Pablo Sagarna, Director of Architecture @WSO2. Enterprise architecture, systems integration, cloud, AI and data governance.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --primary: #0b6bcb;
      --primary-soft: #e8f1fb;
      --text: #1d2433;
      --muted: #5b6475;
      --bg: #f6f8fb;
      --surface: #ffffff;
      --border: #e3e7ee;
      --shadow: 0 1px 2px rgba(16, 24, 40, 0.04), 0 4px 16px rgba(16, 24, 40, 0.06);
    }

    @media (prefers-color-scheme: dark) {
      :root {
        --primary: #5aa9f5;
        --primary-soft: #16263a;
        --text: #e6e9ef;
        --muted: #9aa3b2;
        --bg: #0f1420;
        --surface: #161c2a;
        --border: #262e3f;
        --shadow: 0 1px 2px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(0, 0, 0, 0.25);
      }
    }

    * { box-sizing: border-box; }

    html { scroll-behavior: smooth; }

    body {
      margin: 0;
      font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.65;
      -webkit-font-smoothing: antialiased;
    }

    a { color: var(--primary); text-decoration: none; }
    a:hover { text-decoration: underline; }

    .container {
      max-width: 880px;
      margin: 0 auto;
      padding: 0 20px;
    }

    /* Top bar (sticky) */
    .topbar {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: color-mix(in srgb, var(--bg) 85%, transparent);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--border);
    }

    .topbar .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      height: 60px;
    }

    .brand {
      font-weight: 700;
      color: var(--text);
      letter-spacing: -0.01em;
    }
    .brand:hover { text-decoration: none; }

    .topbar nav { display: flex; gap: 20px; font-size: 0.95em; }
    .topbar nav a { color: var(--muted); font-weight: 500; }
    .topbar nav a:hover { color: var(--primary); text-decoration: none; }

    /* Hero */
    .hero {
      display: flex;
      align-items: center;
      gap: 40px;
      padding: 64px 0 48px;
    }

    .hero img {
      width: 180px;
      height: 180px;
      flex-shrink: 0;
      border-radius: 50%;
      object-fit: cover;
      border: 4px solid var(--surface);
      box-shadow: var(--shadow);
    }

    .eyebrow {
      display: inline-block;
      font-size: 0.8em;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--primary);
      background: var(--primary-soft);
      padding: 4px 10px;
      border-radius: 999px;
      margin-bottom: 12px;
    }

    h1 {
      font-size: 2.6em;
      line-height: 1.15;
      letter-spacing: -0.02em;
      margin: 0 0 8px;
    }

    .subtitle {
      font-size: 1.15em;
      color: var(--muted);
      margin: 0 0 24px;
    }

    .links { display: flex; flex-wrap: wrap; gap: 10px; }

    .btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 9px 16px;
      border-radius: 10px;
      font-size: 0.92em;
      font-weight: 500;
      color: var(--text);
      background: var(--surface);
      border: 1px solid var(--border);
      transition: border-color 0.15s, color 0.15s, transform 0.15s;
    }
    .btn:hover {
      text-decoration: none;
      border-color: var(--primary);
      color: var(--primary);
      transform: translateY(-1px);
    }
    .btn.primary {
      background: var(--primary);
      border-color: var(--primary);
      color: #fff;
    }
    .btn.primary:hover { color: #fff; filter: brightness(1.08); }
    .btn svg { width: 17px; height: 17px; flex-shrink: 0; }

    /* Sections */
    section { padding: 32px 0; scroll-margin-top: 70px; }

    h2 {
      font-size: 1.35em;
      letter-spacing: -0.01em;
      margin: 0 0 20px;
      display: flex;
      align-items: center;
      gap: 12px;
    }
    h2::after {
      content: "";
      flex: 1;
      height: 1px;
      background: var(--border);
    }

    .card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 28px 32px;
      box-shadow: var(--shadow);
    }

    .bio p { margin: 0 0 14px; text-align: justify; }
    .bio p:last-child { margin-bottom: 0; }

    /* Publications */
    .pubs { list-style: none; margin: 0; padding: 0; display: grid; gap: 12px; }

    .pub {
      display: flex;
      align-items: center;
      gap: 20px;
      padding: 18px 22px;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 14px;
      color: var(--text);
      transition: border-color 0.15s, transform 0.15s, box-shadow 0.15s;
    }
    .pub:hover {
      text-decoration: none;
      border-color: var(--primary);
      transform: translateY(-2px);
      box-shadow: var(--shadow);
    }

    .pub .year {
      font-weight: 700;
      font-size: 1.05em;
      color: var(--primary);
      min-width: 48px;
    }

    .pub .body { flex: 1; min-width: 0; }
    .pub .title { font-weight: 600; display: block; }
    .pub .meta { font-size: 0.85em; color: var(--muted); }

    .tag {
      font-size: 0.72em;
      font-weight: 600;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      padding: 3px 9px;
      border-radius: 999px;
      white-space: nowrap;
    }
    .tag.invention { background: var(--primary-soft); color: var(--primary); }
    .tag.article { background: color-mix(in srgb, #12a37f 15%, transparent); color: #12a37f; }

    .pub .arrow { color: var(--muted); transition: transform 0.15s, color 0.15s; }
    .pub:hover .arrow { color: var(--primary); transform: translateX(3px); }

    footer {
      padding: 32px 0 48px;
      text-align: center;
      font-size: 0.85em;
      color: var(--muted);
    }

    /* Responsive */
    @media (max-width: 720px) {
      .topbar nav { display: none; }
      .hero { flex-direction: column; text-align: center; gap: 24px; padding: 40px 0 24px; }
      .hero img { width: 150px; height: 150px; }
      h1 { font-size: 2em; }
      .links { justify-content: center; }
      .card { padding: 22px 20px; }
      .bio p { text-align: left; }
      .pub { flex-wrap: wrap; gap: 6px 14px; padding: 16px 18px; }
      .pub .body { flex-basis: 100%; order: 3; }
      .pub .arrow { display: none; }
    }
  </style>
</head>
<body>
  <header class="topbar">
    <div class="container">
      <a class="brand" href="#">Pablo Sagarna</a>
      <nav>
        <a href="#about">About</a>
        <a href="#publications">Publications</a>
        <a href="mailto:psagarna@gmail.com">Contact</a>
      </nav>
    </div>
  </header>

  <main class="container">
    <section class="hero">
      <img src="foto.jpeg" alt="Foto de Pablo Sagarna">
      <div>
        <span class="eyebrow">Architect &amp; Researcher</span>
        <h1>Pablo Sagarna</h1>
        <p class="subtitle">Director of Architecture @WSO2</p>
        <div class="links">
          <a class="btn" href="mailto:psagarna@gmail.com">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
            Email
          </a>
          <a class="btn" href="https://github.com/psagarna" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.6 18.3 5 18.3 5c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z"/></svg>
            GitHub
          </a>
          <a class="btn" href="https://linkedin.com/in/psagarna" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.5H3.5V9h3.6v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z"/></svg>
            LinkedIn
          </a>
          <a class="btn" href="https://drive.google.com/file/d/1icuJ8BKKDEbX3SDAsgq5xnG5TqyMRuQP/view?usp=sharing" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>
            CV ENG
          </a>
          <a class="btn" href="https://drive.google.com/file/d/15YDibTqUcBI6vnf7pW8Pk3IpxU17m27z/view?usp=sharing" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>
            CV ESP
          </a>
        </div>
      </div>
    </section>

    <section id="about">
      <h2>About</h2>
      <div class="card bio">
        <p>Director of Architecture with extensive experience in designing and implementing high-impact technology solutions focused on business process automation and optimization, systems integration, enterprise architectures, cloud technologies, artificial intelligence, and data governance.</p>
        <p>With a background in Computer Engineering and an MBA, I combine a strong technical foundation with strategic business insight, which has enabled me to add value in complex international projects by aligning technology with corporate objectives.</p>
        <p>Throughout my career, I have faced demanding challenges across various industries, developing a strong ability to anticipate and resolve problems, manage unforeseen issues, and lead initiatives that drive operational efficiency and innovation. I am distinguished by a holistic vision, strong results orientation, and a deep commitment to technological excellence.</p>
      </div>
    </section>

    <section id="publications">
      <h2>Publications</h2>
      <ul class="pubs">
        <li>
          <a class="pub" href="https://psagarna.github.io/OTS" target="_blank" rel="noopener">
            <span class="year">2026</span>
            <span class="body">
              <span class="title">Open Tool Specification</span>
              <span class="meta">A contract-first governance layer for tools, resources and prompts of AI agents</span>
            </span>
            <span class="tag invention">Invention</span>
            <span class="arrow">&rarr;</span>
          </a>
        </li>
        <li>
          <a class="pub" href="https://medium.com/@psagarna/estrategias-de-arquitectura-para-minimizar-tu-factura-ia-80045b6505bd" target="_blank" rel="noopener">
            <span class="year">2026</span>
            <span class="body">
              <span class="title">Estrategias de Arquitectura para minimizar tu factura IA</span>
              <span class="meta">Medium</span>
            </span>
            <span class="tag article">Article</span>
            <span class="arrow">&rarr;</span>
          </a>
        </li>
        <li>
          <a class="pub" href="https://medium.com/@psagarna/c%C3%B3mo-agregar-un-evento-ante-un-cambio-de-estado-de-una-api-en-su-ciclo-de-vida-7c9cac3798ef" target="_blank" rel="noopener">
            <span class="year">2025</span>
            <span class="body">
              <span class="title">¿Cómo agregar un evento ante un cambio de estado de una API en su ciclo de vida?</span>
              <span class="meta">Medium</span>
            </span>
            <span class="tag article">Article</span>
            <span class="arrow">&rarr;</span>
          </a>
        </li>
        <li>
          <a class="pub" href="https://psagarna.github.io/AgendaWEB" target="_blank" rel="noopener">
            <span class="year">2010</span>
            <span class="body">
              <span class="title">Agenda WEB</span>
              <span class="meta">ERP for local and regional public institutions</span>
            </span>
            <span class="tag invention">Invention</span>
            <span class="arrow">&rarr;</span>
          </a>
        </li>
        <li>
          <a class="pub" href="https://psagarna.github.io/WEBCOBROSBP" target="_blank" rel="noopener">
            <span class="year">2005</span>
            <span class="body">
              <span class="title">Web Cobros BP</span>
              <span class="meta">Digital platform for educational institution management</span>
            </span>
            <span class="tag invention">Invention</span>
            <span class="arrow">&rarr;</span>
          </a>
        </li>
        <li>
          <a class="pub" href="https://psagarna.github.io/WEFIM" target="_blank" rel="noopener">
            <span class="year">2003</span>
            <span class="body">
              <span class="title">Web File Manager (WEFIM)</span>
              <span class="meta">Patented web-based personal file storage and sharing system</span>
            </span>
            <span class="tag invention">Invention</span>
            <span class="arrow">&rarr;</span>
          </a>
        </li>
        <li>
          <a class="pub" href="https://psagarna.github.io/PayrollSoftware" target="_blank" rel="noopener">
            <span class="year">1996</span>
            <span class="body">
              <span class="title">Payroll Software</span>
              <span class="meta">Salaries and wages processing built in VBA / Excel 97</span>
            </span>
            <span class="tag invention">Invention</span>
            <span class="arrow">&rarr;</span>
          </a>
        </li>
      </ul>
    </section>
  </main>

  <footer>
    &copy; <span id="year">2026</span> Pablo Sagarna
  </footer>

  <script>document.getElementById('year').textContent = new Date().getFullYear();</script>

  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-3X40PC499C"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-3X40PC499C');
  </script>
</body>
</html>
