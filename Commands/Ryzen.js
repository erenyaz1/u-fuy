const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db")
const moment = require("moment")
const conf = require('../config.js');
const ms = require("ms");

module.exports.run = async (client, message, args) => {

let reawEmbed = new Discord.MessageEmbed().setFooter("Gameofis").setColor("010000").setTimestamp()  
let embed = reawEmbed;


message.channel.send(embed.setDescription(`
Makina Bilgileri:

AMD Ryzen™9 3900X ( **Sizin için en iyisi!** )

> Ryzen 9 3900X işlemcili ryzen vdsler ile üstün hızlarda işlem kapasitesi overclocked sunucular ile üst düzey hızlar içeriğinde bulunan nvme ssdler ile 
> 5000mbs okuma yazma hızları ile ryzen sunucular.

[Siteye Git](https://gameofis.com/ryzen-9-3900x-sanal-sunucu-hizmetleri/)
`))

};

exports.config = {
  name: "ryzen",
  guildOnly: false,
  aliases: ["vds", "bilg"],
};