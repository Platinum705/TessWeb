



module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission(["KICK_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("Вы должны иметь право кикать участников или право администратора")

    let kickMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
    if(!kickMember) return message.channel.send("Укажите кого кикнуть")
    if(message.guild.member(kickMember).hasPermission(["KICK_MEMBERS", "ADMINISTRATOR"]))
      return message.channel.send("Невозможно кикнуть данного участника")

    let reason = args.slice(1).join(" ")
    if(!reason) reason = "Нет причины"

    if(!message.guild.me.hasPermission(["KICK_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("Я не могу выполнить это. Для успешного выполнения мне нужно право кикать участников или права администратора")

    kickMember.send(`Привет, вы были кикнуты с ${message.guild.name} по причине: ${reason}`).then(() => 
    kickMember.kick({reason: reason})).catch(err => console.log(err))

    message.channel.send(`**${kickMember.user.tag}** успешно кикнут`).then(m => m.delete({"timeout": 5000}))



}

module.exports.help = {
    name: "кик",
    description: "Выгнать участника",
    usages: { "кик": "выгнать участника" },
    category: "Модерация"
}
