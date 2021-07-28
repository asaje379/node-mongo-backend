import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import createCrudRouter from './crud/crud.router';
import log from './generators/console/log';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true
}).catch((err) => log.error('Unable to connect to Mongo database'));

createCrudRouter(app);

const PORT = process.env.PORT || 4200
app.listen(PORT, _ => log.success('Server is started'))