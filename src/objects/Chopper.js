import ScoreKeeperBus from 'signals/ScoreKeeperBus'
import LeftChopperController from 'objects/chopper/LeftChopperController'
import RightChopperController from 'objects/chopper/RightChopperController'
import Phaser from 'phaser'

class Chopper extends Phaser.Sprite {
  constructor (game) {
    super(game, 0, 0, 'chopper')
    this.createChopper()
  }

  createChopper () {
    this.game.physics.enable(this, Phaser.Physics.ARCADE)
    this._chopperController = null
  }

  init (isRight) {
    if (isRight) {
      this._chopperController = new RightChopperController(this, this.game.width)
    } else {
      this._chopperController = new LeftChopperController(this, this.game.width)
    }
  }

  set speed (speed) {
    this.body.velocity.x = speed
  }

  hit () {
    ScoreKeeperBus.killedChopper.dispatch()
    this.destroy()
  }

  update () {
    this._chopperController.update()
  }
}

export default Chopper
