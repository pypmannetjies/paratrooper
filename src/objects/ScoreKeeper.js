class ScoreKeeper extends Phaser.Text {
    constructor(game) {
        super(game, 0, game.height - 50, "SCORE: 0", {
            fill: 'white'
        });
        this.score = 0;
        // this.anchor.y = 200;
        this.game.stage.addChild(this);
    }

    shotsFired() {
        if (this.score > 0) {
            this.updateScore(-1);
        }
    }

    killedChopper() {
        this.updateScore(10);
    }

    killedParashooter() {
        this.updateScore(5);
    }

    updateScore(amount) {
        this.score = this.score + amount;
        this.text = "SCORE: " + this.score;
    }
}

export default ScoreKeeper;
