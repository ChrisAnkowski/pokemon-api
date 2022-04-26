const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const pokemon = require("./routes/pokemon");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", pokemon);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to  application." });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
