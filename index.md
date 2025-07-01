<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
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
      max-width: 800px;
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
      object-fit: cover;
      margin-bottom: 20px;
    }

    h1 {
      font-size: 2em;
      margin-bottom: 5px;
    }

    p.subtitle {
      font-size: 1.1em;
      color: #666;
    }

    nav {
      margin-top: 10px;
    }

    nav a {
      margin: 0 10px;
      text-decoration: none;
      color: var(--primary);
    }

    section {
      margin-bottom: 40px;
    }

    h2 {
      border-bottom: 2px solid #eee;
      padding-bottom: 5px;
      margin-bottom: 15px;
      color: var(--primary);
    }

    ul {
      padding-left: 20px;
    }

    a:hover {
      text-decoration: underline;
    }

    @media (max-width: 600px) {
      header img {
        width: 100px;
        height: 100px;
      }

      h1 {
        font-size: 1.5em;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <img src="foto.jpeg" alt="Tu Foto">
      <h1>Pablo Sagarna</h1>
      <p class="subtitle">Director de Arquitectura de Solución / Investigador<br>WSO2/Universidad Politécnica de Madrid</p>
      <nav>
        <a href="mailto:psagarna@gmail.com">Email</a> |
        <a href="https://github.com/psagarna" target="_blank">GitHub</a> |
        <a href="https://linkedin.com/in/psagarna" target="_blank">LinkedIn</a> |
        <a href="cv/CVPabloSagarna-EN.pdf" target="_blank">CV ENG</a>
        <a href="cv/CVPabloSagarna-ES.pdf" target="_blank">CV ESP</a>
      </nav>
    </header>

    <!--section>
      <h2>Investigación</h2>
      <!--p>Aquí puedes incluir una descripción breve de tus intereses de investigación, proyectos actuales o temas que te apasionan.</p-->
    </section-->

    <!--section>
      <h2>Publicaciones</h2>
      <ul>
        <li><strong>Título de publicación</strong>, con Autor1 y Autor2. <em>Revista</em>, Año. <a href="#">[PDF]</a></li>
        <li><strong>Otra publicación</strong>, con otros autores. <em>Conferencia</em>, Año.</li>
      </ul>
    </section>

    <section>
      <h2>Docencia</h2>
      <ul>
        <li>Curso 1 – Universidad X, Semestre 2024</li>
        <li>Curso 2 – Universidad Y, Semestre 2023</li>
      </ul>
    </section-->
  </div>
</body>
</html>
