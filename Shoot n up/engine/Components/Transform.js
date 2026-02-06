class Transform extends Component{
        position = new Vector2(0, 0)
        rotation = 0
        scale = 1
        parent = undefined
        points = new Vector2(0, 0)
        lastPosition = new Vector2(0, 0)

    start() {
        this.rotPosition = this.position
        this.minX
        this.minY
        this.maxY
        this.maxX
}

    update() {
        this.lastPosition = this.position
        if(this.gameObject.getComp(Triangle)){
            this.minX += this.position.x
            this.minY += this.position.y
            this.maxX += this.position.x
            this.maxY += this.position.y
        }

    }

    setParent(parentTransform){
        this.parent = parentTransform
    }

    getLocalMatrix(){
        const matrix = new DOMMatrix()
        matrix.translateSelf(this.position.x, this.position.y)
        matrix.scaleSelf(this.scale.x, this.scale.y)
        matrix.rotateSelf(this.rotation * (180/Math.PI))
        return matrix
    }

    getWorldMatrix(){
        if(!this.parent) return this.getLocalMatrix()
        return this.parent.getWorldMatrix().multiply(this.getLocalMatrix())
    }
    
}