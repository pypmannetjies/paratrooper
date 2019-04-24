import Phaser from 'phaser'
import Paratrooper from 'objects/paratrooper/Paratrooper'
import GameBus from 'signals/GameBus'

class ParatrooperGroup extends Phaser.Group {
  constructor (game, parashootGroup) {
    super(game)
    this.classType = Paratrooper
    GameBus.createTrooper.add(this._createTrooper, this)
    this.parashootGroup = parashootGroup
  }

  _createTrooper (chopper) {
    let trooper = this.getFirstExists(false, true, 0, 0)
    trooper.init()
    trooper.x = chopper.x + chopper.width / 2
    trooper.y = chopper.y + chopper.height
    trooper.onShootDeployed.add(this.parashootGroup.createShoot.bind(this.parashootGroup, trooper))
  }
}

export default ParatrooperGroup
