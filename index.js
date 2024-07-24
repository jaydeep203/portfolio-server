const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const project = require("./routes/project");



app.use("/api/v1/", project);


app.listen(4000);