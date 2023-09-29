const listPersonagens = [
  (personagem001 = {
    nome: "ABELHA",
    imagem:"./img/ABELHA.jpg",
  }),
  (personagem002 = {
    nome: "ARANHA",
    imagem:"./img/ARANHA.jpg",
  }),
  (personagem003 = {
    nome: "ASTRONAUTA",
    imagem:"./img/ASTRONAUTA.jpg",
  }),
  (personagem004 = {
    nome:"BARRACA",
    imagem: "./img/BARRACA.jpg",
  }),
  (personagem005 = {
    nome: "BARRIL",
    imagem:"./img/BARRIL.jpg",
  }),
  (personagem006 = {
    nome: "BASQUETE",
    imagem:"./img/BASQUETE.jpg",
  }),
  (personagem007 = {
    nome: "BELICHE",
    imagem:"./img/BELICHE.jpg",
  }),
  (personagem008 = {
    nome: "BETERRABA",
    imagem:"./img/BETERRABA.jpg",
  }),
  (personagem009 = {
    nome: "BIBLIOTECA",
    imagem:"./img/BIBLIOTECA.jpg",
  }),
  (personagem010 = {
    nome: "BICICLETA",
    imagem: "./img/BICICLETA.jpg",
  }),
  (personagem011 = {
    nome: "BIQUINI",
    imagem: "./img/BIQUINI.jpg",
  }),
  (personagem012 = {
    nome: "BOLACHA",
    imagem: "./img/BOLACHA.jpg",
  }),
  (personagem013 = {
    nome:"BOLICHE",
    imagem:"./img/BOLICHE.jpg",
  }),
  (personagem014 = {
    nome: "BOMBEIRO",
    imagem:"./img/BOMBEIRO.jpg",
  }),
  personagem015 = {
    nome: "BORRACHA",
    imagem:"./img/BORRACHA.jpg",
  },
  (personagem016 = {
    nome: "BUMERANGUE",
    imagem:"./img/BUMERANGUE.jpg",
  }),
  (personagem017 = {
    nome: "BUQUE",
    imagem: "./img/BUQUE.jpg",
  }),
  (personagem018 = {
    nome: "BUQUE",
    imagem = "./img/BUQUE.jpg",
  }),
  (personagem019 = {
    nome:"BURRO",
    imagem:"./img/BURRO.jpg",
  }),
  (personagem020 = {
    nome: "BUSSULA",
    imagem: "./img/BUSSULA.jpg",
  }),
  (personagem021 = {
    nome: "CABRITO",
    imagem = "./img/CABRITO.jpg",
  }),
  (personagem022 = {
    nome: "CACHOEIRA",
    imagem: "./img/CACHOEIRA.jpg",
  }),
  (personagem023 = {
    nome: "CACHORRO",
    imagem: "./img/CACHORRO.jpg",
  }),
  (personagem024 = {
    nome:"CAMINHÃO",
    imagem:"./img/CAMINHAO.jpg",
  }),
  (personagem025 = {
    nome: "CANHÃO",
    imagem:"./img/CANHAO.jpg",
  }),
  (personagem026 = {
    nome:"CARANGUEJO",
    imagem:"./img/CARANGUEJO.jpg",
  }),
  (personagem027 = {
    nome: "CARROSSEL",
    imagem: "./img/CARROSSEL.jpg",
  }),
  (personagem028 = {
    nome: "CEGONHA",
    imagem: "./img/CEGONHA.jpg",
  }),
  (personagem029 = {
    nome: "COBRA",
    imagem:"./img/COBRA.jpg",
  }),
  (personagem030 = {
    nome:"COELHO",
    imagem:"./img/COELHO.jpg",
  }),
  (personagem031 = {
    nome: "COZINHA",
    imagem:"./img/COZINHA.jpg",
  }),
  (personagem032 = {
    nome: "DEGRAUS",
    imagem:"./img/DEGRAUS.jpg",
  }),
  (personagem033 = {
    nome:"DEPRESSA",
    imagem:"./img/DEPRESSA.jpg",
  }),
  (personagem034 = {
    nome: "DESENHO",
    imagem: "./img/DESENHO.jpg",
  }),
  (personagem035 = {
    nome: "DESTRUÍDA",
    imagem: "./img/DESTRUIDA.jpg",
  }),
  (personagem036 = {
    nome: "DEZEMBRO",
    imagem: "./img/DEZEMBRO.jpg"
  }),
  (personagem037 = {
    nome: "DINHEIRO",
    imagem:"./img/DINHEIRO.jpg",
  }),
  (personagem038 = {
    nome: "DINOSSAURO",
    imagem: "./img/DINOSSAURO.jpg",
  }),
  (personagem039 = {
    nome: "DOBRADURA",
    imagem: "./img/DOBRADURA.jpg",
  }),
  (personagem040 = {
    nome: "ESCORREGADOR",
    imagem:"./img/ESCORREGADOR.jpg",
  }),
  (personagem041 = {
    nome: "ESPAGUETE",
    imagem: "./img/ESPAGUETE.jpg",
  }),
  (personagem042 = {
    nome:"ESPANTALHO",
    imagem: "./img/ESPANTALHO.jpg",
  }),
  (personagem043 = {
    nome: "ESPELHO",
    imagem: "./img/ESPELHO.jpg",
  }),
  (personagem044 = {
    nome:"ESQUILO",
    imagem: "./img/ESQUILO.jpg",
  }),
];

let nomePersonagem;
let imagemPersonagem;
let tentativas = 5;
console.log("tentativas =" + tentativas);
let resposta;

SorteiaImagem();
function SorteiaImagem(){
  const index = parseInt(Math.random() * listPersonagens.length);

  nomePersonagem = listPersonagens[index].nome;
  imagemPersonagem = listPersonagens[index].imagem;

  console.log(nomePersonagem);
  console.log(imagemPersonagem);

  document.getElementById("imagem").style.backgroundImagem = 
    "url(" + imagemPersonagem +")";
    //desfocar a imagem
  desfocarImagem(tentativas);
}

function desfocarImagem(valoDesfoque){
  const imagem = document.getElementById("imagem")
   
   switch (valoDesfoque) {
      case 5:
       imagem.style.filter = "blur(40px)";
       break;
     case 4:
       imagem.style.filter = "blur(30px)";
       break;
     case 3:
       imagem.style.filter = "blur(20px)";
       break;
     case 2:
       imagem.style.filter = "blur(17px)";
       break;
     case 1:
       imagem.style.filter = "blur(14px)";
       break; 
     case 0:
       imagem.style.filter = "blur(0px)";
       break;
     default:
       break;
       
   }
   
}
document.addEventListener("keyDown", (e) => {
   if(e.key === "Enter") {
     e.preventDefault();
     resposta = document.querySelector("#resposta").value.toUpperCase();

     if(resposta.length < 3 || !resposta.trim() || resposta == undefined) {
       personalizaModal("nomeInvalido");  
     } else {
      if (tentativas > 0) {
        if (resposta == nomePersonagem) {// se entrar aqui é porque ganhou
          personalizaModal("vitoria");
          document.getElementById("resposta").value = "";
          desfocarImagem(0);
          document.querySelector(".borda-imagem").style.border = "none";
        } else { // se entrar aqui é porque ainda esta tentando acertar
          tentativas--;
          desfocarImagem(tentativas);
          barraDeProgresso(tentativas)
          document.getElementById("resposta").value = "";
        }
      }

      if (tentativas == 0) { // se entrar aqui é porque perdeu
        personalizaModal("derrota");
        document.getElementById("resposta").value = "";
        desfocarImagem(0);
        document.querySelector(".borda-imagem").style.border = "none";
      }
    }
    console.log("tentativas =" + tentativas);
  }
});

const modal = document.getElementById("modal-alerta");
const span = document.getElementsByClassName("close")[0];
span.onclick = function() {
   modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }   
};

function personalizaModal(alerta){
    const modalMensagem = document.getElementById("modal-mensagem");

    switch(alerta) {  
        case "nomeInvalido":
            modalMensagem.innerHTML = 
            "<p>ESTE NOME ESTÁ ERRADO</p>";
            break;
        case"vitoria":
            modalMensagem.innerHTML = 
            "<p>VOCÊ É ÓTIMO NISTO!!!</p>";
            break;
        case"derrota":
            modalMensagem.innerHTML = 
            "<p>NÃO FOI DESTA VEZ</p>";
            break;
        default:
            break;
    }
    modal.style.display = "block";
}

function barraDeProgresso(carregaBarra) {
  if (carregaBarra == 5) {
    document.getElementById("progresso-01").style.backgroundColor = "#ffffff";
    document.getElementById("progresso-02").style.backgroundColor = "#ffffff";
    document.getElementById("progresso-03").style.backgroundColor = "#ffffff";
    document.getElementById("progresso-04").style.backgroundColor = "#ffffff";
    document.getElementById("progresso-05").style.backgroundColor = "#ffffff";
  } else {
    switch (carregaBarra) {
      case 4:
        document.getElementById("progresso-01").style.backgroundColor = "#ffd700";
        break;
      case 3:
        document.getElementById("progresso-02").style.backgroundColor = "#ffd700";
        break;
      case 2:
        document.getElementById("progresso-03").style.backgroundColor = "#ffd700";
        break;
      case 1:
        document.getElementById("progresso-04").style.backgroundColor = "#ffd700";
        break;
      case 0:
        document.getElementById("progresso-05").style.backgroundColor = "#ffd700";
        break;
      default:
        break;
    }
  }
}


















