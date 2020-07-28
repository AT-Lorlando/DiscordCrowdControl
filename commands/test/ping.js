/* eslint-disable no-unused-vars */
module.exports.run = (client, message, args) => {
  message.channel.send('Pong!')
}

module.exports.help = {
  name: 'ping',
  description: 'Renvoie pong!',
  args: false,
  admin: false,
}
