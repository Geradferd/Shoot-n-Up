class TutorialText extends GameObject {
    constructor() {
        super()
        let tutorialString = new Text()
        tutorialString.text = "General Info: For this game you will be aiming a gun to shoot enemies."
        tutorialString.text += "\nThe bullets reflect off of the sides of the screen. The player can be hit by the bullets"
        tutorialString.text += "\nThe player can take three hits. For every enemy killed the player gets a point."
        tutorialString.text += "\nWell the enemies are blue they are invincible."
        tutorialString.text += "\n\nControls: W - up, S - down, A - left, D - right"
        tutorialString.size = 17
        this.addComp(tutorialString, new Vector2(700, 600))
    }
}