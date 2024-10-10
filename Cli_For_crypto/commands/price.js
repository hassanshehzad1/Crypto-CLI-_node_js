// Checking coin prices

// Importing a keyManager module
async function keyManager() {
  const keyManager = await require("../lib/keyManager");
  let data = await keyManager();
  return await data;
}

//Requiring cryptoApi
// Importing a keyManager module
async function cryptoApi() {
  const cryptoPrice = await require("../lib/cryptoApi");
  let data = await cryptoPrice();
  return await data;
}

// Check object
const check = {
  //Price checking
  async price(userCmd) {
    try {
      // Getting Api key
      const keys = await keyManager();
      const apiKey = await keys.showKey();
      let getCoinPrice = await cryptoApi();
      
      let data =await getCoinPrice.getCoinPrice(apiKey, userCmd.coin, userCmd.cur);
        console.log(data)    

    } catch (error) {
      console.error(error.messae + " price");
    }
  },
};

// Exporting the module
module.exports = check;
