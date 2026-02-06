class SpawnLocCont extends Component {
    start() {
        this.timer = 0
        this.spawnLoc = randomVector(0, Engine.canvas.width, 0, Engine.canvas.height)
        this.gameObject.transform.position = this.spawnLoc
    }

    update() {
        this.timer += Time.deltaTime
        if(this.timer >= 5) {
            this.gameObject.delete = 1
            this.gameObject.scene.instantiate(new Enemy("Enemy"), this.spawnLoc)
        }
    }

}