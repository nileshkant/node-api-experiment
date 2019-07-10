const Channellist = require('./channelList.model');

exports.list = async (pageno, pagesize, query) => {
  try {
    const channelsList = await Channellist.list(pageno, pagesize, query);
    const responseChannelList = channelsList;
    // const responseChannelList = { ...channelsList[0], pageno, pagesize };
    return responseChannelList;
  } catch (error) {
    throw error;
  }
};
