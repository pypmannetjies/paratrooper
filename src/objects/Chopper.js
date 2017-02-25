import ScoreKeeperBus from "signals/ScoreKeeperBus";

class Chopper extends Phaser.Sprite {

    constructor(game) {
        super(game, 0, 0, 'chopper');
        this.y = this.height + 15;
        this.createChopper();
        this.speed = 100;
    }

    createChopper() {
        this.game.physics.enable(this, Phaser.Physics.ARCADE);
    }

    hit() {
        this.kill();
        ScoreKeeperBus.killedChopper.dispatch();
    }

    update() {
        this.body.velocity.x = this.speed;
    }
}

export default Chopper;
