var express = require('express');
var router = express.Router();
const userHelpers=require('../helpers/user-helpers')

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

router.get('/login',(req,res)=>{
res.render('user/login')
})

router.get('/signup',(req,res)=>{
  res.render('user/signup')
})
router.post('/signup',(req,res)=>{
userHelpers.doSignup(req.body).then((response)=>{
  console.log(response);
})
})

router.post('/login',(req,res)=>{

  userHelpers.doLogin(req.body).then((response)=>{
    if(response.status){
      res.redirect('/')
    }else{
      res.redirect('/login')
    }
  })
})

module.exports = router;
