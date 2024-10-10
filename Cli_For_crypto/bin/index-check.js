// Importing commander
const { Command } = require("commander");
const program = new Command();

// Importing price
const check = require("../commands/price");

// Making commands
program
  .command("price")
  .description("Check coin price ")
  .option(
    "--coin <type>",
    "Add specific coins type in CSV format",
    "bitcoin, ethereum"
  )
  .option("--cur <currency>", "Convert currency to", "usd")
  .action((userCmd) => {
    check.price(userCmd);
  });

// Parsing

program.parse(process.argv);
