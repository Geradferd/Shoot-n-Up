class Vector2 {

    constructor(x, y) {
        this.x = x
        this.y = y
    }

    add(vector) {
        this.x += vector.x
        this.y += vector.y
    }
        
    minus(vector){
        return new Vector2(this.x - vector.x, this.y - vector.y)
    }

    divide(vector) {
        this.x /= vector.x
        this.y /= vector.y
    }

    multiply(vector) {
        this.x *= vector.x
        this.y *= vector.y
    }

    scale(scaler) {
        this.x = this.x * scaler
        this.y = this.y * scaler
    }

    clone() {
        return new Vector2(this.x, this.y)
    }

    orthogonal(){
        return new Vector2(this.y, -this.x)
    }

    dotProduct(vector) {
        return this.x * vector.x + this.y * vector.y
    }

    rotate(angle) {
        /* x' = xcos(angle) - ysin(angle)
           y' = ycos(angle) + xsin(angle) */
        print(`\nVector 2 roate function: `, false)
        let vector = new Vector2()
        const rads = getRads(angle)
        vector.x = this.x * Math.cos(rads) - this.y * Math.sin(rads)
        vector.y = this.y * Math.cos(rads) + this.x * Math.sin(rads)
        vector.x = -vector.x
        print(`rotated x = ${vector.x}`, true)
        print(`rotated y  = ${vector.y}\n`, true)
        return vector
    }
    
    rotate90() {
        return new Vector2(this.y, -this.x)
    }

    copy() {
        return new Vector2(this.x , this.y)
    }

    

    get Up() {
        return new Vector2(0, -1)
    }

    get Down() {
        return new Vector2(0, 1)
    }

    get Left() {
        return new Vector2(-1, 0)
    }

    get Right() {
        return new Vector2(1, 0)
    }

    get magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }

    normalize(){
        return new Vector2(this.x/this.magnitude, this.y/this.magnitude)
    }

    inside(poly){
        const targetPoint = this.copy()
        let inside = true
        let lines = []
        poly.push(poly[0])
        for(let i = 0; i < poly.length - 1; i++){
            lines.push(new Line(poly[i], poly[i + 1]))
        }
        for(const line of lines){
            const target = targetPoint.minus(line.pointA)
            const vector = line.pointB.minus(line.pointA)
            const orthoVector = vector.orthogonal()
            if(target.dotProduct(orthoVector) < 0){
                inside = false
            }
        }
        return inside
    }

    distance(vector) {
        return Math.sqrt(Math.pow((vector.x - this.x), 2) + Math.pow((vector.y - this.y), 2))
    }

    static average(vectorList){
        let avgVector = new Vector2(0, 0)
        for(const vector of vectorList) {
            avgVector.add(vector)
        }
        avgVector.scale(1/(vectorList.length))
        return avgVector
    }

    get string() {
        return `(${this.x}, ${this.y})`
    }

    inVectors(vectors) {
        for(const vector of vectors) {
            if(this.x == vector.x && this.y == vector.y) {
                return true
            }
        }
    }

    nearest(vectors) {
        let distance = this.distance[vectors[0]]
        let currentVector = vectors[0]
        for(const vector of vectors) {
            if(vector.distance(this) < distance) {
                distance = vector.distance(this)
                currentVector = vector
            }
        }
        return currentVector
    }
    
}