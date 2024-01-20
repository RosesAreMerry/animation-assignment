class Pig {
    constructor(x, y, spritesheet) {
        this.x = x;
        this.y = y;

        this.animator = new Animator(spritesheet, 0, 0, 34, 28, 6, 0.3, 0, false, true);
    }

    update() { }

    draw() {
      this.animator.drawFrame(gameEngine.clockTick, ctx, this.x, this.y, 10);
    }
}