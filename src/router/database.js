
const { DuplicateDatabaseError } = require("../logic/client_error");
const { Db } = require("../logic/db");
const { Router } = require("express");
const router = Router();

/**
 * POST /databases controller
 * create a new database
 */
router.post("/databases", (req, res) => {
    let body = req.body;
    let dbName = body.name;
    
    // Database already exists
    if (Db.existsDatabase(dbName)) {
        let error = new DuplicateDatabaseError(dbName);
        
        console.log(error);
        return res.send({
            status: false,
            data: error,
        });
    }
    
    // Create database
    Db.createDatabase(dbName);
    
    console.log("  ✓  Database '" + dbName + "' created");
    res.send({
        status: true,
        data: {
            message: "Database created",
        }
    });
}); 

module.exports = router;