//variáveis globais
var fundo, fundoImg;
var coelho, coelhoImg;
var bordas;

//carregar os arquivos
function preload(){
    fundoImg = loadImage("garden.png");
    coelhoImg = loadImage("rabbit.png");
}

//criando sprites e suas propriedades
function setup(){
    createCanvas(400,400);
    fundo = createSprite(200,200);
    fundo.addImage(fundoImg);

    coelho = createSprite(200,340);
    coelho.addImage(coelhoImg);
    coelho.scale = 0.1;

    bordas = createEdgeSprites();

    coelho.debug=true;
}

function draw(){
    background("white");

    coelho.x = mouseX;
    coelho.collide(bordas);
    drawSprites();

}
