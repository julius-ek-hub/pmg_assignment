const db = require("./db");
const { log } = require("../utils");

module.exports = async () => {
	await db.connect();
	await db.populate();
	log.info("Fetching data from db...");
	const result = await Promise.all(["L", "M", "S"].map(db.findBySize));
	log.success("Results ready and sorted by averagePrice!");
	const flattened = result.flat();
	return flattened.sort((a, b) => b.averagePrice - a.averagePrice);
};
