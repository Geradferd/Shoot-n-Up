class RigidBody extends Component {
    start() {
        this.speed = 1
        this.velocity = Vector2.zero
        this.accelerater = Vector2.zero
        this.gravity = Vector2.zero
        this.collided = false
        
        let colliders = this.gameObject.scene.getObject(ColliderOperator).getComp(ColliderController).colliders
        for(let object of this.gameObject.scene.gameObjects) {
            if(object.rigidBody && !(inList([this.gameObject.tag, object.tag], colliders))) {
                colliders.push([this.gameObject.tag, object.tag])
            }
        }
        colliders = uniqueLists(colliders)
        console.log(`colliders : ${colliders}`)
    }

    update(){
        let condition = true
        let nearestVect = new Vector2(0, 0)
        let otherObject = this.gameObject
        let otherObjPer = new Vector2(0, 0)
        let dist = new Vector2(0, 0)
        let objPoints = []
        for(let pair of this.gameObject.scene.getObject(ColliderOperator).objsCollided) {
            if((pair[0] == this.gameObject || pair[1] == this.gameObject) && pair[0] != pair[1]) {
                if(pair[0] == this.gameObject) {
                    otherObject = pair[1]
                }
                else {
                    otherObject = pair[0]
                }
                console.log(otherObject.tag)
                objPoints = this.gameObject.getComp(Triangle).points
                console.log(`len(${otherObject.getComp(Triangle).points.length})`)
                otherObjPer = perimeter(otherObject.getComp(Triangle).points)
                console.log("otherObject points")
                printVectors(otherObject.getComp(Triangle).points)
                console.log("object points")
                printVectors(objPoints)
                for(let v = 0; v < objPoints.length; v++) {
                    if(objPoints[v].inside(otherObjPer)){
                        nearestVect = objPoints[v].nearest(otherObjPer)
                        console.log(`nearestVect:${nearestVect.string}, objPoints[v]: ${objPoints[v].string}`)
                        dist = objPoints[v].minus(nearestVect)
                        console.log(`dist: ${dist.string}`)
                        for(let p = 0; p < objPoints.length; p++) {
                            objPoints[p].add(dist)
                        }
                        condition = true
                        break
                    }
                }
            }
        }
        if (condition) {
            this.collided = true
            this.condition = false
        }
        else {
            this.collided = false
        }
    }
}
