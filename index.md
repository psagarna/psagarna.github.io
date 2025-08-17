<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Pablo Sagarna - Director de Arquitectura / Investigador</title>
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
      margin-bottom: 40px;
    }

    header img {
      border-radius: 50%;
      width: 150px;
      height: 150px;
      max-width: 100%;
      height: auto;
      object-fit: cover;
      margin-bottom: 20px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.15);
    }

    h1 {
      font-size: 2em;
      margin-bottom: 5px;
      word-wrap: break-word;
    }

    p.subtitle {
      font-size: 1.1em;
      color: #666;
    }

    nav {
      margin-top: 15px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 15px; /* separación entre enlaces */
    }

    nav a {
      text-decoration: none;
      color: var(--primary);
      font-weight: 500;
    }

    nav a:hover {
      text-decoration: underline;
      color: #005999;
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
      padding-left: 20px;
    }

    /* Responsive ajustes menores */
    @media (max-width: 768px) {
      .container {
        padding: 20px 10px;
        max-width: 100%;
      }

      header img {
        width: 120px;
      }

      h1 {
        font-size: 1.6em;
      }

      p.subtitle {
        font-size: 1em;
      }

      nav {
        gap: 10px;
      }

      nav a {
        font-size: 0.95em;
      }
    }

    @media (max-width: 480px) {
      header img {
        width: 100px;
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
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <img src="foto.jpeg" alt="Foto de Pablo Sagarna">
      <h1>Pablo Sagarna</h1>
      <p class="subtitle">Director de Arquitectura de Solución / Investigador<br>WSO2 / Universidad Politécnica de Madrid</p>
      <nav>
        <a href="mailto:psagarna@gmail.com">Email</a>
        <a href="https://github.com/psagarna" target="_blank">GitHub</a>
        <a href="https://linkedin.com/in/psagarna" target="_blank">LinkedIn</a>
        <a href="cv/CVPabloSagarna-EN.pdf" target="_blank">CV (Inglés)</a>
        <a href="cv/CVPabloSagarna-ES.pdf" target="_blank">CV (Español)</a>
      </nav>
    </header>

    <section>
      <h2>Publicaciones</h2>
      <ul>
        <li>
          <strong>Sagarna, P.</strong> (2025). 
          ¿Cómo agregar un evento ante un cambio de estado de una API en su ciclo de vida? 
          <a href="https://medium.com/@psagarna/c%C3%B3mo-agregar-un-evento-ante-un-cambio-de-estado-de-una-api-en-su-ciclo-de-vida-7c9cac3798ef" target="_blank">Artículo en Medium</a>.
        </li>
      </ul>
    </section>
  </div>
</body>
</html>
