require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

const doctorsRoute = require('./routes/doctorsRoute');

app.use("/doctors", doctorsRoute);

app.get("/", (req, res) => {
    res.send("Doctor data here");
  });

app.listen(PORT, () => {
console.log(`Server is running on port http://localhost:${PORT}`);
});
