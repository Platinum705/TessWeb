module.exports.run = async (client, message, args) => {
 message.delete()
if (!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"]))
    return message.channel.send("Для использования команды вам нужно право управления сообщениями или право администратора");
  let sayArg = args.join(" ")
  message.channel.send(sayArg)

}

module.exports.help = {
  name: "скажи",
  description: "Сообщение от имени бота",
  usages: {"скажи <сообщение>": "Сообщение от имени бота"},
  category: "Владелец"
}
