import mongooose from "mongoose";
const userSchema=new mongooose.Schema({
   
    googleId:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    givenName:{
        type:String,
        required:true
    },
    familyName:{
        type:String,
        required:true
    },

})
const user=mongooose.model('user',userSchema);
export default user;