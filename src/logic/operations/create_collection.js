
const { AbstractOperation } = require("./operation"); 
const Json = require("json-db");
const fs = require("fs");

/**
 * Create a new collection in database
 */
class CreateCollectionOperation extends AbstractOperation {
    
    /**
     * @param {Db} db - database to create the collection
     */
    constructor (db) {
        super();
        this.db = db;
    }
    
    /**
     * @param {string} collName - database collection name
     */
    async execute (collName) {
        let collFolder = this.db.folder + "/" + collName;
        let collJson = new Json(collFolder + "/collection.json");
        let dbJson = new Json(this.db.folder + "/db.json");
        
        collJson.data = [];
        dbJson.data.collections[collName] = collName;
        
        fs.mkdirSync(collFolder);
        collJson.write();
        dbJson.write();
    }
}


module.exports = {
    CreateCollectionOperation,
}