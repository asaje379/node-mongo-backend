import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import createCrudRouter from './crud/crud.router';
import log from './generators/console/log';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://opencts:OpenCTS2021@cluster0.ralov.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true
}).catch((err) => log.error('Unable to connect to Mongo database'));

createCrudRouter(app);

const PORT = process.env.PORT || 4200
app.listen(PORT, _ => log.success('Server is started'))