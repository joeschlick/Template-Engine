const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");

promptNewMember = () => {
  inquirer
    .prompt([
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
    ])
    .then((newMember) => {
      // console.log(newMember.name)
      // console.log(newMember.id)
      // console.log(newMember.email)

      inquirer
        .prompt([
          {
            type: "list",
            name: "role",
            message: "Select your role",
            choices: ["Manager", "Engineer", "Intern"],
          },
        ])
        .then((Choice) => {
          console.log(Choice);
          if (Choice.role === "Manager") {
            inquirer
              .prompt([
                {
                  type: "input",
                  name: "officeNumber",
                  message: "Enter your office number",
                },
              ])
              .then((managerChoice) => {
                console.log(
                  newMember.name,
                  newMember.id,
                  newMember.email,
                  managerChoice.officeNumber
                );
                ///// HERE /////
              });
          } else if (Choice.role === "Engineer") {
            console.log(Choice.role);
            inquirer
              .prompt([
                {
                  type: "input",
                  name: "github",
                  message: "Enter your github ID",
                },
              ])
              .then((engineerChoice) => {
                console.log(
                  newMember.name,
                  newMember.id,
                  newMember.email,
                  engineerChoice.github
                );
                ///// HERE /////
              });
          } else {
            console.log(Choice.role);
            inquirer
              .prompt([
                {
                  type: "input",
                  name: "school",
                  message: "Enter your school",
                },
              ])
              .then((internChoice) => {
                console.log(
                  newMember.name,
                  newMember.id,
                  newMember.email,
                  internChoice.school
                );
                ///// HERE /////
              });
          }
        });
    });
};
promptNewMember();

