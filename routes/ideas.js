var express = require('express');
var router = express.Router();
const pg = require('../db/knex')

// Router mounted at localhost:/3000/ideas

function respondAndRenderTodo(id, res, viewName) {
      if(typeof id != 'undefined') {
      pg('ideas')
        .select()
        .where('id', id)
        .first()
        .then(ideass => {
          res.render(viewName, ideass);
        })
        } else {
          res.status(500);
          res.render('error', {
            message: 'Invalid ID'
          })
        }
    }

router.get('/', function(req, res, next) {
  pg('ideas')
    .select()
    .then(ideass => {
      console.log(ideass);
      res.render('ideas', { ideass });
    })
});

router.post('/', function(req, res, next) {
  pg('ideas')
    .select()
    .then(ideass => {
      console.log(ideass);
      res.render('ideas', { ideass });
    })
});

router.get('/singleview/:id', function(req, res, next) {
  const id = req.params.id;
  respondAndRenderTodo(id, res, 'singleview')
});


// /:id
//
// /:id/edit



module.exports = router;
