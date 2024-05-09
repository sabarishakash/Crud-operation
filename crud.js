const data_schema=require("./schema")
const get_data=async(req,res)=>{
    const find_data=await data_schema.find({})
    res.json(find_data)
}
const post_data=async(req,res)=>{
    const data=new data_schema({
        ...req.body
    })
    const save_data=await data.save()
    res.json(save_data)
}
const update_data=async(req,res)=>{
    const update_data=await data_schema.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    res.json({message:"Updated successfully",Update:update_data})
}
const delete_data=async(req,res)=>{
    const delete_data=await data_schema.findByIdAndDelete(req.params.id)
    res.json({message:"Deleted successfully",delete:delete_data})
}
module.exports={get_data,post_data,update_data,delete_data}