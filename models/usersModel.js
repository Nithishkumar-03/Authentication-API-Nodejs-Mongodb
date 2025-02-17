const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    email:{
        type: String, 
        required:[true, 'email is required'],
        trim:true,
        unique: [true, 'email must be unique'],
        minLength:[5,'email must have 5 characters'],
        lowercase: true,

    },
    password:{
        type: String,
        required: [true, 'password must be provided'],
        trim: true,
        select: false
    },
    verfied:{
        type: Boolean,
        default: false,

    },
    verficationCode:{
        type : String,
        select: false,

    },
    verficationCodeValidation:{
        type : Number,
        select: false,

    },
    forgotPasswordCode:{
        type: String,
        select:false
    },
    forgotPasswordCodeValidation:{
        type: Number,
        select: false
    }
},{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)