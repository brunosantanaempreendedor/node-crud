const Product = require('../models/ProductModel');

class ProductService {
    async getAllProducts() {
        return await Product.findAll();
    }

    async getProductById(id) {
        return await Product.findByPk(id);
    }

    async createProduct(data) {
        return await Product.create(data);
    }

    async updateProduct(id, data) {
        await Product.update(data, { where: { id } });
        return await this.getProductById(id);
    }

    async deleteProduct(id) {
        const product = await this.getProductById(id);
        if (product) {
            await product.destroy();
        }
        return product;
    }
}

module.exports = new ProductService();