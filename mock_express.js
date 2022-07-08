const http = require("http");
const url = require("url");

module.exports = () => {
	let paths = [];

	return {
		get(url, handler) {
			if (paths.some((path) => path.url === url)) return;
			paths.push({ url, handler });
		},

		listen(port, listening) {
			const server = http.createServer((req, res) => {
				const _url = url.parse(req.url);
				let pathname = _url.pathname;
				if (pathname.endsWith("/"))
					pathname = pathname.slice(0, pathname.length - 1);

				const path = paths.find((p) => p.url === pathname);
				if (!path) return res.end(`Can not: ${req.method}`);

				res.writeHead(200, { "Content-Type": "text/html" });

				path.handler(
					{
						...req,
						query: (_url.query || "")
							.split("&")
							.filter((q) => q)
							.map((q) => {
								const _q = q.split("=");
								return { [_q[0]]: _q[1] };
							})
							.reduce((prev, curr) => {
								prev[Object.keys(curr)[0]] = Object.values(curr)[0];
								return prev;
							}, {}),
					},
					{
						end: (message) => res.end(message),
						status(code) {
							res.statusCode = code;
							return { end: (message) => res.end(message) };
						},
					},
				);
			});

			server.listen(port, "localhost", listening);
		},
	};
};
