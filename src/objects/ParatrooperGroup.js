import Paratrooper from 'objects/Paratrooper';

class ParatrooperGroup extends Phaser.Group {
    constructor(game) {
        super(game);
        this.classType = Paratrooper;
    }

    create(chopper) {
        let trooper = super.create(0, 0);
        trooper.x = chopper.x + chopper.width / 2;
        trooper.y = chopper.y;
    }

}

export default ParatrooperGroup;
