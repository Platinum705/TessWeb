let token = process.env.SDC;
const sdc = new (require("@megavasiliy007/sdc-api"))(token);

module.exports = async (client) => {

setInterval (() => {
    sdc.setAutoPost(client)
}, 1200000);

setInterval(function(){
    switch(Math.ceil(Math.random()*7+1)){ // 7-число статусов! Его надо менять тоже
      case 1:
      client.user.setActivity(`на ${client.users.cache.size} участника`,{ type: 'WATCHING'})
      break;
      case 2:
      client.user.setActivity(`на ${client.guilds.cache.size} сервер`,{ type: 'WATCHING'})
      break;
      case 3:
      client.user.setActivity(`OSU!`,{ type: 'PLAYING'})
      break;
      case 4:
      client.user.setActivity(`Minecraft`,{ type: 'PLAYING'})
      break;
      case 5:
      client.user.setActivity(`Spotify`,{ type: 'LISTENING'})
      break;
      case 6:
      client.user.setActivity(`На свой код`,{ type: 'WATCHING'})
      break;
      case 7:
      client.user.setActivity(`на ${client.users.cache.size} участника`,{ type: 'WATCHING'})
      break;
}
  },10000);
}
