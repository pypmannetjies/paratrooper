import Chopper from 'objects/Chopper';
import RightChopper from 'objects/RightChopper';

class ChopperFactory {
    constructor(game) {
        this.factor = 1;
        this.game = game;
        this.chopperTime = 0;
        this.chopperGroup = this.game.add.group();
    }

    getToAChopper() {
        let r = Math.floor(Math.random() * 6000);
        if (this.game.time.now >= this.chopperTime) {
            let chopper;
            if (r % 2 === 0) {
                chopper = new Chopper(this.game);
            } else {
                chopper = new RightChopper(this.game);
            }

            this.chopperGroup.add(chopper);
            this.chopperTime = this.game.time.now + r / this.factor;
        }

        this.factor = Math.ceil(this.game.time.now / 60000);
    }
}

export default ChopperFactory;
