

module.exports.run = (client, message, args) => {
  let randDiap = message.content.split(" ")
  if(randDiap[1] < 0) return message.reply("Диапозон не может быть отрицательным")
  if(!Boolean(Number(randDiap[1]))) {
    message.reply("Укажите число диапозона")
  } else {
  let randNumber = Math.ceil(Math.random() * randDiap[1])
   let embed = new global.embed()
   .setDescription("Вам выпало число: " + randNumber)
   .setColor("#affaff")
   .setTitle("Рандом")
   message.channel.send(embed)
  }
}

module.exports.help = {
  name: "рандом",
  aliases: [],
  description: "Рандомное число от 1 до заданного диапозона",
  usages: { "рандом <диапозон>": "рандомное число от 1 до заданного диапозона" },
  category: "Веселье"
}
 
