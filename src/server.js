
const { PORT } = require("../config");
const app = require("./app"); 

/**
 * Start server
 */
app.listen(PORT, () => {
    console.log(" ... JSON server database listen in " + PORT)
});