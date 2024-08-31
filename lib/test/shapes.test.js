const { Circle, Square, Triangle } = require('../shapes/shapes.js');

// test return value of Circle with user input
test('This should return Circle value', () => {
    expect(new Circle('blue', 'white', "SVG")).toStrictEqual([`
<circle cx="150" cy="100" r="80" fill="blue"/>
<text x="150" y="120" font-size="60" text-anchor="middle" fill="white">SVG</text>`])
});

// test return value of Square with user input
test('This should return Square value', () => {
    expect(new Square('red', 'black', "GVS")).toStrictEqual([`
<rect width="20%" height="20%" x="75" y="50" fill="red"/>
<text x="150" y="140" font-size="60" text-anchor="middle" fill="black">GVS</text>`])
});

// test return value of Triangle with user input
test('This should return Triangle value', () => {
    expect(new Triangle('black', 'yellow', "VLC")).toStrictEqual([`
<polygon points="100,0 200,190 0,190" fill="black"/>
<text x="100" y="130" font-size="45" text-anchor="middle" fill="yellow">VLC</text>`])
});