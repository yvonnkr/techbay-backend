const fs = require("fs");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

require("dotenv").config();
const connectDB = require("./database/db.js");

connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

fs.readdirSync("./routes").map((route) =>
  app.use("/api", require(`./routes/${route}`))
);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
