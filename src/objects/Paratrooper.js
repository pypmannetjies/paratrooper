class Paratrooper extends Phaser.Sprite {

    constructor(game) {
        super(game, 0, 40, 'trooper');
        this.createParatrooper();
        this.speed = 100;
    }

    createParatrooper() {
        this.game.physics.enable(this, Phaser.Physics.ARCADE);
    }

    update() {
        this.body.velocity.y = this.speed;
    }
}

export default Paratrooper;
