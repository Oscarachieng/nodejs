let rect = require('./rectangle')

const solveRect = (m, n) => {
    rect(m, n, (err, rectangle) => {
        if (err) {
            console.log(err)
            console.log(err.message)
        } else {
            console.log("Area is " + rectangle.area(m,n))
            console.log("Perimeter is "+ rectangle.perimeter(m,n))
        }
        
    })
    console.log("After the rect() execution")
}


solveRect(3, 5)
solveRect(-1, 3)
solveRect(200,4)