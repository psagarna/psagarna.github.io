<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Pablo Sagarna - Director of Architecture / Researcher</title>
  <style>
    :root {
      --primary: #007acc;
      --text-color: #333;
      --bg-color: #fdfdfd;
    }

    body {
      margin: 0;
      padding: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: var(--bg-color);
      color: var(--text-color);
      line-height: 1.6;
    }

    .container {
      max-width: 900px;
      margin: 0 auto;
      padding: 40px 20px;
    }

    header {
      text-align: center;
      position: sticky;
      top: 0;
      background: var(--bg-color); /* usa el mismo fondo del body */
      padding: 20px 0;
      z-index: 1000;
      border: none;
    }

    header img {
      border-radius: 50%;
      width: 160px;
      height: 160px;
      max-width: 100%;
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

    nav {
      margin-top: 10px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      font-size: 0.95em;
    }

    nav a {
      text-decoration: none;
      color: var(--primary);
      font-weight: 500;
      padding: 0 6px;
      border-right: 1px solid #ccc;
    }

    nav a:last-child {
      border-right: none;
    }

    nav a:hover {
      text-decoration: underline;
      color: #005999;
    }

    /* BIO alineada a la izquierda */
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

    /* Responsive */
    @media (max-width: 768px) {
      .container {
        padding: 20px 10px;
        max-width: 100%;
      }

      header img {
        width: 160px;
        height: 160px;
      }

      h1 {
        font-size: 1.6em;
      }

      p.subtitle {
        font-size: 1em;
      }

      nav {
        font-size: 0.9em;
      }
    }

    @media (max-width: 480px) {
      header img {
        width: 160px;
        height: 160px;
      }

      h1 {
        font-size: 1.4em;
      }

      h2 {
        font-size: 1.2em;
      }

      body {
        font-size: 0.95em;
      }

      nav {
        font-size: 0.85em;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Sticky SOLO esta parte -->
    <header>
      <img src="foto.jpeg" alt="Foto de Pablo Sagarna">
      <h1>Pablo Sagarna</h1>
      <p class="subtitle">Director of Architecture @WSO2</p>
      <nav>
        <a href="mailto:psagarna@gmail.com">Email</a>
        <a href="https://github.com/psagarna" target="_blank">GitHub</a>
        <a href="https://linkedin.com/in/psagarna" target="_blank">LinkedIn</a>
        <a href="https://drive.google.com/file/d/1icuJ8BKKDEbX3SDAsgq5xnG5TqyMRuQP/view?usp=sharing" target="_blank">CV ENG</a>
        <a href="https://drive.google.com/file/d/15YDibTqUcBI6vnf7pW8Pk3IpxU17m27z/view?usp=sharing" target="_blank">CV ESP</a>
      </nav>
    </header>

    <!-- BIO (ya no sticky) -->
    <p class="bio-text">
      Director of Architecture with extensive experience in designing and implementing high-impact technology solutions focused on business process automation and optimization, systems integration, enterprise architectures, cloud technologies, artificial intelligence, and data governance.
      <br> 
      With a background in Computer Engineering and an MBA, I combine a strong technical foundation with strategic business insight, which has enabled me to add value in complex international projects by aligning technology with corporate objectives.
      <br> 
      Throughout my career, I have faced demanding challenges across various industries, developing a strong ability to anticipate and resolve problems, manage unforeseen issues, and lead initiatives that drive operational efficiency and innovation. I am distinguished by a holistic vision, strong results orientation, and a deep commitment to technological excellence.
    </p>

    <section>
      <h2>Publications and Inventions</h2>
      <ul>
        <li>
          <a href="https://psagarna.github.io/invention/PayrollSoftware" target="_blank">Invention: "Payroll Software</a>.<strong> - 1996.</strong> 
        </li>
        <li>
          <a href="https://psagarna.github.io/invention/WEFIM" target="_blank">Invention: "Web File Manager (WEFIM)"</a>.<strong>- 2003.</strong> 
        </li>        
        <li>
          <a href="https://psagarna.github.io/invention/WEBCOBROSBP" target="_blank">Invention: "Web Cobros BP"</a>.<strong>- 2005.</strong> 
        </li>  
        <li>
          <a href="https://psagarna.github.io/invention/AgendaWEB" target="_blank">Invention: "Agenda WEB"</a>.<strong>- 2010.</strong> 
        </li>         
        <li>
          <a href="https://medium.com/@psagarna/c%C3%B3mo-agregar-un-evento-ante-un-cambio-de-estado-de-una-api-en-su-ciclo-de-vida-7c9cac3798ef" target="_blank">¿Cómo agregar un evento ante un cambio de estado de una API en su ciclo de vida?</a>.<strong> - 2025.</strong> 
        </li>
        <li>
          <a href="https://medium.com/@psagarna/estrategias-de-arquitectura-para-minimizar-tu-factura-ia-80045b6505bd" target="_blank">Estrategias de Arquitectura para minimizar tu factura IA</a>.<strong> - 2026.</strong> 
        </li>
      </ul>
    </section>
  </div>
</body>

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-3X40PC499C"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-3X40PC499C');
</script>
</html>
