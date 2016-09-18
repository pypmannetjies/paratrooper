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
            this.score -= 1;
            this.updateScore();
        }
    }

    killedChopper() {
        this.score += 10;
        this.updateScore();
    }

    updateScore() {
        this.text = "SCORE: " + this.score;
    }
}

export default ScoreKeeper;
