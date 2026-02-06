class Tutorial extends Scene {
    constructor() {
        super()
        this.instantiate(new TutorialText(), new Vector2(600, 100))
        this.instantiate(new TitleButton(), new Vector2(600, 1000))
    }
}