class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImg = loadImage("sprites/smoke.png");
    //Make an empty array to store the bird position 
    //Array = A data structure that can hold multiple values at the same time = [1,2,3,4,5,6]
    this.trajectory = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    //Reduce the smoke effect by storing the bird posititons when velocity and position are above a threshold
    if(this.body.velocity.x > 10 && this.body.position.x > 200){
    //Get the bird positions 
    var position = [this.body.position.x,this.body.position.y]
    //store as array of arrays | trajectory = [[]] 
    this.trajectory.push(position);
     }
    //Display the smoke image for the bird positions 
    //length is the property of the array which give number of elements stored inside it 
    for(var i = 0;i<this.trajectory.length;i = i+1){
           
     image(this.smokeImg,this.trajectory[i][0],this.trajectory[i][1])

    }

  }
}
