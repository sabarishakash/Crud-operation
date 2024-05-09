const mongoose=require("mongoose")
const data_schema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true

    }

})
module.exports=mongoose.model("Interview_db",data_schema)