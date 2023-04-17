class Ground {
    constructor(x, y, w, h) {
        const options = {
            isStatic: true,
            collisionFilter: {
                category: defaultCategory | ballCategory
            }
        }

        this.body = Bodies.rectangle(x, y, w, h, options);

        Composite.add(world, this.body);

        this.w = w;
        this.h = h;

    }

    show() {
        const pos = this.body.position;
        const angle = this.body.angle;
        push();
        noStroke();
        fill(150);
        translate(pos.x, pos.y);
        rotate(angle);
        rect(0, 0, this.w, this.h);
        pop();
    }
}