const express = require("express");
const { rootRouter } = require("./src/router/root.routes");
const app = express();
const port = 8888;
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

rootRouter(app);

app.listen(port, () => {
  console.log("chay vao server ");
});
