const managerQuestions = [
    {
        type: "input",
        message: "What is your manager's name?",
        name: "managerName"
    },
    {
        type: "input",
        message: "What is your manager's ID?",
        name: "managerID"
    },
    {
        type: "input",
        message: "What is your manager's email?",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "What is your manager's office number?",
        name: "managerNumber"
    },
    {
        type: "list",
        message: "What type of employee would you like to add?",
        choices: ["Engineer", "Intern"],
        name: "addEmployee"
    }
]



module.exports = managerQuestions