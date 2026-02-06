class EnemySpawnLoc extends GameObject {
    constructor() {
        super()
        this.addComp(new Triangle(), {points : [new Vector2(-10, 10), new Vector2(10, 10), new Vector2(10, -10),
            new Vector2(-10, -10)], color : "purple"})
        this.addComp(new SpawnLocCont())
    }
}