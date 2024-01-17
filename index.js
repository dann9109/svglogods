const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./shapes.js')
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

        // Handle the user's selected shape and variables
        console.log('Selected shape:', shape);
        console.log('User color:', userColor);
        console.log('User text:', userText);

        const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
      <circle cx="50" cy="50" r="50" fill="${userColor}" />
      <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle">${userText}</text>
    </svg>`;

        fs.writeFile('logo.svg', svgContent, (err) => {
            if (err) throw err;
            console.log('Logo saved as logo.svg');
        });
    });