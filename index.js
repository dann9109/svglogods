const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes.js')
inquirer
    .prompt([
        {
            type: 'input',
            name: 'userColor',
            message: 'Enter a color:',
        },
        {
            type: 'input',
            name: 'userText',
            message: 'Enter some text:',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a text color'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape:',
            choices: ['Circle', 'Square', 'Triangle'],
        },
    ])
    .then((answers) => {
        const userColor = answers.userColor;
        const userText = answers.userText;
        const shape = answers.shape;
        const textColor = answers.textColor;

        let newshape;

        if (shape === 'Circle') {
            newshape = new Circle();
        }
        else if (shape === 'Square') {
            newshape = new Square();
        }
        else if (shape === 'Triangle') {
            newshape = new Triangle();
        }

        newshape.setColor(userColor)

        // Handle the user's selected shape and variables
        console.log('Selected shape:', shape);
        console.log('User color:', userColor);
        console.log('User text:', userText);
        console.log('Text color:', textColor);
        //<circle cx="50" cy="50" r="50" fill="${userColor}" /
        const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
      >
      ${newshape.render()}
      <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" fill="${textColor}">${userText}</text>
    </svg>`;

        fs.writeFile('logo.svg', svgContent, (err) => {
            if (err) throw err;
            console.log('Logo saved as logo.svg');
        });
    });