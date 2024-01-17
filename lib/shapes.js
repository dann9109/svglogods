class Shape {
    constructor() {
        this.color = '';
        this.text = '';
        this.shapeColor = '';
        this.shape = '';
    }
}

class Circle extends Shape {
    constructor() {
        super();
        this.shape = 'Circle';
    }

    render() {
        return `<circle cx="50" cy="50" r="50" fill="${this.shapeColor}" />`;
    }
}

class Square extends Shape {
    constructor() {
        super();
        this.shape = 'Square';
    }

    render() {
        return `<rect x="25" y="25" width="50" height="50" fill="${this.shapeColor}" />`;
    }
}

class Triangle extends Shape {
    constructor() {
        super();
        this.shape = 'Triangle';
    }

    render() {
        return `<polygon points="50, 0 100, 100 0, 100" fill="${this.shapeColor}" />`;
    }
}

module.exports = { Circle, Square, Triangle }