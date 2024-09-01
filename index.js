const fs = require('fs');
const inquirer = require('inquirer');
const colors = require('colors');
const { clear } = require('console');
const validateColors = require('./lib/validateColors/validateColors');
const generateMarkup = require('./lib/generateSVG/generateSVG.js');

// logs launching for a second and then runs welcome tag with instructions to follow prompts.  setInterval and seTimeout set up to log at appropriate times
const launch = (() => {
    console.log(colors.green("launching..."));
    let count = 1;
    const timer = setInterval(function() {
        count--;   
        if (count === 0) {
            clearInterval(timer);
            clear();
        }
    }, 1000);
    setTimeout(() => {
        console.log(colors.green("Welcome to the SVG Logo Maker!"));
    }, 1500);
    setTimeout(() => {
        console.log(colors.green("Please follow prompts:"));
    }, 2000);
}) 

// user prompt questions
const prompts = [
    {
        name: "text",
        message: "Please enter logo text (3 char max):",
        type: "input",
        validate: (response) => {
            if (response.length > 3) {
                return "OOPS!  Please enter a text value with a max of 3 characters..."
            }
            return true;
        }
    },
    {
        name: "textColor",
        message: "Please enter a color for your text (can also use hex code):",
        type: "input",
        validate: ((response) => {
            if (!validateColors(response)) {
                return "Please input a valid color or hex code"
            }
            return true;
        })
    },
    {
        name: "shape",
        message: "Please select a shape:",
        type: "list",
        choices: [
            "circle",
            "square",
            "triangle"
        ]
    },
    {
        name: "shapeColor",
        message: "Please enter a color for your shape (can also use hex code):",
        type: "input",
        validate: ((response) => {
            if (!validateColors(response)) {
                return "Please input a valid color or hex code"
            }
            return true;
        })
    },
]

// called after prompt response is returned in init below.  Takes in response and sends to generateMarkup which checks on the user input for shape to display correct svg response.  Takes back that response from generateMarkup and inserts into svg template.  Writes a new file to the correct path with file name.  Checks if file name already exists and will increment index by one to create a new file outside of one that may already exist. 
const writeFile = ((path, baseFileName, response) => {
    const res = generateMarkup(response);
    
    const savedSVG = `
<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg"
>

${res}

</svg>
    `
    let fileIndex = 1;
    let filePath;
    do {
      filePath = `${path}/${baseFileName}_${fileIndex}.svg`;
      fileIndex++;
    } while (fs.existsSync(filePath));
    fs.writeFileSync(filePath, savedSVG);
    return filePath;
})

// initializes program
const init = (() => {
    launch();
    setTimeout(() => {
        inquirer.prompt(prompts)
        .then((response) => {
            validateColors(response);
            writeFile('././examples', 'svg', response);
            console.log(colors.green("SVG created!  Please check examples file to see your new SVG:)"));
        })
    }, 2300);
})

//calls init and runs program
init();