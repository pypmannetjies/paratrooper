import Bullet from 'objects/Bullet';

class BulletFactory {
    constructor(game, canon) {
        this.game = game;
        this.bulletTime = 0;
        this.bulletGroup = this.game.add.group();
        this.canon = canon;
    }

    shoot() {
        if (this.game.time.now > this.bulletTime) {
            this.createBullet();
            this.bulletTime = this.game.time.now + 150;
        }
    }

    createBullet() {
        let startingPoint = new Phaser.Point(this.canon.x, this.canon.y - this.canon.height);
        startingPoint.rotate(this.canon.x, this.canon.y, this.canon.angle, true);
        let bullet = new Bullet(this.game,
            startingPoint.x,
            startingPoint.y,
            this.canon.angle
        );
        this.bulletGroup.add(bullet);
        this.game.scoreKeeper.shotsFired();
    }
}

export default BulletFactory;
