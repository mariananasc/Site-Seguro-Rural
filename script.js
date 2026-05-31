document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

vl.markBar({
    cornerRadiusTopRight: 8,
    cornerRadiusBottomRight: 8
  })
  .data(topEstados)
  .encode(
    vl.y()
      .fieldN("estado")
      .sort("-x")
      .title("Estado"),

    vl.x()
      .fieldQ("quantidade")
      .title("Quantidade de registros"),

    vl.color()
      .fieldQ("quantidade")
      .scale({
        range: ["#A68A64", "#6A994E", "#386641"]
      }),

    vl.tooltip(["estado", "quantidade"])
  )
  .width(750)
  .height(420)
  .render();