
const { CollectionOperation } = require("./collection_operation");
const { FindOneOperation } = require("./find");

/**
 * Delete a collection document
 */
class DeleteOneOperation extends CollectionOperation {
    
    async execute (query) {
        let findOne = new FindOneOperation(this.collection);
        let item = await findOne.execute(query);
        
        if (!item) return false;
        
        let json = this.getJsonHandler();
        
        json.data.splice(item._index, 1);
        json.write();
        return true;
    }
    
}

module.exports = {
    DeleteOneOperation,
}