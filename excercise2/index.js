// import all calculator routes (up the top)
const express = require("express");
const calculatorRouter = require("./calculatorRoutes.js");
const app = express();

app.use('/calculator', calculatorRouter);
startwebserver(app, 3000);

function startwebserver(app, port) {
   
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

