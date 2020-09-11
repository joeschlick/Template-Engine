//Dependencies
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");

//Output
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

//Stores employee objects
let employeeArray = [];

appMenu();

//Starts inquirer 
function appMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "intro",
        message: "What would you like to do?",
        choices: ["Add a new employee", "Create a team", "Exit"],
      },
    ])
    .then((introChoice) => {
      switch (introChoice.intro) {
        case "Add a new employee":
          promptNewMember();
          break;
        case "Create a team":
          createTeam();
          break;
        case "Exit":
          process.exit();
      }
    });
}

//Collects employee data
function promptNewMember() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter employee name",
      },

      {
        type: "input",
        name: "id",
        message: "Enter employee id number",
      },

      {
        type: "input",
        name: "email",
        message: "Enter employee email address",
      },
    ])
    .then((newMember) => {
      console.log(newMember.name);
      console.log(newMember.id);
      console.log(newMember.email);

      inquirer
        .prompt([
          {
            type: "list",
            name: "role",
            message: "Select employee role",
            choices: ["Manager", "Engineer", "Intern"],
          },
        ])
        .then((choice) => {
          console.log(choice);
          switch (choice.role) {
            case "Manager":
              inquirer
                .prompt([
                  {
                    type: "input",
                    name: "officeNumber",
                    message: "Enter manager office number",
                  },
                ])
                .then((managerChoice) => {
                  console.log(
                    newMember.name,
                    newMember.id,
                    newMember.email,
                    managerChoice.officeNumber
                  );
                  const newManager = new Manager(
                    newMember.name,
                    newMember.id,
                    newMember.email,
                    managerChoice.officeNumber
                  );
                  employeeArray.push(newManager);
                  appMenu();
                });
              break;
            case "Engineer":
              console.log(choice.role);
              inquirer
                .prompt([
                  {
                    type: "input",
                    name: "github",
                    message: "Enter engineer github ID",
                  },
                ])
                .then((engineerChoice) => {
                  console.log(
                    newMember.name,
                    newMember.id,
                    newMember.email,
                    engineerChoice.github
                  );
                  const newEngineer = new Engineer(
                    newMember.name,
                    newMember.id,
                    newMember.email,
                    engineerChoice.github
                  );
                  employeeArray.push(newEngineer);
                  appMenu();
                });
              break;
            case "Intern":
              console.log(choice.role);
              inquirer
                .prompt([
                  {
                    type: "input",
                    name: "school",
                    message: "Enter intern school",
                  },
                ])
                .then((internChoice) => {
                  console.log(
                    newMember.name,
                    newMember.id,
                    newMember.email,
                    internChoice.school
                  );
                  const newIntern = new Intern(
                    newMember.name,
                    newMember.id,
                    newMember.email,
                    internChoice.school
                  );
                  employeeArray.push(newIntern);
                  appMenu();
                });
              break;
          }
        });
    });
}

//Creates HTML
function createTeam() {
  let htmlFile = render(employeeArray);
  fs.writeFile(outputPath, htmlFile, function (err) {
    if (err) {
      return console.log(err);
    } else {
      console.log("\x1b[32m", "Success! -- File Created");
    }
  });
}
