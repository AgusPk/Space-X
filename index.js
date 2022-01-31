require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const router = express.Router();
const taskResolver = require("./tasks/index");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", router);

app.listen(port, function () {
  console.log("Runnning on port " + port);
});

router.post("/", async (req, res) => {
  try {
    await taskResolver.createTask(req.body);
    res.status(201).send({ message: "Task created succesfully!" });
  } catch (error) {
    res.status(400).send({ message: "Oh no! Something went wrong" });
  }
});
