class Enemy extends GameObject {
    constructor() {
        super("Enemy")
        this.collidable = true
        this.layer = 2
        console.log("add enemy triangle")
        this.addComp(new Triangle(), {color : "black", points : [new Vector2(-20, 20), new Vector2(20, 20), new Vector2(20, -20), new Vector2(-20, -20)]})
        console.log("add enemy controller")
        this.addComp(new EnemyController())
        /*this.addComp(new RigidBody())*/
    }
}