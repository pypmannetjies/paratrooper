import Phaser from 'phaser'
import ScoreKeeperBus from 'signals/ScoreKeeperBus'

class ScoreKeeper extends Phaser.Text {
  constructor (game) {
    super(game, 0, game.height - 50, 'SCORE: 0', {
      fill: 'white'
    })
    this.score = 0
    // this.anchor.y = 200;
    this.game.stage.addChild(this)
    ScoreKeeperBus.shotsFired.add(this._shotsFired, this)
    ScoreKeeperBus.killedChopper.add(this._killedChopper, this)
    ScoreKeeperBus.killedTrooper.add(this._killedTrooper, this)
  }

  _shotsFired () {
    if (this.score > 0) {
      this.updateScore(-1)
    }
  }

  _killedChopper () {
    this.updateScore(10)
  }

  _killedTrooper () {
    this.updateScore(5)
  }

  updateScore (amount) {
    this.score = this.score + amount
    this.text = 'SCORE: ' + this.score
  }
}

export default ScoreKeeper
