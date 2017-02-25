class Turret extends Phaser.Sprite {

    constructor(game) {
        super(game, 0, 0, 'turret');
        this.createBase();
        this.createCanon();
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.speed = 2;
        this.bulletTime = 0;
    }

    createBase() {
        this.anchor.x = 0.5;
        this.anchor.y = 1;
        this.x = this.game.width / 2;
        this.y = this.game.height;
        this.game.stage.addChild(this);
    }

    createCanon() {
        let offset = 10;
        this.canon = new Phaser.Sprite(this.game, this.x, this.y - this.height + offset, 'canon');
        this.canon.anchor.x = 0.5;
        this.canon.anchor.y = 1;
        this.game.stage.addChildAt(this.canon, 0);
    }

    createBullet() {
        let startingPoint = new Phaser.Point(this.canon.x, this.canon.y - this.canon.height);
        startingPoint.rotate(this.canon.x, this.canon.y, this.canon.angle, true);
        let bullet = new Bullet(this.game,
            startingPoint.x,
            startingPoint.y,
            this.canon.angle
        );
    }

    update() {
        // TODO reenable this
        // if (!this.cursors.up.isDown) {
            if (this.cursors.left.isDown) {
                this.rotateLeft();
            } else if (this.cursors.right.isDown) {
                this.rotateRight();
            }
        // }
    }

    rotateRight() {
        if (this.canon.angle < 80) {
            this.canon.angle += this.speed;
        }
    }

    rotateLeft() {
        if (this.canon.angle > -80) {
            this.canon.angle -= this.speed;
        }
    }

}

export default Turret;
