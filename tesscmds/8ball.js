const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
    if (!args[0]) return message.reply("Укажите вопрос");
    let replies = ["Да", "Нет", "Возможно", "Не знаю ответа", "Сейчас не могу дать точного ответа", "Что за тупые вопросы?"];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(0).join(" ");
    if(!question.includes('?')) return message.reply('Укажите вопросительный знак в конце вопроса')
  
    

    let e = new global.embed()
        .setAuthor(message.author.tag)
        .setColor("#affaff")
        .addField("Ответ:", replies[result]);

    message.channel.send(e);
}
module.exports.help = {
  name: "шар",
  description: "Задать вопрос великому магу чайного королевства",
  usages: { "шар <вопрос>": "задать вопрос" },
  category: "Веселье"

}
