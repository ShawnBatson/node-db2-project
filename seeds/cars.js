exports.seed = async function (knex) {
    await knex("cars").truncate();

    await knex("cars").insert([
        {
            VIN: "1D664S4D99488N841",
            make: "Ford",
            model: "Focus",
            mileage: 32450,
            transmissionType: "Automatic",
            statusOfTitle: "clean",
        },
        {
            VIN: "1A661S0D77122N589",
            make: "Volkswagon",
            model: "Beetle",
            mileage: 12311,
            transmissionType: "Automatic",
            statusOfTitle: "clean",
        },
        {
            VIN: "4N488I8I3997TUERMT",
            make: "Chevrolet",
            model: "El Camino",
            mileage: 32450,
            transmissionType: "Manual",
            statusOfTitle: "Salvaged",
        },
    ]);
};
