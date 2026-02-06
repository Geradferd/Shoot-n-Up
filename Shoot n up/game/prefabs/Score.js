class Score extends GameObject {
    constructor() {
        super("Score")
        this.addComp(new Text(), {text : "score:", size : 32})
        this.addComp(new ScoreController())
    }
}

