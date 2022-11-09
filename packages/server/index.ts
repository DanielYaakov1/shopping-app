/* eslint-disable import/first */
import { adminRouter } from './src/api/routes/admin-router';
import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import { authRouter } from './src/api/routes/auth-router';
import { ordersRouter } from './src/api/routes/orders-router';
import { productsRouter } from './src/api/routes/products-router';
import { mongooseConnect } from './src/db/mongooseConnect';
import errorHandleMiddleware from './src/middleware/errorHandle';
import { verifyToken } from './src/middleware/verifyToken';

const port = process.env.SHOPPING_APP_PORT;
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/products', verifyToken, productsRouter);
app.use('/api/v1/orders', verifyToken, ordersRouter);
app.use('/api/v1/admins', verifyToken, adminRouter);

app.use(errorHandleMiddleware);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${port}`);
});
mongooseConnect();
