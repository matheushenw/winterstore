const Discord = require("discord.js"); 

exports.run = (bot,message,args) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return;
 const embed = new Discord.RichEmbed()

 .setTitle("**Termos de compra**")
 .setDescription("— É **estritamente** proibido desmotivar alguém a comprar nossos produtos. \n — É **estritamente** proibido a criação de tickets desnecessários. \n — O reembolso só será válido caso o produto não tenha sido entregue.")
 .setColor(0xC41212)
 .setThumbnail("")
 .setFooter("")
 message.channel.send(embed)
}

exports.help = {
  name: "regras23"
}

