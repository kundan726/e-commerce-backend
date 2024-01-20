import mongoose from "mongoose";

const userRegistration = new mongoose.Schema(
  {
    email: { type: String, required: true},
    name: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
  },
  { timestamps: true }
);

const authModel = new mongoose.model('authModel',userRegistration);
export default authModel;
