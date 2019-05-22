const Joi = require('joi');

module.exports = {
  // POST /v1/auth/register
  channelItems: {
    body: {
      Broadcaster: Joi.string(),
      Channel: Joi.string(),
      category: Joi.string(),
      language: Joi.string(),
      HD: Joi.string(),
      imageurl: Joi.string(),
      price: Joi.string(),
    },
  },
};
