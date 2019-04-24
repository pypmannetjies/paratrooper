import Chopper from 'objects/Chopper'

class ChopperFactory {
  constructor (game) {
    this.factor = 1
    this.game = game
    this.chopperTime = 0
    this.chopperGroup = this.game.add.group()
    this.chopperGroup.classType = Chopper
  }

  getToAChopper () {
    let r = Math.floor(Math.random() * 6000)
    if (this.game.time.now >= this.chopperTime) {
      let chopper = this.chopperGroup.getFirstExists(false, true, 0, 0)

      let isRight = r % 2 !== 0
      chopper.init(isRight)

      this.chopperTime = this.game.time.now + r / this.factor
    }

    // TODO add this back
    // this.factor = Math.ceil(this.game.time.now / 60000);
  }
}

export default ChopperFactory
