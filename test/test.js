const { assert } = require("chai")
const createDatabase = require("../src/create_database")
const dropDatabase = require("../src/drop_database")
const doesDatabaseExist = require("../src/does_database_exist")

describe("check, create, drop", function () {
    it("works", async function () {
        const opts = { host: "db" }

        const res_1 = await doesDatabaseExist("create-pg-db-test-database", opts)
        assert.isFalse(res_1)

        const target = {
            user: "postgres",
            password: "postgres",
            database: "create-pg-db-test-database",
        }
        await createDatabase(target, opts)
        const res_2 = await doesDatabaseExist("create-pg-db-test-database", opts)
        assert.isTrue(res_2)

        await dropDatabase("create-pg-db-test-database", opts)
        const res_3 = await doesDatabaseExist("create-pg-db-test-database", opts)
        assert.isFalse(res_3)

    })
})
