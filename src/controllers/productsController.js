const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
function getProducts() {
	return JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
}

const controller = {
	// Root - Show all products
	index: (req, res) => {
		const products = getProducts();
		res.render('products/products', { products });
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		const { id } = req.params;
		const products = getProducts();
		const product = products.find((element) => element.id === +id);
		res.render('products/detail', { product });
	},
	
	crear : (req, res) => {
		res.render('products/productsFormCrear')
	},
	
	guardar : (req, res) => {
		const image = req.file ? req.file.filename : 'default-image.png';
		const products = getProducts();
		const newProduct = {
			id : products[products.length - 1].id +1,
			nombre : req.body.name,
			descripcion : req.body.description,
            image : image,
            precio : req.body.price
		}
		products.push(newProduct);
		fs.writeFileSync( productsFilePath, JSON.stringify(products, null, ' '));
		res.redirect('/products')
	},

	editar : (req, res) => {
		const { id } = req.params;
		const products = getProducts();
		const product = products.find((element) => element.id === +id);
		res.render('products/productsFormEditar', { product });
	},

	actualizar : (req, res) => {
		const { id } = req.params;
		const products = getProducts();
		const productIndex = products.findIndex((element) => element.id === +id);
		const image = req.file ? req.file.filename : products[productIndex].img;
		products[productIndex] = {
			...products[productIndex],
			nombre : req.body.name,
			descripcion : req.body.description,
            image : image,
            precio : req.body.price
		}
		fs.writeFileSync( productsFilePath, JSON.stringify(products, null, ' '));
		res.redirect('/products');
	},
	destruir : (req, res) => {
		const { id } = req.params;
		const products = getProducts();
		const productIndex = products.findIndex((element) => element.id === +id);
		products.splice(productIndex, 1);
		fs.writeFileSync( productsFilePath, JSON.stringify(products, null, ' '));
		res.redirect('/products');
	}
}

module.exports = controller;