const { Client } = require("pg")
const { defaultConnectionOptions } = require("./options")

/**
 * FIXME: Sanatize `dbName`
 *
 * See:
 *   - [Check if postgresql database exists (Stack Exchange)](https://dba.stackexchange.com/questions/45143/check-if-postgresql-database-exists-case-insensitive-way)
 *
 * @param {string} dbName
 * @param {any} connectionOptions
 * @returns {boolean}
 */
const doesDatabaseExist = async (dbName, connectionOptions = defaultConnectionOptions) => {
    const options = { ...defaultConnectionOptions, ...connectionOptions }
    const query = `select exists(
    SELECT datname FROM pg_catalog.pg_database WHERE lower(datname) = lower('${dbName}')
);`
    const client = new Client(options)
    await client.connect()
    client.on("error", (err) => {
        client.end()
        console.error(err)
    })
    const result = await client.query(query)
    await client.end()
    return result.rows[0].exists
}

module.exports = doesDatabaseExist
