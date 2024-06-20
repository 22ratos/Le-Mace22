const smile = document.getElementById("smile");
const chorar = document.getElementById("cry");
const cara = document.getElementById("norm");
const roupa = document.getElementById("ropa");



function sorria() {
  cara.src = "/assets/images/smile.png";
}

function chore() {
  cara.src = "/assets/images/cry.png";
}

function apanhe() {
  cara.src = "/assets/images/smash.png";
}

function padrao() {
  cara.src = "/assets/images/normal.png";
}

function vergonhe() {
  cara.src = "/assets/images/shy.png";
}

function ropa() {
  roupa.src = "/assets/images/body3.png";
}

function vergonheRopa() {
  roupa.src = "/assets/images/shybody.png";
}

cry.addEventListener("click", chore);

smile.addEventListener("click", sorria);

cara.addEventListener("mouseover", vergonhe);

roupa,cara.addEventListener("mouseover",vergonheRopa);

roupa,cara.addEventListener("mouseleave", ropa);

cara.addEventListener("mouseleave", padrao);

cara.addEventListener("dblclick", apanhe);
