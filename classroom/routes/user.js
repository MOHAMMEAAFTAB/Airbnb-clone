const express = require('express');
const router = express.Router();


//index users 
router.get("/", (req , res) => {
    res.send("Get for show users");
});

//show users 
router.get("/:id", (req , res) => {
    res.send("post for show users");
});

//post users 
router.post("/", (req , res) => {
    res.send("post for show users");
});

//delete users 
router.delete("/:id", (req , res) => {
    res.send("delete users");
});


module.exports = router;