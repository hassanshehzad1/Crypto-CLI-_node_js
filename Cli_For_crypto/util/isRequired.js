// Required the api key
const isRequired = (input) =>
  input === "" ? "Api key must be required" : true;
module.exports = { isRequired };
