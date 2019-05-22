const Channellist = require('./channelList.model');

exports.list = async () => {
  try {
    const channelsList = await Channellist.list();
    const transformedUsers = channelsList;
    return transformedUsers;
  } catch (error) {
    throw error;
  }
};
