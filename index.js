const express = require('express');
const createError = require('http-errors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const userRouter = require('./routes/user.routes');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
	extended: false,
}))
app.use(bodyParser.json());
app.use(cors());

app.use('/users', userRouter);

app.use((req, res, next) => {
	next(createError(404));
});

app.use((err, req, res) => {
	console.log(err.stack);
	res.status(err.status || 500).send(err.message);
});

const server = app.listen(process.env.PORT, () => {
	console.log(`Express running → PORT ${server.address().port}`);
});