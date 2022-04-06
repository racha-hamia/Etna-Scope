var express = require('express');
var router = express.Router();
var request = require('request-promise');
var cookieJar = request.jar();
var request = require('request');
const { cookie } = require('request-promise');
const {User} = require('../models/index');
const bcrypt = require('bcrypt');
exports.checkEtnaLogin= function (req, res, next) {

    const { login,password } = req.body
    var headerCookie,userId,userInfo,userFirstname,userLastname,userEmail,userLogin,userRole;
    var session = 0;

    function getDataUser() {
        
        var options = {
        
          uri: 'https://auth.etna-alternance.net/identity',
          method: 'POST',
          json: {
            "login" : login,
            "password": password
          },
          jar: cookieJar,
        };
        
        request(options, function (error, response, body) {
          if (!error && response.statusCode == 200) {
      
            userId = body.id
      
            arr = JSON.stringify(cookieJar).split(":")
            tempo = JSON.stringify(arr[7]).split(",")
            tempo = tempo[0]
          
            tempo = tempo.replace('"', '').replace('"' , '').replace('"', '').replace('\\', '').replace('\\', '');
      
            headerCookie = 'authenticator=' + tempo
        
          }
        });
      
        setTimeout(getInfo,300);
      
        function getInfo() {
      
          //Debug
          //userId = 'carra_c'
      
          var options = {
            uri: 'https://auth.etna-alternance.net/api/users/' + userId,
            method: 'GET',
            host: 'auth.etna-alternance.net',
            headers: {
              "Cookie": headerCookie,
            }
          };
        
          request(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
      
              userInfo = JSON.parse(body)
      
              userFirstname = userInfo["firstname"]
      
              userLastname = userInfo["lastname"]
      
              userLogin = userInfo["login"]
      
              userEmail = userInfo["email"]
      
              userRole = userInfo["roles"].includes('adm');
                console.log(login+" "+userLogin)
                if (login == userLogin) { session=1;}
                console.log("session : "+ session)
      
            } else { 
              console.log("Error:" + error)
              console.log("Body: " + body)
            }
          });
          }
          
          
          setTimeout(returnValue,500);

      
          function returnValue() {
            console.log(session);
            if(session == 1) {

              async function checkdatabase(){
                const { login } = req.body  
                const alreadyexistUser =  await User.findOne({where :{login}}).catch(err => {console.log("error :"+err)})
                if(alreadyexistUser){
                  return res.json({ message : "an User with the login Already Exist"})
                }
                // const salt =  await bcrypt.genSalt(10)
                const newUser = new User({ login })
                // newUser.password =  await bcrypt.hash(newUser.password,salt)
                const savedUser = await newUser.save().catch((err) => {
                  console.error(err);
                  res.json("error : "+ err +" Cannot register user at the moment ")
              });
              if (savedUser) res.json("Thanks for reqistering")
    
              }

            
            checkdatabase();
          
            
          }else{ res.json("Something is wrong maybe an issue with your Etna login or password") }
        }


      }
    
      getDataUser()
}






