const Discord = require("discord.js")
module.exports.run = async function(client, message, args) {
  let botMsg = await message.channel.send("Pinging").then(msg => msg.delete())
  let pings = (botMsg.createdTimestamp - message.createdTimestamp)
  if (pings <= 0) return message.channel.send("Повторите попытку позже")
  let embed = new Discord.MessageEmbed()


    .setTitle("〽️ Информация о боте")
    .setDescription([
      "📊 **Пинг сервера**: `" + pings + "ms`",
      "📊 **API пинг**: `" + Math.round(client.ws.ping) + "ms`",
      "📂 **ОЗУ**: `" + (process.memoryUsage().heapUsed / (1000 * 1000)).toFixed(2) + "MB/512MB`",
      "⚙️ **Процессор**: `" + require('os').cpus()[0].model + "`",
      "⏳ **Время работы**: `" + uptimer(client.uptime) + "`",
      "💻 **ОС**: `" + process.platform + "`",
      "🌐 **Кол-во серверов**: `" + client.guilds.cache.size + "`",
      "👥 **Кол-во участников**: `" + client.users.cache.filter(m => !m.bot).size + "`",
      "🤖 **Кол-во ботов**: `" + client.users.cache.filter(m => m.bot).size + "`",
      "<:emoji_26:726337663086624818> **Кол-во каналов**: `" + client.channels.cache.size + "`",
      "😄 **Кол-во эмоджи**: `" + client.emojis.cache.size + "`"
    ])
    
    .setColor("#affaff")
   message.channel.send(embed)
  }
                                                                                                                                                                       
function uptimer(ms){
  let days = Math.floor(ms / 86400000); // 24*60*60*1000
  let daysms = ms % 86400000; // 24*60*60*1000
  let hours = Math.floor(daysms / 3600000); // 60*60*1000
  let hoursms = ms % 3600000; // 60*60*1000
  let minutes = Math.floor(hoursms / 60000); // 60*1000
  let minutesms = ms % 60000; // 60*1000
  let sec = Math.floor(minutesms / 1000);

  let str = "";
  if (days) str = str + days + "d";
  if (hours) str = str + hours + "h";
  if (minutes) str = str + minutes + "m";
  if (sec) str = str + sec + "s";

  return str;
}



module.exports.help = {
  name: 'стат',
  description: "Узнать статистику",
  usages: { "стат": "статистика бота" },
  category: "Информация"
}
