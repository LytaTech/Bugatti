let handler = async (m, { conn, usedPrefix, command }) => {
  let who = m.quoted
    ? m.quoted.sender
    : m.mentionedJid && m.mentionedJid[0]
      ? m.mentionedJid[0]
      : m.fromMe
        ? conn.user.jid
        : m.sender
  if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`

  let pp = './Assets/Bugatti.jpg'
  let more = String.fromCharCode(8206)
  let readMore = more.repeat(850)

  let lkr
  switch (command) {
    case 'list':
      lkr =
        '*Get ready for the ride, here are your ticket options:*\n\n' +
        '🤖 *' +
        usedPrefix +
        "botmenu* - The Bot's secret control panel. What's your command, oh great one?\n\n" +
        '👑 *' +
        usedPrefix +
        "ownermenu* - The sacred scroll only for the chosen one. Yep, that's you, Boss!\n\n" +
        '🧑‍🤝‍🧑 *' +
        usedPrefix +
        'groupmenu* - Group shenanigans central! Unite, chat, conquer!\n\n' +
        '📥 *' +
        usedPrefix +
        "dlmenu* - 'DL' stands for 'Delicious Loot'. Come grab your goodies!\n\n" +
        '🎉 *' +
        usedPrefix +
        "funmenu* - The bot's party hat. Games, jokes and instant ROFLs. Let's get this party started!\n\n" +
        '💰 *' +
        usedPrefix +
        'economymenu* - Bling bling! Your personal vault of virtual economy. Spend or save? Choose wisely!\n\n' +
        '🎮 *' +
        usedPrefix +
        'gamemenu* - Enter the gaming arena. May the odds be ever in your favor!\n\n' +
        '🎨 *' +
        usedPrefix +
        'stickermenu* - A rainbow of stickers for your inner artist. Make your chats pop!\n\n' +
        '🧰 *' +
        usedPrefix +
        "toolmenu* - Your handy-dandy toolkit. What's your pick, genius?\n\n" +
        '🎩 *' +
        usedPrefix +
        'logomenu* - Create a logo that screams YOU. Or whispers. You choose the volume.\n\n' +
        '🌙 *' +
        usedPrefix +
        'nsfwmenu* - The After Dark menu. But remember, sharing adult secrets must be consent-based.'
      break

    case 'botmenu':
      lkr = `❀° ┄──•••───╮
          𝘽𝙊𝙏 𝙈𝙀𝙉𝙐  
   ╰───•••──┄ °❀     
   ┏━━━ʕ•㉨•ʔ━━━┓
   ⎪⌲𖣘 _${usedPrefix}gita_
   ⎪⌲𖣘 _${usedPrefix}ping_
   ⎪⌲𖣘 _${usedPrefix}uptime_
   ⎪⌲𖣘 _${usedPrefix}bot_
   ⎪⌲𖣘 _${usedPrefix}owner_
   ⎪⌲𖣘 _${usedPrefix}script_
   ⎪⌲𖣘 _${usedPrefix}runtime_
   ⎪⌲𖣘 _${usedPrefix}infobot_
   ⎪⌲𖣘 _${usedPrefix}donate_
   ⎪⌲𖣘 _${usedPrefix}groups_
   ⎪⌲𖣘 _${usedPrefix}blocklist_
   ⎪⌲𖣘 _${usedPrefix}listprem_
   ⎪⌲𖣘    Bugatti 𖣘 
   ┗━━━ʕ•㉨•ʔ━━━┛` // Your bot menu message here
      break
    case 'ownermenu':
      lkr = `❀° ┄──•••───╮
          𝙊𝙒𝙉𝙀𝙍 𝙈𝙀𝙉𝙐  
     ╰───•••──┄ °❀     
     ┏━━━ʕ•㉨•ʔ━━━┓
     ⎪⌲𖣘 _${usedPrefix}banchat_
     ⎪⌲𖣘 _${usedPrefix}unbanchat_
     ⎪⌲𖣘 _${usedPrefix}banuser_
     ⎪⌲𖣘 _${usedPrefix}unbanuser_
     ⎪⌲𖣘 _${usedPrefix}Broadcast_
     ⎪⌲𖣘 _${usedPrefix}Broadcastgc_
     ⎪⌲𖣘 _${usedPrefix}join_
     ⎪⌲𖣘 _${usedPrefix}setppbot_
     ⎪⌲𖣘 _${usedPrefix}setprefix_
     ⎪⌲𖣘 _${usedPrefix}resetprefix_
     ⎪⌲𖣘 _${usedPrefix}getfile_
     ⎪⌲𖣘 _${usedPrefix}getplugin_
     ┗━━━ʕ•㉨•ʔ━━━┛` //
      break
    case 'groupmenu':
      lkr = `❀° ┄──•••───╮
          𝙂𝙍𝙊𝙐𝙋 𝙈𝙀𝙉𝙐 
    ╰───•••──┄ °❀     
    ┏━━━ʕ•㉨•ʔ━━━┓
    ⎪⌲𖣘_${usedPrefix}kick *<@tag>*_
    ⎪⌲𖣘_${usedPrefix}promote *<@tag>*_
    ⎪⌲𖣘 _${usedPrefix}demote *<@tag>*_
    ⎪⌲𖣘 _${usedPrefix}infogroup_
    ⎪⌲𖣘 _${usedPrefix}resetlink_
    ⎪⌲𖣘 _${usedPrefix}link_
    ⎪⌲𖣘 _${usedPrefix}setpp *<image>*_
    ⎪⌲𖣘 _${usedPrefix}setname *<text>*_
    ⎪⌲𖣘 _${usedPrefix}setdesc *<text>*_
    ⎪⌲𖣘 _${usedPrefix}setwelcome *<text>*_
    ⎪⌲𖣘 _${usedPrefix}setbye *<text>*_
    ⎪⌲𖣘 _${usedPrefix}hidetag *<text/image/audio/vid>*_
    ⎪⌲𖣘 _${usedPrefix}warn *<@tag>*_
    ⎪⌲𖣘 _${usedPrefix}unwarn *<@tag>*_
    ⎪⌲𖣘 _${usedPrefix}group *<open/close>*_
    ⎪⌲𖣘 _${usedPrefix}enable
    ┗━━━ʕ•㉨•ʔ━━━┛` //
      break
    case 'downloadermenu':
    case 'dlmenu':
      lkr = `❀° ┄──•••───╮
          𝘿𝙇 𝙈𝙀𝙉𝙐 
   ╰───•••──┄ °❀     
   ┏━━━ʕ•㉨•ʔ━━━┓
   ⎪⌲𖣘_${usedPrefix}play_
   ⎪⌲𖣘_${usedPrefix}song_
   ⎪⌲𖣘 _${usedPrefix}yta <link>_
   ⎪⌲𖣘 _${usedPrefix}ytv <link>_
   ⎪⌲𖣘 _${usedPrefix}ytmp3 <link>_
   ⎪⌲𖣘_${usedPrefix}ytmp4 <link>_
   ⎪⌲𖣘 _${usedPrefix}gimage_
   ⎪⌲𖣘 _${usedPrefix}pinterest_
   ⎪⌲𖣘 _${usedPrefix}mediafire <link>_
   ⎪⌲𖣘 _${usedPrefix}gdrive <link>_
   ⎪⌲𖣘 _${usedPrefix}gitclone <link>_
   ⎪⌲𖣘 _${usedPrefix}twitter <link>_
   ⎪⌲𖣘 _${usedPrefix}tiktok <link>_
   ⎪⌲𖣘 _${usedPrefix}tiktokstalk_
   ⎪⌲𖣘 _${usedPrefix}instagram <link>_
   ⎪⌲𖣘 _${usedPrefix}spotify_
   ⎪⌲𖣘 _${usedPrefix}facebook <link>_
   ┗━━━ʕ•㉨•ʔ━━━┛` //
      break
    case 'economymenu':
      lkr = `❀° ┄──•••───╮
          𝙀𝘾𝙊𝙉𝙊𝙈𝙔 
   ╰───•••──┄ °❀     
   ┏━━━ʕ•㉨•ʔ━━━┓
   ⎪⌲𖣘 _${usedPrefix}claim/daily_
   ⎪⌲𖣘 _${usedPrefix}weekly_
   ⎪⌲𖣘 _${usedPrefix}monthly_
   ⎪⌲𖣘 _${usedPrefix}leaderboard_
   ⎪⌲𖣘 _${usedPrefix}bet_
   ⎪⌲𖣘 _${usedPrefix}heal_
   ⎪⌲𖣘 _${usedPrefix}craft_
   ⎪⌲𖣘 _${usedPrefix}balance_
   ⎪⌲𖣘 _${usedPrefix}shop_
   ⎪⌲𖣘 _${usedPrefix}sell_
   ⎪⌲𖣘 _${usedPrefix}adventure_
   ⎪⌲𖣘 _${usedPrefix}opencrate_
   ⎪⌲𖣘 _${usedPrefix}mine_
   ⎪⌲𖣘 _${usedPrefix}work_
   ⎪⌲𖣘 _${usedPrefix}transfer_
   ⎪⌲𖣘 _${usedPrefix}todiamond_
   ⎪⌲𖣘 _${usedPrefix}tomoney_
   ┗━━━ʕ•㉨•ʔ━━━┛` //
      break
    case 'funmenu':
      lkr = `❀° ┄──•••───╮
          𝙁𝙐𝙉 𝙈𝙀𝙉𝙐
    ╰───•••──┄ °❀     
    ┏━━━ʕ•㉨•ʔ━━━┓
    ⎪⌲𖣘 _${usedPrefix}character_
    ⎪⌲𖣘 _${usedPrefix}truth_
    ⎪⌲𖣘 _${usedPrefix}dare_
    ⎪⌲𖣘 _${usedPrefix}flirt_
    ⎪⌲𖣘 _${usedPrefix}gay_
    ⎪⌲𖣘 _${usedPrefix}shayeri_
    ⎪⌲𖣘 _${usedPrefix}ship_
    ⎪⌲𖣘 _${usedPrefix}waste_
    ⎪⌲𖣘 _${usedPrefix}simpcard_
    ⎪⌲𖣘 _${usedPrefix}hornycard_
    ⎪⌲𖣘 _${usedPrefix}ytcomment_
    ⎪⌲𖣘 _${usedPrefix}stupid_
    ⎪⌲𖣘 _${usedPrefix}lolicon_
    ┗━━━ʕ•㉨•ʔ━━━┛` //
      break
    case 'animemenu':
      lkr = `❀° ┄──•••───╮
          𝐴𝑁𝐼𝑀𝐸 𝑀𝐸𝑁𝑈
    ╰───•••──┄ °❀     
    ┏━━━ʕ•㉨•ʔ━━━┓
    ⎪⌲𖣘 _${usedPrefix}waifu_
    ⎪⌲𖣘 _${usedPrefix}neko_
    ⎪⌲𖣘 _${usedPrefix}loli_
    ⎪⌲𖣘 _${usedPrefix}couplepp_
    ⎪⌲𖣘 _${usedPrefix}toanime_
    ⎪⌲𖣘 _${usedPrefix}naruto_
    ⎪⌲𖣘 _${usedPrefix}itachi_
    ⎪⌲𖣘 _${usedPrefix}akira_
    ⎪⌲𖣘 _${usedPrefix}asuna_
    ⎪⌲𖣘 _${usedPrefix}akiyama_
    ⎪⌲𖣘 _${usedPrefix}boruto_
    ⎪⌲𖣘 _${usedPrefix}hornycard_
    ⎪⌲𖣘 _${usedPrefix}ayuzawa_
    ⎪⌲𖣘 _${usedPrefix}anna_
    ⎪⌲𖣘 _${usedPrefix}chiho_
    ⎪⌲𖣘 _${usedPrefix}chitoge_
    ⎪⌲𖣘 _${usedPrefix}deidara_
    ⎪⌲𖣘 _${usedPrefix}erza_
    ⎪⌲𖣘 _${usedPrefix}elaina_
    ⎪⌲𖣘 _${usedPrefix}emilia_
    ⎪⌲𖣘 _${usedPrefix}hestia_
    ⎪⌲𖣘 _${usedPrefix}hinata_
    ⎪⌲𖣘 _${usedPrefix}inori_
    ⎪⌲𖣘 _${usedPrefix}isuzu_
    ⎪⌲𖣘 _${usedPrefix}kagura_
    ⎪⌲𖣘 _${usedPrefix}kaori_
    ⎪⌲𖣘 _${usedPrefix}keneki_
    ⎪⌲𖣘 _${usedPrefix}kurumi_
    ⎪⌲𖣘 _${usedPrefix}madara_
    ⎪⌲𖣘 _${usedPrefix}mikasa_
    ⎪⌲𖣘 _${usedPrefix}miku_
    ⎪⌲𖣘 _${usedPrefix}minato_
    ⎪⌲𖣘 _${usedPrefix}nezuko_
    ⎪⌲𖣘 _${usedPrefix}sagiri_
    ⎪⌲𖣘 _${usedPrefix}sasuke_
    ⎪⌲𖣘 _${usedPrefix}sakura_
    ⎪⌲𖣘 _${usedPrefix}kotori_
    ┗━━━ʕ•㉨•ʔ━━━┛
    `
      break
    case 'gamemenu':
      lkr = `❀° ┄──•••───╮
          𝙂𝘼𝙈𝙀 𝙈𝙀𝙉𝙐 
    ╰───•••──┄ °❀     
    ┏━━━ʕ•㉨•ʔ━━━┓
    ⎪⌲𖣘 _${usedPrefix}tictactoe_
    ⎪⌲𖣘 _${usedPrefix}delttt_
    ⎪⌲𖣘 _${usedPrefix}math_
    ⎪⌲𖣘 _${usedPrefix}math answer_
    ⎪⌲𖣘 _${usedPrefix}ppt_
    ⎪⌲𖣘 _${usedPrefix}slot_
    ⎪⌲𖣘 _${usedPrefix}casino_
    ⎪⌲𖣘 _${usedPrefix}yourmom_
    ⎪⌲𖣘 _${usedPrefix}teri mummy_
    ┗━━━ʕ•㉨•ʔ━━━┛` //
      break
    case 'stickermenu':
      lkr = `❀° ┄──•••───╮
          𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝙈𝙀𝙉𝙐
     ╰───•••──┄ °❀     
     ┏━━━ʕ•㉨•ʔ━━━┓
     ⎪⌲𖣘 _${usedPrefix}sticker_
     ⎪⌲𖣘 _${usedPrefix}take_
     ⎪⌲𖣘 _${usedPrefix}scircle_
     ⎪⌲𖣘 _${usedPrefix}smaker_
     ⎪⌲𖣘 _${usedPrefix}sremovebg_
     ⎪⌲𖣘 _${usedPrefix}getsticker_
     ⎪⌲𖣘 _${usedPrefix}emojimix_
     ⎪⌲𖣘 _${usedPrefix}toimg_
     ⎪⌲𖣘 _${usedPrefix}tovid_
     ⎪⌲𖣘 _${usedPrefix}ttp_
     ⎪⌲𖣘 _${usedPrefix}telesticker_
     ⎪⌲𖣘 _${usedPrefix}attp_
     ⎪⌲𖣘 _${usedPrefix}attp2_
     ⎪⌲𖣘 _${usedPrefix}attp3_
     ┗━━━ʕ•㉨•ʔ━━━┛`
      break
    case 'toolmenu':
      lkr = `❀° ┄──•••───╮
          𝙏𝙊𝙊𝙇𝙎 𝙈𝙀𝙉𝙐
     ╰───•••──┄ °❀     
     ┏━━━ʕ•㉨•ʔ━━━┓
     ⎪⌲𖣘 _${usedPrefix}autosticker_
     ⎪⌲𖣘 _${usedPrefix}pdf_
     ⎪⌲𖣘 _${usedPrefix}whatmusic_
     ⎪⌲𖣘 _${usedPrefix}calc_
     ⎪⌲𖣘 _${usedPrefix}google_
     ⎪⌲𖣘 _${usedPrefix}lyrics_
     ⎪⌲𖣘 _${usedPrefix}readmore_
     ⎪⌲𖣘 _${usedPrefix}ssweb_
     ⎪⌲𖣘 _${usedPrefix}tts_
     ⎪⌲𖣘 _${usedPrefix}translate_
     ⎪⌲𖣘 _${usedPrefix}tourl_
     ⎪⌲𖣘 _${usedPrefix}wikipedia_
     ⎪⌲𖣘 _${usedPrefix}nowa_
     ⎪⌲𖣘 _${usedPrefix}qrmaker_
     ⎪⌲𖣘 _${usedPrefix}readqr_
     ⎪⌲𖣘 _${usedPrefix}fancy_
     ⎪⌲𖣘 _${usedPrefix}weather_
     ⎪⌲𖣘 _${usedPrefix}siri_
     ⎪⌲𖣘 _${usedPrefix}alexa_
     ⎪⌲𖣘 _${usedPrefix}dalle_
     ⎪⌲𖣘 _${usedPrefix}tocartoon_
     ⎪⌲𖣘 _${usedPrefix}quote_
     ⎪⌲𖣘 _${usedPrefix}technews_
     ⎪⌲𖣘 _${usedPrefix}define_
     ⎪⌲𖣘 _${usedPrefix}pokedex_
     ⎪⌲𖣘 _${usedPrefix}removebg_
     ⎪⌲𖣘 _${usedPrefix}apk_
     ⎪⌲𖣘 _${usedPrefix}tinyurl/shorturl_
     ⎪⌲𖣘 _${usedPrefix}readvo_
     ⎪⌲𖣘 _${usedPrefix}true_
     ┗━━━ʕ•㉨•ʔ━━━┛` //
      break
    case 'nsfwmenu':
      lkr = `use command ${usedPrefix}nsfw` //
      break
    case 'logomenu':
      lkr = `use ${usedPrefix}logo to see all options \ngfx cmd upto 12` //
      break
    default:
      lkr = `Invalid command. Type ${usedPrefix}list to see available options.`
  }

  conn.sendFile(m.chat, pp, 'Bugatti.jpg', lkr, m, false, { mentions: [who] })

  let done = '👍'
  m.react(done)
}

handler.help = [
  'list',
  'botmenu',
  'ownermenu',
  'groupmenu',
  'dlmenu',
  'downloadermenu',
  'economymenu',
  'funmenu',
  'gamemenu',
  'stickermenu',
  'nsfwmenu',
  'logomenu',
  'toolmenu',
]
handler.tags = ['main']
handler.command = [
  'list',
  'botmenu',
  'ownermenu',
  'groupmenu',
  'dlmenu',
  'downloadermenu',
  'economymenu',
  'funmenu',
  'gamemenu',
  'stickermenu',
  'nsfwmenu',
  'logomenu',
  'toolmenu',
]

export default handler
