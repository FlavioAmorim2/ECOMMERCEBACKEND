import 'dotenv/config';
import express from 'express';
import UserRouter from './routes/userRoutes.js'

const app = express();

app.use(express.json())
app.use('/users', UserRouter);


app.listen(3000, ()=> console.log('O pai ta ON carai'));


