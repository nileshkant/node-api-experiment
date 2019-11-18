const express = require('express');
const controller = require('./channelList.controller');
// const validate = require('express-validation');
// const {
//   channelItems,
// } = require('./channelList.validation');
// const { authorize, LOGGED_USER } = require('../../middlewares/auth');

const router = express.Router();


router
  .route('/:pageno/:pagesize')
  /**
   * @api {get} v1/channel-list/:pageno/:pagesize Channel List
   * @apiDescription Get channel list with pagination
   * @apiVersion 1.0.0
   * @apiName Channel list
   * @apiGroup Channel
   * @apiPermission all
   *
   * @apiParam  {String}  pageno    Page Number
   * @apiParam  {String}  pagesize  Page Size
   *
   * @apiSuccess {String}  Broadcaster Broadcaster
   * @apiSuccess {String}  Channel     Channel
   * @apiSuccess {String}  HD          HD
   * @apiSuccess {String}  category    category
   * @apiSuccess {String}  imageurl    imageurl
   * @apiSuccess {String}  language    language
   * @apiSuccess {String}  price       price
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated Users can access the data
   */
  .get(controller.list);

module.exports = router;
