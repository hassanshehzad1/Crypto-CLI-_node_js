// Module for index-key command

// Require the commnder package
const { Command }= require("commander");

// Require the key module
const key = require("../commands/key");
// Creating object of commander
let program = new Command();

// Set command
program
  .command("set")
  .description("set api key --Get from https://api.coingecko.com")
  .action(key.set);

// Show command
program.command("show").description("Show api key").action(key.show);

// Remove Api key
program.command("remove").description("Remove API key").action(key.remove);

// Parsing the object
program.parse(process.argv);
