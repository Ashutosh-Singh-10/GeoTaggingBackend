const { Schema, model } = require("mongoose");
const User = require("./userSchema");

const cameraSchema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    company: {
      type: String,
      required: true
    },
    model:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    status:{
        type:Boolean,
        default:false
    }
    
});
