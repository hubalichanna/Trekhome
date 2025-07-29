const { required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose=require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type:String,
        required:true
    }

    
});
//the passport local mongoose will automatically define the username and password fields in schema with hasing function and salt value with this line below also add some methods
userSchema.plugin(passportLocalMongoose);

module.exports =mongoose.model("User",userSchema); 