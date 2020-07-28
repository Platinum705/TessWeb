const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
  let verifilv = { 
    NONE      : 'Отсутствует', 
    LOW       : 'Низкий', 
    MEDIUM    : 'Средний', 
    HIGH      : 'Высокий', 
    VERY_HIGH : 'Очень высокий'
}
  
    
    let regions = {
      "russia"       : "Россия",
      "us-west"      : "Западная Америка",
      "us-east"      : "Восточная Америка",
      "us-central"   : "Центральная Америка",
      "us-south"     : "Южная Америка",
      "singapore"    : "Сингапур",
      "southafrica"  : "Южная Африка",
      "sydney"       : "Сидней",
      "europe"       : "Европа",
      "brazil"       : "Бразилия",
      "hongkong"     : "Гонконг",
      "japan"        : "Япония",
      "india"        : "Индия",
      "amsterdam"    : "Амстердам",
      "dubai"        : "Дубай",
      "south-korea"  : "Северная Корея",
      "eu-central"   : "Центральная Европа",
      "frankfurt"    : "Франкфурт", 
      "london"       : "Лондон",
      "eu-west"      : "Западная Европа"
      
    }
  
  
    let embed = new Discord.MessageEmbed() 
        .setTitle(message.guild.name)
        .addField('Владелец', `${message.guild.owner}`, true) 
        .addField('ID', message.guild.id, true)
        .addField('Регион сервера', `${regions[message.guild.region]}`, true)
        .addField(`Участников [${message.guild.memberCount}]`, `${message.guild.presences.cache.size} в сети`, true)
        .addField(`Каналы [${message.guild.channels.cache.size}]`, `${message.guild.channels.cache.filter(c => c.type == 'text').size} текстовых\n${message.guild.channels.cache.filter(c => c.type == 'voice').size} голосовых`, true)
        .addField("Уровень проверки", `${verifilv[message.guild.verificationLevel]}`, true)
        .addField(`Ролей [${message.guild.roles.cache.size}]`, message.guild.roles.cache.map((r) => r.toString().trim()).slice(0, 10).join(' ') || 'Нет', true)
        .addField(`Эмодзи [${message.guild.emojis.cache.size}]`, message.guild.emojis.cache.map((e) => e.toString()).slice(0, 23).join(' ') || 'Нет', true)
        .setFooter('Сервер создан')
        .setThumbnail(message.guild.iconURL({dynamic: true}))
        .setTimestamp(new Date(message.guild.createdTimestamp)) 
        .setColor("#affaff") 
       message.channel.send(embed)
}

module.exports.help = {
  name: "сервер",
  aliases: [],
  description: "Узнать информацию о сервере",
  usages: { "сервер": "Узнать информацию о сервере"},
  category: "Информация"
}
