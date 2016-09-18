import Chopper from 'objects/Chopper';

class RightChopper extends Chopper {

    constructor(game) {
        super(game);
        this.x = this.game.width;
        this.y = 10;
        this.speed = -100;
        this.scale.x *= -1;
    }

}

export default RightChopper;
