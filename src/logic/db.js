
const { STORAGE } = require("../../config");
const { CreateDatabaseOperation } = require("./operations/create_database");
const { CreateCollectionOperation } = require("./operations/create_collection");
const { Collection } = require("./collection");

const Json = require("json-db");
const fs = require("fs");

/**
 * Class to represent a database
 */
class Db {
    constructor (databaseName) {
        this.folder = STORAGE + "/" + databaseName;
        this.databaseName = databaseName; 
    } 
    
    /**
     * @static
     * Verify if the specified database exists
     */
    static existsDatabase (dbName) {
        let db = new Db(dbName);
        let dbFolder = db.folder;
        
        return fs.existsSync(dbFolder);
    }
    
    /**
     * @static
     * Create a database
     */
    static createDatabase (dbName) {
        let operation = new CreateDatabaseOperation();
        
        return operation.execute(dbName);
    }
    
    
    /**
     * Get a collection
     */
    collection (collName) {
        return new Collection(this, collName);
    }
    
    /**
     * Verify collection exists in this database
     */
    existsCollection (collName) {
        let collection = this.collection(collName);
        let collFolder = collection.folder;
        
        return fs.existsSync(collFolder);
    }
    
    /** 
     * Create a collection
     */
    createCollection (collName) {
        let operation = new CreateCollectionOperation(this);
        
        return operation.execute(collName); 
    }
}

module.exports = {
    Db,
}