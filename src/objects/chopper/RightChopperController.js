import GameBus from 'signals/GameBus'

class RightChopperController {
  constructor (chopper, rightEdge) {
    this._rightEdge = rightEdge

    this.chopper = chopper
    chopper.x = this._rightEdge
    chopper.y = 10
    chopper.speed = -100
    chopper.scale.x *= -1

    this._trooperDropLocation = Math.random() * rightEdge
    this._droppedTrooper = false
  }

  update () {
    if (this.chopper.x < 0) {
      this.destroy()
    } else if (this.chopper.x <= this._trooperDropLocation) {
      this._dropTrooper()
    }
  }

  _dropTrooper () {
    if (this._droppedTrooper) return
    GameBus.createTrooper.dispatch(this.chopper)
    this._droppedTrooper = true
  }

  destroy () {
    this.chopper.destroy()
    this.chopper = null
  }
}

export default RightChopperController
