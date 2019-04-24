import Phaser from 'phaser'

let ScoreKeeperBus = {
  shotsFired: new Phaser.Signal(),
  killedChopper: new Phaser.Signal(),
  killedTrooper: new Phaser.Signal()
}

export default ScoreKeeperBus
