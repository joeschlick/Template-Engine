const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

async function promptNewMember() {
  return await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter your name",
    },

    {
      type: "input",
      name: "id",
      message: "Enter your id number",
    },

    {
      type: "input",
      name: "email",
      message: "Enter your email address",
    },
  ]);
}

async function promptRole() {
  return await inquirer.prompt([
    {
      type: "list",
      name: "role",
      message: "Select your role",
      choices: ["Manager", "Engineer", "Intern"],
    },
  ]);
}

async function createManager() {
  return await inquirer.prompt([
    {
      type: "input",
      name: "officeNumber",
      message: "Enter your office number",
    },
  ]);
}

async function createEngineer() {
  return await inquirer.prompt([
    {
      type: "input",
      name: "github",
      message: "Enter your github ID",
    },
  ]);
}

async function createIntern() {
    return await inquirer.prompt([
      {
        type: "input",
        name: "school",
        message: "Enter your school",
      },
    ]);
  }

  async function appMenu() {
      const result = promptNewMember()
      
  }

//function appMenu() inside - create one Manager. Create manager first, then createTeam() function , in createteam have a switch case to ask which kind of emmployee needs to be created and then run the needed function for createEngineer or createIntern if there is no other entry then build the team and render.

// in each function for employees ask Qs for data and then in .then construct employee with data given

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

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
