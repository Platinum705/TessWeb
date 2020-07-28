const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"]))
    return message.channel.send("Отказано в доступе");
  
  let banMember =
    message.mentions.members.first() ||
    message.guild.members.cache.get(args[0]);
  let owner = "<@405258156063850497>"
  if(message.guild.member(banMember).hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"]))
    return message.channel.send("Невозможно забанить данного пользователя")
  if(message.content.includes(owner))
    return message.reply("Нет уж, дружок-пирожок, моего создателя в обиду не дам")
  if (!banMember) return message.channel.send("Укажите кого забанить");

  let reason = args.slice(1).join(" ");
  if (!reason) reason = "Нет причины";

  if (!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"]))
    return message.channel.send(
      "Я не могу выполнить это. Для успешного выполнения мне нужно право на бан участников или права администратора"
    );

  banMember
    .send(
      `Привет, вы были забанены на ${message.guild.name} по причине: ${reason}`
    )
    .then(() =>
      message.guild.member(banMember).ban({reason: reason})
    )
    .catch(err => console.log(err));

  message.channel
    .send(`**${banMember.user.tag}** успешно забанен`)
    .then(m => m.delete({"timeout": 5000}));

};

module.exports.help = {
  name: "бан",
  description: "Забанить участника",
  usages: { "бан <@ник> <@причина>": "забанить участника" },
  category: "Модерация"
};
