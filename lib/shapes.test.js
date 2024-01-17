const fs = require('fs');
const { Circle, Triangle, Square } = require("./shapes")

test('Renders Circle Tag', () => {
    // Run your application code here to generate the SVG content and save it to a file
    const expectedOutput = `<circle cx="50" cy="50" r="50" fill="blue" />`

    const newCircle = new Circle()
    newCircle.setColor("blue")
    const newTag = newCircle.render()

    expect(newTag).toEqual(expectedOutput)
    // Read the contents of the saved SVG file
    //const svgContent = fs.readFileSync('logo.svg', 'utf8');

    // Assert the expected content
    //expect(svgContent).toContain('Circle');
    //expect(svgContent).toContain('red');
    //expect(svgContent).toContain('Hello, World!');
});

test('Renders Square Tag', () => {
    // Run your application code here to generate the SVG content and save it to a file
    const expectedOutput = `<rect x="25" y="25" width="50" height="50" fill="red" />`

    const newSquare = new Square()
    newSquare.setColor("red")
    const newTag = newSquare.render()

    expect(newTag).toEqual(expectedOutput)
    // Read the contents of the saved SVG file
    //const svgContent = fs.readFileSync('logo.svg', 'utf8');

    // Assert the expected content
    //expect(svgContent).toContain('Circle');
    //expect(svgContent).toContain('red');
    //expect(svgContent).toContain('Hello, World!');
});


test('Renders Triangle Tag', () => {
    // Run your application code here to generate the SVG content and save it to a file
    const expectedOutput = `<polygon points="50, 0 100, 100 0, 100" fill="green" />`

    const newTriangle = new Triangle()
    newTriangle.setColor("green")
    const newTag = newTriangle.render()

    expect(newTag).toEqual(expectedOutput)
    // Read the contents of the saved SVG file
    //const svgContent = fs.readFileSync('logo.svg', 'utf8');

    // Assert the expected content
    //expect(svgContent).toContain('Circle');
    //expect(svgContent).toContain('red');
    //expect(svgContent).toContain('Hello, World!');
});