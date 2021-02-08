const Discord = require("discord.js")   
const client = new Discord.Client();      
const config = require("./config.js")  
const db = require("quick.db");
const fs = require("fs");             
require('./util/Loader.js')(client);
const ms = require("parse-ms");
const request = require("request");

client.commands = new Discord.Collection(); 
client.aliases = new Discord.Collection();  
fs.readdir('./commands/', (err, files) => { 
  if (err) console.error(err);              
  console.log(`${files.length} komut yüklenecek.`); 
  files.forEach(f => {                       
    let props = require(`./commands/${f}`);   
    console.log(`${props.config.name} komutu yüklendi.`);  
    console.log(`Reawen & Rhing & Ressira`) 
    client.commands.set(props.config.name, props); 
    props.config.aliases.forEach(alias => {         
      client.aliases.set(alias, props.config.name); 
    });
  });
})

function afkSil(message, afk, isim) {
  let süre = db.fetch(`afk_süre_${afk.id}_${message.guild.id}`);
  let timeObj = ms(Date.now() - süre);
  message.channel.send(`${message.author} Artık **AFK** değilsiniz.\n\n${timeObj.days} gün, ${timeObj.hours} saat, ${timeObj.minutes} dakika, ${timeObj.seconds} saniye boyunca afk kaldın!`).then(m => {
    m.delete(10000)
  });
  db.delete(`afkSebep_${afk.id}_${message.guild.id}`)
  db.delete(`afkid_${afk.id}_${message.guild.id}`)
  db.delete(`afkAd_${afk.id}_${message.guild.id}`)
  db.delete(`afk_süre_${afk.id}_${message.guild.id}`)
  message.member.setNickname(isim)
};

client.on("message" , async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  var fd = false
  var sdd = new Set();
  let afk = message.mentions.users
  if (afk.first()) {
    afk.forEach(async afk => {
      if (sdd.has(afk.id)) return;
      else sdd.add(afk.id)
      var kisi = db.fetch(`afkid_${afk.id}_${message.guild.id}`)
      var kisi2 = db.fetch(`afkid_${message.member.id}_${message.guild.id}`)
      if (kisi) {
        var isim = db.fetch(`afkAd_${afk.id}_${message.guild.id}`)
        if (kisi2) {
          fd = true
          afkSil(message, message.member, isim)
        }
        if (afk.id == message.member.id) {
          if (!fd) afkSil(message, afk, isim)
        }
        if (afk.id !== message.member.id) {
          var sebep = db.fetch(`afkSebep_${afk.id}_${message.guild.id}`)
          if (sebep) {
            let süre = await db.fetch(`afk_süre_${afk.id}_${message.guild.id}`);
            let timeObj = ms(Date.now() - süre);
            message.channel.send(`${afk} şu an da AFK!
Şu kadar süredir: ${timeObj.days} Gün, ${timeObj.hours} Saat, ${timeObj.minutes} Dakika, ${timeObj.seconds} Saniye
Sebep: ${sebep}`).then(m => {
              m.delete(10000)
            });
          };
        }
      } else {
        afk = message.member
        kisi = db.fetch(`afkid_${message.member.id}_${message.guild.id}`)
        if (kisi) {
          var isim = db.fetch(`afkAd_${afk.id}_${message.guild.id}`)
          if (afk.id == message.member.id) {
            afkSil(message, afk, isim)
          }
          if (afk.id !== message.member.id) {
            var sebep = db.fetch(`afkSebep_${afk.id}_${message.guild.id}`)
            if (message.content.includes(kisi)) {
              if (sebep) {
                let süre = await db.fetch(`afk_süre_${afk.id}_${message.guild.id}`);
                let timeObj = ms(Date.now() - süre);
                message.channel.send(`${afk} şu an da AFK!
Şu kadar süredir: ${timeObj.days} Gün, ${timeObj.hours} Saat, ${timeObj.minutes} Dakika, ${timeObj.seconds} Saniye
Sebep: ${sebep}`).then(m => {
                  m.delete(10000)
                });
              };
            }
          }
        }
      }
    })
  } else {
    afk = message.member
    var kisi = db.fetch(`afkid_${afk.id}_${message.guild.id}`)
    if (!kisi) return;
    var isim = db.fetch(`afkAd_${afk.id}_${message.guild.id}`)
    afkSil(message, afk, isim)
  }
});


client.login(process.env.token)


