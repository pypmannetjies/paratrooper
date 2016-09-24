class Paratrooper extends Phaser.Sprite {

    constructor(game) {
        super(game, 0, 40, 'trooper');
        this.createParatrooper();
        this.createShoot();
        this.speed = 200;
    }

    createParatrooper() {
        this.game.physics.enable(this, Phaser.Physics.ARCADE);
        this.anchor.x = 0.5;
    }

    createShoot() {
        this.parashoot = new Phaser.Sprite(this.game, 0, 0, 'parashoot');
        this.parashoot.anchor.x = 0.5;
        this.parashoot.anchor.y = 1;
    }

    addShoot() {
        this.hasShoot = true;
        this.addChild(this.parashoot);
        this.speed = 100;
    }

    set speed(speed) {
        this.body.velocity.y = speed;
    }

    update() {
        if (this.y >= this.game.height / 2) {
            this.addShoot();
        }
    }
}

export default Paratrooper;
