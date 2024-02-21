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
            return this.div(mag);
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
    constructor(pos, color, radius, id){
        this.id = id
        this.color = color


        this.pos = pos.clone()
        this.oldPos = pos.clone()

        this.radius = radius

        this.acceleration = new Vector2(0, 0)
    }

    update(dt){
        let displacement = this.pos.sub(this.oldPos)

        this.oldPos = this.pos.clone()
        this.pos = this.pos.add(displacement).add(this.acceleration.mul(dt*dt))

        this.acceleration = new Vector2(0, 0)
    }

    accelerate(a){
        this.acceleration = this.acceleration.add(a)
    }

    constrain(constrainPos, constrainRadius) {
        let toObj = this.pos.sub(constrainPos)
        let dist = toObj.magnitude()

        if(dist > constrainRadius - this.radius){
            let norm = toObj.normalize()

            this.pos = constrainPos.add(norm.mul(constrainRadius - this.radius))
        }
    };

    render(){
        circle(this.pos.x, this.pos.y, this.radius*2);
    }
}


// Canvas
let CANVAS_WIDTH = null
let CANVAS_HEIGHT = null
let SMALLEST_DIM = null

let CANVAS_CENTER = null

// Dots spawn
let dotsSpawned = 0
const MAX_DOTS_SPAWN = 200
let dots = []


// Simulation settings
const gravity = new Vector2(0, 1500)
const subiterations = 8


p5.disableFriendlyErrors = true;
function setup() {
    CANVAS_WIDTH = windowWidth
    CANVAS_HEIGHT = windowHeight

    SMALLEST_DIM = CANVAS_WIDTH<CANVAS_HEIGHT ? CANVAS_WIDTH : CANVAS_HEIGHT

    CANVAS_CENTER = new Vector2(CANVAS_WIDTH/2, CANVAS_HEIGHT/2)

    var cnv = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    cnv.style('display', 'block');

    let spawnInterval = setInterval(function () {
        if(dotsSpawned > MAX_DOTS_SPAWN){
            clearInterval(spawnInterval)
            return
        }

        let rainbow = getRainbow(new Date().getTime() / 1000)
        let dot = new Dot(
            new Vector2(CANVAS_CENTER.x, CANVAS_CENTER.y * 0.2), color(rainbow.r, rainbow.g, rainbow.b), randomInt(10, 20), dotsSpawned
        )
        dot.accelerate(new Vector2(-0.4, 1).mul(5000000))
        dots.push(dot)

        dotsSpawned++
    }, 50)
}

function draw() {
    let dt = deltaTime/1000
    background(color("black"));
    frameRate(9999)

    fill(color("white"))
    circle(CANVAS_CENTER.x, CANVAS_CENTER.y, SMALLEST_DIM)

    for (let i = 0; i < subiterations; i++) {
        for(let dot of dots){
            dot.accelerate(gravity)
            solveCollisions(dot)
            dot.constrain(CANVAS_CENTER, SMALLEST_DIM/2)
            dot.update(dt/subiterations)
        }
    }

    for(let dot of dots){
        fill(dot.color);
        dot.render()
    }

    fill(color("green"))
    text("FPS: " + Math.round(frameRate()), 50, 50)

    fill(color("green"))
    text("Dots spawned: " + dotsSpawned, 50, 75)
}

function solveCollisions(dot1){
    let collisionResponse = 0.7

    // Brute force using O(n²)
    for(let dot2 of dots){
        if(dot1 !== dot2){
            let collisionAxis = dot1.pos.sub(dot2.pos)
            let dist = collisionAxis.magnitude()

            if(dist < dot1.radius + dot2.radius){
                let normal = collisionAxis.normalize()
                let delta = (dist - (dot1.radius + dot2.radius)) * 0.5 * collisionResponse

                dot1.pos = dot1.pos.sub(normal.mul(delta))
                dot2.pos = dot2.pos.add(normal.mul(delta))
            }
        }
    }
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function getRainbow(t) {
    const r = Math.sin(t);
    const g = Math.sin(t + 0.33 * 2.0 * Math.PI);
    const b = Math.sin(t + 0.66 * 2.0 * Math.PI);
    return {
        r: Math.round(255.0 * r * r),
        g: Math.round(255.0 * g * g),
        b: Math.round(255.0 * b * b)
    };
}