
const { NotFoundDatabaseError } = require("../logic/client_error");
const { Db } = require("../logic/db");

/**
 * Express middleware
 * Get database from dbname URL param
 */
const requireDatabaseMiddleware = () => (req, res, next) => {
    let dbName = req.params.dbname; 
    
    // Verify database exists
    if (!Db.existsDatabase(dbName)) { 
        res.send({
            status: false,
            data: new NotFoundDatabaseError(dbName),
        });
        return;
    }
    
    // Get database
    req.db = new Db(dbName);
    next();
}


module.exports = {
    requireDatabaseMiddleware,
}