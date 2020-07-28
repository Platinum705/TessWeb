
const shorten = require('isgd')

module.exports.run = async (client, message, args) => {
    if(args == "") return message.channel.send("Укажите ссылку")
    let embed = new global.embed()
            .setTitle(message[0])
            .setColor('#affaff')
            .setTitle("Сокращение");
    if (!args[0]) { embed.setDescription(message[1]); return message.channel.send(embed); };
    if (!args[1]) {
        shorten.shorten(args[0], function (res) {
            if (res.startsWith('Ошибка:')) { embed.setDescription(message[1]); return message.channel.send(embed); };
            embed.setDescription(`*<${res}>*`);
            embed.setColor('#affaff');
            embed.setTitle("Сокращение");
            return message.channel.send(embed);
        })
    } else {
        shorten.custom(args[0], args[1], function (res) {
            if (res.startsWith('Ошибка')) { embed.setDescription(`${res}`); return message.channel.send(embed); };
            embed.setColor('#ff00cc');
            embed.setTitle("Сокращение")
            embed.setDescription(`*<${res}>*`); 
            return message.channel.send(embed);

        })
    }
}

module.exports.help = {
    name: "сократи",
    description: "Сократить ссылку",
    usages: { "сократи <ссылка>": "сократить ссылку" },
    category: "Прочее"
}
