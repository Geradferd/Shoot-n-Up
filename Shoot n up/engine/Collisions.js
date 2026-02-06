class Collisions{
    static collision(objectA, objectB) {
        const pointsA = objectA.getComp(Triangle).pointsA
        const pointsB = objectB.getComp(Triangle).pointsB

        const worldPointsA = pointsA.map(p=>p.scale(arguments.transform.position))
        const worldPointsB = pointsB.map(p=>p.scale(arguments.transform.position))

        const lines = []

        
    }
}
