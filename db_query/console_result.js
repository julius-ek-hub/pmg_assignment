const fetchAll = require("./fetchAll");
const { log } = require("../utils");

module.exports = async () => {
	try {
		let results = await fetchAll();
		log.message(results);
	} catch (er) {
		log.error(er);
	}
};
