class YellowCoinController extends CoinController {
    start() {
        this.gameObject.getComp(Triangle).color = "yellow"
        console.log(`${this.gameObject.tag} started`)
    }
    update() {
        if(this.gameObject.scene.getObject(ColliderOperator).checkCollison(this.gameObject, "Player")) {
            this.affect()
        }
    }
    affect() {
        this.gameObject.scene.getObject(Player).getComp(playerController).speed += 10
        this.gameObject.delete = 1
    }
}