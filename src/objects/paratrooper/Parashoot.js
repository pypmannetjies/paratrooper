import Phaser from 'phaser'

class Parashoot extends Phaser.Sprite {
  constructor (game) {
    super(game, 0, 0, 'parashoot')
    this.game.physics.enable(this, Phaser.Physics.ARCADE)
    this.trooper = null
  }

  init (trooper) {
    this.trooper = trooper
    this.trooper.events.onKilled.addOnce(() => this._removeTrooper())
    this.trooper.onTrooperLanded.addOnce(() => this._removeTrooper())
    this.x = trooper.x
    this.anchor.x = 0.5
    this.anchor.y = 1
  }

  set speed (speed) {
    this.body.velocity.y = speed
  }

  _removeTrooper () {
    if (this.trooper == null) return
    this.trooper = null
    this.destroy()
  }

  hit () {
    this.trooper.shootShotDown()
    this._removeTrooper()
  }

  update () {
    this.y = this.trooper.y
  }
}

export default Parashoot
