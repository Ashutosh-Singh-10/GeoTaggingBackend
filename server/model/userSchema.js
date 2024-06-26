const mongoose=require('mongoose');
const bcrypt=require("bcryptjs");
const jwt = require("jsonwebtoken");



const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    email :{
     type: String,
      required: true
    },
    phone:{
     type:Number,
     required: true
    },
    password:{
     type:String,
     required: true
    },
    location:{
        type: String,
        required: true
    }
    
});



userSchema.pre("save",async function(next){

    const user = this;
 
    if(!user.isModified("password")){
        console.log("check");
     next();
    }
    
    try {
        console.log("check");
      const saltRound = await bcrypt.genSalt(10);
      const hash_password = await bcrypt.hash(user.password,saltRound);
      user.password=hash_password;
 
    } catch (error) {
        console.log("check");
     next(error);
    }
 
 
 
 });
 
 
 userSchema.methods.generateToken = async function() {
     try {
            return jwt.sign({
                   userId: this._id.toString(),
                   email:this.email,
                   isadmin: this.isadmin,
            },
            process.env.JWT_SECRET_KEY,{
             expiresIn: "30d",
            }
            );
        
     } catch (error) {
        console.log("check");
       console.error(error);
     }
 };

 const User = new mongoose.model("User",userSchema);
module.exports=User;