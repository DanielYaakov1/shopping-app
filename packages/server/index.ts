import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import { authRouter } from './src/api/routes/auth-router';
import { productsRouter } from './src/api/routes/products-router';
import { requireAuth } from './src/middleware/requireAuth';
import { Products } from './src/models/products-model';
import cookieParser from 'cookie-parser';

const port = process.env.SHOPPING_APP_PORT;
const router = express.Router();
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use('/auth', authRouter);
app.use('/products', productsRouter);

app.use('/test', requireAuth, (req, res) => {
     res.send({ data: 'Well done and Hello from server!' });
     const userData = res.locals.user;
});

app.listen(port, () => {
     console.log(`Server listening on port ${port}`);
});

const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
     throw new Error('Mongo URI is missing');
}
(async function () {
     try {
          await mongoose.connect(mongoUri);
          console.log('connected to mongo db');
     } catch (err) {
          console.log(err);
     }
})();
