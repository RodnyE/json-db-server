
const { CollectionOperation } = require("./collection_operation");

/**
 * Insert new document into collection 
 */
class InsertOneOperation extends CollectionOperation {
    
    async execute (doc) {
        let json = this.getJsonHandler();
        
        json.data.push(doc);
        json.write();
    }
    
}

module.exports = {
    InsertOneOperation,
}