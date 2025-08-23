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

    /* Contenedor general */
    .container {
      max-width: 900px;
      margin: 0 auto;
      padding: 250px 20px 40px; /* espacio para header fijo */
    }

    /* Header fijo */
    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background: var(--bg-color);
      z-index: 1000;
      text-align: center;
      padding: 20px 0;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }

    header img {
      border-radius: 50%;
      width: 160px;
      height: 160px;
      object-fit: cover;
      margin-bottom: 15px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.15);
    }

    h1 {
      font-size: 2em;
      margin: 5px 0;
    }

    p.subtitle {
      font-size: 1.1em;
      color: #666;
      margin: 5px 0 15px 0;
    }

    /* Botones sociales */
    .social-buttons {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 10px;
    }

    .social-buttons a {
      text-decoration: none;
      padding: 8px 14px;
      border-radius: 6px;
      font-size: 0.9em;
      font-weight: bold;
      color: white;
      transition: background 0.3s;
    }

    .github { background: #333; }
    .github:hover { background: #000; }

    .linkedin { background: #0077b5; }
    .linkedin:hover { background: #005582; }

    .email { background: #d44638; }
    .email:hover { background: #a6362b; }

    .cv { background: #007acc; }
    .cv:hover { background: #005999; }

    /* BIO justificada */
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
        padding: 280px 15px 30px;
      }

      header img {
        width: 140px;
        height: 140px;
      }

      h1 {
        font-size: 1.6em;
      }

      p.subtitle {
        font-size: 1em;
      }

      .social-buttons a {
        font-size: 0.85em;
        padding: 7px 12px;
      }
    }

    @media (max-width: 480px) {
      .container {
        padding: 260px 10px 30px;
      }

      header img {
        width: 120px;
        height: 120px;
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

      .social-buttons {
        flex-direction: column;
        align-items: center;
      }

      .social-buttons a {
        width: 80%;
        text-align: center;
      }
    }
  </style>
</head>
<body>
  <header>
    <img src="foto.jpeg" alt="Foto de Pablo Sagarna">
    <h1>Pablo Sagarna</h1>
    <p class="subtitle">Director of Architecture @WSO2 <br> Phd Candidate @Politécnica de Madrid</p>
    <div class="social-buttons">
      <a href="mailto:psagarna@gmail.com" class="email">Email</a>
      <a href="https://github.com/psagarna" target="_blank" class="github">GitHub</a>
      <a href="https://linkedin.com/in/psagarna" target="_blank" class="linkedin">LinkedIn</a>
      <a href="https://drive.google.com/file/d/1HNCujNt6jcoCDVcL7wcBz9c2Dw051njX/view?usp=sharing" target="_blank" class="cv">CV ENG</a>
      <a href="https://drive.google.com/file/d/1AHc8paUbbHa_JBCgmhlS7WFLQKOuYhkx/view?usp=sharing" target="_blank" class="cv">CV ESP</a>
    </div>
  </header>

  <div class="container">
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
          <a href="https://psagarna.github.io/invention/PayrollSoftware" target="_blank">Invention: "Payroll Software"</a>.<strong> - 1996.</strong>
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
