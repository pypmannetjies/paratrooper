import Phaser from 'phaser'

import Parashoot from 'objects/paratrooper/Parashoot'

class ParashootGroup extends Phaser.Group {
  constructor (game) {
    super(game)
    this.classType = Parashoot
  }

  createShoot (trooper) {
    let shoot = this.getFirstExists(false, true, 0, 0)
    shoot.init(trooper)
  }
}

export default ParashootGroup
