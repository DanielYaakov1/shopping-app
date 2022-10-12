import { adminRouter } from './src/api/routes/admin-router';
import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();
import { authRouter } from './src/api/routes/auth-router';
import { productsRouter } from './src/api/routes/products-router';
import { requireAuth } from './src/middleware/requireAuth';
import cookieParser from 'cookie-parser';
import { mongooseConnect } from './src/db/mongooseConnect';
import errorHandleMiddleware from './src/middleware/errorHandle';
import { ordersRouter } from './src/api/routes/orders-router';

const port = process.env.SHOPPING_APP_PORT;
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/products', productsRouter);
app.use('/api/v1/orders', ordersRouter);
app.use('/api/v1/admins', adminRouter);

app.use(errorHandleMiddleware);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
mongooseConnect();

app.use('/api/v1/test', requireAuth, (req, res) => {
  res.send({ data: 'Well done and Hello from server!' });
  const userData = res.locals.user;
});
