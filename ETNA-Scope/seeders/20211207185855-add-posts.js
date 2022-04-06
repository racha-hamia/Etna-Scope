// to create an empty seeder please use cli sequelize seed:generate --name add-posts then write inside up & down code to generate seed 
// sequelize db:seed:all to run the seeder on time ended

//sequelize doc https://gist.github.com/vapurrmaid/a111bf3fc0224751cb2f76532aac2465 
//sequelize doc https://sequelize.org/master/manual/model-basics.html
//npm docs https://www.npmjs.com
//express docs https://expressjs.com
//node docs https://nodejs.org/en/

'use strict';
module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Posts', [{
      firstName : 'John',
      lastName : 'Doe',
      pictureUrl : 'I am a new user to this application',
      createdAt : new Date(),
      updatedAt : new Date(),
      mail : 'johnDoe@test.com',
      phone:'+33634356765',
      hrNote:null,

    }], {});
  },

  down : function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Posts', [{
      first_name :'John'
    }])
  }
};