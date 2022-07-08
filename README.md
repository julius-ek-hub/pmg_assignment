# PMG Assigment

Important folders are [db_query](https://github.com/julius-ek-hub/pmg_assignment/blob/main/db_query "Open") and [itune_api](https://github.com/julius-ek-hub/pmg_assignment/blob/main/itune_api "Open"). The rest of the structure is just me playing arround and making it possible to view the result on the console and in the browser.

## Itune Api

To view the result on the console, run

```cmd
npm start itune_api
```

To have a better view in brower, run

```cmd
npm start itune_api browser
```

TL;DR? Check

[itune_api](https://github.com/julius-ek-hub/pmg_assignment/blob/main/itune_api "Open")

- [request.js](https://github.com/julius-ek-hub/pmg_assignment/blob/main/itune_api/request.js "Open")
- [fetchAll.js](https://github.com/julius-ek-hub/pmg_assignment/blob/main/itune_api/fetchAll.js "Open")
- [sort.js](https://github.com/julius-ek-hub/pmg_assignment/blob/main/itune_api/sort.js "Open")

## MongoDB Query

Before running this one, you need to run `npm install` to install `mongoose` which was used to test for the query result. Also edit `db_query/db.js line 4` to match the `DB_CONNECTION_STRING` of your environment.

To view the result on the console, run

```cmd
npm start db_query
```

To have a better view in brower, run

```cmd
npm start db_query browser
```

TL;DR? Check

[db_query](https://github.com/julius-ek-hub/pmg_assignment/blob/main/db_query "Open")

- [db.js module.exports.findBySize](https://github.com/julius-ek-hub/pmg_assignment/blob/main/db_query/db.js#L17 "Open")
- [fetchAll.js](https://github.com/julius-ek-hub/pmg_assignment/blob/main/db_query/fetchAll.js "Open")
