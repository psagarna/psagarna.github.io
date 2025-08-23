<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Pablo Sagarna - Director of Architecture / Researcher</title>

  <!-- Fuente moderna -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap">

  <!-- SEO / Open Graph -->
  <meta name="description" content="Pablo Sagarna - Director of Architecture / Researcher. Expert in enterprise architectures, AI, cloud technologies, and data governance.">
  <meta property="og:title" content="Pablo Sagarna - Director of Architecture / Researcher">
  <meta property="og:description" content="Enterprise Architect, Researcher and Innovator in Cloud, AI, and Data Governance.">
  <meta property="og:image" content="foto.jpeg">
  <meta property="og:type" content="website">

  <style>
    :root {
      --primary: #007acc;
      --text-color: #333;
      --bg-color: #fdfdfd;
    }

    body {
      margin: 0;
      padding: 0;
      font-family: 'Inter', sans-serif;
      background-color: var(--bg-color);
      color: var(--text-color);
      line-height: 1.6;
    }

    .container {
      max-width: 900px;
      margin: 0 auto;
      padding: 40px 20px;
    }

    /* Header */
    header {
      text-align: center;
      background: var(--bg-color);
      padding: 20px 0;
    }

    header img {
      border-radius: 50%;
      width: 180px;
      height: 180px;
      max-width: 40vw; /* adaptable en móviles */
      object-fit: cover;
      margin-bottom: 20px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.15);
    }

    h1 {
      font-size: 2em;
      margin: 5px 0;
      word-wrap: break-word;
    }

    p.subtitle {
      font-size: 1.1em;
      color: #666;
      margin: 5px 0;
    }

    /* Navegación */
    nav {
      margin-top: 15px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 10px;
      font-size: 0.95em;
    }

    nav a {
      text-decoration: none;
      color: var(--primary);
      font-weight: 500;
      padding: 6px 12px;
      border-radius: 6px;
      border: 1px solid var(--primary);
      transition: all 0.3s ease;
    }

    nav a:hover {
      background: var(--primary);
      color: white;
    }

    /* Bio */
    .bio-text {
      text-align: justify;
      max-width: 800px;
      margin: 30px auto;
    }

    section {
      margin-bottom: 40px;
    }

    h2 {
      border-bottom: 2px solid #eee;
      padding-bottom: 5px;
      margin-bottom: 15px;
      color: var(--primary);
      font-size: 1.5em;
    }

    ul {
      margin-left: -19px;
      padding-left: 20px;
    }

    /* Follow me */
    .follow-me {
      text-align: center;
      margin: 50px 0;
    }

    .follow-me h2 {
      color: var(--primary);
      margin-bottom: 20px;
    }

    .social-links {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 15px;
    }

    .social-links a {
      display: inline-flex;
      align-items: center;
      padding: 10px 16px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 500;
      color: white;
      transition: transform 0.2s, opacity 0.2s;
    }

    .social-links a svg {
      width: 20px;
      height: 20px;
      margin-right: 6px;
      fill: white;
    }

    .linkedin { background: #0077b5; }
    .github { background: #24292e; }
    .medium { background: #00ab6c; }

    .social-links a:hover {
      transform: scale(1.05);
      opacity: 0.9;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .container {
        padding: 20px 10px;
        max-width: 100%;
      }

      h1 { font-size: 1.6em; }
      p.subtitle { font-size: 1em; }
      nav { font-size: 0.9em; }
    }

    @media (max-width: 480px) {
      h1 { font-size: 1.4em; }
      h2 { font-size: 1.2em; }
      body { font-size: 0.95em; }
      nav { font-size: 0.85em; }
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Header -->
    <header>
      <img src="foto.jpeg" alt="Foto de Pablo Sagarna">
      <h1>Pablo Sagarna</h1>
      <p class="subtitle">Director of Architecture @WSO2 <br> PhD Candidate @Politécnica de Madrid</p>
      <nav>
        <a href="mailto:psagarna@gmail.com">Email</a>
        <a href="https://github.com/psagarna" target="_blank">GitHub</a>
        <a href="https://linkedin.com/in/psagarna" target="_blank">LinkedIn</a>
        <a href="https://drive.google.com/file/d/1HNCujNt6jcoCDVcL7wcBz9c2Dw051njX/view?usp=sharing" target="_blank">CV ENG</a>
        <a href="https://drive.google.com/file/d/1AHc8paUbbHa_JBCgmhlS7WFLQKOuYhkx/view?usp=sharing" target="_blank">CV ESP</a>
      </nav>
    </header>

    <!-- Bio -->
    <p class="bio-text">
      Director of Architecture with extensive experience in designing and implementing high-impact technology solutions focused on business process automation and optimization, systems integration, enterprise architectures, cloud technologies, artificial intelligence, and data governance.
      <br><br>
      With a background in Computer Engineering and an MBA, I combine a strong technical foundation with strategic business insight, which has enabled me to add value in complex international projects by aligning technology with corporate objectives.
      <br><br>
      Throughout my career, I have faced demanding challenges across various industries, developing a strong ability to anticipate and resolve problems, manage unforeseen issues, and lead initiatives that drive operational efficiency and innovation. I am distinguished by a holistic vision, strong results orientation, and a deep commitment to technological excellence.
    </p>

    <!-- Publications -->
    <section>
      <h2>Publications and Inventions</h2>
      <ul>
        <li>
          <a href="https://psagarna.github.io/invention/PayrollSoftware" target="_blank">Invention: "Payroll Software"</a>. <strong>- 1996.</strong> 
        </li>
        <li>
          <a href="https://psagarna.github.io/invention/WEFIM" target="_blank">Invention: "Web File Manager (WEFIM)"</a>. <strong>- 2003.</strong> 
        </li>        
        <li>
          <a href="https://psagarna.github.io/invention/WEBCOBROSBP" target="_blank">Invention: "Web Cobros BP"</a>. <strong>- 2005.</strong> 
        </li>  
        <li>
          <a href="https://psagarna.github.io/invention/AgendaWEB" target="_blank">Invention: "Agenda WEB"</a>. <strong>- 2010.</strong> 
        </li>         
        <li>
          <a href="https://medium.com/@psagarna/c%C3%B3mo-agregar-un-evento-ante-un-cambio-de-estado-de-una-api-en-su-ciclo-de-vida-7c9cac3798ef" target="_blank">¿Cómo agregar un evento ante un cambio de estado de una API en su ciclo de vida?</a>. <strong>- 2025.</strong> 
        </li>
      </ul>
    </section>

    <!-- Follow Me -->
    <section class="follow-me">
      <h2>Follow me</h2>
      <div class="social-links">
        <a href="https://linkedin.com/in/psagarna" target="_blank" class="linkedin">
          <!-- LinkedIn SVG -->
          <svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 
          2.76 2.24 5 5 5h14c2.76 0 5-2.24 
          5-5v-14c0-2.76-2.24-5-5-5zm-11 
          19h-3v-10h3v10zm-1.5-11.27c-.96 
          0-1.73-.79-1.73-1.73s.77-1.73 
          1.73-1.73c.95 0 1.73.79 
          1.73 1.73s-.78 1.73-1.73 
          1.73zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 
          0-2.16 1.46-2.16 2.96v5.71h-3v-10h2.88v1.37h.04c.4-.76 
          1.38-1.55 2.84-1.55 3.04 0 
          3.6 2 3.6 4.59v5.59z"/></svg>
          LinkedIn
        </a>
        <a href="https://github.com/psagarna" target="_blank" class="github">
          <!-- GitHub SVG -->
          <svg viewBox="0 0 24 24"><path d="M12 .297c-6.63 
          0-12 5.373-12 12 0 5.303 3.438 
          9.8 8.205 11.385.6.113.82-.258.82-.577 
          0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 
          1.205.084 1.84 1.236 
          1.84 1.236 1.07 1.835 2.807 1.304 
          3.492.997.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.335-5.466-5.93 
          0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 
          0 0 1.005-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 
          2.045.138 3.003.404 2.28-1.552 3.285-1.23 
          3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 
          1.23 1.91 1.23 3.22 0 4.61-2.805 
          5.625-5.475 5.92.435.372.81 1.102.81 
          2.222 0 1.606-.015 2.896-.015 
          3.286 0 .315.21.69.825.57 
          C20.565 22.092 24 17.592 24 
          12.297c0-6.627-5.373-12-12-12"/></svg>
          GitHub
        </a>
        <a href="https://medium.com/@psagarna" target="_blank" class="medium">
          <!-- Medium SVG -->
          <svg viewBox="0 0 24 24"><path d="M2 3.5c0-.28.22-.5.5-.5h19c.28 
          0 .5.22.5.5v17c0 .28-.22.5-.5.5h-19c-.28 
          0-.5-.22-.5-.5v-17zm4.43 3.07v10.87l6.41-5.42-6.41-5.45zm7.47 
          6.31l-7.19 6.08h14.37l-7.18-6.08zm-.64-.89l7.34 
          6.22v-12.47l-7.34 6.25zm-8.61-6.25v12.47l7.34-6.25-7.34-6.22z"/></svg>
          Medium
        </a>
      </div>
    </section>
  </div>

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
