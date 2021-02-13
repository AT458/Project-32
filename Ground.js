class Ground {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
    }
    display() {
        var groundPosition = this.body.position;

        push();
        translate(groundPosition.x, groundPosition.y);
        fill("yellow");
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}