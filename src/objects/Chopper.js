import ScoreKeeperBus from "signals/ScoreKeeperBus";
import GameBus from 'signals/GameBus';

class Chopper extends Phaser.Sprite {

    constructor(game) {
        super(game, 0, 0, 'chopper');
        this.createChopper();
        this._isRight = false;
        this._trooperDropLocation = Math.random() * game.width;
        this._droppedTrooper = false;
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
        if (this._isRight) {
            if (this.x < 0) {
                this.destroy();
            } else if (this.x <= this._trooperDropLocation) {
                this._dropTrooper();
            }
        } else {
            if (this.x > this.game.width) {
                this.destroy();
            } else if (this.x >= this._trooperDropLocation) {
                this._dropTrooper();
            }
        }
        // if ((this._isRight && this.x < 0) || (!this._isRight && this.x > this.game.width)) {
        //     this.destroy();
        // }
        // if (this.x == this.game.width)
    }

    _dropTrooper() {
        if (this._droppedTrooper) return;
        GameBus.createTrooper.dispatch(this);
        this._droppedTrooper = true;
    }
}

export default Chopper;
