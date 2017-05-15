var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('running on port 3000');
  const num = Math.floor((Math.random() * 6) + 1);
  const stuff = [{
    title: "IDEAS GROW HERE",
    subtitle: "Watch It Become..."
  },
  {
    title: "IDEAS LIVE HERE",
    subtitle: "Watch It Become..."
  },
  {
    title: "NOW HATCHING:",
    subtitle: "It's a Bird! - It's a plane! - It's a..."
  },
  {
    title: "CREATIVE HIGHNESS,",
    subtitle: "Your Majesty Awaits"
  },
  {
    title: "IDEA-IZE TO REAL-IZE",
    subtitle: "Make It Without Faking It"
  },
  {
    title: "BRINGING IDEAS TO LIFE",
    subtitle: "Time To Meet Your Maker"
  },
  {
    title: "WALKING ON SUNSHINE",
    subtitle: "Ideas Feel Good"
  },
  {
    title: "IMPROVING THE WORLD",
    subtitle: "It takes you to make a thing go ri-ight!"
  }
]
  res.render('index', stuff[(num)]);
});

module.exports = router;
