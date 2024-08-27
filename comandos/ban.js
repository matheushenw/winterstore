const Discord = require("discord.js"); 

exports.run = (bot,message,args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("");
    if(!args.length) return message.reply("Utilize o comando: ws.banir");
    let BanMember = message.mentions.users.first() || message.guild.users.get(args[0]);
    if(!BanMember) return message.reply("")
    let BanReason = args.join(" ").slice(22) || args.slice(1).join(" ");
    if(!BanReason){
        banReason = "Quebrou as **REGRAS** do servidor."
}

  try {
      message.guild.member(BanMember).ban(BanReason);
      message.channel.send('ㅤ')

  } catch (error) {
    message.reply(`${error}`);
}
}

exports.help = {
    name: "banir"
}

    
