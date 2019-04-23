import ScoreKeeperBus from "signals/ScoreKeeperBus";

class Paratrooper extends Phaser.Sprite {

    constructor(game) {
        super(game, 0, 0, 'trooper');
        this.game.physics.enable(this, Phaser.Physics.ARCADE);
        this._onShootDeployed = new Phaser.Signal();
        this._onTrooperLanded = new Phaser.Signal();
    }

    init() {
        this.anchor.x = 0.5;
        this.speed = 200;
        this._shootWasDeployed = false;
        this._fallingToDeath = false;
    }

    _trooperDeployedShoot() {
        if (this._shootWasDeployed) return;
        this.speed = 100;
        this._onShootDeployed.dispatch();
        this._shootWasDeployed = true;
    }

    _trooperLanded() {
        if (this._fallingToDeath) 
        {
            this.hit();
            return;
        }
        this._onTrooperLanded.dispatch();
        this.speed = 0;
    }

    set speed(speed) {
        this.body.velocity.y = speed;
    }

    get onShootDeployed() {
        return this._onShootDeployed;
    }

    get onTrooperLanded() {
        return this._onTrooperLanded;
    }

    hit() {
        this.kill();
        ScoreKeeperBus.killedTrooper.dispatch();
    }

    update() {
        if (this.y >= this.game.height / 2) {
            this._trooperDeployedShoot();
            if (this.y + this.height >= this.game.height) {
                this._trooperLanded();
            }
        }
    }

    shootShotDown() {
        this._fallingToDeath = true;
        this.speed = 200;
    }
}

export default Paratrooper;
