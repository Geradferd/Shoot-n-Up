class ButtonController extends Component {
    condition = true
    funct = console.log
    arg1 = "!!! Button does nothing !!!"
    update() {
        if(Input.mouseButtonsDown.includes(0) && this.condition) {
            console.log("Left mouse button clicked.")
            console.log(`object's points:  ${this.gameObject.transform.points}`)
            console.log(`${this.gameObject.transform.points[0].x}`)
            printPoints(this.gameObject.transform.points)
            this.condition = false
            if(Input.mousePos.inside(this.gameObject.transform.points)) {
                console.log("button pressed")
                this.funct(this.arg1)
            }
        }
        else if (!Input.mouseButtonsDown.includes(0)) {
            this.condition = true
        }
    }
}