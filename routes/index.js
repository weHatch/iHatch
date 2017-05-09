var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('running on port 3000');
  const num = Math.floor((Math.random() * 4) + 1);
  const stuff = [{
    title: "Ideas Grow Here",
    subtitle: "watch it become..."
  },
  {
    title: "Ideas Live Here",
    subtitle: "watch it become..."
  },
  {
    title: "Now Hatching:",
    subtitle: "It's a bird, it's a plane, it's a..."
  },
  {
    title: "Creative Majesty,",
    subtitle: "your kingdom awaits"
  },
  {
    title: "Ideaize to Realize",
    subtitle: "make it without faking it"
  }
]
  res.render('index', stuff[(num)]);
});

module.exports = router;
