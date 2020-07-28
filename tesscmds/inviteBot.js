
module.exports.run = (client, message, args) => {
  const embed = new global.embed()
            .setTitle("Приглашение")
            .setColor("#00BFFF")
            .setDescription (
             "[Пригласить бота](https://discord.com/oauth2/authorize?client_id=479713309881532416&permissions=21474836398&scope=bot)"
             )
            .setFooter("Приглашение|Tess bot")
            .setTimestamp();
    message.channel.send(embed)
    .catch(console.error)  
}

module.exports.help = {
  name: "инвайт",
  description: "Пригласить бота к себе на сервере",
  usages: { "инвайт": "пригласить бота"},
  category: "Прочее"
}
