var express = require('express');
var router = express.Router();
var models = require('../models');
var id;

router.use(function timeLog(req, res, next) {
  console.log('update Controller :: Time: ', Date.now());
  next();
});

router.get('/:id', function(req, res) {
id=req.params.id
models.events.findOne({
where:{id:req.params.id},}
  ).then((post) => {
      res.render('update', {post});
      custom_css: '/css/cal.css'      
    });
});
//delete
router.post('/',function(req,res){
models.events.destroy({
where: {
        id: id,
      },
 }).then(() => {
      res.redirect("/");
    });
});
//update
router.post('/:id',function(req, res) {
models.events.update({
  title:req.body.title,
  start_time:req.body.start_time,
  end_time: req.body.end_time,
  description:req.body.description,
  },
  {
    where:{
id:id,
  },
}).then((get) => {
res.redirect("/");})
}
);

module.exports = router;
