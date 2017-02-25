import Paratrooper from 'objects/Paratrooper';
import GameBus from 'signals/GameBus';

class ParatrooperGroup extends Phaser.Group {
    constructor(game) {
        super(game);
        this.classType = Paratrooper;
        GameBus.createTrooper.add(this.create, this);
    }

    create(chopper) {
        let trooper = super.create(0, 0);
        trooper.x = chopper.x + chopper.width / 2;
        trooper.y = chopper.y;
    }

}

export default ParatrooperGroup;
