var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  let products=[
    {
      name:"apple",
      category:'mobile',
      description:"good one",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwYNLRJHnP4Y7cG9gOXbEYKkLtfVDuVzh8Yg&usqp=CAU"
    },
    {
      name:"apple",
      category:'mobile',
      description:"good one",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwYNLRJHnP4Y7cG9gOXbEYKkLtfVDuVzh8Yg&usqp=CAU"
    },
    {
      name:"apple",
      category:'mobile',
      description:"good one",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwYNLRJHnP4Y7cG9gOXbEYKkLtfVDuVzh8Yg&usqp=CAU"
    },
    {
      name:"apple",
      category:'mobile',
      description:"good one",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwYNLRJHnP4Y7cG9gOXbEYKkLtfVDuVzh8Yg&usqp=CAU"
    }
  ]


  res.render('index', { products,admin:false });
});

module.exports = router;