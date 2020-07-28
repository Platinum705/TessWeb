const translate = require("translate"); //Модуль.
translate.engine = "yandex"; 
translate.key = "trnsl.1.1.20200524T123911Z.f94a846bd130d569.845c856e5b656776a1105a0783ea25f1d1e7284e" 
module.exports.run = async (client, message, args) => {
  var args1 = message.content.toLowerCase().split(/ +/g); 
  let RU = ["ru", "русский", "russian"];
  let EN = ["en", "английский", "english"];
  let text = args.slice(1).join(" "); 
  if (!args[0]) return message.channel.send("Напиши с какого языка переводить (ru, en)");
  if(!text) return message.channel.send("Укажите текст для перевода!")
  if (args1.some(a => RU.find(word => word == a))) { 
    translate(text, { from: "ru", to: "en" }).then(text2 => { //Переводим с RU на EN
      
     let embed = new global.embed()
      .setColor("#affaff")
      .addField("Перевод с русского на английский:", text2)
      .setFooter("Перевод выполнен с помощью сервиса: https://translate.yandex.ru/")
      message.channel.send(embed)
    });
    return
  }
  if (args1.some(a => EN.find(word => word == a))) {
    translate(text, { from: "en", to: "ru" }).then(text => { //Тоже самое, но наоборот.
      
      let embed = new global.embed()
      .setColor("#affaff")
      .addField("Перевод с английского на русский:", text)
      .setFooter("Перевод выполнен с помощью сервиса: https://translate.yandex.ru/")
      message.channel.send(embed)
    });
    return
  }
  message.channel.send("Ошибка в написании команды")
};
module.exports.help = {
  name: "переведи",
  description: "Перевести ваш текст с английского на русский или с русского на английский",
  usages: { "переведи <ru или en> <текст>": "Перевести вас текст с ru-en или с en-ru"},
  category: "Прочее"
}
