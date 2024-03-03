
const { AbstractOperation } = require("./operation");
const Json = require("json-db");

/**
 * This class acts as a parent class of all collection operations
 */
class CollectionOperation extends AbstractOperation {
    
    constructor (collection) {
        super();
        this.collection = collection;
    }
    
    /**
     * Return a new Json instance of this collection
     */
    getJsonHandler () {
        return new Json(this.collection.folder + "/collection.json");
    }
    
}

module.exports = {
    CollectionOperation,
}