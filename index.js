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
        name: "projectDescription",
        message: "Please provide a description of the project"
    },
    {
        type: "input",
        name: "authorsName",
        message: "Please enter your name"
    },
    {
        type: "input",
        name: "authorsEmail",
        message: "Please enter your email address"
    },
    {
        type: "input",
        name: "authorsGithub",
        message: "Please enter your github username"
    },
    {
        type: "input",
        name: "installationProcess",
        message: "What is the installation process?"
    },
    {
        type: "input",
        name: "projectUsage",
        message: "How will this project be used?"
    },
    {
        type: "input",
        name: "projectCredits",
        message: "Who were the contributors to this project?"
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
    return fs.writeFile(fileName, data, (err)=>{
        if (err){
            console.log(err);

        } 
        console.log("FileGenerated");
    });
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
