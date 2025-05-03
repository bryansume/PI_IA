const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

app.set("port", process.env.PORT || 8080);
app.set("json spaces", 2);

//Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//Rutas
app.use(require("./routes/index"));

app.listen(app.get("port"), () => {
  console.log(`hola desde el puerto: ${app.get("port")}`);
});
