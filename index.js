import inquirer from 'inquirer';
import { writeFile } from 'fs/promises';
import { Circle, Square, Triangle } from './lib/shapes.js';


const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters:',
            validate: (value) => value.length <=3 ? true : 'Please enter up to three characters.'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter text color (keyword or hex):'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['circle', 'square', 'triangle']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter shape color (keyword or hex):'
        }
    ]);
}

class Svg {
    constructor(){
        this.textElement = '',
        this.shapeElement = ''
    }
    render(){
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text, textColor){
        this.textElement =`<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
    }
    setShapeElement(shape){
        this.shapeElement = shape.render()
    }
}

const generateLogo = async ({text, textColor, shape, shapeColor}) => {
    let userShape;
    // uses the user input to render the shape requested or throws back an error
    if (shape === 'circle') {
        userShape = new Circle();
        console.log('User Shape:', userShape);
    } else if (shape === 'square') {
        userShape = new Square();
        console.log('User Shape:', userShape);
    } else if (shape === 'triangle') {
        userShape = new Triangle();
        console.log('User Shape:', userShape);
    } else {
        console.log('Invalid Shape');
        return;
    }
    // uses user input to set color of the shape
    userShape.setColor(shapeColor);
    const svg = new Svg();
    svg.setShapeElement(userShape);
    svg.setTextElement(text, textColor);

    const svgString = svg.render();

    writeFile('./dist/logo.svg', svgString)
        .then(() => console.log('Generated logo.svg'))
        .catch((err) => console.error(err));

}

const init = () => {
    promptUser()
        .then(async (answers) => {
            await generateLogo(answers);
        })
        .catch((err) => console.error(err));
}

init();