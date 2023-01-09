const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');
const userRouter = require('./routes/userRoute');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// app.use(bodyParser.raw({ type: '*/*' }));

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connection successful!'));

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

app.get('/', (req, res) => {
  res.status(200).send('Hello from the server side!');
});

app.use('/user', userRouter);
