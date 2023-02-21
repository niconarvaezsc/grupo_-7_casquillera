const express = require('express');
const app = express()
const path = require('path');

app.use(express.static('page'))




app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, ('/page/index.html')))
})

app.get('/login', (req, res) =>{
    res.sendFile(path.join(__dirname, '/page/login.html'))
})

app.get('/register', (req, res) =>{
    res.sendFile(path.join(__dirname, '/page/register.html'))
})

app.listen(3000, ()=>{
    console.log('server started on port 3000');
})