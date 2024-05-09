const express=require("express")
const { get_data, post_data, update_data, delete_data } = require("../crud")
const router=express.Router()
router.get("/get",get_data)
router.post("/create",post_data)
router.put("/update/:id",update_data)
router.delete("/delete/:id",delete_data)

module.exports=router