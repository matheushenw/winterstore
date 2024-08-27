const Discord = require("discord.js"); 

exports.run = (bot,message,args) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return;
 const embed = new Discord.RichEmbed()
 .setTitle("**Regras do chat do servidor**")
 .setDescription("— Seja educado(a), respeito é bom e de graça, use e abuse dele! \n — Proibido qualquer tipo de material ofensivo ou obsceno como links, imagens, mensagens, emojis, pornografia, gore, racismo, sexismo... entre outros. \n — Proibido divulgação, seja no servidor, status, avatar, nome no Discord ou até mesmo no privado. \n — Proibido mencionar os staffs desnecessariamente. \n — Proibido mencionar everyone ou here")
 .setColor(0xC41212)
 .setThumbnail("")
 .setFooter("")
 message.channel.send(embed)
}

exports.help = {
  name: "regras22"
}

