import Turret from 'objects/Turret'
import ChopperFactory from 'objects/ChopperFactory'
import BulletFactory from 'objects/BulletFactory'
import ExplosionEmitterFactory from 'objects/ExplosionEmitter'
import ParatrooperGroup from 'objects/paratrooper/ParatrooperGroup'
import ParashootGroup from 'objects/paratrooper/ParashootGroup'
import Phaser from 'phaser'

class GameState extends Phaser.State {
  preload () {
    this.load.image('turret', 'art/turret.png')
    this.load.image('canon', 'art/canon.png')
    this.load.image('bullet', 'art/bullet.png')
    this.load.image('chopper', 'art/chopper.png')
    this.load.image('trooper', 'art/trooper.png')
    this.load.image('parashoot', 'art/parashoot.png')
    this.load.spritesheet('particles', 'art/particles/particles.png', 3, 3, 3, 1)
  }

  create () {
    this.turret = new Turret(this.game)
    this.cursors = this.game.input.keyboard.createCursorKeys()
    this.bulletTime = 0
    this.chopperFactory = new ChopperFactory(this.game)
    this.bulletFactory = new BulletFactory(this.game, this.turret.canon)
    this.emitterFactory = new ExplosionEmitterFactory(this.game)
    this.parashootGroup = new ParashootGroup(this.game)
    this.paratrooperGroup = new ParatrooperGroup(this.game, this.parashootGroup)
    this.world.add(this.paratrooperGroup)
  }

  update () {
    this.processInput()
    this.chopperFactory.getToAChopper()
    this.checkCollisions()
  }

  processInput () {
    if (this.cursors.up.isDown || this.game.input.pointer1.isDown) {
      this.bulletFactory.shoot()
    }
  }

  checkCollisions () {
    this.game.physics.arcade.overlap(
      this.bulletFactory.bulletGroup,
      this.chopperFactory.chopperGroup,
      this.bulletHitChopperHandler,
      null, this
    )

    this.game.physics.arcade.overlap(
      this.bulletFactory.bulletGroup,
      this.paratrooperGroup,
      this.bulletHitParatrooperHandler,
      null, this
    )

    this.game.physics.arcade.overlap(
      this.bulletFactory.bulletGroup,
      this.parashootGroup,
      this.bulletHitParashootHandler,
      null, this
    )
  }

  bulletHitChopperHandler (bullet, chopper) {
    this.bulletHitAnythingHandler(bullet)
    chopper.hit()
  }

  bulletHitParatrooperHandler (bullet, paratrooper) {
    this.bulletHitAnythingHandler(bullet)
    paratrooper.hit()
  }

  bulletHitParashootHandler (bullet, parashoot) {
    this.bulletHitAnythingHandler(bullet)
    parashoot.hit()
  }

  bulletHitAnythingHandler (bullet) {
    this.emitterFactory.explode(bullet.x, bullet.y, bullet.body.velocity.x, bullet.body.velocity.y)
    bullet.kill()
  }
}

export default GameState
