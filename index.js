const button = document
  .querySelector("#button")
  .addEventListener("click", () => {
    let valor = document.getElementById("coin");
    let texto = document.getElementById("texto");
    let type = document.getElementsByName("type");

    let convertidoR = 0;
    let convertidoD = 0;
    let convertidoE = 0;

    if (valor.value == "") {
      texto.innerText = "Digite um Valor!";
    } else {
      type.forEach((selected) => {
        if (selected.checked) {
          valor = Number(valor.value);
          if (selected.value == "real") {
            convertidoD = valor / 4.93;
            convertidoE = valor / 5.3;
            texto.innerHTML =
              "O valor convertido em Dolar é " +
              convertidoD.toFixed(2) +
              ".<br>O valor convertido em Euro é " +
              convertidoE.toFixed(2) +
              ".";
          }
          if (selected.value == "dolar") {
            convertidoR = valor * 4.93;
            convertidoE = valor / 1.07;
            texto.innerHTML =
              "O valor convertido em Real é " +
              convertidoR.toFixed(2) +
              ".<br>O valor convertido em Euro é " +
              convertidoE.toFixed(2) +
              ".";
          }
          if (selected.value == "euro") {
            convertidoR = valor * 5.3;
            convertidoD = valor * 1.07;
            texto.innerHTML =
              "O valor convertido em Real é " +
              convertidoR.toFixed(2) +
              ".<br>O valor convertido em Dolar é " +
              convertidoD.toFixed(2) +
              ".";
          }
        }
      });
    }
  });
