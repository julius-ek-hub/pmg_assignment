const https = require("https");

module.exports = (artist) => {
	return new Promise((resolve, reject) => {
		const req = https.request(
			"https://itunes.apple.com/search?limit=20&term=" + artist,
			(response) => {
				let data = "";
				response.on("data", (d) => (data += d));
				response.on("end", () => resolve(JSON.parse(data).results));
				response.on("error", reject);
			},
		);
		req.on("error", reject);
		req.end();
	});
};
