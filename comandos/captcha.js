const Discord = require('discord.js')
 
exports.run = (bot,message,args) => {
const embed = new Discord.RichEmbed()
 .setTitle("**TESTE DE DESAFIO COGNITIVO **")
 .setDescription("Você é realmente um **HUMANO**? \n Clique na reação abaixo para verificar que você não é um robô.")
 .setColor(0xC41212)
 .setThumbnail("https://cdn.discordapp.com/attachments/679850511373041727/680963217945919548/BackgroundEraser_image.png")
 .setFooter("Fire Store  • ©️ Todos os direitos reservados.")
 message.channel.send(embed)
}
 
exports.help = {
    name: 'reacaokkk123123'
}