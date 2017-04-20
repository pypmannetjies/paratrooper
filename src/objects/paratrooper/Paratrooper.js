import ScoreKeeperBus from "signals/ScoreKeeperBus";

class Paratrooper extends Phaser.Sprite {

    constructor(game) {
        super(game, 0, 0, 'trooper');
        this.game.physics.enable(this, Phaser.Physics.ARCADE);
        this._shootDeployed = new Phaser.Signal();
    }

    init() {
        this.anchor.x = 0.5;
        this.speed = 200;
        this.hasShoot = false;
    }

    addShoot() {
        this.hasShoot = true;
        this.speed = 100;
        this._shootDeployed.dispatch();
    }

    set speed(speed) {
        this.body.velocity.y = speed;
    }

    get shootDeployed() {
        return this._shootDeployed;
    }

    hit() {
        this.destroy();
        ScoreKeeperBus.killedTrooper.dispatch();
    }

    update() {
        if (this.y >= this.game.height / 2) {
            this.addShoot();
            if (this.y + this.height >= this.game.height) {
                this.land();
            }
        }
    }

    land() {
        if (this.shoot) {
            this.shoot.destroy();
            this.speed = 0;
        } else {
            this.hit();
        }
    }
}

export default Paratrooper;
