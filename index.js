let fonte;

let trilha;


function setup() {
  createCanvas(600, 400);
  textFont(fonte);
  //trilha.loop();
}


function draw(){ 
  background('#303030');
  fontePong();
  modoDeJogo();
  dev();
  gitHub();
}


function preload(){
  createCanvas(600, 400);
  fonte = loadFont('PressStart2P-Regular.ttf');
  trilha = loadSound("trilha.mp3");
}

function fontePong(){
  stroke(255,215,0);
  strokeWeight(8);
  textAlign(CENTER);
  fill(0);
  textFont(fonte);
  textSize(100);
  text("PONG!", 320, 200);
}

function modoDeJogo(){
  button = createButton('P1');
  button.position(150, 250);
  button.mousePressed(modoP1);  
  button.style('background-color');
  button.style('color');
  button.style('border-color'); 
  button.class('button');
  button = createButton('P2');
  button.position(350, 250);
  button.mousePressed(modoP2);  
  button.style('background-color');
  button.style('color');
  button.style('border-color'); 
  button.class('button');
}

function modoP1(){
   window.location.replace("vsBot.html");

  // Tenta fechar a página teste.html
  if (window.opener) {
    window.opener.close();
  } else {
    window.close();
  }}

function modoP2(){
  
}

function dev(){
  strokeWeight(0);
  textSize(15);
  textFont('Arial');
  textStyle(BOLD);
  fill(255);
  text("desenvolvido por iara.", 80, 395);
  
}

function gitHub(){
let linkGit = createA('https://github.com/iara-olima', 'acesse meu GitHub');
linkGit.position(470,380);
linkGit.style('color', '#FFF');
  linkGit.style('font','arial');
  linkGit.style('font-weight','normal');
}

