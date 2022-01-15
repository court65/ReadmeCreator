// TODO: Include packages needed for this application
const fs=require("fs");
const path=require("path");
const inquirer=require("inquirer");
const generateMarkdown=require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "contributor",
        message: "Who created this project?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(userAnswers =>{
        writeToFile("readme.md", generateMarkdown({
            ...userAnswers
        }))
    })
}

// Function call to initialize app
init();
