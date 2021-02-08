const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db")
const moment = require("moment")
const conf = require('../config.js');
const ms = require("ms");

module.exports.run = async (client, message, args) => {

let reawEmbed = new Discord.MessageEmbed().setFooter("Black Early BOT").setColor("010000").setTimestamp()  
let embed = reawEmbed;
let tag = args[1];
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("yeterli yetkiye sahip değilsin");

if (args[0] === "ayarla") {
if (db.fetch(`tag.${message.guild.id}`)) return message.reply("zaten tag kurulmuş");
if (!tag) message.reply("bir tag belirt!") 
db.set(`tag.${message.guild.id}`, tag)
message.channel.send(`Sunucu tagı "${tag}" olarak ayarlandı.`)
return;
} 
if (args[0] === "sil") {
if (!db.fetch(`tag.${message.guild.id}`)) return message.reply("zaten tag kurulmamış");
db.delete(`tag.${message.guild.id}`)
message.channel.send(`Sunucu tagı silindi`)
return;
}
};

exports.config = {
  name: "kızrolu",
  guildOnly: false,
  aliases: ["kızrolü"],
};