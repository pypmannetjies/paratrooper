import GameBus from '../../signals/GameBus'

class BaseChopperController {
  constructor (chopper, rightEdge) {
    this._rightEdge = rightEdge

    this.chopper = chopper

    this._trooperDropLocation = Math.random() * rightEdge
    this._droppedTrooper = false
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

export default BaseChopperController
