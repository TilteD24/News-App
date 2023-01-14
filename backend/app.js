const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  console.log("Hello 'v'");
});

app.listen(6000, () => {
  console.log("Listening on port 6000");
});
