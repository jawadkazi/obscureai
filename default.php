<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pico + KaTeX Demo</title>

  <!-- PicoCSS (minimal semantic styles) -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">

  <!-- KaTeX CSS -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css">

  <!-- KaTeX JS -->
  <script defer src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.js"></script>
  <script defer src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/contrib/auto-render.min.js"
          onload="renderMathInElement(document.body);"></script>

  <style>
    main {
      max-width: 680px;
      margin: 4rem auto;
      text-align: justify;
    }
    h1 {
      text-align: center;
      margin-bottom: 1.5rem;
    }
  </style>
</head>
<body>

  <main>
    <h1>Elegant Mathematics with Pico + KaTeX</h1>

    <p>
      Mathematics is not only a language of science but also a form of art.
      With just a touch of <strong>Pico CSS</strong> for typography and layout,
      we can make text look elegant while keeping things lightweight and fast.
    </p>

    <p>
      Consider the famous quadratic formula, which expresses the roots of a
      quadratic equation \( ax^2 + bx + c = 0 \):
    </p>

    <p style="text-align:center; font-size:1.3rem;">
      $$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$
    </p>

    <p>
      Using <strong>KaTeX</strong>, the formula renders beautifully without
      compromising performance or readability — perfect for modern web articles.
    </p>
  </main>

</body>
</html>
