const Discord = require('discord.js')
 
exports.run = (bot, message, args) => {
    if(!message.member.hasPermission('MANAGE_MESSAGES')){
        message.reply("**você não tem permissão.**")
    } else {
    message.channel.send('Deseja enviar o anúncio em qual canal?').then(msg1 => {
        let c1 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
        .on('collect', c => {
            canal = c.mentions.channels.first()
 
            if(!canal){
                message.channel.send('Esse canal não existe.')
            } else {
 
                message.channel.send('Qual título do anúncio?').then(msg2 => {
                    let c2 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
                    .on('collect', c => {
                        titulo = c.content
 
                        message.channel.send('**Qual o anúncio?**').then(msg3 => {
                            let c3 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
                            .on('collect', c => {
                                anuncio = c.content
                                message.channel.send('**Anúncio enviado com sucesso!**')
 
                                let embed = new Discord.RichEmbed()
                                .setTimestamp()
                                .setTitle(titulo)
                                .setColor(0xC41212)
                                .setDescription(anuncio)
                                .setFooter(`Anunciado por: ${message.author.username}`, message.author.avatarURL)
 
                                canal.send('@everyone')
                                canal.send(embed)
                                })
                            })
                        })
                    })
                }
            })
        })
    }
}
 
exports.help = {
    name: 'anunciar'
}