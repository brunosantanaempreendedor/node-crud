require('dotenv').config();

module.exports = {
    development: {
        username: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || 'sua_senha',
        database: process.env.DB_NAME || 'nome_do_seu_banco',
        host: process.env.DB_HOST || 'localhost',
        dialect: 'mysql',
    },
    test: {
        username: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || 'sua_senha',
        database: process.env.DB_NAME || 'nome_do_seu_banco',
        host: process.env.DB_HOST || 'localhost',
        dialect: 'mysql',
    },
    production: {
        username: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || 'sua_senha',
        database: process.env.DB_NAME || 'nome_do_seu_banco',
        host: process.env.DB_HOST || 'localhost',
        dialect: 'mysql',
    },
};