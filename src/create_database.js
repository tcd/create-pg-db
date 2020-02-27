const { Client } = require("pg")
const { defaultConnectionOptions } = require("./options")

/**
 * FIXME: Sanatize `dbName`
 */
const createDatabase = async (targetOptions, connectionOptions) => {
    const connectionOpts = {...defaultConnectionOptions, ...connectionOptions}
    const client = new Client(connectionOpts)
    client.connect()
    return new Promise(async (resolve, reject) => {
        await client.query(`CREATE DATABASE "${targetOptions.database}"`, async (err, res) => {
            if (err) {
                await client.end()
                if (err.code === "42P04") {
                    console.log(err.message) // database does not exist
                } else if (err.code === "55006") {
                    console.log(err.message) // database in use
                } else {
                    console.error(err)
                }
                reject()
            } else {
                client.end()
                resolve()
            }
        })
    })
}

module.exports = createDatabase
