const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (client, message, args) => {
        const { body } = await superagent
            .get("https://nekos.life/api/v2/img/neko");
        const embed = new Discord.MessageEmbed()
            .setColor("#affaff")
            .setImage(body.url)
        message.channel.send(embed)
  
};

module.exports.help = {
  name: "неко",
  description: "Покажет картинку неко",
  usages: {"неко": "картинка с неко"},
  category: "Веселье"
}
