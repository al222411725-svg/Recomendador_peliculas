function recomendar_pelis() {
  var edad = document.getElementById("edad").value;
  var genero = document.getElementById("genero").value;
  var resultado = document.getElementById("resultado");

  for (var i = 0; i < peliculas.length; i++) {
    if (edad >= peliculas[i].edadMin && edad <= peliculas[i].edadMax && genero == peliculas[i].genero) {
      resultado.innerHTML = "Te recomendamos: " + peliculas[i].titulo;
      return;
    }
  }
  resultado.innerHTML = "Nos descubriste): ,aun seguimos agregando nuevas peliculas";
}