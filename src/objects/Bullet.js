class Bullet extends Phaser.Sprite {

    constructor(game, x, y, firingAngle) {
        super(game, x, y, 'bullet');
        this.createBullet();
        this.speed = 300;
        this.firingAngle = firingAngle + 90;
    }

    createBullet() {
        this.anchor.x = 0.5;
        this.anchor.y = 0.5;
        this.game.physics.enable(this, Phaser.Physics.ARCADE);

    }

    update() {
        let velocity = this.game.physics.arcade.velocityFromAngle(this.firingAngle, this.speed);
        this.body.velocity.x = -velocity.x;
        this.body.velocity.y = -velocity.y;
    }
}

export default Bullet;
