class SpawnController extends Component {

    start() {
        this.startTime = Time.time
        this.restartTime = 10
        this.timer = Time.time - this.startTime
        this.speed = 1
    }

    update() {
        if(this.timer >= this.restartTime) {
            this.restartTime -= 0.1
            this.speed += 0.05
            this.startTime = Time.time
            this.timer = Time.time - this.startTime
            this.gameObject.scene.instantiate(new EnemySpawnLoc(), {color : "pink"})
        }
        else {
            this.timer = Time.time - this.startTime
        }
    }
}