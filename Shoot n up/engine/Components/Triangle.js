class Triangle extends Component {
    points = [new Vector2(-1, 0), new Vector2(0, 1), new Vector2(0, 1)]
    color = "purple"
    start() {
        console.log(`triangle start for ${this.gameObject.tag}`)
        this.gameObject.transform.points = []
        const objectPos = this.gameObject.transform.position
        for(const point of this.points) {
            this.gameObject.transform.points.push(new Vector2(point.x + objectPos.x, point.y + objectPos.y))
        }
        printPoints(this.gameObject.transform.points)
        this.startPoints = this.points
        const points = this.points
        let minX = this.points[0].x
        let maxX = this.points[0].x
        let minY = this.points[0].y
        let maxY = this.points[0].y
        for(const point of points) {
            if (point.x < minX){
                minX = point.x
            }
            if (point.x > maxX){
                maxX = point.x
            }
            if (point.y < minY){
                minY = point.y
            }
            if (point.y > maxY){
                maxY = point.y
            }
    }
    this.gameObject.transform.minX = minX
    this.gameObject.transform.minY = minY
    this.gameObject.transform.maxX = maxX
    this.gameObject.transform.maxY = maxY
}

    draw() {
        Engine.ctx.fillStyle = this.color
        Engine.ctx.beginPath()
        for(let point of this.points){
            point.scale(this.gameObject.transform.scale)
            point = point.rotate(this.gameObject.transform.rotation)
            const pos = new Vector2(this.gameObject.transform.position.x, this.gameObject.transform.position.y)
            point = new Vector2(point.x * Engine.canvas.width / 1280, point.y * Engine.canvas.height / 720)
            Engine.ctx.lineTo(pos.x + point.x, pos.y + point.y)
        }
        Engine.ctx.fill()
    }
    update() {

    }
}