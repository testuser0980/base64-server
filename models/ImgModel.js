const mongoose = require("mongoose");
const { Schema } = mongoose;

const Images = new Schema(
  {
    img: [
      {
        name: {
          type: String,
        },
        path: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Images", Images);
