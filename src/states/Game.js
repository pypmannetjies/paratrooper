import Turret from 'objects/Turret';
import Bullet from 'objects/Bullet';
import ChopperFactory from 'objects/ChopperFactory';
import ScoreText from 'objects/ScoreText';

class GameState extends Phaser.State {

    preload() {
        this.load.image('turret', 'art/turret.png');
        this.load.image('canon', 'art/canon.png');
        this.load.image('bullet', 'art/bullet.png');
        this.load.image('chopper', 'art/chopper.png');
    }

    create() {
        this.turret = new Turret(this.game);
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.bulletTime = 0;
        this.chopperFactory = new ChopperFactory(this.game);
        this.bulletGroup = this.game.add.group();
        this.scoreText = new ScoreText(this.game);
    }

    update() {
        if (this.cursors.up.isDown) {
            this.shoot();
        }
        this.createChopper();
        this.game.physics.arcade.overlap(this.bulletGroup, this.chopperFactory.chopperGroup, this.collisionHandler, null, this);
    }

    shoot() {
        if (this.game.time.now > this.bulletTime) {
            this.createBullet();
            this.bulletTime = this.game.time.now + 150;
        }
    }

    createBullet() {
        let startingPoint = new Phaser.Point(this.turret.canon.x, this.turret.canon.y - this.turret.canon.height);
        startingPoint.rotate(this.turret.canon.x, this.turret.canon.y, this.turret.canon.angle, true);
        let bullet = new Bullet(this.game,
            startingPoint.x,
            startingPoint.y,
            this.turret.canon.angle
        );
        this.bulletGroup.add(bullet);
        this.scoreText.shotsFired();
    }

    createChopper() {
        this.chopperFactory.getToAChopper();
    }

    collisionHandler(bullet, chopper) {
        bullet.kill();
        chopper.kill();
        this.scoreText.killedChopper();
    }

}

export default GameState;
