class Block{
  constructor(x, y, width, height) {
      var options = {
          //restitution :0.4,
          //friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image = loadImage("block.png");
      this.Visibility = 255;
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
      //rectMode(CENTER);
      //rect(pos.x,pos.y,this.width, this.height);
      if(this.body.speed < 5){
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width, this.height);
       }
       else{
         World.remove(world, this.body);
         push();
         this.Visibility = this.Visibility - 5;
         //console.log(this.Visibility);
         tint(255,this.Visibility);
         image(this.image,this.body.position.x,this.body.position.y,this.width, this.height);
         pop();
       }
    }
}