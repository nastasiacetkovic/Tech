//entry point for the api
import dotenv from 'dotenv';
dotenv.config();
import connectToDatabase from './database.js';
import express from 'express';
//import path from 'path';

//our routes
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

connectToDatabase();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes); //exposing our routes to this url
app.use('/api/orders', orderRoutes);

app.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID));

app.listen(port, () => {
  console.log(`Server runs on port ${port}.`);
});
