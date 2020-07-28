const config = require ("../config.json")
const prefix = config.prefix
module.exports = async (client, message) => {
if (
    !message.content.startsWith(prefix) ||
    message.author.bot ||
    message.channel.type === "dm"
  )
    return;
  
  
  
  let messageArray = message.content.split(" "); // разделение пробелами
  let command = messageArray[0]; 
  let args = messageArray.slice(1); // аргументы после команды
  let command_file = client.commands.get(command.slice(prefix.length))
  if (command_file) command_file.run(client, message, args);
}
