const ProductService = require('../services/ProductService');

class ProductController {
    async getAllProducts(req, res) {
        try {
            const products = await ProductService.getAllProducts();
            res.json(products);
        } catch (error) {
            console.error('Error getting all products:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async getProductById(req, res) {
        try {
            const id = req.params.id;
            const product = await ProductService.getProductById(id);
            if (product) {
                res.json(product);
            } else {
                res.status(404).json({ message: 'Product not found' });
            }
        } catch (error) {
            console.error('Error getting product by ID:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async createProduct(req, res) {
        try {
            const data = req.body;
            const product = await ProductService.createProduct(data);
            res.status(201).json(product);
        } catch (error) {
            console.error('Error creating product:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async updateProduct(req, res) {
        try {
            const id = req.params.id;
            const data = req.body;
            const updatedProduct = await ProductService.updateProduct(id, data);
            if (updatedProduct) {
                res.json(updatedProduct);
            } else {
                res.status(404).json({ message: 'Product not found' });
            }
        } catch (error) {
            console.error('Error updating product:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async deleteProduct(req, res) {
        try {
            const id = req.params.id;
            const deletedProduct = await ProductService.deleteProduct(id);
            if (deletedProduct) {
                res.json(deletedProduct);
            } else {
                res.status(404).json({ message: 'Product not found' });
            }
        } catch (error) {
            console.error('Error deleting product:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}

module.exports = new ProductController();