const mongoose = require('mongoose');

/**
 * Refresh Token Schema
 * @private
 */
const channelListSchema = new mongoose.Schema({
  Broadcaster: {
    type: String,
  },
  Channel: {
    type: String,
  },
  HD: {
    type: String,
  },
  category: {
    type: String,
  },
  imageurl: {
    type: String,
  },
  language: {
    type: String,
  },
  price: {
    type: String,
  },
});

channelListSchema.statics = {

  list(page = 1, perPage = 2) {
    return this.find({})
      .sort({ createdAt: -1 })
      .skip(perPage * (page - 1))
      .limit(perPage)
      .exec();
  },

};

module.exports = mongoose.model('Channellist', channelListSchema, 'channellist');
