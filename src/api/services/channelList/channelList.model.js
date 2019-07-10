const mongoose = require('mongoose');
// const mongoosePaginate = require('mongoose-paginate');

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

// const channel = channelListSchema.plugin(mongoosePaginate);
channelListSchema.statics = {
  async list(page = 1, perPage = 10, query = undefined) {
    try {
      let listItem = {};
      const queryString = query && query;
      if (query.search) {
        queryString.Channel = { $regex: decodeURIComponent(query.search), $options: 'i' };
        delete queryString.search;
      }
      const totalCount = await this.count(queryString).exec();
      const records = await this.find(queryString)
        .sort({ createdAt: -1 })
        .skip(perPage * (page - 1))
        .limit(perPage)
        .exec();
      listItem = { records, totalCount };
      return listItem;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = mongoose.model('Channellist', channelListSchema, 'channellist');
