class BlueController extends CoinController {
    start() {
        this.gameObject.getComp(Triangle).color = "blue"
        console.log(`${this.gameObject.tag} started`)
    }
    update() {
        if(this.gameObject.scene.getObject(ColliderOperator).checkCollison(this.gameObject, "Player")) {
            this.affect()
        }
    }
    affect() {
        this.gameObject.scene.getObject(Gun).getComp(GunController).reloadTime -= 0.2
        this.gameObject.delete = 1
    }
}