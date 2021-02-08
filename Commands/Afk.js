const Discord = require("discord.js"),
  client = new Discord.Client();
const db = require("quick.db");
const moment = require("moment");
const conf = require("../config.js");
const ms = require("ms");

module.exports.run = async (client, message, args) => {
  let reawEmbed = new Discord.MessageEmbed()
    .setFooter("Reawen ❤️ Phentos")
    .setColor("010000")
    .setTimestamp();
  let embed = reawEmbed;

  const reawen = db.fetch(`afkid_${message.author.id}_${message.guild.id}`);
  if (reawen) return;
  const sebep = args[0]
    ? args
        .join(" ")
        .replace(new RegExp("@everyone", "g"), "everyone")
        .replace(new RegExp("@here", "g"), "here")
    : "Sebep Belirtilmedi";
  const b = message.member.displayName;
  await db.set(`afkSebep_${message.author.id}_${message.guild.id}`, sebep);
  await db.set(
    `afkid_${message.author.id}_${message.guild.id}`,
    message.author.id
  );
  await db.set(`afkAd_${message.author.id}_${message.guild.id}`, b);
  await db.set(`afk_süre_${message.author.id}_${message.guild.id}`, Date.now());
  message.channel
    .send(
      `<a:dogrulama1:796473536855408670> ${message.author} seni **[AFK]** olarak ayarladım ve mesajını şu şekilde ayarladım: **${sebep}**`
    )
    .then(m => {
      m.delete(10000);
    });
  message.member.setNickname("[AFK] " + b);
};

exports.config = {
  name: "afk",
  guildOnly: false,
  aliases: ["Afk"]
};
