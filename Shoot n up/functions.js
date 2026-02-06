function angle(origin, target) {
    if(origin) {
    ("\nfunction angle: ", false)
    ang = (Math.atan2(target.x - origin.x, target.y - origin.y) * 180) / Math.PI
    return ang
    }
}

function getRads(angle) {
    return angle * (Math.PI / 180)
}

function randomVector(minX, maxX, minY, maxY) {
    
    /*function to return a random vector*/
    let vector = new Vector2()
    vector.x = (Math.random() * (maxX - minX)) + minX
    vector.y = (Math.random() * (maxY - minY)) + minY
    
    return vector
    
}

function randomPercent() {
    const percent = Math.round(Math.random() * 100)
    console.log(`percent: ${percent}`)
    return percent
}

function randomElement(list) {
    const element =  list[Math.floor(Math.random() * (list.length))]
    console.log(`the random element's value is ${element}`)
    return element
}

function clockWise(points) {
    let leftIndex = 0
    let index = 0
    let clockWisePoints = []
    let condition = 2
    let direction = "unkown"

    for(point in points) {
        if(point.x < points[leftIndex].x) {
            points[leftIndex].x = index
        }
        index++
    }

    /*top left = 0*/
    condition = 0
    for(point in points) {
        if (point.y > points[leftIndex].y) {
            condition = 2
        }
    }

    /*bottom left = 1*/
    condition = 1
    for(point in points) {
        if (point.y < points[leftIndext].y) {
            condition = 2
        }
    }

    /*middle left = 2*/

    if (condition = 0) {
        if(points[leftIndex]+1) {

        }
    }
    else if (condition = 1) {
        
    }
    else {

    }

    

}

function getPosition(magnitude, angle) {
    let vector = new Vector2()
    vector.x = magnitude * Math.sin(angle)
    vector.y = magnitude * Math.cos(angle)
    return vector
}

function print(string, show = true) {
    if(show) {
        
    }
}

function range(min, max) {
    let list = []
    while(min < max) {
        list.push(min)
        min ++
    }
    return list
}

function sameList(list1, list2) {
    condition = true
    if(list1.length == list2.length) {
        for(let i = 0; i < list1.length; i++) {
            if(list1[i] != list2[i]) {
                condition = false
            }
        }
    }
    else {
        condition = false
    }
    return condition
}

function inList(list, wholeList) {
    if (typeof(list) == "object") {
        for(const value of wholeList) {
            if (typeof(value) == "object") {
                if (sameList(value, list)) {
                    return true
                }
            }
        }
        return false
    }
    else {
        throw new TypeError("list argument must be of type object")
    }
}

function printPoints(points) {
    console.log(`points length = ${points.length}`)
    console.log("Points: ")
    for(const point of points) {
        console.log(`${point.string}`)
    }
}

function vectorList(points) {
    let vectors = []
    for (point of points) {
        vectors.push(new Vector2(point[0], point[1]))
    }
    return vectors
}

function reversedList(list) {
    let newList = []
    let i = list.length-1
    while(i >= 0) {
        newList.push(list[i])
        i -= 1
    }
    return newList
}

function reversedLists(lists) {
    let newLists = []
    for(const list of lists) {
        newLists.push(reversedList(list))
    }
    return newLists
}

function uniqueLists(lists) {
    let newLists = []
    for(const list of lists) {
        if(!inList(list, newLists)) {
            newLists.push(list)
        }
    }
    return newLists
}

function collidablePairs(pairs) {
    newPairs = uniqueLists(pairs)
    newPairs.push(reversedLists(newPairs))
    return newPairs
}

function colorSub(rgb1, rgb2) {
    let rgb = [0, 0, 0]
    let i = 0
    while(i < rgb.length) {
        rgb[i] = rgb1[i] - rgb2[i]
        if(rgb[i] < 0) {
            rgb[i] = 0
        }
        i += 1
    }
    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
}

function colorAdd(rgb1, rgb2) {
    let rgb = [0, 0, 0]
    let i = 0
    while(i < rgb.length) {
        rgb[i] = rgb1[i] + rgb2[i]
        if(rgb[i] < 0) {
            rgb[i] = 0
        }
        i += 1
    }
    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
}

function findRGB(cord) {
    const color = Engine.ctx.getImageData(cord.x, cord.y, 1, 1).data
    const red = color[0]
    const green = color[1]
    const blue = color[2]
    const rgb = [red, green, blue]
    return rgb
}

function collided(poly1, poly2) {
    for (vector of poly1) {
        if(vector.inside(poly2)) {
            return true
        }
    }
    for (vector of poly2) {
        if(vector.inside(poly1)) {
            return true
        }
    }
    return false
}

function perimeter(poly, interval = 1) {
    let positions = []
    for(let pos of poly) {
        positions.push(pos.copy())
    }
    positions.push(poly[0])
    let allPositions = []
    let nextEdge = new Vector2(0, 0)
    let distance = 0
    let d = 0
    let pos = new Vector2(0, 0)
    for(let edge = 0; edge < positions.length-2; edge++) {
        
        pos = positions[edge]
        nextEdge = positions[edge+1]
        distance = Math.ceil(pos.distance(nextEdge))
        d = 0
        while(d < distance) {
            if(!pos.inVectors(allPositions)) {
                allPositions.push(new Vector2(Math.ceil(pos.x), Math.ceil(pos.y)))
            }
            d += interval
            pos.x = pos.x + (d/distance) * (nextEdge.x - pos.x)
            pos.y = pos.y + (d/distance) * (nextEdge.y - pos.y)
        }
    }
    return allPositions
}

function printVectors(vectors) {
    console.log("Vectors:")
    for(const vector of vectors) {
        console.log(vector.string)
    }
}
