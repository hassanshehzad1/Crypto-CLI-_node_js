// Importing color
const colors = require("colors");

// Api key https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&ids=ethereum&x_cg_demo_api_key=

//  Fetching api key
const fetching = async (apiKey) => {
  // Fetching the key
  let key = await fetch(apiKey);
  let data = await key.json();
  return await data;
};

let cryptoPrice = async () => {
  let baseUrl = "https://api.coingecko.com/api/v3/coins/markets?";
  // Get price data
  return {
    async getCoinPrice(apiKey, userCoin, userCurrency) {
      try {
        console.log(apiKey, userCoin, userCurrency);
        // Get request
        let data = await fetching(
          `${baseUrl}vs_currency=${userCurrency}&ids=${userCoin}&x_cg_demo_api_key=${apiKey}`
        );

        // Getting the outputs
        let outputs = "";

        // Looping the array of objects
        data.forEach((element) => {
          outputs +=
            `Coin ${element.symbol} (${element.name}) | price: ${element.current_price}| price_change_percentage_24h: ${element.price_change_percentage_24h} | Date: ${element.ath_date}\n`
              .cyan;
        });

        return outputs;
      } catch (error) {
        handleError(error);
      }
    },
  };
};

function handleError(err) {
  if (err === 401)
    throw new Error("Your api key is not valid go to coingecko.com to get api");
  else if (err === 404) throw new Error("Your api key is not responding");
  else throw new Error("Somethind crashing in cryptoApi");
}
module.exports = cryptoPrice;
