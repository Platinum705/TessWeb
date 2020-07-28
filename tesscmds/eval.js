module.exports.help = {
  name: "code"
}

module.exports.run = async function(client, message, args) {
  if(message.author.id != global.owner) return message.channel.send("Только для создателя")
  let code = args.join(" ");
  try {
    let evaled = await eval(code);
    if (typeof evaled !== "string") evaled = require("util").inspect(evaled);

    let evalembed = new global.embed()
    .setDescription("```" + evaled + "```")
    .setColor ("#affaff")
    message.channel.send(evalembed)
  } catch(e) {
    if (typeof(e) == "string") e = e.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203))
    let evalerror = new global.embed() 
    .setDescription("```" + e + "```")
    .setColor("#ff0000")
     message.channel.send(evalerror)
  }
}
