module.exports.log = {
	info(message) {
		console.log("\x1b[33m%s\x1b[0m", message);
	},
	success(message) {
		console.log("\x1b[36m%s\x1b[0m", message);
	},
	error(message) {
		console.log("\x1b[31m", message);
	},
	message(message) {
		console.log(message);
	},
};

module.exports.openBrowser = (url) => {
	var start =
		process.platform == "darwin"
			? "open"
			: process.platform == "win32"
			? "start"
			: "xdg-open";

	require("child_process").exec(start + " " + url, () => {});
};

module.exports.argsInclude = (arg) => process.argv.slice(2).includes(arg);
