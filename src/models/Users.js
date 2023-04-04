
const fs = require('fs');
const path = require('path');



const User = {
    fileName: '../data/userDataBase.json',

    getdata: function ()  {
        return JSON.parse.fs.readFileSync(this.fileName, 'utf-8');
    },

    generateId: function () {
        let allUsers = this.findAll();
        let lastUser = allUser.pop();
        if (lastUser) {
            return lastUser.id + 1;
        }
        return 1;
    },
    
    findAll: function () {
        return this.getdata();
    },

    findByField:function (id) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
        },
    

    findByField:function (field, text) {
    let allUsers = this.findAll();
    let userFound = allUsers.find(oneUser => oneUser[field] === text);
    return userFound;
    },

    create: function (userData) {  
      let allUsers = this.findAll();
      let newUser = {
        id: this.generateId(),
            ...userData
      }
      allUsers.push(userData);
      fs.writeFileSync(this.fileName, JSON.stringify(alluser, null, ' '));
      return newUser;
    }, 

    delete: function (id) {
        let allUser = this.findAll();
        let finalUsers = allUser.filter(oneUser.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
        return true;

    }
}

module.exports = Users;