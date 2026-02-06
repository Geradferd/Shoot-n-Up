class playerController extends Component {

    health = 3
    invincibilityTimer = 0

    start() {

    }
    
    update() {
        this.speed = 7
        this.gameObject.scene.getObject(HealthUI).getComp(Text).text = `Health: ${this.health}`

        let vector = new Vector2(0, 0)
        /*this.speed = this.speed * Time.deltaTime*/
        
        /* the K in Key needs to be capitalized */
        if (Input.keysDown.includes("KeyA")) {
            console.log("Moving Left")
            vector.add(new Vector2(-1,0))
        }
        if (Input.keysDown.includes("KeyW")) {
            console.log("Moving Up")
            vector.add(new Vector2(0,-1))
        }
        if (Input.keysDown.includes("KeyS")) {
            console.log("Moving Down")
            vector.add(new Vector2(0,1))
        }
        if (Input.keysDown.includes("KeyD")) {
            console.log("Moving Right")
            vector.add(new Vector2(1,0))
        }

        print(`movement vector: ${vector.x}, ${vector.y}`,false)
        if(!(vector.x == 0 && vector.x == 0)) {
            vector = new Vector2(vector.x / vector.magnitude, vector.y / vector.magnitude)}
        vector.scale(this.speed)
        print( `vector speed : ${vector.x}, ${vector.y}`)
        let inside = new Vector2(1, 1)
        if(this.gameObject.transform.position.x + vector.x < 0 || this.gameObject.transform.position.x + vector.x > Engine.canvas.width) {
            inside = new Vector2(0, 1)
        }
        if(this.gameObject.transform.position.y + vector.y < 0 || this.gameObject.transform.position.y + vector.y > Engine.canvas.height) {
            inside = new Vector2(1, 0)
        }
        vector.multiply(inside)
        this.gameObject.transform.position.add(vector)

        if ((this.gameObject.scene.getObject(ColliderOperator).checkCollison(this.gameObject, "Enemy")
            || this.gameObject.scene.getObject(ColliderOperator).checkCollison(this.gameObject, "Bullet") ) && this.invincibilityTimer <= 0) {
            if (this.health <= 0) {
                console.log(`restarting scene by ${this.gameObject.tag}`)
                console.log(`player position : ${this.gameObject.scene.getObject(Player).transform.position.string}`)
                SceneManager.loadScene(new ArenaScene())
            }
            else {
                console.log("health lost")
                console.log(`health = ${this.health}`)
                this.health -= 1
                this.invincibilityTimer = 2
                this.gameObject.getComp(Triangle).color = "rgba(184, 67, 199, 1)"
            }
        }

        if (this.invincibilityTimer > 0) {
            this.invincibilityTimer -= Time.deltaTime
        }
        else {
            this.gameObject.getComp(Triangle).color = "rgba(161, 5, 109, 1)"
        }
        
    }
}