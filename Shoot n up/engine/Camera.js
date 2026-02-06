class Camera extends GameObject {
    constructor() {
        super()
        this.addComp(new CameraController())
    }
}