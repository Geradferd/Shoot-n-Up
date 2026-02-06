class Gun extends GameObject {
    constructor() {
    /* gun body */
    super("Gun Game Object")
    this.layer = 10
    let controller = new GunController()
    this.addComp(controller)
    let triangle = new Triangle()
    triangle.color = "brown"
    this.addComp(triangle, {points : [new Vector2(-10, 15), new Vector2(10, 15), new Vector2(10, -15), new Vector2(-10, -15)]})
    }
}