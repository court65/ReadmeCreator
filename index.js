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
    },
    {
        type: "list",
        name: "license",
        message: "Choose which license the application is covered under for this project?",
        choices: ["MIT", "APACHE", "GPL 3.0", "None" ]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), JSON.parse(data).toStringify());
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(userAnswers =>{
        writeToFile("newReadme.md", generateMarkdown({
            ...userAnswers
        }))
        console.log("creating your readMe")
    })
}

// Function call to initialize app
init();
