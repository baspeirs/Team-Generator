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
// used to write to a file later in the program
const asyncWriteFile = util.promisify(fs.writeFile)
// set the path for the file we will write to
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
// renders the object info to html format
const render = require("./htmlRenderer");

// empty array to push employee id numbers
let employeeIdArray = [];
// empty arry to push employee objects
let employees = [];
// blank variables to store response and new employee information
let response;
let addEmployee;

// function to take in an object created from inquirer and apply the data to classes
async function employeeInfo(arr) {
    try {
        const { name, id, email } = response
        if (response.number) {
            const manager = new Manager(name, id, email, response.number);
            employees.push(manager)
        } 
        else if (response.github) {
            const engineer = new Engineer(name, id, email, response.github);
            employees.push(engineer);
        }
        else {
            const intern = new Intern(name, id, email, response.school);
            employees.push(intern);
        }
        employeeIdArray.push(id);
        makeEmployee();
    }
    catch(err) {
        console.log(err)
    }
}
// function to ask questions and save the answers to a response variable, then update the addEmployee variable based on the users choise
async function makeEmployee() { 
    try {
        if (!addEmployee) {
            response = await inquirer.prompt(mangagerQuestions);
            addEmployee = response.addEmployee
        }
        else if (addEmployee === "Engineer") {
            response = await inquirer.prompt(engQuestions)
            addEmployee = response.addEmployee
        }
        else if (response.addEmployee === "Intern") {
            response = await inquirer.prompt(intQuestions);
            addEmployee = response.addEmployee
        }
        else {
            const newHtml = await render(employees);
            await asyncWriteFile(outputPath, newHtml)
            return;
        }
        employeeInfo();
    }
    catch(err) {
        console.log(err)
    }
}

makeEmployee();