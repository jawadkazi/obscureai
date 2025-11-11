<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Math & Type — Pico + KaTeX</title>

  <!-- PicoCSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">

  <!-- KaTeX CSS -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css">

  <!-- Optional: paste your font CDN here when you provide it.
       Example:
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Literata:ital,wght@0,300;0,400;1,300&display=swap">
  -->
  
  <!-- KaTeX JS (provided CDN version) -->
  <script defer src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.js"></script>
  <script defer src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/contrib/auto-render.min.js"
          onload="renderMathInElement(document.body, {delimiters: [{left: '$$', right: '$$', display: true}, {left: '\\(', right: '\\)', display: false}]});"></script>

  <style>
    :root{
      color-scheme: light;
      --bg: #ffffff;     /* pure white */
      --text: #000000;   /* pure black */
      --muted: #444444;
      --max-w: 720px;
      --lead: 1.65;
    }

    /* Force Pico's defaults to our desired pure white / black */
    html, body {
      background: var(--bg) !important;
      color: var(--text) !important;
      font-family: "Georgia", "Times New Roman", serif; /* will be replaced by your font if you provide a CDN */
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      line-height: var(--lead);
    }

    /* Page layout */
    .container {
      max-width: var(--max-w);
      margin: 4.25rem auto;
      padding: 0 1.25rem;
    }

    header {
      text-align: center;
      margin-bottom: 1.25rem;
    }

    h1 {
      font-size: 1.75rem;
      margin: 0 0 0.125rem 0;
      letter-spacing: -0.01em;
      font-weight: 500;
    }

    .subtitle {
      font-size: 0.98rem;
      margin-top: 0.25rem;
      color: var(--muted);
      font-style: normal;
    }

    .meta {
      font-size: 0.9rem;
      color: var(--muted);
      margin-top: 0.6rem;
      letter-spacing: 0.01em;
    }

    article {
      margin-top: 1.6rem;
      text-align: left;
    }

    p {
      margin: 0 0 1.15rem 0;
      font-size: 1.02rem;
      text-wrap: pretty;
    }

    /* Center and style the formula block */
    .formula {
      margin: 1.25rem auto;
      text-align: center;
      font-size: .85rem;
    }

    .formula + .caption {
      margin-top: 0.45rem;
      font-style: italic;
      text-align: center;
      color: var(--muted);
      font-size: 0.75rem;
    }

    /* Narrower measure and delicate spacing for quotes */
    blockquote {
      margin: 1.1rem 0;
      padding-left: 1rem;
      border-left: 3px solid #eee;
      color: var(--muted);
      font-style: italic;
    }

    /* Small screens: reduce margins */
    @media (max-width: 480px){
      .container { margin: 2rem 0; padding: 0 1rem; }
      h1 { font-size: 1.3rem; }
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>Math & Type</h1>
      <div class="subtitle">A minimal note on form and clarity</div>
      <div class="meta">
        <time datetime="2025-11-10">November 10, 2025</time> · by <span>Author Name</span>
      </div>
    </header>

    <article>
      <p>
        A beautifully simple text layout helps the reader focus. Using semantic HTML and a tiny CSS framework like Pico,
        we keep the markup clean while letting typography do the work. Subtle spacing and pure black on white give the page
        a quiet, formal presence.
      </p>

      <p>
        The following formula is centered and given a discreet caption below it. The typesetting itself is handled by KaTeX,
        which renders math quickly and crisply without slowing the page.
      </p>

      <div class="formula">
        $$x = \frac{-b \pm \sqrt{b^{2} - 4ac}}{2a}$$
      </div>
      <div class="caption">Quadratic formula — solutions for <em>ax² + bx + c = 0</em>.</div>

      <p>
        This layout is intentionally restrained: limited palette, deliberate whitespace, and a single readable measure.
        If you give me a font CDN I’ll swap the serif fallback for your chosen face and adjust weights/letter-spacing.
      </p>
    </article>
  </div>
</body>
</html>
