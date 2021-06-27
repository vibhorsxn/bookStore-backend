var express =  require('express');
var router = express.Router()     
const{allbook}= require("../controllers/book");
const{buybook}=require("../controllers/buyBook");

router.get("/allBooks",allbook);
router.post("/buyBook",buybook);

module.exports = router;