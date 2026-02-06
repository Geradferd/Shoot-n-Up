class BulletController extends Component {
    speed = 1.5
    start() {
        this.timer = 0
        this.force = new Vector2()
        this.gameObject.transform.scale = 1
        
        this.gameObject.transform.position = this.gameObject.scene.getObject(Player).transform.position.copy()
        let vector = Input.mousePos.minus(this.gameObject.transform.position)
        this.force = new Vector2(vector.x / vector.magnitude, vector.y / vector.magnitude)
        this.force.scale(this.speed)
        this.gameObject.collidable = false
    }

    update() {
        
        console.log(`bullet collison is set to ${this.gameObject.collidable}`)
        if(this.timer >= 1) {
            this.gameObject.collidable = true
        }
        else{
            this.timer += Time.deltaTime
        }

        if(this.gameObject.transform.position.y < 0 || this.gameObject.transform.position.y > Engine.canvas.height) {
            this.force.y *= -1
            this.gameObject.scene.instantiate(new BounceParticles(), this.gameObject.transform.position.copy())
        }

        if(this.gameObject.transform.position.x < 0 || this.gameObject.transform.position.x > Engine.canvas.width) {
            this.force.x *= -1
            this.gameObject.scene.instantiate(new BounceParticles(), this.gameObject.transform.position.copy())
        }

        this.gameObject.transform.position.add(this.force)

        if (SceneManager.currentScene.getObject(ColliderOperator).checkCollison(this.gameObject, "Enemy") || SceneManager.currentScene.getObject(ColliderOperator).checkCollison(this.gameObject, "Player")) {
            console.log("Deleting the bullet")
            this.gameObject.delete = 1
        }

    }
}