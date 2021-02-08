const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db")
const moment = require("moment")
const conf = require('../config.js');
const ms = require("ms");

module.exports.run = async (client, message, args) => {

let reawEmbed = new Discord.MessageEmbed().setFooter("Black Early BOT").setColor("010000").setTimestamp()  
let embed = reawEmbed;
  
  
let sebep = args.splice(1).join(" ") || "belirtilmedi";
let reaw = message.mentions.members.first() || message.guild.members.cache.get(args[0])
if (!reaw) message.reply("üye belirtmelisin.");
if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("yeterli yetkiniz yok");
  
reaw.ban({reason: sebep});
message.channel.send(embed.setDescription(`${reaw} üyesi ${message.author} tarafından **${sebep}** sebebiyle yasaklandı!`))
};

exports.config = {
  name: "ban",
  guildOnly: false,
  aliases: ["sg"],
};