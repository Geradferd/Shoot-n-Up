class ColliderController extends Component {
    start() {
        this.colliders = uniqueLists(this.gameObject.colliders)
        console.log(`\ncollider pairs: ${this.colliders}\n`)
        this.objsCollided = []
    }

    update() {
        const objects = this.gameObject.scene.gameObjects
        this.objsCollided = []
        for (let i = 0; i < objects.length; i++) {
            for (let j = i + 1; j < objects.length; j++) {
                const obj1 = objects[i]
                const obj2 = objects[j]
                if (inList([obj1.tag, obj2.tag], this.colliders) || inList([obj2.tag, obj1.tag], this.colliders)) {

                    let condition = true
                    let i = 0
                    let point = new Vector2()
                    let triPoints = perimeter(obj1.getComp(Triangle).points, 3)
                    triPoints = triPoints.map(p => new Vector2(p.x + obj1.transform.position.x, p.y + obj1.transform.position.y))
                    let polyPoints = obj2.getComp(Triangle).points
                    polyPoints = polyPoints.map(p => new Vector2(p.x + obj2.transform.position.x, p.y + obj2.transform.position.y))

                    while (condition) {
                        point = triPoints[i]
                        if (point.inside(polyPoints) && obj1.collidable == true && obj2.collidable == true){
                            this.objsCollided.push([obj1, obj2])
                            condition = false
                        }
                        i ++
                        if(i >= triPoints.length) {
                            condition = false
                        }
                    }
                }
            }
        }
        this.gameObject.objsCollided = this.objsCollided
    }
}
