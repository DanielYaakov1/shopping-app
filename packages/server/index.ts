import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();
import { authRouter } from './src/api/routes/auth-router';
import { requireAuth } from './src/middleware/check-auth';
let cookieParser = require('cookie-parser');

const port = process.env.SHOPPING_APP_PORT;
const router = express.Router();
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use('/auth', authRouter);

app.use('/test', requireAuth, (req, res) => {
     console.log('Well done and Hello from server!');
     res.send({ data: 'Well done and Hello from server!' });
});

app.listen(port, () => {
     console.log(`Server listening on port ${port}`);
});
