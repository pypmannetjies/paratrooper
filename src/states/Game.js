import Turret from 'objects/Turret';
import Bullet from 'objects/Bullet';
import ChopperFactory from 'objects/ChopperFactory';
import BulletFactory from 'objects/BulletFactory';
import ScoreKeeper from 'objects/ScoreKeeper';
import ExplosionEmitterFactory from 'objects/ExplosionEmitter';

class GameState extends Phaser.State {

    preload() {
        this.load.image('turret', 'art/turret.png');
        this.load.image('canon', 'art/canon.png');
        this.load.image('bullet', 'art/bullet.png');
        this.load.image('chopper', 'art/chopper.png');
        this.load.image('trooper', 'art/trooper.png');
        this.load.image('parashoot', 'art/parashoot.png');
        this.load.spritesheet('particles', 'art/particles/particles.png', 3, 3, 3, 1);
    }

    create() {
        this.turret = new Turret(this.game);
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.bulletTime = 0;
        this.chopperFactory = new ChopperFactory(this.game);
        this.bulletFactory = new BulletFactory(this.game, this.turret.canon);
        this.game.scoreKeeper = new ScoreKeeper(this.game);
        this.emitterFactory = new ExplosionEmitterFactory(this.game);
    }

    update() {
        this.processInput();
        this.chopperFactory.getToAChopper();
        this.checkCollisions();
    }

    processInput() {
        if (this.cursors.up.isDown) {
            this.bulletFactory.shoot();
        }
    }

    checkCollisions() {
        this.game.physics.arcade.overlap(
            this.bulletFactory.bulletGroup,
            this.chopperFactory.chopperGroup,
            this.bulletHitChopperHandler,
            null, this
        );
    }

    bulletHitChopperHandler(bullet, chopper) {
        this.emitterFactory.explode(bullet.x, bullet.y, bullet.body.velocity.x, bullet.body.velocity.y);
        bullet.kill();
        chopper.kill();
        this.game.scoreKeeper.killedChopper();
    }

}

export default GameState;
