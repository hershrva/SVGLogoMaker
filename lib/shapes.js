class Shape {
    constructor(color) {
        this.color = '';
    }
    setColor(color) {
        this.color = color;
    }
}    

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="150" r="80" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="40" y="40" width="220" height="220" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
    }
}


module.exports = { Circle, Square, Triangle };