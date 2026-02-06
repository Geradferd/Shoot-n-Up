class Title extends GameObject {
    constructor() {
        super()
        let name = new Text()
        name.text = "Bullets, Enemies, Survive"
        name.size = 54
        name.color = "purple"
        this.addComp(name)
    }
}