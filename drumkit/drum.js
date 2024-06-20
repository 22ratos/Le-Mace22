const sons = {
  A: "boom.wav",
  S: "clap.wav",
  D: "hihat.wav",
  F: "openhat.wav",
  G: "ride.wav",
  H: "snare.wav",
  J: "tink.wav",
  K: "tom.wav",
};

const criarDiv = (texto) => {
  const div = document.createElement("div");
  div.classList.add("key");
  div.textContent = texto;
  div.id = texto;
  document.getElementById("container").appendChild(div);
};
const exibir = (sons) => Object.keys(sons).forEach(criarDiv);

const tocarSom = (letra) => {
  const audio = new Audio(`./sound/${sons[letra]}`);
  audio.play();
};
const adcionarEfeito = (letra) =>
  document.getElementById(letra).classList.add("active");
const removerEfeito = (letra) => {
  const div = document.getElementById(letra);
  const removeActive = () => div.classList.remove("active");
  div.addEventListener("transitionend", removeActive);
};

const ativarDiv = (evento) => {
  const letra =
    evento.type == "click" ? evento.target.id : evento.key.toUpperCase();
  const letraPermitida = sons.hasOwnProperty(letra);
  if (letraPermitida) {
    adcionarEfeito(letra);
    tocarSom(letra);
    removerEfeito(letra);
  }
};
exibir(sons);
document.getElementById("container").addEventListener("click", ativarDiv);

window.addEventListener("keydown", ativarDiv);
