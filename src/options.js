const defaultConnectionOptions = {
    host: "localhost",
    user: "postgres",
    password: "postgres",
    database: "postgres",
    port: 5432,
}

const targetDatabaseOptions = {
    user: "postgres",
    password: "postgres",
    database: "postgres",
}

module.exports = {
    defaultConnectionOptions,
    targetDatabaseOptions,
}
