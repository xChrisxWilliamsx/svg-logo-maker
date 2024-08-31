const fs = require('fs');
const inquirer = require('inquirer');
const colors = require('colors');
const { clear } = require('console');
const validateColors = require('./lib/validateColors/validateColors');

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

// initializes program
const init = (() => {
    launch();
    setTimeout(() => {
        inquirer.prompt(prompts)
        .then((response) => {
            console.log(colors.green(response));
            validateColors(response);
        })
    }, 2300);
})

//calls init and runs program
init();