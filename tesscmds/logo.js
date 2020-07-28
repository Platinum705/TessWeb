

module.exports.run = (client, message, args) => {
  try {
	const embed = new global.embed()
		.setTitle('Логотип сервера')
            .setColor('#affaff')
		.setImage(message.guild.iconURL({ format: 'png', dynamic: true, size: 2048 }))
		 message.channel.send(embed)
 } catch (err) {
message.channel.send('Ошибка выполнения команды')
 } 
}

module.exports.help = {
  name: "лого",
  description: "Узнать аватарку сервера",
  usages: { "лого": "аватарка сервера" },
  category: "Информация"
}
