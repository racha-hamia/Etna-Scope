var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const {User} = require('../models/index');
var login = require('../controllers/login.controller')



router.post('/',login.checkEtnaLogin)


// router.post("/",async (req, res) => {
    
//     console.log(req.body)

//     const { login,password } = req.body



//     console.log(login)
   
//      const alreadyexistUser = await User.findOne({where :{login}}).catch(err => {console.log("error :"+err)})
    
//     if(alreadyexistUser){
//          return res.json({ message : "an User with the login Already Exist"})
//      }


//     const salt = await bcrypt.genSalt(10)
//     const newUser = new User({ login,password })
//     newUser.password = await bcrypt.hash(newUser.password,salt)
//     const savedUser = await newUser.save().catch((err) => {
//         console.error(err);
//         res.json("error : "+ err +" Cannot register user at the moment ")
//     });
//      if (savedUser) res.json("Thanks for reqistering")
// })
  
module.exports = router;

  

