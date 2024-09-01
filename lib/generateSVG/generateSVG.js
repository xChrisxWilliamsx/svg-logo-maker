const { Circle, Square, Triangle } = require('../shapes/shapes.js');
// const writeFile = require('../writeFileSVG/writeFileSVG.js');

// takes in user responses and finds the correct shape then calls the shape function to return the svg markup
const generateMarkup = ((response) => {
    switch (response.shape) {
        case 'circle':
            const createdCircle = new Circle(response.shapeColor, response.textColor, response.text);
            return createdCircle;
            break;

        case 'square':
            const createdSquare = new Square(response.shapeColor, response.textColor, response.text);
            return createdSquare;
            break;
        
        case 'triangle':
            const createdTriangle = new Triangle(response.shapeColor, response.textColor, response.text);
            return createdTriangle;
            break;

        default:
            break;
    }
})

module.exports = generateMarkup;