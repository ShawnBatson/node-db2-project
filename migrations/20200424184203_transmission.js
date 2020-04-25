exports.up = async function (knex) {
    await knex.schema.alterTable("cars", (table) => {
        table.text("transmissionType");
    });
};

exports.down = async function (knex) {
    await knex.schema.alterTable("cars", (table) => {
        table.dropColumn("transmissionType");
    });
};
