const Discord = require("discord.js");
const bot = new Discord.Client()

exports.run = async function (bot, member)  {
  const channel = bot.channels.get("679467531622154318") 
  const embed = new Discord.RichEmbed()
    .setTitle(`${member.user.tag}`)
    .setDescription(`☄️ Seja bem vindo(a) **${member.user}** ao Discord Oficial da **Winter Store** \n \n  🔗 __ID do usuário:__ ${member.user.id} \n \n Caso tenha algúma dúvida, chame nossa equipe! 💙`)
    .setColor(0x11EBDF)
    .setThumbnail("https://cdn.discordapp.com/attachments/679850511373041727/680963217945919548/BackgroundEraser_image.png")
    .setFooter("Winter Store  • ©️ Todos os direitos reservados.")
    channel.send(embed)
    }