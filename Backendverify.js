const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.post("home2", (req, res) => {
  const name = req.body.name;
  const password = req.body.password;

  console.log(`Received form submission from ${name} <${password}>`);

  res.json({ success: true });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
