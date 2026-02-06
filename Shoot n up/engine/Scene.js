class Scene {

    constructor() {
        this.gameObjects = []
        this.globalLight = [0, 0, 0]
    }

    start() {
        for (const gameObject of this.gameObjects) {
            gameObject.started = 1
            gameObject.start()
        }
    }

    update() {
        for (const gameObject of this.gameObjects) {
            if(gameObject.started == 0) {
                gameObject.started = 1
                gameObject.start()
            }
            if(gameObject.delete == 0) {
                gameObject.update()
            }
        }

        this.gameObjects = this.gameObjects.filter(obj => obj.delete == 0)
    }

    draw() {
        let objs = this.gameObjects
        let draws = [] /* put objects inorder of layer value, higher to lower layer */
        while (objs.length > 0) {
            let high = objs[0]
            for (const obj of objs) {
                if (obj.layer > high.layer) {
                    high = obj
                }
            }
            print(`high = ${high}`,false)
            draws.push(high)
            objs = objs.filter(o => o != high)
            print(`objs.length is ${objs.length}`,false)
        }

        for (const gameObject of draws) {
            gameObject.draw()
        }
        print(`ended drawing - ${this.gameObjects}`,false)
    }

    // Check if something should be deleted during update

    instantiate(object, position, scale, rotation) {
        
        if(position) {
            object.transform.position = position
        }
        if(scale) {
            object.transform.scale = scale
        }
        if(rotation) {
            object.transform.rotation = rotation
        }

        object.scene = this

        this.gameObjects.push(object)

        return object

    }

    // Collison Detection
    

    getObject(type) {
        return this.gameObjects.find(go => go instanceof type)
    }

    restart() {
        for (let object of this.gameObjects) {
            object.delete = 1
        }
        this.constructor()
    }

}

function instantiate(gameObject, position) {
    SceneManager.getActiveScene().instantiate(gameObject, position)
}