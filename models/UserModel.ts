import mongoose, { Document, model, Model, Schema } from "mongoose";

let date = new Date();
let date_at = Date.now();

export interface UserModel extends Document {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    password: string,
    dob: string,
    address: string,
    address2: string,
    city: string,
    state: string,
    postcode: string,
    country: string,
    userRole: string,
    profile_avatar: string,
    date_at: string,
    resetToken: string,
    validEmail: string,
    emailToken: string,
};



const userSchema: Schema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    password: {
        type: String
    },
    dob: {
        type: String,
        default: "",
    },
    address: {
        type: String,
        default: "",
    },
    address2: {
        type: String,
        default: "",
    },
    city: {
        type: String,
        default: "",
    },
    state: {
        type: String,
        default: "",
    },
    postcode: {
        type: String,
        default: "",
    },
    country: {
        type: String,
        default: "Bangladesh",
    },
    userRole: { type: String, default: "user", },
    profile_avatar: { type: String, default: "https://cdn-icons-png.flaticon.com/512/2202/2202112.png", },
    date_at: { type: String, default: date_at, },
    resetToken: { type: String },
    validEmail: { type: String, default: "not", },
    emailToken: { type: String, default: "", },
    update: { type: String },
});


export const User: Model<UserModel> = mongoose.models.User || model("User", userSchema);