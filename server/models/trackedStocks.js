const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const trackedStocksSchema = new Schema({
  userId: Number,
  favorite: [String],
  bull: [String],
  bear: [String],
});

// module.exports = mongoose.model(
//   'refreshToken',
//   refreshTokenSchema,
//   'refreshTokens'
// );
module.exports = mongoose.model(
  'trackedStocks',
  trackedStocksSchema,
  'trackedStocks'
);
