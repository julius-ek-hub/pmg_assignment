const mock_express = require("../mock_express");
const { openBrowser, log } = require("../utils");
const fetchAll = require("./fetchAll");
const toHTML = require("../to_html");
const { byPrimaryGenreName, byRelaseDate } = require("./sort");

const app = mock_express();

const routeHandler = async (req, res) => {
	try {
		const { sortBy } = req.query;

		let results = await fetchAll();

		if (sortBy === "primaryGenreName")
			results = results.sort(byPrimaryGenreName);
		else if (sortBy === "releaseDate") results = results.sort(byRelaseDate);
		res.end(toHTML(results, sortBy));
	} catch (e) {
		res.status(500).end(e.message);
	}
};

module.exports = () => {
	app.get("/itune", routeHandler);
	const port = process.env.PORT || 9999;

	app.listen(port, () => {
		log.success(`Server is running on port ${port}. Visit\n`);
		const url = `http://localhost:${port}/itune`;
		log.message(url);
		log.message(`${url}?sortBy=primaryGenreName`);
		log.message(`${url}?sortBy=releaseDate`);
		openBrowser(`${url}?sortBy=primaryGenreName`);
	});
};
