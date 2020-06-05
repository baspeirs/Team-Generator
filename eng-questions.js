const engineerQuestions = [
    {
        type: "input",
        message: "What is your engineer's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is your engineer's ID?",
        name: "id"
    },
    {
        type: "input",
        message: "What is your engineer's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your engineer's GitHub username?",
        name: "github"
    },
    {
        type: "list",
        message: "What type of employee would you like to add?",
        choices: ["Engineer", "Intern", "I don't want to add any more team members"],
        name: "addEmployee"
    }
]

module.exports = engineerQuestions