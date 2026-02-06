class Coin extends GameObject {
    constructor() {
        super("Coin")
        this.layer = 5
        this.tag = "Coin"
        this.addComp(new Triangle(), {points : [new Vector2(-10, 10), new Vector2(10, 10), new Vector2(10, -10), new Vector2(-10, -10)]})
        let coins = [new BlueController(), new YellowCoinController()]
        this.addComp(randomElement(coins))
    }
}