var express = require('express');
var router = express.Router();

/* GET users listing. */
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
  res.render('admin/view-products',{admin:true,products})
});

module.exports = router;
