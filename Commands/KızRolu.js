const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db")
const moment = require("moment")
const conf = require('../config.js');
const ms = require("ms");

module.exports.run = async (client, message, args) => {

let reawEmbed = new Discord.MessageEmbed().setFooter("Black Early BOT").setColor("010000").setTimestamp()  
let embed = reawEmbed;
let rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("yeterli yetkiye sahip değilsin");

if (args[0] === "ayarla") {
if (db.fetch(`kızRolu.${message.guild.id}`)) return message.reply("zaten kurulu");
if (!rol) message.reply("bir rol belirtmelisin.");
db.set(`kızRolu.${message.guild.id}`, rol.id);
message.channel.send(embed.setDescription(`Kadın rolü ${rol} olarak ayarlandı!`))
return;
}
if (args[0] === "sil") {
if (!db.fetch(`kızRolu.${message.guild.id}`)) return message.reply("zaten kurulu değil");
db.delete(`kızRolu.${message.guild.id}`);
message.channel.send(embed.setDescription(`Kadın rolü silindi!`))
return;
}
};

exports.config = {
  name: "kızrolu",
  guildOnly: false,
  aliases: ["kızrolü"],
};