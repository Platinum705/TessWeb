
module.exports.run = (client, message, args) => {
  

    let userr = message.mentions.users.first() || client.users.cache.get(args[0])
  
   if(userr == null) {
     const embed = new global.embed()
     .setTitle("Аватар пользователя:" + message.author.username)
     .setColor("affaff")
     .setImage(message.author.avatarURL({
       dynamic: true,
       format: 'png',
       size: 2048
     }))
     
               message.channel.send(embed)
   } else {
  
		const embed = new global.embed()
		 .setTitle('Аватар пользователя:' + userr.username)
                 .setColor('#affaff')
		 .setImage(userr.avatarURL({dynamic: true, format: 'png', size: 2048}))
                               

		 message.channel.send(embed)
    
   }

}
   //message.channel.send("Пользователя мне, пользователя")



module.exports.help = {
  name: "аватар",
  aliases: [],
  description: "Узнать аватарку пользователя",
  usages: { "аватар <@ник>": "аватарка пользователя" },
  category: "Информация" 
}