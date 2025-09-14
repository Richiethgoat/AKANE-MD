require('../config');

let handler = async (m, { rich, pushname }) => {
  const prefix = global.prefix;
  const version = "1.0.6";
  const moment = require('moment-timezone');

  function runtime(seconds) {
    seconds = Number(seconds);
    const d = Math.floor(seconds / (3600 * 24));
    const h = Math.floor((seconds % (3600 * 24)) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    return `${d}d ${h}h ${m}m ${s}s`;
  }

  const uptime = process.uptime();
  const run = runtime(uptime);

  const more = String.fromCharCode(8206);
  const readMore = more.repeat(4001);

  function getDate(timezone = "Africa/Lagos") {
    return moment().tz(timezone).format("dddd, Do MMMM YYYY");
  }
  const today = getDate();

  const botname = global.botname || "AKANE";
  const owner = global.ownerName || "Richie";
  const imageUrl = global.botimg;
  const previewLink = global.previewLink;

  function toSmallCaps(text) {
    const map = {
      a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ғ",
      g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ", k: "ᴋ", l: "ʟ",
      m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ",
      s: "s", t: "ᴛ", u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x",
      y: "ʏ", z: "ᴢ",
      A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ғ",
      G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ", K: "ᴋ", L: "ʟ",
      M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ",
      S: "s", T: "ᴛ", U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x",
      Y: "ʏ", Z: "ᴢ"
    };
    return text.split("").map(c => map[c] || c).join("");
  }

  let rawMenu = `
╭━〔 *${botname}* 〕━━⬣
┃ ✦ ʜᴇʟʟᴏ, *${pushname}*
┃ ✦ ʙᴏᴛ ᴍᴏᴅᴇ: *${global.settings.botmode.toUpperCase()}*
┃ ✦ ʀᴜɴᴛɪᴍᴇ: *${run}*
┃ ✦ ᴅᴀᴛᴇ: *${today}*
┃ ✦ sᴛᴀᴛᴜs : active 
┃ ✦ prefix : [${prefix}]
┃ ✦ ᴏᴡɴᴇʀ: *${owner}*
┃ ✦ ᴠᴇʀꜱɪᴏɴ: *1.0.6*
┃
┃┌─〔 MAIN 〕
┃ ✦ ${prefix}menu
┃ ✦ ${prefix}menu2
┃ ✦ ${prefix}alive
┃ ✦ ${prefix}ping
┃ ✦ ${prefix}runtime
┃ ✦ ${prefix}owner

┃┌─〔 TOOLS 〕
┃ ✦ ${prefix}git <repo>
┃ ✦ ${prefix}calc <expr>
┃ ✦ ${prefix}setprefix <new>
┃ ✦ ${prefix}poll <question|option1|option2|...>
┃ ✦ ${prefix}enc
┃ ✦ ${prefix}enchard
┃ ✦ ${prefix}tempmail
┃ ✦ ${prefix}inboxmail
┃ ✦ ${prefix}createlogo

┃┌─〔 GROUP 〕
┃ ✦ ${prefix}kick @tag
┃ ✦ ${prefix}add 628xx
┃ ✦ ${prefix}promote @tag
┃ ✦ ${prefix}demote @tag
┃ ✦ ${prefix}hidetag <text>
┃ ✦ ${prefix}tagall
┃ ✦ ${prefix}tagadmin
┃ ✦ ${prefix}welcome on/off
┃ ✦ ${prefix}goodbye on/off
┃ ✦ ${prefix}setwelcome
┃ ✦ ${prefix}delsetwelcome
┃ ✦ ${prefix}setleft
┃ ✦ ${prefix}delsetleft
┃ ✦ ${prefix}antilink warn/kick
┃ ✦ ${prefix}mute
┃ ✦ ${prefix}unmute
┃ ✦ ${prefix}linkgroup
┃ ✦ ${prefix}left
┃ ✦ ${prefix}delete
┃ ✦ ${prefix}getpp
┃ ✦ ${prefix}getppgc
┃ ✦ ${prefix}setppgc
┃ ✦ ${prefix}readmore text1|text2
┃ ✦ ${prefix}groupinfo
┃ ✦ ${prefix}invite @tag
┃ ✦ ${prefix}whois @tag
┃ ✦ ${prefix}listonline
┃ ✦ ${prefix}chatbox on/off

┃┌─〔 SETTINGS MENU 〕
┃ ✦ ${prefix}settings / set
┃ ✦ ${prefix}chatbox on/off

┃┌─〔 OWNER 〕
┃ ✦ ${prefix}eval <code>
┃ ✦ ${prefix}exec <cmd>
┃ ✦ ${prefix}shutdown
┃ ✦ ${prefix}broadcast <text>
┃ ✦ ${prefix}setppbot
┃ ✦ ${prefix}del / delete
┃ ✦ ${prefix}aza
┃ ✦ ${prefix}setaza
┃ ✦ ${prefix}delaza   
┃ ✦ ${prefix}block / ${prefix}unblock
┃ ✦ ${prefix}creategc
┃ ✦ ${prefix}reactch
┃ ✦ ${prefix}alive
┃ ✦ ${prefix}ping
┃ ✦ ${prefix}runtime
┃ ✦ ${prefix}update
┃ ✦ ${prefix}checkupdate
┃ ✦ ${prefix}pm/sendchat
┃ ✦ ${prefix}clear 
┃ ✦ ${prefix}owner

┃┌─〔 DATABASE 〕
┃ ✦ ${prefix}setcmd (reply sticker)
┃ ✦ ${prefix}delcmd
┃ ✦ ${prefix}listcmd
┃ ✦ ${prefix}bangc
┃ ✦ ${prefix}unbanchat
┃ ✦ ${prefix}ban / ${prefix}unban
┃ ✦ ${prefix}setsudo / ${prefix}delsudo
┃ ✦ ${prefix}listsudo
┃ ✦ ${prefix}filter / ${prefix}delfilter
┃ ✦ ${prefix}filtermode
┃ ✦ ${prefix}listfilters

┃┌─〔 GFX LOGO MENU 〕
┃ ✦ ${prefix}gfx
┃ ✦ ${prefix}gfx2
┃ ✦ ${prefix}gfx3
┃ ✦ ${prefix}gfx4
┃ ✦ ${prefix}gfx5
┃ ✦ ${prefix}gfx6
┃ ✦ ${prefix}gfx7
┃ ✦ ${prefix}gfx8
┃ ✦ ${prefix}gfx9
┃ ✦ ${prefix}gfx10
┃ ✦ ${prefix}gfx11
┃ ✦ ${prefix}gfx12

┃┌─〔 STICKER MENU 〕
┃ ✦ ${prefix}cry
┃ ✦ ${prefix}kill
┃ ✦ ${prefix}hug
┃ ✦ ${prefix}pat
┃ ✦ ${prefix}lick
┃ ✦ ${prefix}kiss
┃ ✦ ${prefix}bite
┃ ✦ ${prefix}yeet
┃ ✦ ${prefix}bully
┃ ✦ ${prefix}bonk
┃ ✦ ${prefix}wink
┃ ✦ ${prefix}poke
┃ ✦ ${prefix}nom
┃ ✦ ${prefix}slap
┃ ✦ ${prefix}smile
┃ ✦ ${prefix}wave
┃ ✦ ${prefix}awoo
┃ ✦ ${prefix}blush
┃ ✦ ${prefix}smug
┃ ✦ ${prefix}glomp
┃ ✦ ${prefix}happy
┃ ✦ ${prefix}dance
┃ ✦ ${prefix}cringe
┃ ✦ ${prefix}cuddle
┃ ✦ ${prefix}highfive
┃ ✦ ${prefix}shinobu
┃ ✦ ${prefix}handhold

┃┌─〔 CONVERT 〕
┃ ✦ ${prefix}sticker
┃ ✦ ${prefix}emojimix
┃ ✦ ${prefix}toimg
┃ ✦ ${prefix}tomp3
┃ ✦ ${prefix}tovn
┃ ✦ ${prefix}tourl
┃ ✦ ${prefix}say / ${prefix}tts
┃ ✦ ${prefix}qc
┃ ✦ ${prefix}vv / ${prefix}vv2
┃ ✦ ${prefix}save
┃ ✦ ${prefix}brat
┃ ✦ ${prefix}furbrat
┃ ✦ ${prefix}animebrat
┃ ✦ ${prefix}take <pack|author>
┃ ✦ ${prefix}fancy

┃┌─〔 SEARCH 〕
┃ ✦ ${prefix}waifu
┃ ✦ ${prefix}nwaifu
┃ ✦ ${prefix}rwaifu
┃ ✦ ${prefix}ss <url>
┃ ✦ ${prefix}translate <text>
┃ ✦ ${prefix}tinyurl <link>
┃ ✦ ${prefix}pinterest <query>
┃ ✦ ${prefix}image / img <query>
┃ ✦ ${prefix}ttsearch <query>
┃ ✦ ${prefix}gimage <query>
┃ ✦ ${prefix}seegore
┃ ✦ ${prefix}spotify
┃ ✦ ${prefix}pornhub
┃ ✦ ${prefix}anime <name>

┃┌─〔 DOWNLOADER 〕
┃ ✦ ${prefix}play <query>
┃ ✦ ${prefix}play2 <query>
┃ ✦ ${prefix}ytmp3 <url>
┃ ✦ ${prefix}ytmp4 <url>
┃ ✦ ${prefix}tiktok <url>
┃ ✦ ${prefix}igdl
┃ ✦ ${prefix}pinterest
┃ ✦ ${prefix}gitclone <repo>
┃ ✦ ${prefix}apk <name>
┃ ✦ ${prefix}xvideodl <link>
┃ ✦ ${prefix}xvideosearch <query>

┃┌─〔 CPANEL MENU 〕
┃ ✦ ${prefix}cpanel <size> <username>
┃ ✦ ${prefix}1gb <username>
┃ ✦ ${prefix}2gb <username>
┃ ✦ ${prefix}3gb <username>
┃ ✦ ${prefix}4gb <username>
┃ ✦ ${prefix}5gb <username>
┃ ✦ ${prefix}6gb <username>
┃ ✦ ${prefix}7gb <username>
┃ ✦ ${prefix}8gb <username>
┃ ✦ ${prefix}9gb <username>
┃ ✦ ${prefix}10gb <username>
┃ ✦ ${prefix}unli <username>
┃ ✦ ${prefix}listpanel
┃ ✦ ${prefix}delpanel <username>

┃┌─〔 MODERATION 〕
┃ ✦ ${prefix}warn @tag
┃ ✦ ${prefix}warnings @tag
┃ ✦ ${prefix}unwarn @tag
┃ ✦ ${prefix}ban @tag
┃ ✦ ${prefix}unban @tag

┃┌─〔 LEVELING 〕
┃ ✦ ${prefix}leveling on/off
┃ ✦ auto levels up every 10 messages

┃┌─〔 FUN LOGO 〕
┃ ✦ ${prefix}warning
┃ ✦ ${prefix}dragonball
┃ ✦ ${prefix}pubg2
┃ ✦ ${prefix}avengers
┃ ✦ ${prefix}graffiti
┃ ✦ ${prefix}matrix
┃ ✦ ${prefix}onepiece
┃ ✦ ${prefix}pixabay

┃┌─〔 VOICE MENU 〕
┃ ✦ ${prefix}bass
┃ ✦ ${prefix}blown
┃ ✦ ${prefix}earrape
┃ ✦ ${prefix}deep 
┃ ✦ ${prefix}fast
┃ ✦ ${prefix}nightcore
┃ ✦ ${prefix}reverse
┃ ✦ ${prefix}robot
┃ ✦ ${prefix}slow
┃ ✦ ${prefix}smooth
┃ ✦ ${prefix}squirrel

┃┌─〔 E-PHOTO MENU 〕
┃ ✦ ${prefix}glitchtext
┃ ✦ ${prefix}writetext
┃ ✦ ${prefix}advancedglow
┃ ✦ ${prefix}typographytext
┃ ✦ ${prefix}pixelglitch
┃ ✦ ${prefix}neonglitch
┃ ✦ ${prefix}flagtext
┃ ✦ ${prefix}flag3dtext
┃ ✦ ${prefix}deletingtext
┃ ✦ ${prefix}blackpinkstyle
┃ ✦ ${prefix}glowingtext
┃ ✦ ${prefix}underwatertext
┃ ✦ ${prefix}logomaker
┃ ✦ ${prefix}cartoonstyle
┃ ✦ ${prefix}papercutstyle
┃ ✦ ${prefix}watercolortext
┃ ✦ ${prefix}effectclouds
┃ ✦ ${prefix}blackpinklogo
┃ ✦ ${prefix}gradienttext
┃ ✦ ${prefix}summerbeach
┃ ✦ ${prefix}luxurygold
┃ ✦ ${prefix}multicoloredneon
┃ ✦ ${prefix}sandsummer
┃ ✦ ${prefix}galaxywallpaper
┃ ✦ ${prefix}1917style
┃ ✦ ${prefix}makingneon
┃ ✦ ${prefix}royaltext
┃ ✦ ${prefix}freecreate
┃ ✦ ${prefix}galaxystyle
┃ ✦ ${prefix}lighteffects

┃┌─〔 FUN & AI 〕
┃ ✦ ${prefix}quote
┃ ✦ ${prefix}ai
┃ ✦ ${prefix}chatgpt
┃ ✦ ${prefix}akaneai <ask>
┃ ✦ ${prefix}zaddy <ask>
┃ ✦ ${prefix}joke
┃ ✦ ${prefix}truth
┃ ✦ ${prefix}dare
┃ ✦ ${prefix}slap
╰━〔 *Powered by ${botname}* 〕━⬣
`;

  const menu = toSmallCaps(
    rawMenu.replace(/\${prefix}[a-zA-Z0-9]+/g, match => match)
  );

  if (imageUrl) {
    await rich.sendMessage(m.chat, {
      image: { url: imageUrl },
      caption: menu,
      ...(previewLink
        ? {
            contextInfo: {
              externalAdReply: {
                title: botname,
                body: botname,
                thumbnailUrl: imageUrl,
                sourceUrl: previewLink,
                mediaType: 1,
                renderLargerThumbnail: true,
              }
            }
          }
        : {})
    }, { quoted: m });
  } else {
    await rich.sendMessage(m.chat, { text: menu }, { quoted: m });
  }
};

handler.command = ["menu", "newmenu", "helpmain", "commands"];
module.exports = handler;
