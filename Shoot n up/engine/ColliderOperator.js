class ColliderOperator extends GameObject {
    constructor() {
        super()
        this.colliders = []
        this.objsCollided = []
        this.addComp(new ColliderController())
    }

    checkCollison(object, tag){
        for (const objPair of this.objsCollided) {
            if ((objPair[0] == object && objPair[1].tag == tag) || (objPair[1] == object && objPair[0].tag == tag)) {
                return true
            }
        }
        return false
    }
}