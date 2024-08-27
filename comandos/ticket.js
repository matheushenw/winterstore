const Discord = require('discord.js')
exports.run = async (bot, message, args) => {
if(!message.member.hasPermission('ADMINISTRATOR')) return;

const embed = new Discord.RichEmbed() 
embed.setTitle("**DESEJA ABRIR UM TICKET?**")
embed.setDescription("Selecione uma reação correspondente á categoria de **TICKET** que você deseja abrir: \n \n **🛒 Ticket de compras** \n **📫 Ticket de Suporte** \n \n A nossa staff **SEMPRE** estará disposta em lhe auxiliar da melhor forma possível, também é valido relembrar que a criação de **TICKETS** desnecessários pode resultar em punições.")
embed.setFooter("Fire Store  • ©️ Todos os direitos reservados.")
embed.setColor(0xC41212) 

const mensagem = await message.channel.send(embed)

const emojis = ["🛒", "📫"]

for (const emoji of emojis) await mensagem.react(emoji);

const filtro = reaction => emojis.includes(reaction.emoji.name)

mensagem.createReactionCollector(filtro)
    .on("collect", async reaction => {
    const reagido = reaction.users.last();

        if (reaction.emoji.name === emojis[0]) {

            const canal = await message.guild.createChannel(`compra-` + reagido.username, { type: "text" })

            await canal.setParent(`680986011370782728`);
            await canal.lockPermissions();
            await canal.overwritePermissions(reagido, { SEND_MESSAGES: true, VIEW_CHANNEL: true });

            embed.setTitle("**TICKET DE COMPRAS**")
            embed.setDescription(`Olá, ${reagido}, a partir desse chat, sucederá a **COMPRA** do nossos produtos. O dono irá lhe auxiliar para que tudo ocorra bem! ☄️ \n \n Caso você queira **FECHAR** o seu ticket de compras, basta clicar na reação abaixo.`)
            canal.send(embed).then(async canalmensagem => {
            canalmensagem.react('681004068465934342') 

            let filtro = (reaction, usuario) => reaction.emoji.id === "681004068465934342" && usuario.id === reagido.id;
            const coletor = canalmensagem.createReactionCollector(filtro);
            coletor.on("collect", seila => {
            canal.delete()
            })
            })
        }

        if (reaction.emoji.name === emojis[1]) {

            const canal = await message.guild.createChannel(`dúvida-` + reagido.username, { type: "text" })

            await canal.setParent(`680986011370782728`);
            await canal.lockPermissions();
            await canal.overwritePermissions(reagido, { SEND_MESSAGES: true, VIEW_CHANNEL: true });
            embed.setTitle("**TICKET DE DÚVIDAS**")
            embed.setDescription(`Olá, ${reagido}, a partir desse chat, sucederá o **SUPORTE** da staff do servidor. O dono irá lhe auxiliar para que tudo ocorra bem! ☄️ \n \n Caso você queira **FECHAR** o seu ticket de compras, basta clicar na reação abaixo.`)
            canal.send(embed).then(async canalmensagem => {
            canalmensagem.react('681004068465934342') 

            let filtro = (reaction, usuario) => reaction.emoji.id === "681004068465934342" && usuario.id === reagido.id;
            const coletor = canalmensagem.createReactionCollector(filtro);
            coletor.on("collect", seila => {
            canal.delete()
            })
            })
        }
    })
}
exports.help = {
    name: 'ticket'
}