const fs = require('fs');

test('Save user input to SVG file', () => {
    // Run your application code here to generate the SVG content and save it to a file

    // Read the contents of the saved SVG file
    const svgContent = fs.readFileSync('logo.svg', 'utf8');

    // Assert the expected content
    expect(svgContent).toContain('Circle');
    expect(svgContent).toContain('red');
    expect(svgContent).toContain('Hello, World!');
});