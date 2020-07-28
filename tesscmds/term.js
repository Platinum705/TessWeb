const config = require ("../owner.json")
module.exports.run = async (client, message, args) => {
  if(message.author.id != config.CherryTea) 
    return message.reply("Только для создателя")
  let errore = "Не-не-не, не удалишь бота"
  if(message.content.includes("sudo rm -rf --no-preserve-root /"))
    return message.channel.send(errore)
  if(message.content.includes("sudo rm -rf /"))
    return message.channel.send(errore)
  if(message.content.includes("sudo rm -rf /*"))
    return message.channel.send(errore)
  if(message.content.includes("sudo rm -rf ./"))
     return message.channel.send(errore)
  if(message.content.includes("sudo rm -rf ./*"))
    return message.channel.send(errore)
  
  let termRun = args.join(" ")
   require('child_process').exec(termRun)
}

module.exports.help = {
  name: "term",
  aliases: []
}