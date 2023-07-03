import dotenv from 'dotenv';
import connectToDatabase from './database.js';
import express from 'express';

//our routes
import productRoutes from './routes/productRoutes.js';

dotenv.config();
connectToDatabase();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/products', productRoutes);

app.listen(port, () => {
  console.log(`Server runs on port ${port}.`);
});
