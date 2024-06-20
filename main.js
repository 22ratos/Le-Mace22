import * as THREE from "three";
//import {GLTFLoader} from "three/addons/loaders/GLTFLoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import * as dat from "dat.gui";
import Renderer from "three/examples/jsm/renderers/common/Renderer";
// To allow for importing the .gltf file
//npx vite

//------------------------render-----------------//
const renderer = new THREE.WebGLRenderer(); //seleciona o render da biblioteca que no caso será o webgl
renderer.shadowMap.enabled = true; //ativa a renderização da sombra
renderer.setSize(window.innerWidth, window.innerHeight); //renderiza o tamanho da tela
document.body.appendChild(renderer.domElement);


//------------------------render-fim-----------------//

//---------------------teste-----------------//
const pedra = new URL("models/rock_10/scene.gltf", import.meta.url);

//---------------------teste-----------------//

//------------------------scene-----------------//
const scene = new THREE.Scene(); //adciona uma cena 
const camera = new THREE.PerspectiveCamera( //adciona uma nova camera
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
//------------------------scene fim-----------------//


//-----------------axes-helper------------//
const axesHelper = new THREE.AxesHelper(5); //ferramenta que serve como guia para as cordenadas 3d, o (5) representa o comprimento do axes
scene.add(axesHelper); //adciona o axes a minha cena
//-----------------axes-helper------------//

//------------------------loader-----------------//

const carregadorAsset = new GLTFLoader(); //teste
carregadorAsset.load(pedra.href, function(gltf){  ///TESTE
    const modelo = gltf.scene; //teste
    scene.add(modelo);  //teste
     modelo.position.set(-12, 4, 10);//teste
}, undefined, function(error) {

  console.error(error);

})



const paper = new GLTFLoader(); //seleciona o loader gtlfl que vou usar
paper.load( //usa o loader gltf pra carregar meu arquivo
  "models/paper_low/scene.gltf", //link da imagem
  function (gltf) {
    scene.add(gltf.scene); //adciona minha imagem a cena
  },
  undefined,
  function (error) {
    console.error(error); //dá console error caso não apareça minha imagem
  }
);
//------------------------loader-fim-----------------//


//---------------------controle orbital-------------------//
const orbit = new OrbitControls(camera, renderer.domElement); //seleciona o controle orbital da biblioteca
//---------------------controle orbital-fim-------------------//


//-----------------------LUZ-DIRECIONAL----------------//
const luzDirecional = new THREE.DirectionalLight(0xffffff, 2.5); //puxa a luz direcional da bibloteca
scene.add(luzDirecional);//adciona a luz a cena

luzDirecional.position.set(-30, 50, 0);//muda direção da luz

const luzDirecionalHelper = new THREE.DirectionalLightHelper(luzDirecional,5); //mostra posição da luz
scene.add(luzDirecionalHelper);

const DluzSombraHelper = new THREE.CameraHelper(luzDirecional.shadow.camera);
scene.add(DluzSombraHelper); 
luzDirecional.castShadow = true; // ativa a sombra da luz
luzDirecional.shadow.camera.bottom = -12;
//-----------------------LUZ-DIRECIONAL-FIM-----------------//


//-----------------------LUZ-AMBIENTE----------------//
const luzAmbiente = new THREE.AmbientLight(0x333333); //puxa luz ambiente da biblioteca
scene.add(luzAmbiente);
//-----------------------LUZ-AMBIENTE-FIM----------------//



//-------------------------fog---------------------//
scene.fog = new THREE.Fog(0xffffff, 0, 200);
//-------------------------fog FIM---------------------//


//-----------------------BACKGROUND COLOR-----------//
renderer.setClearColor(0xffea00);
//-----------------------BACKGROUND FIM-----------//



//-------------------------camera------------------------//
camera.position.set(-10, 30, 30);
//                   x   y   z
orbit.update();
//-------------------------camera-fim------------------------//

//-----------------------velocidade/passo--------------------//
let step = 0;
let speed = 0.01;

//-----------------------velocidade--------------------//


renderer.setAnimationLoop(animate);

animate(); //função do start 