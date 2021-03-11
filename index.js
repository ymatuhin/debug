if (process.env.NODE_ENV === "production") {
  module.exports = require("./debug.prod.js");
} else {
  module.exports = require("./debug.dev.js");
}
