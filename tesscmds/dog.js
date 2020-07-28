const Discord = require('discord.js')
const sa = require('superagent')

module.exports.run = async (client, message, args) => {
    var { body } = await sa.get(`https://random.dog/woof.json`)
    var dog = new global.embed()
        .setColor('#affaff')
        .setImage(body.url)
    message.channel.send(dog)
}
module.exports.help = {
    name: 'пёс',
    description: "Покажет картинку с пёсиком",
    usages: { "пёс": "картинка с пёсиком" },
    category: "Веселье"
}
