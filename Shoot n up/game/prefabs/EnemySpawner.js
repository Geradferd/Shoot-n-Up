class EnemySpawner extends GameObject {
    constructor() {
        super("Enemy Spawner")
        this.addComp(new SpawnController())
    }
}