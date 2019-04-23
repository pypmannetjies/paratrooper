import GameState from 'states/Game';

class Game extends Phaser.Game {

    constructor() {
        super("100%", "100%", Phaser.AUTO, 'content', null);
        this.state.add('Game', GameState, false);
        this.state.start('Game');
    }

}

new Game();
