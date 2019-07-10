// const httpStatus = require('http-status');
const service = require('./channelList.service');
// const { handler: errorHandler } = require('../../middlewares/error');

/**
 * Get channels
 * @public
 */
exports.list = async (req, res, next) => {
  try {
    const response = await service.list(Number(req.params.pageno), Number(req.params.pagesize), req.query);
    return res.json(response);
  } catch (error) {
    return next(error);
  }
};
