const express = require('express');
const models = require('../models');
var router = express.Router();
var date;

router.get('/:event_date', function(req, res) {
 date=req.params.event_date
models.events.findAll({attributes:['title','start_time','end_time','description'],
where:{event_date:req.params.event_date},}
	).then((post) => {
     
      res.render('event', {post});
      custom_css: '/css/cal.css'
      
    });
});
//create new event
router.post("/", function(req, res) {
models.events.create({
 title: req.body.title,
    start_time: req.body.start_time,
    end_time: req.body.end_time,
    description: req.body.description,
    event_date: date, 
  },
  {

}).then((get) => {
res.redirect("/");})
});

module.exports = router;
