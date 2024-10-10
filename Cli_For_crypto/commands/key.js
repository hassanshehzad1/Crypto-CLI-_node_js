// Importing inquirer package
const inquirer = require("inquirer");

// Importing color package
const colors = require("colors");

// Importing a keyManager module
async function keyData() {
  const keyManager = await require("../lib/keyManager");
  let data = await keyManager();
  return await data;
}

// Importing a required module
const { isRequired } = require("../util/isRequired");

// Key object
module.exports = {
  // Set key
  async set() {
    // Getting the key Manager
    let keys = await keyData();

    //  Getting prompt input
    const prompt = inquirer.createPromptModule();
    let input = await prompt([
      {
        type: "input",
        name: "key",
        message: "Enter api key".blue + "https://api.coingecko.com",
        validate: isRequired,
      },
    ]);

    // Updating the api key in key manager set method
    const key = keys.setKey(input.key);

    // Checking if key exist
    if (key) {
      console.log("Your Api key set successfully ".green);
    }
  },
  //  Show Api key
  async show() {
    let keys = await keyData();
    try {
      // Showing key
      let getKey = await keys.showKey();
 
        console.log("Your Api key", getKey.green);
        //  Retuning key
        return getKey;
      
    } catch (err) {
      console.error(err.message.red);
    }
  },
  //  Removing api key
  async remove() {
    let keys = await keyData();
    try {
      keys.removeKey();
      console.log(" key removed succesfully".yellow);
    } catch (error) {
      console.error(error.message.red);
    }
  },
};
