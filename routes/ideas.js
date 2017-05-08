var express = require('express');
var router = express.Router();

// Router mounted at localhost:/3000/ideas

router.get('/', (req, res) => {
  res.render('ideas');
    });


// /new
//
// /:id
//
// /:id/edit
//
// /


module.exports = router;
