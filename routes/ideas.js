var express = require('express');
var router = express.Router();
var linkQuery = require('../db/linkQuery')
const pg = require('../db/knex')

// Router mounted at localhost:/3000/ideas



router.get('/', function(req, res, next) {
  pg('ideas')
    .select()
    .then(ideass => {
      res.render('ideas', { ideass });
    })
});

router.post('/new', (req,res) => {
  linkQuery.newIdea(req.body)
  .then(()=>{
    res.redirect("/ideas")
  })
})

router.post('/', function(req, res, next) {
  pg('ideas')
    .select()
    .then(ideass => {
      // console.log(ideass);
      res.render('ideas', { ideass });
    })
});


router.get('/singleview/:id', function(req, res, next){
  const id = req.params.id;
  console.log(id);
  respondAndRenderTodo(id, res, 'singleview')
});


// /:id
//
// /:id/edit



module.exports = router;
