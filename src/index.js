import BootState from 'states/Boot';
import PreloaderState from 'states/Preloader';
import MenuState from 'states/Menu';
import GameState from 'states/Game';

class Game extends Phaser.Game {

    constructor() {
        super("100%", "100%", Phaser.AUTO, 'content', null);
        //this.state.add('Boot', BootState, false);
        //this.state.add('Preloader', PreloaderState, false);
        //this.state.add('Menu', MenuState, false);
        this.state.add('Game', GameState, false);
        this.state.start('Game');
    }

}

new Game();
