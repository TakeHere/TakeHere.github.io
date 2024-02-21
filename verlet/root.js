class Vector2 {
    constructor(x, y) {
      this.x = x || 0;
      this.y = y || 0;
    }
  
    add(vector) {
      return new Vector2(this.x + vector.x, this.y + vector.y);
    }
  
    sub(vector) {
      return new Vector2(this.x - vector.x, this.y - vector.y);
    }
  
    mul(scalar) {
      return new Vector2(this.x * scalar, this.y * scalar);
    }
  
    div(scalar) {
      if (scalar !== 0) {
        return new Vector2(this.x / scalar, this.y / scalar);
      } else {
        console.error("Division by zero is not allowed.");
        return null;
      }
    }
  
    magnitude() {
      return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
  
    normalize() {
      const mag = this.magnitude();
      if (mag !== 0) {
        return this.divide(mag);
      } else {
        console.error("Cannot normalize a zero-length vector.");
        return null;
      }
    }
  
    clone() {
      return new Vector2(this.x, this.y);
    }
  
    dot(vector) {
      return this.x * vector.x + this.y * vector.y;
    }
}

class Dot{
    constructor(pos){
        this.pos = pos.clone()
        this.oldPos = pos.clone()

        this.radius = 50
        this.gravity = new Vector2(0, 1)
    }

    update(dt){
      let velocity = this.pos.sub(this.oldPos) 

      this.oldPos = this.pos.clone()
      this.pos = this.pos.add(velocity.add(this.gravity.mul(1)))
    }

    constrain(constrainPos, constrainRadius) {
      let toObj = this.pos.sub(constrainPos)
      let dist = toObj.magnitude()
      if(dist > constrainRadius + this.radius){
        let normalized = toObj.div(dist)
        
        this.pos = constrainPos.add(normalized.mul(1))
        //this.pos = constrainPos.add(normalized.mul(dist - this.radius))
      }
    };

    render(){
      circle(this.pos.x, this.pos.y, this.radius);
    }
}

let CANVAS_WIDTH = null
let CANVAS_HEIGHT = null

let CANVAS_CENTER = null

let subiterations = 100

let dots = []

function setup() {
  CANVAS_WIDTH = windowWidth
  CANVAS_HEIGHT = windowHeight

  CANVAS_CENTER = new Vector2(CANVAS_WIDTH/2, CANVAS_HEIGHT/2)

  var cnv = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  cnv.style('display', 'block');

  for (let i = 0; i < 10; i++) {
    dots.push(new Dot(new Vector2(50 + i * 100, 50)))
  }
}
  
function draw() {
  background(220);
  fill(color("green")); 
  
  for (let i = 0; i < subiterations; i++) {
    for(let dot of dots){
      dot.update(0.1) 
      dot.constrain(CANVAS_CENTER, 300)
    }  
  }

  for(let dot of dots){
    dot.render()
  }
}