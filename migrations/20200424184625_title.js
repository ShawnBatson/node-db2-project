exports.up = async function (knex) {
    await knex.schema.alterTable("cars", (table) => {
        table.text("statusOfTitle");
    });
};

exports.down = async function (knex) {
    await knex.schema.alterTable("cars", (table) => {
        table.dropColumn("statusOfTitle");
    });
};
