const internQuestions = [
    {
        type: "input",
        message: "What is your intern's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is your intern's ID?",
        name: "id"
    },
    {
        type: "input",
        message: "What is your intern's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your inter's school?",
        name: "school"
    },
    {
        type: "list",
        message: "What type of employee would you like to add?",
        choices: ["Engineer", "Intern", "I don't want to add any more team members"],
        name: "addEmployee"
    }
]

module.exports = internQuestions