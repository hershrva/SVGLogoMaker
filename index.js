const { Circle, Square, Triangle } = require('./lib/shapes.js');
const inquirer = require('inquirer');


async function generateLogo() {
    const userInput = await inquirer.prompt([
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
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter shape color (keyword or hex):'
        }
    ]);

    // Create an SVG document
    const svg = svgwrite.createSvg({ width: 300, height: 200 });

    // Add the chosen shape based on user input
    switch (userInput.shape) {
        case 'circle':
            svg.circle(150, 100, 50, { fill: userInput.shapeColor });
            break;
        case 'triangle':
            svg.polygon([[150, 50], [100, 150], [200, 150]], { fill: userInput.shapeColor });
            break;
        case 'square':
            svg.rect(100, 50, 100, 100, { fill: userInput.shapeColor });
            break;
    }

    // Add text based on user input
    svg.text(150, 100, userInput.text, { fill: userInput.textColor });

    // Save the SVG file
    fs.writeFileSync('logo.svg', svg.toString());

    console.log('Generated logo.svg');
}