
const { STORAGE } = require("../../../config");
const { AbstractOperation } = require("./operation"); 
const Json = require("json-db");
const fs = require("fs");

/**
 * Create a new database
 */
class CreateDatabaseOperation extends AbstractOperation {
    
    /**
     * @param {string} dbName - database name
     */
    async execute (dbName) {
        let dbDate = new Date().toString();
        let dbFolder = STORAGE + "/" + dbName;
        let dbJson = new Json(dbFolder + "/db.json");
        
        dbJson.data = {
            name: dbName,
            date: dbDate,
            collections: {},
        };
        fs.mkdirSync(dbFolder);
        dbJson.write();
        
        return;
    }
}

module.exports = {
    CreateDatabaseOperation,
}