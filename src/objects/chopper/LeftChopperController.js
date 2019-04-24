import GameBus from 'signals/GameBus'

class LeftChopperController {
  constructor (chopper, rightEdge) {
    this.chopper = chopper
    chopper.x -= chopper.width
    chopper.y = chopper.height + 15
    chopper.speed = 100
    this._trooperDropLocation = Math.random() * rightEdge
    this._droppedTrooper = false
    this._rightEdge = rightEdge
  }

  update () {
    if (this.chopper.x > this._rightEdge) {
      this.destroy()
    } else if (this.chopper.x >= this._trooperDropLocation) {
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

export default LeftChopperController
