const Discord = require('discord.js')
const sa = require('superagent')

module.exports.run = async (client, message, args) => {
    var { body } = await sa.get(`https://randomfox.ca/floof/`)
    var fox = new Discord.MessageEmbed()
        .setColor('#affaff')
        .setImage(body.image)
    message.channel.send(fox)
}
module.exports.help = {
    name: 'лис',
    description: "Покажет картинку с лисичками",
    usages: { 'лис': 'картинка с лисичками' },
    category: "Веселье"
}
