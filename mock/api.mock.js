const fs = require('fs');
const fromJSONFile = require("./file.read.js");

const proxy = {
  'GET /app/user/profile': fromJSONFile('profile'),
  'post /app/user/profile1': fromJSONFile('profile1'),
};
module.exports = proxy;
