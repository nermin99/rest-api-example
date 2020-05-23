const mongoose = require('mongoose');
const { db } = require('exp-config');

const connectStr = db.connectStr
  ? db.connectStr
  : db.IS_SRV == true
  ? `mongodb+srv://${db.user}:${db.password}@${db.host}/${db.name}`
  : `mongodb://${db.host}/${db.name}`;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose.connect(connectStr, options, () => console.log('Connected to DB'));
