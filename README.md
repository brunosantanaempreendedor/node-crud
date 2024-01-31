Certainly! Below is a README.md file that provides instructions on how to execute the project, use routes, and mentions that it's a simple CRUD model for basic registration, intended for demonstration purposes:

```markdown
# Simple Node.js CRUD API

This is a simple CRUD API built with Node.js and Sequelize, designed for basic product registration and demonstration purposes.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/brunosantanaempreendedor/node-crud
   ```

2. Navigate to the project folder:

   ```bash
   cd node-crud
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up your environment variables:

   Create a `.env` file in the root directory and add the following:

   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=your_database
   PORT=3000
   ```

   Replace `your_password` and `your_database` with your MySQL password and desired database name.

5. Run migrations to set up the database:

   ```bash
   npx sequelize-cli db:migrate
   ```

6. Start the server:

   ```bash
   npm run dev
   ```

   The server will be running at `http://localhost:3000`.

## API Routes

### GET /products

Get a list of all products.

### POST /products

Create a new product.

#### Request Body (JSON):

```json
{
  "name": "Product Name",
  "price": 19.99,
  "description": "Product Description"
}
```

### GET /products/:id

Get details of a specific product by ID.

### PUT /products/:id

Update details of a specific product by ID.

#### Request Body (JSON):

```json
{
  "name": "New Product Name",
  "price": 24.99,
  "description": "Updated Product Description"
}
```

### DELETE /products/:id

Delete a specific product by ID.

## Important Note

This project is a simple demonstration of a CRUD API for basic product registration. It is not intended for production use without further enhancements and security considerations.

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

This README provides detailed steps on setting up and running the project, information about available routes, and a note about the project's simplicity for demonstration purposes. Customize it further according to your specific needs.