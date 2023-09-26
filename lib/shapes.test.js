import {Circle, Square, Triangle} from './shapes.js';

describe('Circle', () => {
    test('should pass if render() is called', () => {
        const shape = new Circle();
        shape.setColor("cyan");
        expect(shape.render()).toEqual('<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="cyan" />');
    });
  });

describe('Square', () => {
    test('should pass if render() is called', () => {
        const shape = new Square();
        shape.setColor("green");
        expect(shape.render()).toEqual('<rect x="50" height="200" width="200" fill="green" />');
    });
  });

describe('Triangle', () => {
    test('should pass if render() is called', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
  });