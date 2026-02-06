class HealthUI extends GameObject {
    constructor() {
        super()
        this.layer = 1
        this.addComp(new Text(600, 20))
    }
}