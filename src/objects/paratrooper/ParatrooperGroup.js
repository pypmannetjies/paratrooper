import Paratrooper from 'objects/paratrooper/Paratrooper';
import ParashootGroup from 'objects/paratrooper/ParashootGroup';
import GameBus from 'signals/GameBus';

class ParatrooperGroup extends Phaser.Group {
    constructor(game) {
        super(game);
        this.classType = Paratrooper;
        GameBus.createTrooper.add(this.createTrooper, this);
        this.parashootGroup = new ParashootGroup(game);
    }

    createTrooper(chopper) {
        let trooper = this.getFirstExists(false, true, 0, 0);
        trooper.init();
        trooper.x = chopper.x + chopper.width / 2;
        trooper.y = chopper.y;
        trooper.shootDeployed.add(this.parashootGroup.createShoot.bind(this.parashootGroup, trooper));
    }

}

export default ParatrooperGroup;
