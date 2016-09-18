class Chopper extends Phaser.Sprite {

    constructor(game) {
        super(game, 0, 40, 'chopper');
        this.createChopper();
        this.speed = 100;
    }

    createChopper() {
        this.game.physics.enable(this, Phaser.Physics.ARCADE);
    }

    update() {
        this.body.velocity.x = this.speed;
    }
}

export default Chopper;
