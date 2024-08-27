const Discord = require("discord.js")
const bot = new Discord.Client()
const config = require("./config.json")
const fs = require("fs");
const colors = require('colors');
const moment = require("moment"); 
bot.commands = new Discord.Collection();

fs.readdir("./comandos/", (err, files) => {
  if(err) console.error(err);

  bot.on('raw', async (callback) => {});

  console.log(`Lista de comandos:`.red)
  let arquivojs = files.filter(f => f.split(".").pop() == "js");
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/${f}`);
    console.log(`Comando ${f} foi carregado com sucesso.`)
    bot.commands.set(props.help.name, props);
  });//vai no dc de teste

});

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let elly = file.split(".")[0];
    bot.on(elly, (...args) => eventFunction.run(bot, ...args));
    console.log(`Lista de eventos:`.red); 
    console.log(`Evento ${file} foi carregado com sucesso.`)
    console.log(""); 
  });
})


bot.on("ready", () => {
  console.log(""); 
  console.log(""); 
  console.log(`Aplicativo em uso: ${bot.user.tag}`.red)
  bot.user.setPresence({ game: { name: 'Store', type: 1, url: 'https://www.twitch.tv/'} });
});

bot.on('message', message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);

  let arquivocmd = bot.commands.get(command.slice(prefix.length));
  if(arquivocmd) arquivocmd.run(bot,message,args);
});

bot.login(config.token)