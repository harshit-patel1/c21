function isTouching(a, b){
    if(a.x - b.x < a.width/2 + b.width/2 && b.x - a.x < b.width/2 + a.width/2 && a.y - b.y < a.height/2 + b.height/2 && b.y - a.y < b.height/2 + a.height/2){
      return true;
    }
    else{
      return false;
    }
  }
  
  function bounceOff(a, b){
    if(a.x - b.x < a.width/2 + b.width/2 && b.x - a.x < b.width/2 + a.width/2){
      a.velocityX = a.velocityX * (-1);
      b.velocityX = b.velocityX * (-1);
    }
  
    if(a.y - b.y < a.height/2 + b.height/2 && b.y - a.y < b.height/2 + a.height/2){
      a.velocityY = a.velocityY * (-1);
      b.velocityY = b.velocityY * (-1);
    }
  }