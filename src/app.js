const express = require("express");
const path = require("path");
const methodOverride =  require('method-override');


const mainRouter = require('./routes/main');
const productsRouter = require('./routes/products'); // Rutas /products
const userRouter = require('./router/user');

const app = express();


app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/usuario', userRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Servidor on puerto http://localhost:" + port);
});


module.exports = app;