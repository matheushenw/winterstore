const Discord = require("discord.js"); 
const Data = require("moment");

let Moment = Data().format('DD/MM/YYYY');

exports.run = (bot,message,args) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return;
 const embed = new Discord.RichEmbed()
 .setTitle("**E claro, e as regras do próprio Discord**")
 .setDescription(`— Diretrizes da comunidade do Discord: https://discordapp.com/guidelines \n — Termos de serviço do Discord: https://discordapp.com/terms \n \n Ultima atualização: ${Moment}`)
 .setColor(0xC41212)
 .setThumbnail("")
 .setFooter("Fire Store  • ©️ Todos os direitos reservados.")
 message.channel.send(embed)
}

exports.help = {
  name: "regras24"
}

