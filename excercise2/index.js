// import all calculator routes (up the top)
const express = require("express");
const calculatorRouter = require("./calculatorRoutes.js");
const app = express();

app.use('/calculator', calculatorRouter);

 app.listen(3000, () => {
        console.log(`Server is running on port ${3000}`);
    });
