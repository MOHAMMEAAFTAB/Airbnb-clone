const express = require("express");
const router = express.Router();


//posts
//index 
router.get("/", (req , res) => {
    res.send("Get for show post");
});

//show 
router.get("/:id", (req , res) => {
    res.send("post for show post");
});

//post 
router.post("/", (req , res) => {
    res.send("post for show post");
});

//delete 
router.delete("/:id", (req , res) => {
    res.send("delete post");
});


module.exports = router; // ✅ bas itna hona chahiye
