class Player extends GameObject {
    constructor() {
        super("Player")
        this.tag = "Player"
        this.layer = 11
        console.log("\nPlayer constructor function: ")
        /* main body */
        this.addComp(new Triangle(), {points : [new Vector2(-20, 20), new Vector2(20, 20), new Vector2(20, -20), new Vector2(-20, -20)], color : "rbga(161, 5, 109, 1)"})
        this.addComp(new playerController())
        /*this.addComp(new LightSource())*/
    }
}