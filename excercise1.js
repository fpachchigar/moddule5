const express = require("express");
const app1 = express();
const app2 = express();

startWebServer(app1, 3000);
startWebServer(app2, 4000);

function startWebServer(app, port) {
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}
