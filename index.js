const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile)

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "Title- "
        },

        {
            type: "input",
            name: "projecttitle",
            message: "Project Title- "

        },
        {
            type: "input",
            name: "description",
            message: "Desription- "
        },
        {
            type: "input",
            name: "tableofcontents",
            message: "Table of contents- "
        },
        {
            type: "input",
            name: "installation",
            message: "Installation- "
        },
        {
            type: "input",
            name: "usage",
            message: "Usage- "
        },
        {
            type: "input",
            name: "license",
            message: "License- "
        },
        {
            type: "input",
            name: "contributing",
            message: "contributing- "
        },
        {
            type: "input",
            name: "test",
            message: "Test- "
        },
        {
            type: "input",
            name: "githubPP",
            message: "GitHub Profile Picture- "
        },
        {
            type: "input",
            name: "githubemail",
            message: "GitHub Email- "
        },
    ])
}

function generateTXT(answers) {
    return `
    
    ${answers.title}
    ${answers.projecttitle}
    ${answers.description}
    ${answers.tableofcontents}
    ${answers.installation}
    ${answers.usage}
    ${answers.license}
    ${answers.contributing}
    ${answers.tests}
    ${answers.githubPP}
    ${answers.githubemail}

    
    
    
    `
    
}

promptUser()
.then(function(answers){
    const txt = generateTXT(answers)

    return writeFileAsync("README.md", txt)
})
.then(function() {
    console.log("succesfully created README")
})
.catch(function(err) {
    console.log(err)
})