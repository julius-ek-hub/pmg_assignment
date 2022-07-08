const fetchAll = require("./fetchAll");
const { byPrimaryGenreName, byRelaseDate } = require("./sort");
const { log } = require("../utils");

const askSortType = () => {
	log.message(`How would you like to sort the results?`);
	log.message(
		`A) primaryGenreName, B) releaseDate, (Anything else for no sorting)`,
	);
};

module.exports = async () => {
	try {
		let results = await fetchAll();

		process.stdin.on("data", (d) => {
			const choice = d.toString().trim().toLowerCase();

			if (choice === "a") log.message(results.sort(byPrimaryGenreName));
			else if (choice === "b") log.message(results.sort(byRelaseDate));
			else console.log(results);
			askSortType();
		});

		askSortType();
	} catch (er) {
		log.error(er);
	}
};
