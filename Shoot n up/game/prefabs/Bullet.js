class Bullet extends GameObject {
    constructor() {
        super("Bullet")
        this.layer = 2
        this.addComp(new BulletController())
        this.addComp(new Triangle(), {points : [new Vector2(-10, 15), new Vector2(10, 15), new Vector2(10, -15), new Vector2(-10, -15)], color : "red"})
    }
}