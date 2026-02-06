class Input{
    static keysDown = []
    static mouseButtonsDown = []
    static mousePos = new Vector2(0, 0)
    static lastMousePos = new Vector2(0, 0)
    static mouseDiff = new Vector2(0, 0)
    
    constructor() {

    }

    static keyDown(event) {
        if (!(Input.keysDown.includes(event.code))){
            Input.keysDown.push(event.code)
        }
    }

    static keyUp(event) {
        Input.keysDown = Input.keysDown.filter(k => k != event.code)
    }

    static keyClick(event) {

    }

    static mouseDown(event) {
        /*event.button is the button pressed for the mouse*/
        console.log(`button pressed: ${event.button}`)
        if(!(Input.mouseButtonsDown.includes(event.button))) {
            Input.mouseButtonsDown.push(event.button)
        }
    }

    static mouseUp(event) {
        /*getting a array that does not include event.button*/
        Input.mouseButtonsDown = Input.mouseButtonsDown.filter(m => m != event.button)
    }

    static mouseMove(event) {
        print("\nfunction mouseMove: ", false)
        Input.lastMousePos.x = Input.mousePos.x
        Input.lastMousePos.y = Input.mousePos.y
        Input.mousePos.x = event.clientX
        Input.mousePos.y = event.clientY
        Input.mouseDiff.x = Input.mousePos.x - Input.lastMousePos.x
        Input.mouseDiff.y = Input.mousePos.y - Input.lastMousePos.y
        print(`Input.mousePos = ${Input.mousePos}`, false)
        print(`event.clientX = ${event.clientX}`, false)
    }
}