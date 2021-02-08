const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db")
const moment = require("moment")
const conf = require('../config.js');
const ms = require("ms");

module.exports.run = async (client, message, args) => {

let reawEmbed = new Discord.MessageEmbed().setFooter("Black Early BOT").setColor("010000").setTimestamp()  
let embed = reawEmbed;
  
if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("yeterli yetkiye sahip değilsiniz")

message.guild.members.cache.forEach(reawen => {
reawen.setNickname("")
})
message.channel.send(embed.setDescription(`slm`))
};

exports.config = {
  name: "isimdeğiş",
  guildOnly: false,
  aliases: ["ismdeğş"],
};