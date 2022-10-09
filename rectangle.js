module.exports = (x, y, callback) => {
    if (x < 0 || y < 0) {
        setTimeout(() => {
           callback(new Error("The X and Y must be greater than Zero: X is "+ x + "and y is "+ y),null) 
        }, 3000);
    } else {
        setTimeout(() => {
            callback(null, {
                perimeter: (x, y) => 2 * (x + y),
                area: (x,y) => x*y
            })
        }, 3000);
    }
}