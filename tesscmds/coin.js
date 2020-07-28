

module.exports.run = (client, message, args) => {
  message.delete()
  let coin = Math.floor(Math.random() * 2) + 1
   if(coin == 1) {
     let embed = new global.embed()
     .setDescription("Вам выпала **решка** <:emoji_22:717060676173955182>")
     .setColor ("#affaff")
     .setTitle("Монетка")
     message.channel.send(embed)
     }
   if(coin == 2) {
     let embed2 = new global.embed()
     .setDescription("Вам выпал **орёл** 🦅")
     .setColor("#affaff")
     .setTitle("Монетка")
     message.channel.send(embed2)
   }
}

module.exports.help = {
  name: "монетка",
  description: "Подбросить монетку",
  usages: { "монетка": "подбросить монетку" },
  category: "Веселье"
}
