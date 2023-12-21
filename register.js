const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    usrename : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true
    },
    password : {
        type:Number,
        required:true
    }

})

const Register = new mongoose.model("Register", employeeSchema);

module.exports = Register;