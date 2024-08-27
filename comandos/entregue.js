const Discord = require('discord.js')
const Data = require("moment");

exports.run = (bot,message,args) => {
    let splitarg = args.join(" ").split(" / ");
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return;
    if(args.length === 0){
        return message.reply("utilize o comando: ws.entregue <nick> <produto>")
    }

    let Cliente = message.mentions.users.first()
    let Produto = args.join(" ").slice(22) || args.slice(1).join(" ");
    let Moment = Data().format('DD/MM/YYYY');

    const embed = new Discord.RichEmbed()
    .setTitle("**PRODUTO ENTREGUE COM SUCESSO!**") 
    .setDescription(`💥 Cliente: ${Cliente} \n 📦 Produto: **${Produto}** \n \n Produto entregue: __${Moment}__`)
    .setColor(0xC41212) 
    .setThumbnail("https://images.emojiterra.com/google/android-pie/512px/1f525.png")
    .setFooter("Fire Store  • ©️ Todos os direitos reservados.")
    message.channel.send(embed)
}

exports.help = {
    name: 'entregue'
}