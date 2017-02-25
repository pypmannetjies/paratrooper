import ScoreKeeperBus from "signals/ScoreKeeperBus";

class Paratrooper extends Phaser.Sprite {

    constructor(game) {
        super(game);

        this.createParatrooper();
        this.createShoot();
        this.game.physics.enable(this, Phaser.Physics.ARCADE);

        this.speed = 200;
    }

    createParatrooper() {
        let trooper = new Phaser.Sprite(this.game, 0, 0, 'trooper', undefined, false);
        trooper.anchor.x = 0.5;
        this.addChild(trooper);
    }

    createShoot() {
        this.shoot = new Phaser.Sprite(this.game, 0, 0, 'parashoot', undefined, false);
        this.shoot.anchor.x = 0.5;
        this.shoot.anchor.y = 1;
        this.addChild(this.shoot); 
    }

    addShoot() {
        this.hasShoot = true;
        this.shoot.exists = true;
        this.speed = 100;
               
    }

    set speed(speed) {
        this.body.velocity.y = speed;
    }

    hit() {
        this.kill();
        ScoreKeeperBus.killedTrooper.dispatch();
    }

    update() {
        if (this.y >= this.game.height / 2) {
            this.addShoot();
        }
    }
}

export default Paratrooper;
