// let é igual a var!
let fonte;

let trilha;

function preload(){
    createCanvas(600, 400);
    fonte = loadFont('fontes/PressStart2P-Regular.ttf');
    trilha = loadSound("musicas/trilha.mp3");
  }

function setup() {
  createCanvas(600, 400);
  textFont(fonte);
 // trilha.loop();
}


function draw(){ 
  background('#303030');
  fontePong();
  modoDeJogo();
  dev();
  gitHub();
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
  let button1 = createButton('P1');
  button1.position(150, 250);
  button1.mousePressed(modoP1);  
  button1.style('background-color');
  button1.style('color');
  button1.style('border-color'); 
  button1.class('button');
  
  let button2 = createButton('P2');
  button2.position(350, 250);
  button2.mousePressed(modoP2);  
  button2.style('background-color');
  button2.style('color');
  button2.style('border-color'); 
  button2.class('button');
}

function modoP1(){
  window.location.replace("vsBot.html");

  if (window.opener) {
    window.opener.close();
  } else {
    window.close();
  }
}

function modoP2(){
  window.location.replace("vsPlayer.html");

  if (window.opener) {
    window.opener.close();
  } else {
    window.close();
  }
}


function dev(){
  strokeWeight(0);
  textSize(15);
  textFont('Arial');
  textStyle(ITALIC);
  fill(255);
  text("desenvolvido por iara.", 80, 395);
  
}

function gitHub() {
    strokeWeight(0);
    textSize(15);
    textFont("Arial");
    textStyle("normal");
    fill(255);
    text("acesse meu ", 502, 395);

    //verifica se um elemento com o ID "github-link" já existe no documento
    if (!document.getElementById("github-link")) {
      const link = document.createElement('a');
      link.setAttribute('id', 'github-link');
      link.setAttribute('href', 'https://github.com/iara-olima');
      link.setAttribute('target', '_blank');
      link.textContent = 'GitHub';
      document.body.appendChild(link);
      link.style.position = 'absolute';
      link.style.left = '545';
      link.style.top = '380';
      link.style.color = 'white';
    }
  }
  
  