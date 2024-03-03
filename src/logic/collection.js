
const { InsertOneOperation } = require("./operations/insert");
const { FindOneOperation } = require("./operations/find");
const { DeleteOneOperation } = require("./operations/delete");
const Json = require("json-db");
const fs = require("fs");

/**
 * Class represent a collection on database
 */
class Collection {
    constructor (db, collectionName) {
        this.db = db;
        this.databaseName = db.databaseName; 
        this.collectionName = collectionName; 
        this.folder = db.folder + "/" + collectionName;
    }  
    
    /**
     * Helper to execute operations 
     * 
     * @param {CollectionOperation.constructor} Operation
     * @param {Object} data - execution data
     * @return {Promise} 
     */
    _exec (Operation, data) {
        let operation = new Operation(this);
        
        return operation.execute(data);
    }
     
    /**
     * Insert one item
     */
    insertOne (doc) {
        return this._exec(InsertOneOperation, doc);
    }
   
    /**
     * Find one item
     */
    findOne (query) {
        return this._exec(FindOneOperation, query);
    }
    
    /**
     * Delete a item
     */
    deleteOne (query) {
        return this._exec(DeleteOneOperation, query);
    }
}

module.exports = {
    Collection,
};