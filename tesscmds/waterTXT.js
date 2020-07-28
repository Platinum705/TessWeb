const Discord = require ("discord.js")

let emb = Discord.MessageEmbed
module.exports.run = async (client, message, args) => {
  try {
  let txt = args.join(" ")
  let replTxt = txt.replace(/ /g, '+')
  let txtWater = "https://flamingtext.com/net-fu/proxy_form.cgi?script=water-logo&text=" + replTxt + "+&_loc=generate&imageoutput=true"
  
  let txtEm = new emb()
  .setImage(txtWater)
  .setColor("#affaff")
  message.channel.send(txtEm)
  
  
  } catch (err) {
    message.reply("Укажите текст на английском")
  }
}

module.exports.help = {
  name: "текст",
  description: "Текст в водном стиле",
  useges: {"текст <текст на английском>": "текст в водном стиле"},
  category: "Прочее"
}
