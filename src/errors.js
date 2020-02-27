/** Possible Postgres errors. */
const errors = {
    "42P04": {
        name: "duplicate_database",
        message: "Attempted to create a duplicate database.",
    },
    "3D000": {
        name: "invalid_catalog_name",
        message: "Attempted to drop a database that does not exist.",
    },
    "23505": {
        name: "unique_violation",
        message: "Attempted to create a database concurrently.",
    },
    "55006": {
        name: "drop_database_in_use",
        message: "Attempted to drop a database that is being accessed by other users",
    },
    "42601": {},
}

module.exports = errors
