const fs = require('fs');
const path = require('path');


const controller = {
  home: (req, res) => {
    res.render('index');
  },

  login: (req, res) => {
    res.render('login');
  },

  productCart: (req, res) => {
    res.render('productCart');
  },

  register:(req,res) => {
    res.render('register')
  }
};

module.exports = controller;
