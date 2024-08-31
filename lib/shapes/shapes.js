// template for user input to fill params
class Shape {
    constructor(shapeColor, textColor, text) {
        this.shapeColor = shapeColor,
        this.textColor = textColor,
        this.text = text
    }
}

// returns Circle svg markup with user input
class Circle extends Shape {
    constructor(shapeColor, textColor, text) {
        super(shapeColor, textColor, text);
        return [`
<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>
<text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`]
    }
}

// returns Square svg markup with user input
class Square extends Shape {
    constructor(shapeColor, textColor, text) {
        super(shapeColor, textColor, text);
        return [`
<rect width="20%" height="20%" x="75" y="50" fill="${this.shapeColor}"/>
<text x="150" y="140" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`]
    }
}

// returns Triangle svg markup with user input
class Triangle extends Shape {
    constructor(shapeColor, textColor, text) {
        super(shapeColor, textColor, text);
        return [`
<polygon points="100,0 200,190 0,190" fill="${this.shapeColor}"/>
<text x="100" y="130" font-size="45" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`]
    }
}

module.exports = { Shape, Circle, Square, Triangle };