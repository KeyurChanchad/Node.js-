import chalk from "chalk";
import validator from 'validator';

console.log(chalk.blue.italic("Keyur Chanchad"));
console.log(chalk.bgYellowBright.italic("Keyur Chanchad"));
console.log(chalk.white.italic.inverse("Keyur Chanchad"));

console.log("is email ", validator.isEmail("keyurchanchad@gmail.com"));