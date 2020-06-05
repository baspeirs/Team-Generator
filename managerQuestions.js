const managerQuestions = [
    {
        type: "input",
        message: "What is your manager's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is your manager's ID?",
        name: "id"
    },
    {
        type: "input",
        message: "What is your manager's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your manager's office number?",
        name: "number"
    },
    {
        type: "list",
        message: "What type of employee would you like to add?",
        choices: ["Engineer", "Intern"],
        name: "addEmployee"
    }
]



module.exports = managerQuestions