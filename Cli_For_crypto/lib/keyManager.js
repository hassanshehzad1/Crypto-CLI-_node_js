// Package json file
const pkgFile = require("../package.json");

// Configstore npm package
const loadConfig = async () => {
  // Getting default export
  const { default: Configstore } = await import("configstore");

  //   Return the constuctor
  return new Configstore(pkgFile.name);
};

keyManager = async () => {
  // Config promise
  const config = await loadConfig();

  // creating the object
  return {
    // Set api key
    setKey(apiKey) {
      config.set("apikey", apiKey);
      return apiKey;
    },
    // Show api key
    showKey() {
      const apiKey = config.get("apikey");
      if (apiKey) return apiKey;
      else throw new Error("There is no api key exist");
    },
    // Remove api key
    removeKey() {
      const apiKey = config.get("apikey");
      if (apiKey) config.delete("apikey");
      else throw new Error("There is not api key");
    },
  };
};

module.exports = keyManager;
