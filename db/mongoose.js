require('dotenv').config();

const mongoose = require('mongoose');

const {
  DB_CONNECTSTR,
  DB_isSrv,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME
} = process.env;

const connectStr = DB_CONNECTSTR
  ? DB_CONNECTSTR
  : DB_isSrv === 'true'
  ? `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`
  : `mongodb://${DB_HOST}/${DB_NAME}`;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

console.log(connectStr);

mongoose.connect(connectStr, options, () => console.log('Connected to DB'));
