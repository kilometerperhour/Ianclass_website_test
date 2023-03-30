class Particle {
    constructor(x, y, w, h, vx, vy, r, g, b) {
        const options = {
            collisionFilter: {
                category: defaultCategory | boxCategory,
                mask: ballCategory | boxCategory
            },
            restitution: 0.5
        };
        this.body = Bodies.rectangle(x, y, w, h, options);

        this.w = w;
        this.h = h;
    }

    show(){
        var pos = this.body.position;
        var angle = this.body.angle;
            push();
            noStroke();
            fill(this.body.r, this.body.g, this.body.b);
            translate(pos.x, pos.y);
            rotate(angle);
            rect(0, 0, this.w, this.h);
            pop();
        }
    }