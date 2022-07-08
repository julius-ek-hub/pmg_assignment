# PMG Assigment

Important folders are `db_query` and `itune_api`. The rest of the structure is just me playing arround and aking it possible to view the result on the console and on the browser.

## Itune Api

To view the result in the console, run

```cmd
npm start itune_api
```

To have a better view in brower, run

```cmd
npm start itune_api browser
```

TL;DR? Check

`itune_api/`

- `request.js`
- `fetchAll.js`
- `sort.js`

## MongoDB Query

Before running this one, you need run `npm install` to install `mongoose` which was used to test for the query result. Also edit `db_query/db.js`, line 4 to match the `DB_CONNECTION_STRING` of your environment.

To view the result in the console, run

```cmd
npm start db_query
```

To have a better view in brower, run

```cmd
npm start db_query browser
```

TL;DR? Check

`db_query/`

- `db.js - module.exports.findBySize`
- `fetchAll.js`
