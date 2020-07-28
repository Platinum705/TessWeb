const strftime = require("strftime");

module.exports.run = (client, message, args) => {
  let memid = message.content.split(" ");
  let member = message.guild.member(
    message.mentions.users.first() || message.guild.members.cache.get(memid[1])
  );
  let argsUser;
  if (member) argsUser = member.user;
  else argsUser = message.author;

  
  const flags = {
	DISCORD_EMPLOYEE: 'Discord Employee',
	DISCORD_PARTNER: '<:emoji_34:727557759247056937>',
	BUGHUNTER_LEVEL_1: 'Bug Hunter (Level 1)',
	BUGHUNTER_LEVEL_2: 'Bug Hunter (Level 2)',
	HYPESQUAD_EVENTS: 'HypeSquad Events',
	HOUSE_BRAVERY: '<:emoji_33:727557721032753245>',
	HOUSE_BRILLIANCE: '<:emoji_32:727557679437971586>',
	HOUSE_BALANCE: '<:emoji_31:727557635968336033>',
	EARLY_SUPPORTER: '<:emoji_28:727557473908555884>',
	TEAM_USER: 'Team User',
	SYSTEM: 'System',
	VERIFIED_BOT: '<:emoji_36:727558400447348806>',
	VERIFIED_DEVELOPER: '<:verify:727557214214291506>'
};
  let userFlags = argsUser.flags ? argsUser.flags.toArray() : []
  let NotFlag = "Отсутствуют"

  let statuses = {
    online: "<:online:728634663358300243> В сети",
    idle: "<:idle:724167166026579999> Нет на месте",
    dnd: "<:dnd:724167100293185588> Не беспокоить",
    offline: "<:offline:728634422991257601> Не в сети"
  };

  let day = 1000 * 60 * 60 * 24;
  let date1 = new Date(message.createdTimestamp);
  let date2 = new Date(argsUser.createdTimestamp);
  let date3 = new Date(message.guild.member(argsUser).joinedTimestamp);
  let diff1 = Math.round(Math.abs((date1.getTime() - date2.getTime()) / day));
  let diff2 = Math.round(Math.abs((date1.getTime() - date3.getTime()) / day));

  let embed = new global.embed()
    .setTitle(argsUser.tag)
    .setDescription(
      `Статус: ${statuses[argsUser.presence.status]}\n`
      
        
    )
  .addField("Значки", `${userFlags.length ? userFlags.map(flag => flags[flag]).join(' ') : NotFlag}`, true)
  .addField("ID пользователя", `${argsUser.id}`, true)
  .addField(
      "Дата регистарции",
      `${strftime(
        "%d.%m.%Y в %H:%M",
        new Date(argsUser.createdTimestamp)
      )}\n(${diff1} дн. назад)`,
      true
    )
    .addField(
      "Дата вступления",
      `${strftime(
        "%d.%m.%Y в %H:%M",
        new Date(message.guild.member(argsUser).joinedTimestamp)
      )}\n(${diff2} дн. назад)`,
      true
    )
    .addField(
      "Роли",
      message.guild.member(argsUser).roles.cache.filter(r => r.id != message.guild.id).map(role => `<@&${role.id}>`).join(', ') || 'Не имеет'
    )
  
    .setColor("#affaff")
    .setTimestamp()
    .setThumbnail(argsUser.avatarURL({ dynamic: true }))
    
  message.channel.send(embed);
};

module.exports.help = {
  name: "юзер",
  description: "Узнать информацию о пользователе",
  usages: { "юзер": "информация о пользователе" },
  category: "Информация"
  
};
