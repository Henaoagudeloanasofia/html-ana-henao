document.addEventListener("DOMContentLoaded", () => {
  const cardAdj = [
    {
      name: "Torre Eiffel",
      img: "imagenes/torre eiffel.jpg"
    },
    {
      name: "burj al arab",
      img: "imagenes/burj al arab.jpg"
    },
    {
      name: "Coliseo",
      img: "imagenes/coliseo.jpg"
    },
    {
      name: "Burj Khalifa",
      img: "imagenes/burgndjhtdy.jpeg"
    },
    {
      name: "Taj Mahal",
      img: "imagenes/descarga.jpg"
    },
    {
      name: "Chichen Itza",
      img: "imagenes/chichenitza.jpg"
    },
    {
      name: "Torre Eiffel",
      img: "imagenes/torre eiffel.jpg"
    },
    {
      name: "burj al arab",
      img: "imagenes/burj al arab.jpg"
    },
    {
      name: "Coliseo",
      img: "imagenes/coliseo.jpg"
    },
    {
      name: "Burj Khalifa",
      img: "imagenes/burgndjhtdy.jpeg"
    },
    {
      name: "Taj Mahal",
      img: "imagenes/descarga.jpg"
    },
    {
      name: "Chichen Itza",
      img: "imagenes/chichenitza.jpg"
    }
  ];

  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidasId = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];
  //----------------- lectura03 ---------------------------//
  function crearTablero() {
    for (let i = 0; i < cardAdj.length; i++)
      var carta = document.createElement("img");
    carta.setAttribute("src", "imagenes/reverso.png");

    carta.setAttribute("data-id", i);
    carta.addEventListener("click", voltearCarta);

    cuadricula.appendChild(carta);
  }
});
