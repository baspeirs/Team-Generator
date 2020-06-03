const engineerQuestions = [
    {
        type: "input",
        message: "What is your engineer's name?",
        name: "engineerName"
    },
    {
        type: "input",
        message: "What is your engineer's ID?",
        name: "engineerID"
    },
    {
        type: "input",
        message: "What is your engineer's email?",
        name: "engineerEmail"
    },
    {
        type: "input",
        message: "What is your engineer's GitHub username?",
        name: "engineerGitHub"
    },
    {
        type: "list",
        message: "What type of employee would you like to add?",
        choices: ["Engineer", "Intern", "I don't want to add any more team members"],
        name: "addEmployee"
    }
]

module.exports = engineerQuestions