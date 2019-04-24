import BaseChopperController from './BaseChopperController'

class RightChopperController extends BaseChopperController {
  constructor (chopper, rightEdge) {
    super(chopper, rightEdge)
    chopper.x = this._rightEdge
    chopper.y = 10
    chopper.speed = -100
    chopper.scale.x *= -1
  }

  update () {
    if (this.chopper.x < 0) {
      this.destroy()
    } else if (this.chopper.x <= this._trooperDropLocation) {
      this._dropTrooper()
    }
  }
}

export default RightChopperController
