const runItuneApi = require("./itune_api");
const runDbQuery = require("./db_query");
const { argsInclude } = require("./utils");

if (argsInclude("itune_api")) runItuneApi();
else if (argsInclude("db_query")) runDbQuery();
else throw new Error("Specify which one to start, eg npm start itune_api");
