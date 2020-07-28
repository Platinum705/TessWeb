module.exports = async (client, guild) => {

  

    let channelID;
    let channels = guild.channels.cache.filter(c => c.type == "text")
    channelLoop:
        for (let c of channels) {
            let channelType = c[1].type;
            if (channelType === "text") {
                channelID = c[0];
                break channelLoop;
            }
        }

    let channel = client.channels.cache.get(guild.systemChannelID || channelID);
    const emb = new global.embed()
    .setColor("#affaff")
    .setTitle("Добавление бота на сервер")
    .setDescription (
     "Благодарю администрацию сервера за добавление меня на сервер\n" +
     "Узнать мои команды вы можете прописав `?хелп`\n" +
     "По всем вопросам, багам и идеям писать на [Сервер Поддержки](https://discord.gg/u4m2cFb)"

    )
    channel.send(emb)
    
}
