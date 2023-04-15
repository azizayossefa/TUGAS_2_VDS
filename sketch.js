class zombie {
    constructor(lokasiX, lokasiY){
        this.x = lokasiX;
        this.y = lokasiY;
    }
    show(){
        noStroke();
        fill(255);
        rect(this.x, this.y, 40, 40);
    }
    step(){
        var choice = int(random(4));
        if (choice == 0){
            this.x = this.x + 5
        }
        else if (choice == 1){
            this.x = this.x - 5
        }
        else if (choice == 2){
            this.y = this.y + 5
        }
        else{
            this.y = this.y - 5
        }
    }
}

class Mover {
 constructor(loc, vel, acc, m){
 this.location = loc;
 this.mass = m;
 this.velocity = vel;
 this.acceleration = acc;
 }
 update(){
 this.velocity.add(this.acceleration);
 this.location.add(this.velocity);
 }
 display(){
 noStroke();
 ellipse(this.location.x, this.location.y, 2*this.mass, 2*this.mass);
 }
  applyForce(force){
    force.div(this.mass)
    this.acceleration.add(force);
  }
}

function windowResized() {
 resizeCanvas(windowWidth, windowHeight);
}


function setup() {
  createCanvas(800, 800);
  zombie1= new zombie(800/2, 800/2)
  createCanvas(400, 400);
  createCanvas(windowWidth, windowHeight);
  objekPos1 = createVector(width*1/4,height/1);
  objekVel1 = createVector(0,0);
  objekAcc1 = createVector(0,0);
  objekMass1 = 20;
  objek1 = new Mover(objekPos1, objekVel1, objekAcc1, objekMass1);
  objekPos2 = createVector(width*1.5/4,height/1.75);
  objekVel2 = createVector(0,0);
  objekAcc2 = createVector(0,0);
  objekMass2 = 20;
  objek2 = new Mover(objekPos2, objekVel2, objekAcc2, objekMass2);
  objekPos3 = createVector(width*2/4,height/1.5);
  objekVel3 = createVector(0,0);
  objekAcc3 = createVector(0,0);
  objekMass3 = 20;
  objek3 = new Mover(objekPos3, objekVel3, objekAcc3, objekMass3);
  objekPos4 = createVector(width*2.5/4,height/1.25);
  objekVel4 = createVector(0,0);
  objekAcc4 = createVector(0,0);
  objekMass4 = 20;
  objek4 = new Mover(objekPos4, objekVel4, objekAcc4, objekMass4);
  objekPos5 = createVector(width*3/4,height/2);
  objekVel5 = createVector(0,0);
  objekAcc5 = createVector(0,0);
  objekMass5 = 20;
  objek5 = new Mover(objekPos5, objekVel5, objekAcc5, objekMass5);
  objekPos6 = createVector(width*3/4,height/2.25);
  objekVel6 = createVector(0,0);
  objekAcc6 = createVector(0,0);
  objekMass6 = 20;
  objek6 = new Mover(objekPos6, objekVel6, objekAcc6, objekMass6);
  objekPos7 = createVector(width*3/4,height/2.5);
  objekVel7 = createVector(0,0);
  objekAcc7 = createVector(0,0);
  objekMass7 = 20;
  objek7 = new Mover(objekPos7, objekVel7, objekAcc7, objekMass7);
  objekPos8 = createVector(width*3.5/4,height/1.5);
  objekVel8 = createVector(0,0);
  objekAcc8 = createVector(0,0);
  objekMass8 = 20;
  objek8 = new Mover(objekPos8, objekVel8, objekAcc8, objekMass8);
  objekPos9 = createVector(width*3.75/4,height/2.75);
  objekVel9 = createVector(0,0);
  objekAcc9 = createVector(0,0);
  objekMass9 = 20;
  objek9 = new Mover(objekPos9, objekVel9, objekAcc9, objekMass9);
  objekPos10 = createVector(width*4/4,height/3);
  objekVel10 = createVector(0,0);
  objekAcc10 = createVector(0,0);
  objekMass10 = 20;
  objek10 = new Mover(objekPos10, objekVel10, objekAcc10, objekMass10);

}

function draw() {
  background(0,0,137);
  zombie1.show();
  zombie1.step();
  var gravForce1 = createVector(0, objek1.mass*0.05);
  var gravForce2 = createVector(0, objek2.mass*0.05);
  var gravForce3 = createVector(0, objek3.mass*0.05);
  var gravForce4 = createVector(0, objek4.mass*0.05);
  var gravForce5 = createVector(0, objek5.mass*0.05);
  var gravForce6 = createVector(0, objek6.mass*0.05);
  var gravForce7 = createVector(0, objek7.mass*0.05);
  var gravForce8 = createVector(0, objek8.mass*0.05);
  var gravForce9 = createVector(0, objek9.mass*0.05);
  var gravForce10 = createVector(0, objek10.mass*0.05);
  objek1.display();
  objek1.applyForce(gravForce1);
  objek1.update();
  objek2.display();
  objek2.applyForce(gravForce2);
  objek2.update();
  objek3.display();
  objek3.applyForce(gravForce3);
  objek3.update();
  objek4.display();
  objek4.applyForce(gravForce4);
  objek4.update();
  objek5.display();
  objek5.applyForce(gravForce5);
  objek5.update();
  objek6.display();
  objek6.applyForce(gravForce6);
  objek6.update();
  objek7.display();
  objek7.applyForce(gravForce7);
  objek7.update();
  objek8.display();
  objek8.applyForce(gravForce8);
  objek8.update();
  objek9.display();
  objek9.applyForce(gravForce9);
  objek9.update();
  objek10.display();
  objek10.applyForce(gravForce10);
  objek10.update();
  console.log("Kecepatan 1", objek1.velocity.x, objek1.velocity.y,
 "Kecepatan 2", objek2.velocity.x, objek2.velocity.y);
  console.log("Kecepatan 3", objek3.velocity.x, objek3.velocity.y,
 "Kecepatan 4", objek4.velocity.x, objek4.velocity.y);
  console.log("Kecepatan 5", objek5.velocity.x, objek5.velocity.y,
 "Kecepatan 6", objek6.velocity.x, objek7.velocity.y);
  console.log("Kecepatan 7", objek7.velocity.x, objek7.velocity.y,
 "Kecepatan 8", objek8.velocity.x, objek8.velocity.y);
  console.log("Kecepatan 9", objek9.velocity.x, objek9.velocity.y,
 "Kecepatan 10", objek10.velocity.x, objek10.velocity.y);
  
  var Cd = 0.05;
  var diam1 = (2*objek1.mass);var A1 = PI*diam1/2;
  var frictionForce1 = objek1.velocity.copy();
  frictionForce1.normalize()
  frictionForce1.mult(-1* (frictionForce1.mag()**2) *A1*Cd)

 var Cd = 0.01;
 var diam2 = (2*objek2.mass)/2;
 var A2 = PI*diam2/2;
 var frictionForce2 = objek2.velocity.copy();
 frictionForce2.normalize()
 frictionForce2.mult(-1* (frictionForce2.mag()**2) *A2*Cd)
  
  var Cd = 0.05;
  var diam3 = (2*objek3.mass);var A3 = PI*diam1/2;
  var frictionForce1 = objek3.velocity.copy();
  frictionForce1.normalize()
  frictionForce1.mult(-1* (frictionForce1.mag()**2) *A1*Cd)

 var Cd = 0.01;
 var diam4 = (2*objek4.mass)/2;
 var A4 = PI*diam2/2;
 var frictionForce4 = objek4.velocity.copy();
 frictionForce2.normalize()
 frictionForce2.mult(-1* (frictionForce4.mag()**2) *A2*Cd)

}
