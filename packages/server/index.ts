import express from 'express';
import { authRouter } from './src/api/routes/auth-router';

const port = process.env.PORT || 3200;
const router = express.Router();
const app = express();

app.use(express.json());
app.use('/auth', authRouter);

app.use('/test', (req, res) => {
     console.log('Well done and Hello from server!');
     res.send({ data: 'Well done and Hello from server!' });
});

app.listen(port, () => {
     console.log(`Server listening on port ${port}`);
});
