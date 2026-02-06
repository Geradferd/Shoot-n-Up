class SceneManager{
    static currentScene
    static loadScene(scene) {
        SceneManager.currentScene = scene
    }

    static getActiveScene(scene) {
        return SceneManager.currentScene = new Time()
    }
}