class GameObject {

    constructor(tag = "None"){
        this.comps = []
        this.forDelete
        this.started = 0
        this.delete = 0
        this.layer = 1
        this.speed = 1
        this.UI = false
        this.tag = tag
        this.rigidBody = false
        this.parent = null
        this.collidable = true
        this.children = []

        /* can include any comp you want for
           all objects */
        this.addComp(new Transform())
        print(`new Transform(): ${new Transform()}`, false)
    }

    start() {
        for (const component of this.comps) {
            component.start()
        }
        
    }
    update() {
        for (const component of this.comps) {
            component.update()
        }
    }
    draw() {
        for (const component of this.comps) {
            component.draw()
        }
    }

    addComp(component, vars) {
        /* comps to not have parameter fields */
        print(`\n\n\n\n\n\nadding component ${component}\n\n\n\n\n\n\n`, false)
        this.comps.push(component)
        component.gameObject = this
        Object.assign(component, vars)
    }

    getComp(type) {
        return this.comps.find(go => go instanceof type)
    }

    get transform() {
        print("\nget transforn function: ", false)
        return this.comps[0]
        print("position: ${this.comps[0].position", false)
    }
}

