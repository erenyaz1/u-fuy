const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db")
const moment = require("moment")
const conf = require('../config.js');
const ms = require("ms");

module.exports.run = async (client, message, args) => {

let reawEmbed = new Discord.MessageEmbed().setFooter("Black Early BOT").setColor("010000").setTimestamp()  
let embed = reawEmbed;
  
let rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);
if (!rol) return message.reply("rol belirt.")
if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("yeterli yetkiye sahip değilsiniz")

message.guild.members.cache.forEach(reawen => {
reawen.roles.add(rol)
})
message.channel.send(embed.setDescription(`${rol} rolü dağıtıldı.`))
};

exports.config = {
  name: "herkeserolver",
  guildOnly: false,
  aliases: ["hrv"],
};