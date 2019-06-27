//setting up database

const Sequelize = require('sequelize');
const connection = new Sequelize('formDB', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

connection
  .authenticate()
  .then( () => {
    console.log('Connection to db has been successfully established');
  })
  .catch( err => {
    console.error('Unable to connect to db: ', err);
  });

module.exports = connection;
