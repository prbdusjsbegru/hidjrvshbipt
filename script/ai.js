const axios = require('axios');
module.exports.config = {
  name: 'orochi',
  version: '1.0.0',
  role: 0,
  hasPrefix: false,
  aliases: ['chi', '.chi', '.orochi'],
  description: "An AI command powered by GPT-4",
  usage: "Ai [promot]",
  credits: 'Developer',
  cooldown: 0,
};
module.exports.run = async function({
  api,
  event,
  args
}) {
  const input = args.join(' ');
try {
    const {
      data
    } = await axios.get(`https://goatbottt.onrender.com/gpt?prompt=${encodeURIComponent(input)}`);
    const response = response.data.answer;
    api.sendMessage(response), event.threadID, event.messageID);
  } catch (error) {
    api.sendMessage('An error occurred while processing your request.', event.threadID, event.messageID);
  }
};
