class Text extends Component {
    color = "purple"
    text = "No Text Found"
    style = "Comic Sans"
    size = 24

    start() {
        this.font = `${this.size}px ${this.style}`
    }

    draw() {
        Engine.ctx.fillStyle = this.color
        Engine.ctx.font = this.font
        const pos = new Vector2(this.gameObject.transform.position.x, this.gameObject.transform.position.y)
        Engine.ctx.fillText(this.text, pos.x, pos.y)
    }

    update() {

    }
}