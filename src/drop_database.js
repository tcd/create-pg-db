const { Client } = require("pg")
const { defaultConnectionOptions } = require("./options")

/**
 * FIXME: Sanatize `dbName`
 */
const dropDatabase = async (dbName, connectionOptions) => {
    const connectionOpts = {...defaultConnectionOptions, ...connectionOptions}
    const client = new Client(connectionOpts)
    client.connect()
    return new Promise(async (resolve, reject) => {
        await client.query(`DROP DATABASE "${dbName}"`, (err, res) => {
            if (err) {
                client.end()
                if (err.code === "3D000") {
                    console.log(err.message) // database does not exist
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

module.exports = dropDatabase
