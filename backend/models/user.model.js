import mongoose from "mongoose"

const userSchema=new mongoose.Schema({
name:{
    type:String,
    required:true
},
username:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true,
    unique:[true,"Email already taken"]
},
password:{
    type:String,
    required:[true,"Password already taken"]

},
profilePicture:{
    type:String,
default:"",
},
bannerimg:{
    type:String,
    default:"User"
},
headline:{
    type:String,
    default:"User"
},
location:{
    type:String,
default:"India"
},
about:{
    type:String,
default:""
},
skills:
[String]
,
experince:{
    type:String,
    company:String,
    startDate:Date,
    endDate:Date,
    description:String
}
,
education:[{
    school:String,
    fieldofstudy:String,
    startYear:Number,
    endYear:Number
}],
connections:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"

}]
},
{timestamps:true}
)
 const User =mongoose.model("User",userSchema)
 export default User;