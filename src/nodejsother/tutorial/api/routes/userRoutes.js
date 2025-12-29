const express=require("express")

const { getUserById, getAllUser } = require('../controller/userController');

var router=express.Router();

router.get("/",getAllUser)

router.get("/:id",getUserById)

module.exports=router;