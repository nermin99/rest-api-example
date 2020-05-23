const mongoose = require('mongoose');
const { DB } = require('exp-config');

const connectStr = DB.CONNECTSTR
  ? DB.CONNECTSTR
  : DB.IS_SRV == true
  ? `mongodb+srv://${DB.USER}:${DB.PASSWORD}@${DB.HOST}/${DB.NAME}`
  : `mongodb://${DB.HOST}/${DB.NAME}`;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose.connect(connectStr, options, () => console.log('Connected to DB'));
