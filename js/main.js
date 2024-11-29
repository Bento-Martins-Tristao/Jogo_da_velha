const c1 = document.getElementById("c00");
const c2 = document.getElementById("c01");
const c3 = document.getElementById("c02");
const c4 = document.getElementById("c10");
const c5 = document.getElementById("c11");
const c6 = document.getElementById("c12");
const c7 = document.getElementById("c20");
const c8 = document.getElementById("c21");
const c9 = document.getElementById("c22");
const pontuacaoCr7 = document.getElementById("px");
const pontuacaoMessi = document.getElementById("po");
var px = 0;
var po = 0;
const selecaoJogo = document.getElementById("selecaoJogo");
const vezDe = document.getElementById("Alternado");
var tabuleiro;
var jogador;
var Adversario = selecaoJogo.value;

function prepararJogada() {
  if (jogador == 1 && Adversario == 1 && verificarVencedor() == -1) {
    let casaPC;

    if (tabuleiro[1][1] == 0) {
      casaPC = "c" + 1 + 1;
      jogar(casaPC);
    } else {
      let linha = Math.floor(Math.random() * 3);
      let coluna = Math.floor(Math.random() * 3);
      casaPC = "c" + linha + coluna;
      jogar(casaPC);
    }
  } else {
    if (verificarVencedor() == 1) {
      px++;
      pontuacaoCr7.innerHTML = px;
      mostrarJogo();
    } else if (verificarVencedor() == 2) {
      po++;
      pontuacaoMessi.innerHTML = po;
      mostrarJogo();
    } else if (verificarVencedor() == 0) {
      mostrarJogo();
    }
  }
}

function exibirVencedor(vencedor) {
    const overlay = document.getElementById("overlay");
    const mensagemVencedor = document.getElementById("mensagemVencedor");
  
    overlay.style.display = "flex";
  
    if (vencedor === 1) {

      mensagemVencedor.textContent = "CR7 venceu!";
    } else if (vencedor === 2) {

      mensagemVencedor.textContent = "MESSI venceu!";
    } else if (vencedor === 0) {
      mensagemVencedor.textContent = "Empate!";
    }
  
    setTimeout(() => {
      overlay.style.display = "none";
      limparJogo(); 
    }, 2000); 
  }
  
    

  function verificarVencedor() {
    for (var i = 0; i <= 2; i++) {
      if (
        tabuleiro[i][0] !== 0 &&
        tabuleiro[i][0] === tabuleiro[i][1] &&
        tabuleiro[i][1] === tabuleiro[i][2]
      ) {

        document.getElementById("c" + i + "0").classList.add("vencedor");
        document.getElementById("c" + i + "1").classList.add("vencedor");
        document.getElementById("c" + i + "2").classList.add("vencedor");


  
        exibirVencedor(tabuleiro[i][0]);


        setTimeout(() => {
          document.getElementById("c" + i + "0").classList.remove("vencedor");
          document.getElementById("c" + i + "1").classList.remove("vencedor");
          document.getElementById("c" + i + "2").classList.remove("vencedor");
        }, 2000);

        return tabuleiro[i][0];
      }
    }
  
    for (var j = 0; j <= 2; j++) {
      if (
        tabuleiro[0][j] !== 0 &&
        tabuleiro[0][j] === tabuleiro[1][j] &&
        tabuleiro[1][j] === tabuleiro[2][j]
      ) {
        document.getElementById("c0" + j).classList.add("vencedor");
        document.getElementById("c1" + j).classList.add("vencedor");
        document.getElementById("c2" + j).classList.add("vencedor");
  
        exibirVencedor(tabuleiro[0][j]);

        setTimeout(() => {
          document.getElementById("c0" + j).classList.remove("vencedor");
          document.getElementById("c1" + j).classList.remove("vencedor");
          document.getElementById("c2" + j).classList.remove("vencedor");
        }, 2000);


        return tabuleiro[0][j];
      }
    }
  
    if (
      tabuleiro[0][0] !== 0 &&
      tabuleiro[0][0] === tabuleiro[1][1] &&
      tabuleiro[1][1] === tabuleiro[2][2]
    ) {
      document.getElementById("c00").classList.add("vencedor");
      document.getElementById("c11").classList.add("vencedor");
      document.getElementById("c22").classList.add("vencedor");
  
      exibirVencedor(tabuleiro[0][0]);

      setTimeout(() => {
        document.getElementById("c00").classList.remove("vencedor");
        document.getElementById("c11").classList.remove("vencedor");
        document.getElementById("c22").classList.remove("vencedor");
      }, 2000);

      return tabuleiro[0][0];
    }
  
    if (
      tabuleiro[0][2] !== 0 &&
      tabuleiro[0][2] === tabuleiro[1][1] &&
      tabuleiro[1][1] === tabuleiro[2][0]
    ) {
      document.getElementById("c02").classList.add("vencedor");
      document.getElementById("c11").classList.add("vencedor");
      document.getElementById("c20").classList.add("vencedor");
  
      exibirVencedor(tabuleiro[0][2]);

      setTimeout(() => {
        document.getElementById("c02").classList.remove("vencedor");
        document.getElementById("c11").classList.remove("vencedor");
        document.getElementById("c20").classList.remove("vencedor");
      }, 2000);

      return tabuleiro[0][2];
    }
  
    var empate = true;
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        if (tabuleiro[i][j] === 0) {
          empate = false;
          break;
        }
      }
    }
  
    if (empate) {
      exibirVencedor(0);
      return 0;
    }
  
    return -1;
  }
  

function jogar(id) {
  if (verificarVencedor() == -1) {
    id = String(id);

    const linha = parseInt(id[1]);
    const coluna = parseInt(id[2]);

    if (tabuleiro[linha][coluna] == 0) {
      if (jogador == 0) {
        document.getElementById("ci" + id[1] + id[2]).src = "image/X.png";
        tabuleiro[linha][coluna] = 1;
        jogador = 1;
        vezDe.src = "image/circle.png";
        document.getElementById("j2").classList.add("active");
        document.getElementById("j1").classList.remove("active");
      } else if (jogador == 1) {
        document.getElementById("ci" + id[1] + id[2]).src = "image/circle.png";
        tabuleiro[linha][coluna] = 2;
        jogador = 0;
        vezDe.src = "image/X.png";
        document.getElementById("j1").classList.add("active");
        document.getElementById("j2").classList.remove("active");
      }
    }

    mostrarJogo();
  }

  setTimeout(() => {
    prepararJogada();
  }, 50);
}

function mostrarJogo() {
  for (var i = 0; i <= 2; i++) {
    for (var j = 0; j <= 2; j++) {
      let casa = "ci" + i + j;
      if (tabuleiro[i][j] == 0) {
        document.getElementById(casa).src = "image/vazio.png";
      } else if (tabuleiro[i][j] == 1) {
        document.getElementById(casa).src = "image/X.png";
      } else if (tabuleiro[i][j] == 2) {
        document.getElementById(casa).src = "image/circle.png";
      }
    }
  }
}

function limparJogo() {
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      tabuleiro[i][j] = 0;
    }
  }
  jogador = 0;
  vezDe.src = "image/X.png";
  document.getElementById("j1").classList.add("active");
  document.getElementById("j2").classList.remove("active");

  mostrarJogo();
}

selecaoJogo.addEventListener("change", function () {
  Adversario = selecaoJogo.value;
  limparJogo();
});

document.addEventListener("DOMContentLoaded", () => {
  tabuleiro = new Array(3);
  for (var i = 0; i < 3; i++) {
    tabuleiro[i] = [0, 0, 0];
  }

  jogador = 0;
  mostrarJogo();
});






















