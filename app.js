const userFunc = require("./userfunctions/userFun.js");

const express = require("express");

const app = express();

app.use(express.json({}));
//Loggin middleware

const morgan = require("morgan");

app.use(morgan("dev"));

// Sample endpoint

app.get("/sample", (req, res) => {
  res.json({ message: "This is the sample endpoint..." });
});

app.get("/person", async (req, res) => {
  const persons = await userFunc.getAllUsers();
  res.status(200).json({ data: persons });
});

app.get("/person/:id", async (req, res) => {
  const id = req.params.id * 1;
  try {
    const person = await userFunc.getOnePerson(id);
    res.status(200).json({ message: person[0] });
  } catch (err) {
    res.status(404).json({ message: err });
  }
});

// app.post("/person", async (req, res) => {});
app.listen(5000, () => {
  console.log("Listening to port 5000...");
});
