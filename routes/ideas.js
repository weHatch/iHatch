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


router.get('/:id/:title', function(req, res, next){
  const id = req.params.id;
  linkQuery.ideaInfo(id)
    .then(data => {
      // console.log(data);
      res.render('singleview', data[0])
    })
});

router.get('/:id/:title/edit', (req, res) => {
  const id = req.params.id;
  linkQuery.ideaInfo(id)
    .then(data => {
      // console.log(data);
      res.render('edit', data[0])
    })
})

router.post('/:id/:title/update', (req,res) => {
  console.log('fuck you devin');
  var id = req.params.id
  var title = req.params.title
  linkQuery.updateIdea(req.body, id)
  .then(data=>{
    console.log(data);
    res.redirect('/ideas' + `/${id}/${title}`)
  })
})

router.get('/:id/:title/delete', (req, res) => {
  linkQuery.deleteIdea(req.params.id).then(() => {
    res.redirect('/ideas')
  })
})


// /:id
//
// /:id/edit



module.exports = router;
