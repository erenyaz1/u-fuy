const Discord = require("discord.js"),
  client = new Discord.Client();
const db = require("quick.db");
const moment = require("moment");
const conf = require("../config.js");

module.exports.run = async (client, message, args) => {
  let reawEmbed = new Discord.MessageEmbed()
    .setFooter("BlackEarly BOT")
    .setColor("010000")
    .setTimestamp();
  let embed = reawEmbed;

  if (!args[0]) {
    message.channel.send(
      reawEmbed.setDescription(`
<a:B_TaDa:796466070570532924> Hangi konuda bilgi almak istersin?

Seçenekler:
<a:dcworker:796466125659177020>  \`${conf.prefix}bilgi moderasyon\`
<a:dcworker:796466125659177020>  \`${conf.prefix}bilgi kayıtsistemi\`
<a:dcworker:796466125659177020>  \`${conf.prefix}bilgi kullanıcı\`
<a:dcworker:796466125659177020>  \`${conf.prefix}bilgi güvenlik\`
<a:dcworker:796466125659177020>  \`${conf.prefix}bilgi eğlence\`

`)
    );
    return;
  }

  if (args[0] === "moderasyon") {
    message.channel.send(
      reawEmbed.setDescription(`
<a:B_TaDa:796466070570532924>  \`${conf.prefix}ban @Uye/ID Sebep\` \`>\` Kullanıcıyı sunucudan banlarsınız!
<a:B_TaDa:796466070570532924>  \`${conf.prefix}kick @Uye/ID Sebep\` \`>\` Kullanıcıyı sunucudan atarsınız!
<a:B_TaDa:796466070570532924>  \`${conf.prefix}sil 1-100\` \`>\` 1 ila 100 arasında belirttiğiniz değer kadar mesajın silinmesini sağlarsınız!
<a:B_TaDa:796466070570532924>  \`${conf.prefix}herkeserolver @Rol/ID\` \`>\` Sunucudaki herkese belirttiğiniz rolü verirsiniz!
`)
    );
    return;
  }
  if (args[0] === "kayıtsistemi") {
    message.channel.send(
      reawEmbed.setDescription(`
Kayıt sistemi kurulum komutları:
<a:B_Dikkat:796466038698410034>  \`${conf.prefix}erkekrolu @Rol/RolID\` \`>\` Erkek üyelerin rolünü belirtirsiniz.
<a:B_Dikkat:796466038698410034>  \`${conf.prefix}kızrolu @Rol/RolID\` \`>\` Kadın üyelerin rolünü belirtirsiniz.
<a:B_Dikkat:796466038698410034>  \`${conf.prefix}kayıtrolu @Rol/RolID\` \`>\` Kayıt sorumlusu üyelerin rolünü belirtirsiniz.
<a:B_Dikkat:796466038698410034>  \`${conf.prefix}kayıtkanalı #Kanal/KanalID\` \`>\` Kayıt mesajının gideceği kanalı belirtirsiniz.
<a:B_Dikkat:796466038698410034>  \`${conf.prefix}tagayarla Tagınız\` \`>\` Üyelerin isminin başına koyulacak tagı belirtirsiniz.
`)
    );
    return;
  }
  if (args[0] === "kullanıcı") {
    message.channel.send(
      reawEmbed.setDescription(`
Kayıt sistemi kurulum komutları:
<a:B_Ileri:796466557727014932>  \`${conf.prefix}avatar @Uye/ID/Kendiniz\` \`>\` Belirttiğiniz üyenin/Sizin avatarınızı görebilirsiniz.
<a:B_Ileri:796466557727014932>  \`${conf.prefix}sunucuicon\` \`>\` Mesajın kullanıldığı sunucunun fotoğrafını/gifini görebilirsiniz.
<a:B_Ileri:796466557727014932>  \`${conf.prefix}afk Sebep\` \`>\` Afk olursunuz ve bot sizi etiketleyenleri uyarır.

`)
    );
    return;
  }
};

exports.config = {
  name: "yardım",
  guildOnly: false,
  aliases: ["bilgi", "info"]
};
