const Discord = require('discord.js')
 
exports.run = (bot,message,args) => {
if(!message.member.hasPermission("BAN_MEMBERS")) return;
const embed = new Discord.RichEmbed()
 .setTitle("**__COMANDOS DA FIRE STORE__**")
 .setDescription("・ ws.banir \n ・ ws.anunciar \n ・ ws.limpar \n ・ ws.ticket")
 .setColor(0xC41212)
 .setThumbnail("https://images-ext-2.discordapp.net/external/epzo4yc0lJkz5H1t1lWFHhkSZH3N_SYGj_wGDOe5Cek/%3Fwidth%3D467%26height%3D467/https/media.discordapp.net/attachments/663126047058821120/679782076719169567/378_Sem_Titulo_20200219171244.png")
 .setFooter("Fire Store  • ©️ Todos os direitos reservados.")
 message.channel.send(embed)
}
 
exports.help = {
    name: 'ajuda'
}