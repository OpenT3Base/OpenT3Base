// Basic Express server for PLM backend (placeholder)
import express from 'express';

const app = express();
app.use(express.json());

// Example: Get all products
app.get('/products', (req, res) => {
  res.json([{ id: 1, name: "Example Product" }]);
});

// Example: Create a product
app.post('/products', (req, res) => {
  // TODO: Validate and store product
  res.status(201).json({ message: "Product created" });
});

app.listen(3001, () => {
  console.log('PLM backend running on port 3001');
});