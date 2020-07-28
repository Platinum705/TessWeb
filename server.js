const fs = require("fs");
const Discord = require("discord.js")
const client = new Discord.Client({ 
  messageCacheMaxSize: 50,
  messageCacheLifetime: 300,
  messageSweepInterval: 240
})
 
const config = require("./config.json")
const cherry = require ("./owner.json")
const prefix = config.prefix;
client.commands = new Discord.Collection()


const configUr = require ("./config.json")
const ownerConfig = require ("./owner.json")


/////////Глобальные переменные///////////////////   
global.owner = ownerConfig.CherryTea           //
global.config = configUr.prefix                //
global.embed = Discord.MessageEmbed            //
/////////////////////////////////////////////////

let pingBot = "<@479713309881532416>"
let pingBotPC = "<@!479713309881532416>"

client.on('message', message => {
if(message.content.startsWith(pingBot)) {
    let prefixEmb = new Discord.MessageEmbed()
    .setColor("#affaff")
    .setDescription("Мой префикс: `" + global.config + "`")
    message.channel.send(prefixEmb)
  }
  if(message.content.startsWith(pingBotPC)) {
    let pcemb = new Discord.MessageEmbed()
    .setColor("#affaff")
    .setDescription("Мой префикс: `" + global.config + "`")
    message.channel.send(pcemb)
  }
   if(message.author.id == '292178755760422915' && message.guild.id == '723011298211659778') {
   message.delete().catch(() => {})
  }
})





//


fs.readdirSync("./events/")
  .filter(file => file.endsWith(".js"))
  .forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
    delete require.cache[require.resolve(`./events/${file}`)];
  });


//loadcommands



fs.readdir("./tesscmds/", (err, files) => {

    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
        console.log("Couldn't find commands.");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./tesscmds/${f}`);
       
        console.log(`[BOOT]${i + 1}.${f}| ✅`);
      client.commands.set(props.help.name, props);
  

    });
});


client.login(process.env.TOKEN)
