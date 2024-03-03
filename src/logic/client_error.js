
/**
 * This class acts as a parent class for all errors 
 * that will be sent to the client
 */
class ClientError {
    
    /**
     * @param {string} message
     * @param {string} type - error header
     */
    constructor (message, type) {
        this.message = message;
        this.type = type || "ClientError";
    }
}



/**
 * The collection name already exists.
 */
class DuplicateCollectionError extends ClientError {
    constructor (collName) {
        super(
            "Fail to create, '" + collName + "' collection's already exists.",
            "DuplicateCollectionError"
        )
    }
}


/**
 * Collection not exists
 */
class NotFoundCollectionError extends ClientError {
    constructor (collName) {
        super(
            "The '" + collName + "' collection isn't exists.",
            "NotFoundCollectionError"
        )
    }
}

/**
 * The database name already exists
 */
class DuplicateDatabaseError extends ClientError {
    constructor (databaseName) {
        super(
            "Fail to create, '" + databaseName + "' database's already exists.",
            "DuplicateDatabaseError"
        )
    }
}

/**
 * Db not exists
 */
class NotFoundDatabaseError extends ClientError {
    constructor (databaseName) {
        super(
            "The '" + databaseName + "' database isn't exists.",
            "NotFoundDatabaseError"
        )
    }
}


module.exports = {
    ClientError,
    NotFoundDatabaseError,
    DuplicateDatabaseError,
    NotFoundCollectionError,
    DuplicateCollectionError,
}