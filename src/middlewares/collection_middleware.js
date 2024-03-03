
const { NotFoundCollectionError } = require("../logic/client_error");

/**
 * Express middleware:
 * Get collection from database and collectionname URL param
 */
const requireCollectionMiddleware = () => (req, res, next) => {
    let collName = req.params.collectionname;
    let db = req.db; 
    
    // Verify if database exists
    if (!db.existsCollection(collName)) {
        return res.send({
            status: false,
            data: new NotFoundCollectionError(collName),
        });
    } 
        
    // Get collection
    req.collection = db.collection(collName);
    next(); 
}

module.exports = {
    requireCollectionMiddleware,
}
