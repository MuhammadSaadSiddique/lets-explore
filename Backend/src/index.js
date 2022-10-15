// src/index.js
const express = require("express");
const router = require("./router");
const path = require("path")
const PORT = 1338;
const app = express();


// applying handler for API
app.use("/", router);
// Handling serving static files
app.use(express.static(path.join(__dirname, '../client/build')));
// Serving app on PORT we defined
app.listen(PORT, () => {
  console.log(`Express is running on port ${PORT}`);
});