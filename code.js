var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["b959c233-833e-4263-bfd6-2f07d3f84c28"],"propsByKey":{"b959c233-833e-4263-bfd6-2f07d3f84c28":{"name":"explode","sourceUrl":"assets/api/v1/animation-library/gamelab/ZmhHx6xgAvW1KUD6qlYQV_gjXX1CNiFC/category_video_games/burst03.png","frameSize":{"x":398,"y":326},"frameCount":1,"looping":true,"frameDelay":2,"version":"ZmhHx6xgAvW1KUD6qlYQV_gjXX1CNiFC","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":326},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ZmhHx6xgAvW1KUD6qlYQV_gjXX1CNiFC/category_video_games/burst03.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 10;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  
 
//adicione velocidade para fazer o carro se mover.
car1.velocityY=2
car2.velocityY=2
car3.velocityY= -2
car4.velocityY= -2
playSound("assets/musica.mp3", true);

function draw() {
   background("white");
   textSize(17);
   fill("red")
  text("Vidas: " + life,170,100);
  strokeWeight(0);
  fill("blue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// crie a função rebater, para fazer o carro rebater nos limites
createEdgeSprites()
car1.bounceOff(boundary1)
car1.bounceOff(boundary2)
car2.bounceOff(boundary1)
car2.bounceOff(boundary2)
car3.bounceOff(boundary1)
car3.bounceOff(boundary2)
car4.bounceOff(boundary1)
car4.bounceOff(boundary2)
sam.bounceOff(edges)
//Adicione a condição para fazer Sam se mover para a esquerda e para a direita
if (keyDown("right")){
  sam.x = sam.x +5
}
  if (keyDown("left")){
  sam.x = sam.x -5
}
if (sam.isTouching(car1)||
sam.isTouching(car2)||
sam.isTouching(car3)||
sam.isTouching(car4)){
  sam.x=20
  sam.y=190
  life=life-1
}
if (life==0){
  var end=createSprite(200,200)
  end.setAnimation("explode")
  end.scale=1
   sam.destroy()
}

//Adicione a condição para reduzir a vida de Sam quando ele encostar no carro.


  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
