

module.exports.run = async (client, message, args) => {
  let string = args.join(" ")
  let rev = string.split("").reverse().join("")
  const revEmb = new global.embed()
  .setTitle("Перевёрнутый текст")
  .setColor("#affaff")
  .setDescription(rev)
  message.channel.send(revEmb)
}

module.exports.help = {
  name: "реверс",
  description: "Перевернёт ваш текст",
  usages: { "реверс <текст>": "перевернутый текст" },
  category: "Прочее"
}
