class DarkRoom extends GameObject {
    constructor() {
        super()
        let light = new GlobalLight()
        light.lighting = -10
        this.addComp(light)
    }
}