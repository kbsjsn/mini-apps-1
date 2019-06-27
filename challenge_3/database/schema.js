const Sequelize = require('sequelize');
const connection = require('./index.js');

const FormInput = connection.define('formInput', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  line1: {
    type: Sequelize.STRING
  },
  line2: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  },
  state: {
    type: Sequelize.STRING
  },
  zipShipping: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING
  },
  ccNumber: {
    type: Sequelize.STRING
  },
  expiration: {
    type: Sequelize.STRING
  },
  ccv: {
    type: Sequelize.STRING
  },
  zipBilling: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
});

FormInput.sync({ force: false})
  .then( () => {
    console.log('schema successfully synched');
  })
  .catch( err => {
    console.error('schema unable to sync: ', err);
  })

module.exports = FormInput;