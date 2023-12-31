const { Schema, model } = require("mongoose");
const commonSchema = require("../../utils/commonSchema");

const validateEmail = function (email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
};
const userSchema = new Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  isEmailVerified: { type: Boolean, default: false },
  password: {
    type: String,
    required: true,
  },
  isActive: { type: Boolean, default: false },
  ...commonSchema,
});

module.exports = model("User", userSchema);
