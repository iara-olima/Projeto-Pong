// variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 13;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let raio = diametro / 2;

//variaveis da raquete 1
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

// variaveis raquete 2
let xRaquete2 = 585;
let yRaquete2 = 150;
let velocidadeY;

let colidiu = false;

let chanceDeErrar = 0;

//placar do jogo
let pontosP1 = 0;
let pontosBot = 0;

//sons do jogo
let raquetada;
let ponto;

function preload(){
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha(); 
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaquete2, yRaquete2);
  movimentaRaquete1();
  movimentaRaquete2();
  verificaColisaoRaquete(xRaquete, yRaquete);          verificaColisaoRaquete(xRaquete2, yRaquete2);
  incluiPlacar();
  marcaPonto();
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
//xBolinha += velocidadeXBolinha é igual a XBolinha = XBolinha + 1
  xBolinha += velocidadeXBolinha; 
  yBolinha += velocidadeYBolinha;
    bolinhaNaoFicaPresa();
}

function verificaColisaoBorda(){
  if(xBolinha + raio > width || xBolinha - raio < 0){
      velocidadeXBolinha *= -1;
    }
  
  if(yBolinha + raio > height || yBolinha - raio < 0){
      velocidadeYBolinha *= -1;
    }
}

function mostraRaquete(x, y){
  rect(x, y, raqueteComprimento, raqueteAltura)
}

function movimentaRaquete1(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function movimentaRaquete2(){
  velocidadeY = yBolinha - yRaquete2 - raqueteComprimento / 2 - 30;
  yRaquete2 += velocidadeY + chanceDeErrar;
  calculaChanceDeErrar();
}

 function verificaColisaoRaquete(x, y){
   colidiu =
    collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
   
   if(colidiu == true){
     velocidadeXBolinha *= -1;
     raquetada.play();
   }
 }

function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(255, 215, 0);
  rect(150, 10, 40, 20);
  rect(255, 215, 0);
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosP1, 170, 26);
  fill(255);
  text(pontosBot, 470, 26);
}

function marcaPonto(){
  if(xBolinha > 590){
    pontosP1 += 1;
    ponto.play();
  }
  if(xBolinha < 10){
    pontosBot += 1;
    ponto.play();
  }
}

function calculaChanceDeErrar() {
  if (pontosBot >= pontosP1) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}

function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    XBolinha = 23
    }
}

