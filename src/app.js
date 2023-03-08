const express = require("express");
const path = require("path");


const mainRouter = require("./routes/main");
const productsRouter = require('./routes/products'); // Rutas /products


const app = express();


app.use(express.static(path.join(__dirname,'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))


app.use("/", mainRouter);
app.use('/products', productsRouter);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Servidor on puerto http://localhost:" + port);
});


module.exports = app;