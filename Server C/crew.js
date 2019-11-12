const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var botIcon = bot.user.displayAvatarURL;

    var botEmbed = new discord.RichEmbed()
        .setDescription("**GamesNL Member** \n\n **Beheerder**: \n DolfjeGamerNL \n\n **Mede Beheerder**:  \n\n **Managers**: \nChat Manager: \n Support Manager: \n Staff Manager: \n\n**Staff**: \nChat Staff: \n Support Staff: \n \n\n**Partners:** \n Partner: \nPartner: \nPartner: \n\n**Youtubers:** \nYoutuber: \n Youtuber: \n Youtuber: \n")
        .setColor("#00f7ff")
        .setThumbnail(botIcon)
        .addField("Laatst gewijzigd:", "24-10-2019");

    return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "crew"
}