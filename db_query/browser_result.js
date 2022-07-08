const mock_express = require("../mock_express");
const { log, openBrowser } = require("../utils");
const fetchAll = require("./fetchAll");
const toHTML = require("../to_html");

const app = mock_express();

const routeHandler = async (req, res) => {
	try {
		let results = await fetchAll();
		res.end(toHTML(results, "averagePrice"));
	} catch (err) {
		res.status(500).end(err.message);
	}
};

module.exports = () => {
	app.get("/mongodb", routeHandler);
	const port = process.env.PORT || 9999;
	const url = `http://localhost:${port}/mongodb`;

	app.listen(port, () => {
		log.success(`Server is running on port ${port}. Visit\n`);
		log.message(url);
		openBrowser(url);
	});
};
