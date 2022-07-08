const request = require("./request");
const { log } = require("../utils");

module.exports = async () => {
	const allArtists = [
		"ariana",
		"taylor",
		"billie",
		"ed",
		"shawn",
		"dua",
		"selena",
		"camila",
		"bruno",
		"justin",
	];
	log.info("Fetching data...");
	const allResults = await Promise.all(allArtists.map(request));
	log.success("Results ready!");
	return allResults.flat();
};
