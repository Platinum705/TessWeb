const { MessageEmbed } = require ("discord.js")

module.exports.run = async (client, message, args) => {
  let chooseArg = args.join(" ").split("|")
  if(chooseArg == "")
   return message.channel.send("Укажите что мне нужно выбрать")
  let randArgs = Math.floor(Math.random() * chooseArg.length)
  let answer = chooseArg[randArgs]
  let authorName = message.member.displayName
  const chooseEmbed = new MessageEmbed()
  .setDescription(`**${authorName}**` + ", я выбрал " + `**${answer}**`)
  .setColor("#affaff")
  message.channel.send(chooseEmbed)
  
}

module.exports.help = {
  name: "выбери",
  description: "Попросить бота выбрать что-то за вас",
  usages: { "выбрать <Что-то | Что-то и т.д>": "выберет что-то из заданного списка" },
  category: "Прочее",
  
  
}
