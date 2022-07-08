const mongoose = require("mongoose");
const { log } = require("../utils");

const DB_CONNECTION_STRING = "mongodb://localhost/pmg_assignment_db";
const DB_COLLECTION_NAME = "items";

const collection = () => mongoose.connection.collection(DB_COLLECTION_NAME);

module.exports = {
	async connect() {
		if (mongoose.connection.readyState === 1) return;

		log.info("Connecting to db...");
		await mongoose.connect(DB_CONNECTION_STRING);
		log.success("Connected to db!");
	},
	findBySize(size) {
		return collection()
			.aggregate([
				{ $match: { sizes: new RegExp(size, "i") } },
				{ $addFields: { size } },
				{ $group: { _id: "$size", averagePrice: { $avg: "$price" } } },
			])
			.toArray();
	},
	async populate() {
		const existingDocsCount = await collection().estimatedDocumentCount();
		if (existingDocsCount > 0) return;

		log.info(`Creating ${DB_COLLECTION_NAME} collection...`);
		await mongoose.connection.createCollection(DB_COLLECTION_NAME);
		log.success(`${DB_COLLECTION_NAME} collection created!`);
		log.info(`Populating ${DB_COLLECTION_NAME}...`);
		await collection().insertMany([
			{
				_id: 1,
				item: "shirt",
				price: 100,
				sizes: ["S", "M", "L"],
			},
			{
				_id: 2,
				item: "shoes",
				price: 150,
				sizes: ["m", "l"],
			},
			{
				_id: 3,
				item: "suit",
				price: 200,
				sizes: "M",
			},
			{
				_id: 4,
				item: "pant",
				price: 50,

				sizes: "l",
			},
			{
				_id: 5,
				item: "socks",
				price: 10.25,
				sizes: "s",
			},
		]);
		log.success(`${DB_COLLECTION_NAME} Populated!`);
		return;
	},
};
