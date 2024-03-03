
const { requireDatabaseMiddleware } = require("./middlewares/database_middleware");
const { requireCollectionMiddleware } = require("./middlewares/collection_middleware");
const databaseRouter = require("./router/database");
const collectionRouter = require("./router/collection");
const express = require("express");
const morgan = require("morgan");

const app = express();

/**
 * Configure middlewares
 */
app.use(express.json());
app.use(morgan("dev"));
app.use("/databases/:dbname/*", requireDatabaseMiddleware());
app.use("/databases/:dbname/collections/:collectionname/*", requireCollectionMiddleware());

/**
 * Configure router controllers
 */
app.use(databaseRouter);
app.use(collectionRouter);

module.exports = app;