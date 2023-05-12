import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    name: String,
    require: true,
  },
  email: {
    name: String,
    unique: true,
    require: true,
  },
  password: {
    name: String,
    select: false,
    require: true,
    minLength : [6, "Password to small"],
  },
});

mongoose.models = {};

export const User = mongoose.model("User", schema);
