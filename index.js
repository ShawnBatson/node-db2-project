const express = require("express");
const welcomeRouter = require("./welcome/welcome-router");
const carsRouter = require("./car/car-router");

const server = express();
const port = process.env.PORT || 5000;

server.use(express.json());

server.use("/", welcomeRouter);
server.use("/cars", carsRouter);

server.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        message: "Something went wrong",
    });
});

server.listen(port, () => {
    console.log(`running at http://localhost:${port}`);
});
