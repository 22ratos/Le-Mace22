const botaoPlayPause = document.getElementById("play");
const botaoAntes = document.getElementById("previous");
const botaoDepois = document.getElementById("next");
const nomeMusica = document.getElementById("titulo");
const musica = document.getElementById("som");
let imagem = document.getElementById("imagem");

const titulo = document.getElementById("titulo");
const subtitulo = document.getElementById("sub-titulo");
const numeroMusicas = 10;
let taTocando = 0;
let musicaAtual =1;

function tocarMusica(){ //função que toca musica
    musica.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');

}

function pausarMusica(){  //função que pausa a musica
    musica.pause();
      botaoPlayPause.classList.remove("bi-pause-circle-fill");
     botaoPlayPause.classList.add("bi-play-circle-fill");
   

}

function tocarOuPausar(){
    if (taTocando === 0) {
        tocarMusica();
        taTocando = 1;
    }
     else {
        pausarMusica();
        taTocando = 0;
     }
}

function trocarNome() {
   nomeMusica.innerText = "musica" + musicaAtual;
}
function proximaFaixa() {
    if (musicaAtual === numeroMusicas){
        musicaAtual = 1;
    } else {
    musicaAtual = musicaAtual + 1
    }
    
    musica.src = "/assets/songs/" + musicaAtual + ".mp3";
    tocarMusica();
    taTocando = 1;
     trocarNome();
}

function voltarFaixa() {
  if (musicaAtual === 1) {
    musicaAtual = numeroMusicas;
  } else {
    musicaAtual = musicaAtual - 1;
  }
  

  musica.src = "/assets/songs/" + musicaAtual + ".mp3";
  tocarMusica();
  taTocando = 1;
  trocarNome();
}



botaoPlayPause.addEventListener('click', tocarOuPausar); //quando houver um click vai iniciar a função tocarMusica
botaoDepois.addEventListener('click', proximaFaixa);
botaoAntes.addEventListener('click', voltarFaixa);
