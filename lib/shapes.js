class Shape {
    constructor(color) {
        this.color = '';
    }
    setColor(color) {
        this.color = color;
    }
}    

class Circle extends Shape {
    render(text, textColor) {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render(text, textColor) {
        return `<rect x="50" height="200" width="200" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    render(text, textColor) {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

export {Circle, Square, Triangle};