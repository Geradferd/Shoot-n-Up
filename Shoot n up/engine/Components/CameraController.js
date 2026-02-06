class CameraController extends Component {
    start() {
        this.backgroundColor = "pink"
    }
    static screenToCamera(screenPoint) {
        cameraPoint = screenPoint.copy()
        cameraPoint.add(new Vector2(Engine.canvas.width/2, Engine.canvas.height/2))
        cameraPoint.multiply(new Vector2(1, -1))
    }
}