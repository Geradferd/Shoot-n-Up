class ArenaButton extends GameObject {
    constructor() {
        super("Arena Button")
        const s = 5 /* size */
        this.addComp(new Triangle(), {points : vectorList([[-20*s, 10*s], [20*s, 10*s], [20*s, -10*s], [-20*s, -10*s]]), color : "purple"})
        this.addComp(new ButtonController(), {funct : SceneManager.loadScene, arg1 : new ArenaScene()})
        this.addComp(new Text(), {text : "START", color : "red"})
    }
}