
const { DuplicateCollectionError } = require("../logic/client_error");
const { Db } = require("../logic/db");
const { Router } = require("express");

const router = Router();

/**
 * Collection operations router
 */
router.use(
    "/databases/:dbname/collections/:collectionname",
    require("./collection_operations"),
);

/**
 * POST /databases/.../collections controller
 * create a new collection
 */
router.post("/databases/:dbname/collections", (req, res) => {
    let body = req.body;
    let db = req.db; 
    let collName = body.name;
    
    // Collection already exists
    if (db.existsCollection(collName)) {
        return res.send({
            status: false,
            data: new DuplicateCollectionError(db.databaseName + "." + collName),
        });
    }
    
    // Create
    db.createCollection(collName);
    res.send({
        status: true,
        data: {
           message: "Success"
        }
    });
});  
 

module.exports = router;