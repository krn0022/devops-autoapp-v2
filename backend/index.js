
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello from Backend DevOps AutoApp V2!");
});
app.listen(5000, () => console.log("Backend running on port 5000"));
