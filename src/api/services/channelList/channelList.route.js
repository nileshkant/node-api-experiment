const express = require('express');
const controller = require('./channelList.controller');
// const validate = require('express-validation');
// const {
//   channelItems,
// } = require('./channelList.validation');
// const { authorize, LOGGED_USER } = require('../../middlewares/auth');

const router = express.Router();


router
  .route('/')
  .get(controller.list);

module.exports = router;
