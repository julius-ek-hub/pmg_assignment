const console_result = require("./console_result");
const browser_result = require("./browser_result");

const { argsInclude } = require("../utils");

module.exports = () => {
	if (argsInclude("browser")) return browser_result();
	console_result();
};
