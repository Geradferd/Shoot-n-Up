class ScoreController extends Component {
    score = 0
    scoreFloot = 0
    start() {
        
    }

    update() {
        this.gameObject.getComp(Text).text = `score: ${this.score}`
    }
}