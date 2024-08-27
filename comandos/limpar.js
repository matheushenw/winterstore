const Discord = require('discord.js')
 
exports.run = (bot,message,args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return;
    let mensagemDeletar = args.slice(0).join("");
    if(mensagemDeletar < 2 || mensagemDeletar > 100) return message.reply("só posso limpar mensagens de 2 a 100")
    if(args.length === 0) return message.reply("utilize ws.limpar 100")
    if(isNaN(args[0])) return message.reply("está faltando um número")

    try {
        message.channel.bulkDelete(mensagemDeletar)
        message.channel.send(`O chat foi limpo por: ${message.author}`)
    } catch(e){
        console.log(e);
    }
    
}
 
exports.help = {
    name: 'limpar'
}