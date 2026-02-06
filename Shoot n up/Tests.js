function functionTests() {

    vector = new Vector2(0, 0)
    points = [new Vector2(-10, 2), new Vector2(10, 2), new Vector2(0, -8)]
    if (vector.inside(points)) {
        console.log(`(${vector.x}, ${vector.y}) is inside the test triangle 1`)
    }
    else {
        console.log(`(${vector.x}, ${vector.y}) is not inside the test triangle 1`)
        throw new Error("point not found in triangle")
    }
    const line = [new Vector2(0,0), new Vector2(2, 5)]
    console.log("printing cords in line")
    for(const cord of perimeter(line)) {
        console.log(`cord: ${cord.string}`)
    }

    vector = new Vector2(0, 0)
    points = [new Vector2(-10, -1), new Vector2(10, -1), new Vector2(0, -11)]
    if (!vector.inside(points)) {
        console.log(`(${vector.x}, ${vector.y}) is not inside the test triangle 2`)
    }
    else {
        console.log(`(${vector.x}, ${vector.y}) is found to be inside the test triangle 2`)
        throw new Error("point found in triangle")
    }

    vector = new Vector2(10, 10)
    points = [new Vector2(100, 100), new Vector2(110, 100), new Vector2(110, 110), new Vector2(100, 110)]
    if (!vector.inside(points)) {
        console.log(`(${vector.x}, ${vector.y}) is not inside the test triangle 3`)
    }
    else {
        console.log(`(${vector.x}, ${vector.y}) is found to be inside the test triangle 3`)
        throw new Error("point found in triangle")
    }
}