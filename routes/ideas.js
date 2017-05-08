var express = require('express');
var router = express.Router();
const pg = require('../db/knex')

// Router mounted at localhost:/3000/ideas

// router.get('/', (req, res) => {
//   pg('ideas')
//     .select()
//     .then(ideass => {
//       res.render('ideas', { ideass });
//     })
//   });

router.get('/', function(req, res, next) {
  pg('ideas')
    .select()
    .then(ideass => {
      console.log(ideass);
      res.render('ideas', { ideass });
    })
});


// /new
//
// /:id
//
// /:id/edit
//
// /


module.exports = router;
