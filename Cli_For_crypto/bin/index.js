#!/usr/bin/env node
/**
 * Please make sure that your file(s) referenced in bin starts with node, otherwise the scripts are started without the node executable!
 */

// Commander for command line interface
// CommonJS (.cjs)
const { Command } = require("commander");
const program = new Command();

//Package json fileF
const packageInfo = require("../package.json");
// Accessing the version of package json file
const version = packageInfo.version;

// Updating the program commands
program
  .version(version)
  // For key
  .command("key", "Manage API key --https://api.coingecko.com")
  // For check
  .command("check", "Check price")
  .parse(process.argv);
