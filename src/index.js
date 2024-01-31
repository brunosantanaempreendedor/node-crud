const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('../config/db');
const productRoutes = require('../routes/productRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(bodyParser.json());

// Routes
app.use('/products', productRoutes);

// Database connection and server start
sequelize
    .sync({ force: false }) // Change to true to force database re-creation
    .then(() => {
        console.log('Database synced');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => console.error('Error syncing database:', err));