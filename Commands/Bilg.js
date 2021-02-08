const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db")
const moment = require("moment")
const conf = require('../config.js');
const ms = require("ms");

module.exports.run = async (client, message, args) => {

let reawEmbed = new Discord.MessageEmbed().setFooter("Gameofis").setColor("010000").setTimestamp()  
let embed = reawEmbed;

if (!args[0]) return message.channel.send(embed.setDescription(`:no_entry_sign: Bir makina ismi girmelisin!\n\n> !bilgi E52643\n> !bilgi RYZEN\n> !bilgi X5690`))  

if (args[0] === "E52643") {
message.channel.send(embed.setDescription(`
Makina Bilgileri:

Intel® Xeon® E5-2643 v2

> 5 işlemcili vds ler ile hızlı ve güvenilir işlemciler ile e5 vds satın al e5sanal sunucular ile yüksek uptime ile kesintisiz hizmet e5 vds alarak sorunsuz hizmetinizi hemen şimdi başlatın.

[Makinaya Git](https://gameofis.com/e5-2643v2-sanal-sunucu-hizmetleri/)
`))
return;
}
if (args[0] === "ryzen") {
message.channel.send(embed.setDescription(`
Makina Bilgileri:

AMD Ryzen™9 3900X ( **Sizin için en iyisi!** )

> Ryzen 9 3900X işlemcili ryzen vdsler ile üstün hızlarda işlem kapasitesi overclocked sunucular ile üst düzey hızlar içeriğinde bulunan nvme ssdler ile 
> 5000mbs okuma yazma hızları ile ryzen sunucular.

[Makinaya Git](https://gameofis.com/ryzen-9-3900x-sanal-sunucu-hizmetleri/)
`))
return;
}
if (args[0] === "X5690") {
message.channel.send(embed.setDescription(`
Makina Bilgileri:

AMD Ryzen™9 3900X ( **Sizin için en iyisi!** )

> Intel® Xeon® X5690 Sanal sunucular yüksek performans ve uygun fiyat garantisi.Yüksek çalışma frekansı ile üst düzey hılzarda çalışmalarınızı yapın 5690 Sanal sunucu kiralama hizmetleri.

[Makinaya Git](https://gameofis.com/intel-xeon-x5690/)
`))
return;
}
};

exports.config = {
  name: "makina",
  guildOnly: false,
  aliases: ["vds", "bilg"],
};