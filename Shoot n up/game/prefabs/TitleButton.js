class TitleButton extends GameObject {
    constructor() {
        super()
        const s = 4
        this.addComp(new Triangle(), {points : vectorList([[-20*s, 10*s], [20*s, 10*s], [20*s, -10*s], [-20*s, -10*s]]), color : "purple"})
        this.addComp(new ButtonController(), {funct : SceneManager.loadScene, arg1 : new TitleScene()})
        let buttonText = new Text()
        buttonText.text = "Title Screen"
        this.addComp(buttonText)
    }
}