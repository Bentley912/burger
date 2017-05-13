var express = require('express');
var router = express.Router();
var burgers = require('../models/burgers.js');
var orm = require("../config/orm.js")

router.get("/", function(req,res){
     orm.selectAll(function(data){
         console.log(data);
         res.render('index', {result:data});  
     });
     
});

router.post("/", function(req, res) {
  burgers.create(["burger_name"
  ], [
    req.body.burger_name
  ], function() {
    res.redirect("/");
  });
});


module.exports = router; 