
const { Router } = require("express");
const router = Router();

router.post("/find-one", async (req, res) => {
    let collection = req.collection;
    let body = req.body;
    
    let result = await collection.findOne(body);
    
    if (!result) {
        res.send({
            status: true,
            data: null,
        });
        return;
    }
    
    res.send({
        status: true,
        data: result,
    })
});


router.post("/insert-one", async (req, res) => {
    let collection = req.collection;
    let body = req.body;
    
    await collection.insertOne(body);
    
    console.log("  !  Added an item in '" + collection.databaseName + "." + collection.collectionName + "'");
    res.send({
        status: true,
        data: {
            message: "Success",
        }
    })
});


router.post("/delete-one", async (req, res) => {
    let collection = req.collection;
    let body = req.body;
    
    let found = await collection.deleteOne(body);
    
    if (!found) {
        console.log(" !x! Item in '" + collection.databaseName + "." + collection.collectionName + "' not removed");
        res.send({
            status: false,
            data: {
                message: "Item not found"
            }
        });
        return;
    }
    
    console.log("  !  Deleted an item in '" + req.db.name + "." + collection.name + "'");
    res.send({
        status: true,
        data: {
            message: "Success",
        }
    })
});

module.exports = router;