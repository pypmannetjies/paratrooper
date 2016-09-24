class ExplosionEmitterFactory {
    constructor(game) {
        this.game = game;
        this.emitter = this.game.add.emitter(0, 0, 1000);
        this.emitter.makeParticles('particles', [0, 1, 2]);
        this.emitter.gravity = 300;

    }

    explode(x, y, velocityX, velocityY) {
        this.emitter.x = x;
        this.emitter.y = y;
        this.emitter.start(true, 3000, null, 50);

    }

}

export default ExplosionEmitterFactory;
