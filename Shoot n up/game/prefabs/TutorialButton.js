class TutorialButton extends GameObject {
    constructor() {
        super("Tutorial Button")
        const s = 5 /* size */
        this.addComp(new Triangle(), {points : vectorList([[-20*s, 10*s], [20*s, 10*s], [20*s, -10*s], [-20*s, -10*s]]), color : "purple"})
        this.addComp(new ButtonController(), {funct : SceneManager.loadScene, arg1 : new Tutorial()})*
        this.addComp(new Text(), {text : "Tutorial", color : "orange"})
    }
}