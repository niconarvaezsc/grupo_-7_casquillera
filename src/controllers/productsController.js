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
		res.render('products', { products });
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		const { id } = req.params;
		const products = getProducts();
		const product = products.find((element) => element.id === +id);
		res.render('detail', { product });
	},

};

module.exports = controller;