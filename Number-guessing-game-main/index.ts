#! /usr/bin/env node

import inquirer from "inquirer";
function numGenerator (){Math.floor(Math.random() * 10) + 1;
    return randomNumber;
}
const randomNumber = numGenerator;
async function start() {
    console.log("Welcome to the guessing game");
    const answers = await inquirer.prompt(
      {
        name: "userGuess",
        type: "number",
        message: "Enter your guess b/w 1 to 10: "
      },
    );
  
    const randomNumber = numGenerator();
  
    if (answers.userGuess === randomNumber) {
      console.log("Proud moment! You win");
    } else {
      console.log("Ohh, you lost");
    }
  
    console.log(`The random number is: ${randomNumber}`);
  };
  
  // Call the main function
  start();
