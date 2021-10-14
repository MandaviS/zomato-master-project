import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String },
    address: [{ detail: { type: String }, for: { type:String}}],
    phoneNumber: [{type: Number}],
});

const UserModel = mongoose.model("Users", UserSchema);
