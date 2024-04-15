import mongoose from "mongoose";
import user from "../models/user.js";

const User = mongoose.model("User", user);

class UserService{

    Create(email, password){
        const newUser = new User({
            email: email, 
            password: password
        });
        newUser.save();
    }

    SelectOne(email){
        return User.findOne({email: email});
    }
}

export default new UserService();