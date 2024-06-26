const { default: mongoose } = require("mongoose");

const userSchema = {
    name:{
        required:true,
        type:String,
        trim:true,
    },
    email:{
        required:true,
        type:String,
        trim:true,
        validate: {
            validator: (value) => {
                const re =
                    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                return value.match(re);
            },
            message: "Please enter a valid email address",
        },
    },
    password:{
        required:true,
        type:String,
    },
    address:{
        deafult:"",
        type:String,
    },
    type:{
        type:String,
        default:"user",
    },
    cart:[
        {
            // Product Schema 
            quantity:{
                type:Number,
                required:true,
            },
        }
    ],

};


module.exports = User = mongoose.model("tbl_user",userSchema);