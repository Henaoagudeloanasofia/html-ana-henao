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
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];
  //----------------- lectura03 ---------------------------//
  function crearTablero() {
    for (let i = 0; i < cardAdj.length; i++) {
      var carta = document.createElement("img");
      carta.setAttribute("src", "imagenes/reverso.png");

      carta.setAttribute("data-id", i);
      carta.addEventListener("click", voltearCarta);

      cuadricula.appendChild(carta);
    }
  }

  //-------------------------lectura04-------------------------//
  function voltearCarta() {
    var cardId = this.getAttribute("data-id");
    cartasEscogidas.push(cardAdj[cardId].name);
    cartasEscogidasId.push(cardId);
    this.setAttribute("src", cardAdj[cardId].img);
    if (cartasEscogidas.length === 2) {
      setTimeout(verificarPareja, 1500);
    }
  }
  crearTablero();
});

