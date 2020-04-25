const express = require("express");
const db = require("../data/config");

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const cars = await db("cars");
        res.json(cars);
    } catch (err) {
        next(err);
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const car = await db("cars").where({ id }).first();
        res.json(car);
    } catch (err) {
        next(err);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const payload = {
            VIN: req.body.VIN,
            make: req.body.make,
            model: req.body.model,
            mileage: req.body.mileage,
            transmissionType: req.body.transmissionType,
            statusOfTitle: req.body.title,
        };
        const carData = req.data;
        const [id] = await db("cars").insert(payload);
        const newCar = await db("cars").where({ id });
        res.status(205).json(newCar);
    } catch (err) {
        next(err);
    }
});

router.put("/:id", async (req, res, next) => {
    try {
        const payload = {
            VIN: req.body.vin,
            make: req.body.make,
            model: req.body.model,
            mileage: req.body.mileage,
            transmissionType: req.body.transmissionType,
            statusOfTitle: req.body.title,
        };
        await db("cars").where("id", req.params.id).update(payload);
        const updateCars = await db("cars").where("id", req.params.id).first();
        res.json(updateCars);
    } catch (err) {
        next(err);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        await db("cars").where("id", req.params.id).del();
        res.status(204).end();
    } catch (err) {
        next(err);
    }
});
module.exports = router;
