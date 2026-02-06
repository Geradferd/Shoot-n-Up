class EnemyController extends Component {

    start() {
        console.log(`Starting EnemyController at ${this.gameObject.transform.position.x}, ${this.gameObject.transform.position.y}`)
        this.viewDistance = 100
        this.timer = 4
        this.lastTime = Time.time
        this.dodgeDirection = randomElement([-90, -50, 90, 50, -110, 110])
        this.invincibleTimer = 0
        this.enemyColor = this.gameObject.getComp(Triangle).color
        this.gameObject.getComp(Triangle).color = "blue"
        this.gameObject.rigidBody = true
        this.velocity = new Vector2(0, 0)
        this.parent = SceneManager.currentScene.getObject(EnemySpawner)
    }

    update() {
        let bullets = []
        let rb = this
        for(const gameObject of this.gameObject.scene.gameObjects) {
            if (gameObject.tag == "Bullet") {
                if(gameObject.transform.position.distance(this.gameObject.transform.position) <= this.viewDistance){
                    bullets.push(gameObject.transform.position.copy())
                }
            }
        }
        if (bullets.length > 0) {
            const avgBulletPos = Vector2.average(bullets)
            rb.velocity = avgBulletPos.minus(this.gameObject.transform.position)
            rb.velocity = rb.velocity.normalize()
            rb.velocity = rb.velocity.rotate(this.dodgeDirection)
        }
        else {
            if (this.timer >= 1) {
                rb.velocity = this.gameObject.scene.getObject(Player).transform.position.minus(this.gameObject.transform.position)
                rb.velocity = rb.velocity.normalize()
                this.timer = 0 
            }
        }

        this.timer += Time.time - this.lastTime
        this.lastTime = Time.time

        let inside = new Vector2(1, 1)
        if(this.gameObject.transform.position.x + rb.velocity.x < 0 || this.gameObject.transform.position.x + rb.velocity.x > Engine.canvas.width) {
            inside = new Vector2(0, 1)
        }
        if(this.gameObject.transform.position.y + rb.velocity.y < 0 || this.gameObject.transform.position.y + rb.velocity.y > Engine.canvas.height) {
            inside = new Vector2(1, 0)
        }
        rb.velocity.multiply(inside)

        const force = rb.velocity.copy()
        force.scale(this.parent.getComp(SpawnController).speed)
        this.gameObject.transform.position.add(force)
        if (this.invincibleTimer >= 3 && this.gameObject.scene.getObject(ColliderOperator).checkCollison(this.gameObject, "Bullet")) {
            let explosion = new Explosion()
            explosion.particleLifespan = 0.5
            explosion.amount = 25
            explosion.timer = 1.5
            explosion.color = "orange"
            this.gameObject.scene.instantiate(explosion, this.gameObject.transform.position.copy())
            this.gameObject.delete = 1
            this.gameObject.scene.getObject(Score).getComp(ScoreController).score += 1
            if(randomPercent() <= 40) {
                console.log(`spawned coin at ${this.gameObject.transform.position.string}`)
                this.gameObject.scene.instantiate(new Coin("Coin"), this.gameObject.transform.position.copy())
            }
        }
        else {
            this.invincibleTimer += Time.deltaTime
            if (this.invincibleTimer >= 3) {
                this.gameObject.getComp(Triangle).color = this.enemyColor
            }
        }
    }

    draw() {

    }
}