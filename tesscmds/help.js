const Discord = module.require('discord.js');
const config = require("../config.json")
module.exports.run = async (client, message, args) => {


    const srvprefix = config.prefix

    try {

        let helpembed = new Discord.MessageEmbed()

        .setTitle('Помощь')

        .setDescription(`**Если хотите узнать поподробнее о команде напишите \`${srvprefix}хелп\` __команда__**`)

        .setColor('5CCFFF')
       // .setFooter("Выражаю благодарность MrLivixx#0001 за помощь");
     

        const sendCommandList = (message) => {

            let cmdlist = [];

            let commands = [];

            let command_names = [];



            

            const modules = client.commands.map(command => command.help.category).filter((m, i, self) => self.indexOf(m) === i).forEach(category => {

                let cmds = client.commands.filter(command => command.help.category === category);



                let command_names = [];

                cmds.forEach(e => command_names.push(`**\`${config.prefix}${e.help.name}\`**`));

                command_names = command_names.join(' ');
               if(command_names.includes("code")) return;

                helpembed.addField(`${category}`, `${command_names}`, false);

              });

            return message.channel.send(helpembed)

        }



        const sendCommandInfo = (commandName) => {

            let errEmbed = new Discord.MessageEmbed();



            let command = client.commands.get(commandName) /*|| client.commands.get(client.aliases.get(commandName));*/

            if(!command) {

                /*client.sendErrEmbed*/errEmbed.setDescription(/*errEmbed*/ `Такой команды нет`);
                 errEmbed.setColor("#ff0000")

                    return message.channel.send(errEmbed)

            }



            const usages = [];

            if(!command.help.usages){

                usages.append('Нет примеров использования');

            } else {

                for(const e in command.help.usages) {

                    usages.push(`\`${e}\` => \`${command.help.usages[e]}\``)

                }

            }

            

            let cmdEmbed = new Discord.MessageEmbed()

            .setTitle(`Информация о \`${config.prefix}${command.help.name}\``)

            .setDescription(`**${command.help.description}**`)

          //  .addField('Другие методы использования', `**${command.help.aliases.join(', ')}**`, false)

            .addField('Пример использования', `**${srvprefix}${usages.join('\n')}**`)

            .setColor('#affaff')
           // .setFooter("Выражаю благодарность MrLivixx#0001 за помощь")
        
            



            return message.channel.send(cmdEmbed)

        }

        let cmd = args[0];

        if (!cmd) return sendCommandList(message);

        else return sendCommandInfo(cmd);

    } catch (err) {

        console.warn(err.stack);

    }


};



module.exports.help = {

    name: 'хелп',

    aliases: [],

    description: 'Показать список команд / Показать описание команды',

    usages: { 'хелп': 'Показать весь список команд' },

    category: "Помощь"

};