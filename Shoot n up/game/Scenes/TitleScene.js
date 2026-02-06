class TitleScene extends Scene{
   constructor() {
        super()
        this.globalLight = [-20, -20, 0]
        let camera = new Camera()
        this.instantiate(new Camera())
        this.instantiate(new Title(), new Vector2(400, 100))
        this.instantiate(new ArenaButton(), new Vector2(700, 250))
        /*this.instantiate(new TutorialButton(), new Vector2(900, 450))*/
   }
}