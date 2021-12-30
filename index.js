
  var i = 1;
  var intervalID = window.setInterval(myCallback, 1500);

  function myCallback() {
    switch (i) {
      case 1:
        document
          .getElementById("Carrousel")
          .setAttribute("src", "./img/instagram-celular-03.png");
        i++;
        break;
      case 2:
        document
          .getElementById("Carrousel")
          .setAttribute("src", "./img/instagram-celular.png");
        i++;
        break;
      case 3:
        document
          .getElementById("Carrousel")
          .setAttribute("src", "./img/instagram-celular-02.png");
        i = 1;
        break;
    }
  }
