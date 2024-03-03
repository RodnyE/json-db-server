
const { CollectionOperation } = require("./collection_operation");

/**
 * Find a collection document
 */
class FindOneOperation extends CollectionOperation {
    
    async execute (query) {
        let json = this.getJsonHandler();
        let props = Object.keys(query);
        
        // forEach items
        for (let i = 0; i < json.data.length; i++) {
            let item = json.data[i];
            let match = true;
            
            // check all queries
            for (let propIndex = 0; propIndex < props.length; propIndex ++) {
                let prop = props[propIndex];
                
                if (item[prop] === query[prop]) {
                    continue;
                }
                else {
                    // not match
                    match = false;
                    break;
                }
            }
            
            // found !
            if (match) {
                item._index = i;
                return item;
            }
            else {
                continue;
            }
        }
        
        return null;
    }
    
}

module.exports = {
    FindOneOperation,
}