class ArenaScene extends Scene {
    constructor() {
        super()
        this.globalLight = [-30, -30, -30]
        let collider = new ColliderOperator()
        collider.colliders = [["Bullet", "Enemy"], ["Player", "Enemy"], ["Player", "Coin"], ["Player", "Bullet"]]
        let camera = new Camera()
        this.instantiate(new Camera())
        this.instantiate(new Player("Player"), new Vector2(300, 300), 1)
        this.instantiate(new Gun("Gun"), new Vector2(300, 300), 1)
        this.instantiate(new EnemySpawner("EnemySpawner"), new Vector2(0, 0))
        this.instantiate(collider, new Vector2(0,0))
        this.instantiate(new Score("Score"), new Vector2(75, 75))
        this.instantiate(new HealthUI(), new Vector2(600, 50))
    }
}