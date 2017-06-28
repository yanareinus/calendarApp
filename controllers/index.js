var express = require('express');
var router = express.Router();
var models = require('../models');

router.use(function timeLog(req, res, next) {
  console.log('index Controller :: Time: ', Date.now());
  next();
});


router.get('/',function(req,res){

	models.events.findAll().then((post) => {
     
      res.render('index', {post});
      custom_css: '/css/cal.css'
            
    });
});


module.exports = router;
