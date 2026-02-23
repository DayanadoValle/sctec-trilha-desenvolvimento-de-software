
 // =========================
      // MOUSE ENTER / LEAVE
      // =========================

      let card = document.getElementById("card");

      card.addEventListener("mouseenter", function () {
        card.style.background = "green";
        card.innerText = "Mouse entrou";
      });

      card.addEventListener("mouseleave", function () {
        card.style.background = "blue";
        card.innerText = "Card 1";
      });

      // =========================
      // DIGITAÇÃO EM TEMPO REAL
      // =========================

      let inputTempoReal = document.getElementById("inputTempoReal");
      let saidaTempoReal = document.getElementById("saidaTempoReal");

      inputTempoReal.addEventListener("input", function () {
        saidaTempoReal.innerText = inputTempoReal.value;
      });

      // =========================
      // CONTADOR + MAPA DE CALOR
      // =========================

      let contador = 0;
      let contadorElemento = document.getElementById("contador");

      document.addEventListener("click", function (event) {
        // contador
        contador++;
        contadorElemento.innerText = contador;

        // criar ponto no local EXATO considerando scroll
        let ponto = document.createElement("div");
        ponto.classList.add("ponto");

        ponto.style.left = event.pageX + "px";
        ponto.style.top = event.pageY + "px";

        document.body.appendChild(ponto);
      });