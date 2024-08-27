const Discord = require("discord.js"); 

exports.run = (bot,message,args) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return;
 const embed = new Discord.RichEmbed()
 .setTitle("**Essas são as regras da Fire Store, preste muita atenção nelas para evitar punições dentro do servidor**")
 .setDescription("Gostaria de deixar bem claro que não é necessário estar nas regras para ter consciência do que é certo ou errado, então se comprometa em seguir as regras do nosso servidor, para evitar qualquer tipo de banimento. \n \n Atenciosamente, \n Equipe Fire Store. 🪐")
 .setColor(0xC41212)
 .setThumbnail("")
 .setFooter("")
 message.channel.send(embed)
}

exports.help = {
  name: "regras21"
}

