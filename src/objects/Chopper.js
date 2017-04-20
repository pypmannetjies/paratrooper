import ScoreKeeperBus from "signals/ScoreKeeperBus";

class Chopper extends Phaser.Sprite {

    constructor(game) {
        super(game, 0, 0, 'chopper');
        this.createChopper();
        this._isRight = false;
    }

    createChopper() {
        this.game.physics.enable(this, Phaser.Physics.ARCADE);
    }

    init(isRight) {
        this._isRight = isRight;
        if (isRight) {
            this.turnRight();
        } else {
            this.x -= this.width;
            this.y = this.height + 15;
            this.speed = 100;
        }
    }

    turnRight() {
        this.x = this.game.width;
        this.y = 10;
        this.speed = -100;
        if (this.scale.x > 0) {
            this.scale.x *= -1;
        }
    }

    set speed(speed) {
        this.body.velocity.x = speed;
    }

    hit() {
        ScoreKeeperBus.killedChopper.dispatch();
        this.destroy();
    }

    update() {
        if ((this._isRight && this.x < 0) || (!this._isRight && this.x > this.game.width)) {
            this.destroy();
        }
    }
}

export default Chopper;
