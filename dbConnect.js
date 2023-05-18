const mongoose = require("mongoose");
const URI =
  "mongodb+srv://testuser0980:4CVBBtKZ5vgwzv7I@cluster0.w3nyd03.mongodb.net/img-base64-to-db?retryWrites=true&w=majority";

const ConnectToDB = () => {
  try {
    mongoose.set({ strictQuery: false });
    mongoose.connect(URI);
    console.log("Database connection Successful");
  } catch (error) {
    console.log(error);
  }
};
module.exports = ConnectToDB;
