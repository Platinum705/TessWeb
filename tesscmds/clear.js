module.exports.run = async (client, message, args) => {
 message.delete()
if (!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"]))
    return message.channel.send("Для использования команды вам нужно право управления сообщениями или право администратора");
if(!message.channel.permissionsFor(message.channel.guild.me).has(['MANAGE_MESSAGES', 'ADMINISTRATOR']))
return message.channel.send("Для выполнения этой команды мне нужно право управления сообщениями")
  
let delmsg = message.content.split(" ")
 if(!Boolean(Number(delmsg[1]))) {
  message.reply("Укажите число сообщений для удаления")
  
 } else {
 message.channel.bulkDelete(delmsg[1])
 message.channel.send(`Было удалено ${delmsg[1]} сообщений`)
  .then(msg => msg.delete({"timeout": 2000}))
 }
}

module.exports.help = {
  name: "очистить",
  description: "Очистить сообщения",
  usages: {"очистить <1-100>": "очистить сообщения"},
  category: "Владелец"
}
