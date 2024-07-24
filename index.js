const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

const PORT = process.env.PORT || 4000;

app.use(cors());
dotenv.config();

const project = require("./routes/project");



app.use("/api/v1/", project);


app.listen(PORT);