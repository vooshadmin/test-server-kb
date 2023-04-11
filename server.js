const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/", (req, res) => {
  return res.json({ message: "Hello World!", data: req.body });
});

app.listen(1300, () => console.log(`Server running on port: 1300`));
