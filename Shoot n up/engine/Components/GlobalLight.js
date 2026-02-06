class GlobalLight extends Component {
    lighting = 0

    draw() {
        let x = 0
        let y = 0
        let color = "purple"
        let screen = Engine.ctx.getImageData(0, 0, Engine.canvas.width, Engine.canvas.height)
        let pixels = screen.data
        let index = 0
        while(x <= Engine.canvas.width) {
            y = 0
            while(y <= Engine.canvas.height) {
                index = (y * Engine.canvas.width + x) * 4
                color = findColor(pixels, index)
                for(let i = 0; i < color.length; i++) {
                    color[i] -= this.lighting
                    if (color[i] < 0) {
                        color[i] = 0
                    }
                }
                pixels[index] = color[0]
                pixels[index + 1] = color[1]
                pixels[index + 2] = color[2]
            }
        }
    }

}