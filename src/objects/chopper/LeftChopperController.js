import BaseChopperController from './BaseChopperController'

class LeftChopperController extends BaseChopperController {
  constructor (chopper, rightEdge) {
    super(chopper, rightEdge)
    chopper.x -= chopper.width
    chopper.y = chopper.height + 15
    chopper.speed = 100
  }

  update () {
    if (this.chopper.x > this._rightEdge) {
      this.destroy()
    } else if (this.chopper.x >= this._trooperDropLocation) {
      this._dropTrooper()
    }
  }
}

export default LeftChopperController
