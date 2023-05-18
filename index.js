const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
var cookieParser = require("cookie-parser");
const ConnectToDB = require("./dbConnect");
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb" }));
app.use(cors());
dotenv.config();
app.use(cookieParser());
ConnectToDB();

const bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: true,
    parameterLimit: 1000000000,
    limit: "5mb",
  })
);

const PORT = process.env.PORT || 4000;

app.use('/', (req,res) => {
  return res.status(200).send({
    success: true,
    message: 'Welcome to Homepage'
  })
})

app.use("/api/v1", require("./routes/ImgRoute"));

app.listen(PORT, () => {
  console.log("App is running on port http://localhost:" + PORT);
});
