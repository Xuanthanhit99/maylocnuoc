import mongoose, { model, models } from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required!'],
      },
      username: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required!'],
        // required: [true, 'Username is required!'],
        // match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
      },
      password: {
        type: String,
        // unique: [true, 'Email already exists!'],
        // required: [true, 'Email is required!'],
        // match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
      },
      image: {
        type: String,
      },
      isVerified: {
        type: Boolean,
        default: false
      },
      isAdmin: {
        type: Boolean,
        default: false
      },
      forgotPasswordToken: Boolean,
      forgotPasswordTokenExpriry: Date,
      verifyToken: Boolean,
      verifyTokenExpriry: Date,
})

const User = models.User || model("User", UserSchema);

export default User