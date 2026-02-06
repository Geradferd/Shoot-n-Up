class LightSource extends Component {
    lightValue = 0
    radius = 20
    interval = 1
    light = 20
    draw() {
        let lightLevel = 0
        let distance = 0
        let color = [0, 0, 0]
        const pos = this.gameObject.transform.position
        for (let x = (-this.radius + pos.x); x <= (this.radius + pos.x); x++){
            for (let y = (-this.radius + pos.y); y <= (this.radius + pos.y); y++) {
                vector = new Vector2(x, y)
                distance = vector.distance(pos)
                if(distance <= this.radius) {
                    lightLevel = this.light/(distance + 1)
                    color = findRGB(vector)
                    color = colorSub(color, [-lightLevel, -lightLevel, -lightLevel])
                    console.log(`pixel ${vector.string} is color ${color}`)
                    Engine.ctx.fillStyle = color
                    Engine.ctx.fillRect(vector.x, vector.y, vector.x + 1, vector.y + 1)
                }
            }
        }
    }
}