const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const mangagerQuestions = require("./managerQuestions");
const engQuestions = require("./eng-questions");
const intQuestions = require("./int-questions");
// const intQuestions = 

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./htmlRenderer");

// empty array to push employee id numbers
let employeeIdArray = [];
let employeeList = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
async function engineerInfo() {
    try {
        const response = await inquirer.prompt(engQuestions)
        const engineer = new Manager(response.engineerName, response.engineerID, response.engineerEmail, response.engineerGitHub);
        employeeList.push(engineer)
        if (response.addEmployee === "Engineer") {
            engineerInfo()
        }
        else if (response.addEmployee === "Intern") {
            internInfo()
        }
        else {
            renderHtml()
        }
    }
    catch(err) {
        console.log(err)
    }
}
async function internInfo() {
    try {
        const response = await inquirer.prompt(intQuestions)
        const intern = new Intern(response.internName, response.internID, response.internEmail, response.internSchool);
        employeeList.push(intern)
        if (response.addEmployee === "Engineer") {
            engineerInfo()
        }
        else if (response.addEmployee === "Intern") {
            internInfo()
        }
        else {
            renderHtml()
        }
    }
    catch(err) {
        console.log(err)
    }
}

async function renderHtml() {
    try {
        console.log(employeeList)
    }
    catch(err) {
        console.log(err)
    }
}

async function askQuestions() {
    try {
        const response = await inquirer.prompt(mangagerQuestions)
        employeeIdArray.push(response.managerID)
        console.log(employeeIdArray);
        const manager = new Manager(response.managerName, response.managerID, response.managerEmail, response.managerNumber);
        employeeList.push(manager)
    if (response.addEmployee === "Engineer") {
        engineerInfo()
    }
    else if (response.addEmployee === "Intern") {
        internInfo()
    }
    
    }
    catch(err) {
        console.log(err)
    }
} 

askQuestions()
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
