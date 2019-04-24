import GameState from 'states/Game'
import Phaser from 'phaser'

class Game extends Phaser.Game {
  constructor () {
    super('100%', '100%', Phaser.AUTO, 'content', null)
  }

  start () {
    this.state.add('Game', GameState, false)
    this.state.start('Game')
  }
}

const game = new Game()
game.start()
