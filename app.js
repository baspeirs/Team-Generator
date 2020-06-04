const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const mangagerQuestions = require("./managerQuestions");
const engQuestions = require("./eng-questions");
const intQuestions = require("./int-questions");
const util = require("util")

const asyncWriteFile = util.promisify(fs.writeFile)

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./htmlRenderer");

// empty array to push employee id numbers
let employeeIdArray = [];
let employees = [];
// let managerArray = [];
// let engineerArray = [];
// let internArray = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
async function engineerInfo() {
    try {
        const response = await inquirer.prompt(engQuestions)
        const engineer = new Engineer(response.engineerName, response.engineerID, response.engineerEmail, response.engineerGitHub);
        employees.push(engineer)
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
        employees.push(intern)
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
        const newHtml = await render(employees);
        await asyncWriteFile(outputPath, newHtml)
    }
    catch(err) {
        console.log(err)
    }
}

async function askQuestions() {
    try {
        const response = await inquirer.prompt(mangagerQuestions)
        // const { managerName, managerID,  }
        employeeIdArray.push(response.managerID)
        const manager = new Manager(response.managerName, response.managerID, response.managerEmail, response.managerNumber);
        employees.push(manager)
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
