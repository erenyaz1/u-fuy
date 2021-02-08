const Discord = require("discord.js"),
  client = new Discord.Client();
const db = require("quick.db");
const moment = require("moment");
const conf = require("../config.js");

module.exports.run = async (client, message, args) => {

let reawEmbed = new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setFooter("reawen", message.guild.iconURL({dynamic: true})).setColor("010000")


let reawRole = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]); 
if (!reawRole) return message.channel.send(reawEmbed.setDescription(`:no_entry_sign: Geçerli bir rol belirtmeli/Rol ID'si girmelisin.`))

  
let reawArray = new Array();
let reawÜyeler = reawRole.members.forEach(reaw => {reawArray.push(`<@!${reaw.id}> ( \`${reaw.id}\` )`);})

if (!args[1]) {
message.channel.send(reawEmbed.setDescription(`
${reawRole} ( \`${reawRole.id}\` ) adlı role ait bilgiler aşağıda verilmiştir.

> **Rol Rengi:** \`${reawRole.hexColor}\`
> **Rol ID'si:** \`${reawRole.id}\` 
> **Roldeki Kişi Sayısı**: \`${reawRole.members.size}\`


**Roldeki kişiler:**

${reawRole.members.size <= 15 ? reawArray.join("\n") : `Listelenemedi! ( **${reawRole.members.size}** kişi var! )`}

\`NOT:\` **Rolde 15 kişiden fazla kullanıcı var ise bot bunları listeyemez!**
`))
return;
}
if (args[1] === "sayı") {
message.channel.send(reawEmbed.setDescription(`
${reawRole} ( \`${reawRole.id}\` ) adlı rolde toplam **${reawRole.members.size}** kişi bulunmaktadır!
`))
return;
} else if (args[1] === "id") {
message.channel.send(reawEmbed.setDescription(`
${reawRole} ( \`${reawRole.name}\` ) adlı rolün ID'si: \`${reawRole.id}\`
`))
return;
} else if (args[1] === "renk") {
message.channel.send(reawEmbed.setDescription(`
${reawRole} ( \`${reawRole.id}\` ) adlı rolün renk kodu: \`${reawRole.hexColor}\`
`))
return;
} else if (args[1] === "üyeler") {
message.channel.send(reawEmbed.setDescription(`
${reawRole} ( \`${reawRole.id}\` ) adlı rolündeki kişiler:

${reawRole.members.size <= 15 ? reawArray.join("\n") : `Listelenemedi! ( **${reawRole.members.size}** kişi var! )`}

\`NOT:\` **Rolde 15 kişiden fazla kullanıcı var ise bot bunları listeyemez!**
`))
return;
}
};

exports.config = {
  name: "rolbilgi",
  guildOnly: false,
  aliases: ["rb", "rolinfo"]
};
