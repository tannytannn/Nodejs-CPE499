const express = require('express');
const router = express.Router();
const path = require('path');
const mydata = require('../showdata/data');
router.get("/",(req,res)=>{
    res.send(mydata);
})
module.exports = router;