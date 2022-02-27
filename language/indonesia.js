exports.private = () =>{
	return`Fitur hanya bisa di gunakan di private chat`
	}
exports.wait = () => {
    return `*Screaping Metadata* . . .`
}

exports.ok = () => {
    return `Ok Done Yah Kak`
}

exports.err = () => {
    return `Fitur Ini Sedang Error Kak`
}
exports.erorLink = () => {
    return `Link Nya Ga Valid Kak`
}
exports.media = () => {
    return `Silahkan Pilih Media Yang Ingin Di Download Kak`
}
exports.replyImg = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command}`
}

exports.wrongFormat = (prefix) => {
    return `command ${cmd} Tidak Tersedia Di Menu Kak.`
}

exports.emptyMess = () => {
    return `pesan Apa Yang Igin Di Sampaikan Kak!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `Command *${cmd}* tidak terdaftar di *${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `Fitur Ini Hanya Tersedia Untuk Owner Kak`
}

exports.doneOwner = () => {
    return `Done BOSz😅`
}

exports.groupOnly = () => {
    return `Fitur Ini Hanya Tersedia Di Dalam Group!`
}

exports.adminOnly = () => {
    return `fitur Ini Hanya Tersedia Untuk Admin Group!`
}

exports.nhFalse = () => {
    return `Kode tidak valid Kak!`
}

exports.listBlock = (blockNumber) => {
    return `*── 「 Kontak TerBlokir 」 ──*
    
Total diblokir: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `Kamu Bukan Admin Kak`
}

exports.adminAlready = () => {
    return `Dia Sudah Admin Kak!`
}

exports.botNotAdmin = () => {
    return `Fitur Ini Hanya Tersdia Ketika Bot Jadi Admin`
}

exports.received = (pushname) => {
    return `
Halo Kak ${pushname}!
Terima kasih telah melapor, Laporan Kakak Akan Tersampaikan Ke Owner.`
}

exports.videoLimit = () => {
    return `Size Video Nya Kebesaran Kak!`
}

exports.notNum = (q) => {
    return `"${q}", Ini Bukan Angka!`
}
exports.menunya = (salam, pushname) =>{
	return`Hai kak ${pushname} 👋 selamat ${salam} , 
saya Adalah DEFFBOTz-MD Yang Baru Rilis, 
BOT Ini Merupakan Codingan Alphabot-MD Jadi Sama Dengan Script AlphaBot-MD by zeeone ofc.
BOT ini Juga Masih Dalam Tahap Uji Coba, 
JadiJika Menemukan Bug Atau Error Silahkan Lapor Ke Owner Yah Kak.
`
}
exports.listMenu = (time, salam, pushname, prefix) => {
    return `*Selamat ${salam} ${pushname}*
*⌚Time Server : ${time}*

╭─❒ 「 Bot Info 」 
│➸ぁ ${prefix}owner
│➸ぁ ${prefix}rules
│➸ぁ ${prefix}sc
│➸ぁ ${prefix}ping
│➸ぁ ${prefix}runtime
│➸ぁ ${prefix}botstatus
│➸ぁ ${prefix}donate
╰❒ 


╭─❒ 「 Owner 」 
│➸ぁ < evaluate
│➸ぁ > evaluate
│➸ぁ $ exec
│➸ぁ => exec
│➸ぁ ${prefix}setmenu [query]
│➸ぁ ${prefix}setmenu templateLocation
│➸ぁ ${prefix}setmenu templateTenor
│➸ぁ ${prefix}sendsesi
│➸ぁ ${prefix}listpc
│➸ぁ ${prefix}listgc
│➸ぁ ${prefix}broadcast [text]
│➸ぁ ${prefix}bc [text]
│➸ぁ ${prefix}bcgc [text]
│➸ぁ ${prefix}nsfw [on/off]
│➸ぁ ${prefix}autorespond [on/off]
│➸ぁ ${prefix}antiviewonce [on/off]
│➸ぁ ${prefix}join [link]
│➸ぁ ${prefix}self
│➸ぁ ${prefix}public [only bot]
│➸ぁ ${prefix}del [reply pesan bot]
│➸ぁ ${prefix}setppbot]
╰❒ 


╭─❒ 「 Database 」 
│➸ぁ ${prefix}setcmd [reply stiker]
│➸ぁ ${prefix}delcmd [reply stiker]
│➸ぁ ${prefix}listcmd
│➸ぁ ${prefix}absen
│➸ぁ ${prefix}cekabsen
│➸ぁ ${prefix}deleteabsen
│➸ぁ ${prefix}absenstart
│➸ぁ ${prefix}addmsg [nama file]
│➸ぁ ${prefix}getmsg [nama file]
│➸ぁ ${prefix}listmsg
│➸ぁ ${prefix}delmsg [nama File]
╰❒ 


╭─❒ 「 Group 」 
│➸ぁ ${prefix}listonline
│➸ぁ ${prefix}sider
│➸ぁ ${prefix}infochat
│➸ぁ ${prefix}setdesk [text]
│➸ぁ ${prefix}setppgrup [reply image]
│➸ぁ ${prefix}antilink [on/off]
│➸ぁ ${prefix}revoke
│➸ぁ ${prefix}leave
│➸ぁ ${prefix}add [62***]
│➸ぁ ${prefix}kick @tag
│➸ぁ ${prefix}leave
│➸ぁ ${prefix}linkgc
│➸ぁ ${prefix}group [open/close]
│➸ぁ ${prefix}tagall [text]
│➸ぁ ${prefix}hidetag [query]
╰❒ 

╭─❒ 「 Anime 」 
│➸ぁ ${prefix}quotesanime
│➸ぁ ${prefix}anime [query]
│➸ぁ ${prefix}manga [query]
│➸ぁ ${prefix}character [query]
╰❒ 

╭─❒ 「 Tag 」 
│➸ぁ ${prefix}stickertag
│➸ぁ ${prefix}videotag [query]
│➸ぁ ${prefix}vntag [query]
│➸ぁ ${prefix}imagetag [query]
╰❒ 

╭─❒ 「 Stalking 」 
│➸ぁ ${prefix}igstalk [username]
│➸ぁ ${prefix}ghstalk [username]
│➸ぁ ${prefix}ytstalk [channel]
╰❒ 


╭─❒ 「 Search 」 
│➸ぁ ${prefix}ytsearch [query]
│➸ぁ ${prefix}wallpaper [query]
│➸ぁ ${prefix}wikimedia [query]
│➸ぁ ${prefix}hentai
│➸ぁ ${prefix}wattpad [query]
│➸ぁ ${prefix}webtoons [query]
│➸ぁ ${prefix}drakor [query]
│➸ぁ ${prefix}pinterest [query]
╰❒ 


╭─❒ 「 Converter 」 
│➸ぁ ${prefix}stiker [reply image]
│➸ぁ ${prefix}tourl [image/video]
│➸ぁ ${prefix}togif [sticker]
│➸ぁ ${prefix}tomp4 [sticker]
│➸ぁ ${prefix}toimg [reply sticker]
╰❒


╭─❒ 「 Image Effect 」 
│➸ぁ ${prefix}wanted [reply image/stiker]
│➸ぁ ${prefix}utatoo [reply image/stiker]
│➸ぁ ${prefix}unsharpen [reply image/stiker]
│➸ぁ ${prefix}thanos [reply image/stiker]
│➸ぁ ${prefix}sniper [reply image/stiker]
│➸ぁ ${prefix}sharpen [reply image/stiker]
│➸ぁ ${prefix}sepia [reply image/stiker]
│➸ぁ ${prefix}scary [reply image/stiker]
│➸ぁ ${prefix}rip [reply image/stiker]
│➸ぁ ${prefix}redple [reply image/stiker]
│➸ぁ ${prefix}rejected [reply image/stiker]
│➸ぁ ${prefix}posterize [reply image/stiker]
│➸ぁ ${prefix}ps4 [reply image/stiker]
│➸ぁ ${prefix}pixelize [reply image/stiker]
│➸ぁ ${prefix}missionpassed [reply image/stiker]
│➸ぁ ${prefix}moustache [reply image/stiker]
│➸ぁ ${prefix}lookwhatkarenhave [reply image/stiker]
│➸ぁ ${prefix}jail [reply image/stiker]
│➸ぁ ${prefix}invert [reply image/stiker]
│➸ぁ ${prefix}instagram [reply image/stiker]
│➸ぁ ${prefix}greyscale [reply image/stiker]
│➸ぁ ${prefix}glitch [reply image/stiker]
│➸ぁ ${prefix}gay [reply image/stiker]
│➸ぁ ${prefix}frame [reply image/stiker]
│➸ぁ ${prefix}fire [reply image/stiker]
│➸ぁ ${prefix}distort [reply image/stiker]
│➸ぁ ${prefix}dictator [reply image/stiker]
│➸ぁ ${prefix}deepfry [reply image/stiker]
│➸ぁ ${prefix}ddungeon [reply image/stiker]
│➸ぁ ${prefix}circle [reply image/stiker]
│➸ぁ ${prefix}challenger [reply image/stiker]
│➸ぁ ${prefix}burn [reply image/stiker]
│➸ぁ ${prefix}brazzers [reply image/stiker]
│➸ぁ ${prefix}beautiful [reply image/sticker]
╰❒ 


╭─❒ 「 Sticker Effect 」 
│➸ぁ ${prefix}jail [reply image/stiker]
│➸ぁ ${prefix}red [reply image/stiker]
│➸ぁ ${prefix}gay [reply image/stiker]
│➸ぁ ${prefix}bloo [reply image/stiker]
│➸ぁ ${prefix}blue [reply image/stiker]
│➸ぁ ${prefix}sepia [reply image/stiker]
│➸ぁ ${prefix}green [reply image/stiker]
│➸ぁ ${prefix}glass [reply image/stiker]
│➸ぁ ${prefix}invert [reply image/stiker]
│➸ぁ ${prefix}blurple [reply image/stiker]
│➸ぁ ${prefix}blurple2 [reply image/stiker]
│➸ぁ ${prefix}wasted [reply image/stiker]
│➸ぁ ${prefix}passed [reply image/stiker]
│➸ぁ ${prefix}triggered [reply image/stiker]
│➸ぁ ${prefix}comrade [reply image/stiker]
│➸ぁ ${prefix}greyscale [reply image/stiker]
│➸ぁ ${prefix}threshold [reply image/stiker]
│➸ぁ ${prefix}brightness [reply image/stiker]
│➸ぁ ${prefix}invertgreyscale [reply image/sticker]
╰❒ 


╭─❒ 「 Download 」 
│➸ぁ ${prefix}tiktok [Link]
│➸ぁ ${prefix}tiktoknowm [Link]
│➸ぁ ${prefix}tiktokwm [Link]
│➸ぁ ${prefix}tiktokaudio [Link]
│➸ぁ ${prefix}ytdl [Link]
│➸ぁ ${prefix}play [judul]
│➸ぁ ${prefix}ytmp3 [Link]
│➸ぁ ${prefix}ytshortmp3 [Link]
│➸ぁ ${prefix}ytmp4 [Link]
│➸ぁ ${prefix}ytshorts [Link]
│➸ぁ ${prefix}facebook [Link]
│➸ぁ ${prefix}facebooksd [Link]
│➸ぁ ${prefix}facebookhd [Link]
│➸ぁ ${prefix}fbaudio [Link]
│➸ぁ ${prefix}igdl [Link]
│➸ぁ ${prefix}igphoto [Link]
│➸ぁ ${prefix}igvideo [Link]
│➸ぁ ${prefix}soundcloud [[Link]
│➸ぁ ${prefix}mediafire [Link]
│➸ぁ ${prefix}twitter [Link]
╰❒ 


╭─❒ 「 Random Anime 」
│➸ぁ ${prefix}loli
│➸ぁ ${prefix}neko
│➸ぁ ${prefix}waifu
│➸ぁ ${prefix}shinobu
│➸ぁ ${prefix}megumin
│➸ぁ ${prefix}bully
│➸ぁ ${prefix}cuddle
│➸ぁ ${prefix}cry
│➸ぁ ${prefix}hug
│➸ぁ ${prefix}awoo
│➸ぁ ${prefix}kiss
│➸ぁ ${prefix}lick
│➸ぁ ${prefix}pat
│➸ぁ ${prefix}smug
│➸ぁ ${prefix}bonk
│➸ぁ ${prefix}yeet
│➸ぁ ${prefix}blush
│➸ぁ ${prefix}smile
│➸ぁ ${prefix}wave
│➸ぁ ${prefix}highfive
│➸ぁ ${prefix}handhold
│➸ぁ ${prefix}nom
│➸ぁ ${prefix}bite
│➸ぁ ${prefix}glomp
│➸ぁ ${prefix}slap
│➸ぁ ${prefix}kill
│➸ぁ ${prefix}happy
│➸ぁ ${prefix}wink
│➸ぁ ${prefix}poke
│➸ぁ ${prefix}dance
│➸ぁ ${prefix}cringe
╰❒ 

╭─❒ 「 Nsfw & Sfw 」
│➸ぁ ${prefix}ahegao
│➸ぁ ${prefix}ass
│➸ぁ ${prefix}bdsm
│➸ぁ ${prefix}blowjob
│➸ぁ ${prefix}cuckold
│➸ぁ ${prefix}cum
│➸ぁ ${prefix}ero
│➸ぁ ${prefix}femdom
│➸ぁ ${prefix}foot
│➸ぁ ${prefix}gangbang
│➸ぁ ${prefix}glasses
│➸ぁ ${prefix}jahy
│➸ぁ ${prefix}manga
│➸ぁ ${prefix}masturbation
│➸ぁ ${prefix}neko
│➸ぁ ${prefix}orgy
│➸ぁ ${prefix}panties
│➸ぁ ${prefix}pussy
│➸ぁ ${prefix}tentacles
│➸ぁ ${prefix}thighs
│➸ぁ ${prefix}yuri
│➸ぁ ${prefix}feet
│➸ぁ ${prefix}lewdkemo
│➸ぁ ${prefix}woof
│➸ぁ ${prefix}gasm
│➸ぁ ${prefix}solo
│➸ぁ ${prefix}8ball
│➸ぁ ${prefix}goose
│➸ぁ ${prefix}avatar
│➸ぁ ${prefix}hololewd
│➸ぁ ${prefix}gecg
│➸ぁ ${prefix}holo
│➸ぁ ${prefix}fox_girl
│➸ぁ ${prefix}tits
│➸ぁ ${prefix}eroyuri
│➸ぁ ${prefix}holoyero
│➸ぁ ${prefix}lizard
│➸ぁ ${prefix}keta
│➸ぁ ${prefix}eron
│➸ぁ ${prefix}erok
│➸ぁ ${prefix}kemonomimi
│➸ぁ ${prefix}cum_jpg
│➸ぁ ${prefix}nsfw_avatar
│➸ぁ ${prefix}erofeet
│➸ぁ ${prefix}meow
│➸ぁ ${prefix}wallpaper
│➸ぁ ${prefix}waifu
│➸ぁ ${prefix}trap
│➸ぁ ${prefix}lewd
│➸ぁ ${prefix}pussy_jpg
│➸ぁ ${prefix}futanari
│➸ぁ ${prefix}lewdk
│➸ぁ ${prefix}solog
│➸ぁ ${prefix}smug
│➸ぁ ${prefix}cum
│➸ぁ ${prefix}slap
│➸ぁ ${prefix}les
│➸ぁ ${prefix}erokemo
│➸ぁ ${prefix}bj
│➸ぁ ${prefix}pwankg
│➸ぁ ${prefix}pat
│➸ぁ ${prefix}poke
│➸ぁ ${prefix}feed
│➸ぁ ${prefix}nsfw_neko_gif
│➸ぁ ${prefix}pussy
│➸ぁ ${prefix}feetg
│➸ぁ ${prefix}baka
│➸ぁ ${prefix}hug
│➸ぁ ${prefix}kiss
│➸ぁ ${prefix}tickle
│➸ぁ ${prefix}spank
│➸ぁ ${prefix}kuni
│➸ぁ ${prefix}classic
│➸ぁ ${prefix}boobs
│➸ぁ ${prefix}anal
│➸ぁ ${prefix}ngif
│➸ぁ ${prefix}cuddle
│➸ぁ ${prefix}zettai
╰❒ 

╭─❒ 「 Textpro Menu 」
│➸ぁ ${prefix}halloween2 [text1|text2]
│➸ぁ ${prefix}horror [text1|text2]
│➸ぁ ${prefix}game8bit [text1|text2]
│➸ぁ ${prefix}layered [text1|text2]
│➸ぁ ${prefix}glitch2 [text1|text2]
│➸ぁ ${prefix}coolg [text1|text2]
│➸ぁ ${prefix}coolwg [text1|text2]
│➸ぁ ${prefix}realistic [text1|text2]
│➸ぁ ${prefix}space3d [text1|text2]
│➸ぁ ${prefix}gtiktok [text1|text2]
│➸ぁ ${prefix}stone [text1|text2]
│➸ぁ ${prefix}marvel [text1|text2]
│➸ぁ ${prefix}marvel2 [text1|text2]
│➸ぁ ${prefix}pornhub [text1|text2]
│➸ぁ ${prefix}avengers [text1|text2]
│➸ぁ ${prefix}metalr [text1|text2]
│➸ぁ ${prefix}metalg [text1|text2]
│➸ぁ ${prefix}metalg2 [text1|text2]
│➸ぁ ${prefix}halloween2 [text1|text2]
│➸ぁ ${prefix}lion [text1|text2]
│➸ぁ ${prefix}wolf_bw [text1|text2]
│➸ぁ ${prefix}wolf_g [text1|text2]
│➸ぁ ${prefix}ninja [text1|text2]
│➸ぁ ${prefix}3dsteel [text1|text2]
│➸ぁ ${prefix}horror2 [text1|text2]
│➸ぁ ${prefix}lava [text1|text2]
│➸ぁ ${prefix}bagel [text1|text2]
│➸ぁ ${prefix}blackpink [text]
│➸ぁ ${prefix}rainbow2 [text]
│➸ぁ ${prefix}water_pipe [text]
│➸ぁ ${prefix}halloween [text]
│➸ぁ ${prefix}sketch [text]
│➸ぁ ${prefix}sircuit [text]
│➸ぁ ${prefix}discovery [text]
│➸ぁ ${prefix}metallic2 [text]
│➸ぁ ${prefix}fiction [text]
│➸ぁ ${prefix}demon [text]
│➸ぁ ${prefix}transformer [text]
│➸ぁ ${prefix}berry [text]
│➸ぁ ${prefix}thunder [text]
│➸ぁ ${prefix}magma [text]
│➸ぁ ${prefix}3dstone [text]
│➸ぁ ${prefix}neon [text]
│➸ぁ ${prefix}glitch [text]
│➸ぁ ${prefix}harry_potter [text]
│➸ぁ ${prefix}embossed [text]
│➸ぁ ${prefix}broken [text]
│➸ぁ ${prefix}papercut [text]
│➸ぁ ${prefix}gradient [text]
│➸ぁ ${prefix}glossy [text]
│➸ぁ ${prefix}watercolor [text]
│➸ぁ ${prefix}multicolor [text]
│➸ぁ ${prefix}neon_devil [text]
│➸ぁ ${prefix}underwater [text]
│➸ぁ ${prefix}bear [text]
│➸ぁ ${prefix}wonderfulg [text]
│➸ぁ ${prefix}christmas [text]
│➸ぁ ${prefix}neon_light [text]
│➸ぁ ${prefix}snow [text]
│➸ぁ ${prefix}cloudsky [text]
│➸ぁ ${prefix}luxury2 [text]
│➸ぁ ${prefix}gradient2 [text]
│➸ぁ ${prefix}summer [text]
│➸ぁ ${prefix}writing [text]
│➸ぁ ${prefix}engraved [text]
│➸ぁ ${prefix}summery [text]
│➸ぁ ${prefix}3dglue [text]
│➸ぁ ${prefix}metaldark [text]
│➸ぁ ${prefix}neonlight [text]
│➸ぁ ${prefix}oscar [text]
│➸ぁ ${prefix}minion [text]
│➸ぁ ${prefix}holographic [text]
│➸ぁ ${prefix}purple [text]
│➸ぁ ${prefix}glossyb [text]
│➸ぁ ${prefix}deluxe2 [text]
│➸ぁ ${prefix}glossyc [text]
│➸ぁ ${prefix}fabric [text]
│➸ぁ ${prefix}neonc [text]
│➸ぁ ${prefix}newyear [text]
│➸ぁ ${prefix}newyear2 [text]
│➸ぁ ${prefix}metals [text]
│➸ぁ ${prefix}xmas [text]
│➸ぁ ${prefix}blood [text]
│➸ぁ ${prefix}darkg [text]
│➸ぁ ${prefix}joker [text]
│➸ぁ ${prefix}wicker [text]
│➸ぁ ${prefix}natural [text]
│➸ぁ ${prefix}firework [text]
│➸ぁ ${prefix}skeleton [text]
│➸ぁ ${prefix}balloon [text]
│➸ぁ ${prefix}balloon2 [text]
│➸ぁ ${prefix}balloon3 [text]
│➸ぁ ${prefix}balloon4 [text]
│➸ぁ ${prefix}balloon5 [text]
│➸ぁ ${prefix}balloon6 [text]
│➸ぁ ${prefix}balloon7 [text]
│➸ぁ ${prefix}steel [text]
│➸ぁ ${prefix}gloss [text]
│➸ぁ ${prefix}denim [text]
│➸ぁ ${prefix}decorate [text]
│➸ぁ ${prefix}decorate2 [text]
│➸ぁ ${prefix}peridot [text]
│➸ぁ ${prefix}rock [text]
│➸ぁ ${prefix}glass [text]
│➸ぁ ${prefix}glass2 [text]
│➸ぁ ${prefix}glass3 [text]
│➸ぁ ${prefix}glass4 [text]
│➸ぁ ${prefix}glass5 [text]
│➸ぁ ${prefix}glass6 [text]
│➸ぁ ${prefix}glass7 [text]
│➸ぁ ${prefix}glass8 [text]
│➸ぁ ${prefix}captain_as2 [text]
│➸ぁ ${prefix}robot [text]
│➸ぁ ${prefix}equalizer [text]
│➸ぁ ${prefix}toxic [text]
│➸ぁ ${prefix}sparkling [text]
│➸ぁ ${prefix}sparkling2 [text]
│➸ぁ ${prefix}sparkling3 [text]
│➸ぁ ${prefix}sparkling4 [text]
│➸ぁ ${prefix}sparkling5 [text]
│➸ぁ ${prefix}sparkling6 [text]
│➸ぁ ${prefix}sparkling7 [text]
│➸ぁ ${prefix}decorative [text]
│➸ぁ ${prefix}chocolate [text]
│➸ぁ ${prefix}strawberry [text]
│➸ぁ ${prefix}koifish [text]
│➸ぁ ${prefix}bread [text]
│➸ぁ ${prefix}matrix [text]
│➸ぁ ${prefix}blood2 [text]
│➸ぁ ${prefix}neonligth2 [text]
│➸ぁ ${prefix}thunder2 [text]
│➸ぁ ${prefix}3dbox [text]
│➸ぁ ${prefix}neon2 [text]
│➸ぁ ${prefix}roadw [text]
│➸ぁ ${prefix}bokeh [text]
│➸ぁ ${prefix}gneon [text]
│➸ぁ ${prefix}advanced [text]
│➸ぁ ${prefix}dropwater [text]
│➸ぁ ${prefix}wall [text]
│➸ぁ ${prefix}chrismast [text]
│➸ぁ ${prefix}honey [text]
│➸ぁ ${prefix}drug [text]
│➸ぁ ${prefix}marble [text]
│➸ぁ ${prefix}marble2 [text]
│➸ぁ ${prefix}ice [text]
│➸ぁ ${prefix}juice [text]
│➸ぁ ${prefix}rusty [text]
│➸ぁ ${prefix}abstra [text]
│➸ぁ ${prefix}biscuit [text]
│➸ぁ ${prefix}wood [text]
│➸ぁ ${prefix}scifi [text]
│➸ぁ ${prefix}metalr [text]
│➸ぁ ${prefix}purpleg [text]
│➸ぁ ${prefix}shiny [text] 
│➸ぁ ${prefix}jewelry [text]
│➸ぁ ${prefix}jewelry2 [text]
│➸ぁ ${prefix}jewelry3 [text]
│➸ぁ ${prefix}jewelry4 [text]
│➸ぁ ${prefix}jewelry5 [text]
│➸ぁ ${prefix}jewelry6 [text]
│➸ぁ ${prefix}jewelry7 [text]
│➸ぁ ${prefix}jewelry8 [text]
│➸ぁ ${prefix}metalh [text]
│➸ぁ ${prefix}golden [text]
│➸ぁ ${prefix}glitter [text]
│➸ぁ ${prefix}glitter2 [text]
│➸ぁ ${prefix}glitter3 [text]
│➸ぁ ${prefix}glitter4 [text]
│➸ぁ ${prefix}glitter5 [text]
│➸ぁ ${prefix}glitter6 [text]
│➸ぁ ${prefix}glitter7 [text]
│➸ぁ ${prefix}metale [text]
│➸ぁ ${prefix}carbon [text]
│➸ぁ ${prefix}candy [text]
│➸ぁ ${prefix}metalb [text]
│➸ぁ ${prefix}gemb [text]
│➸ぁ ${prefix}3dchrome [text]
│➸ぁ ${prefix}metalb2 [text]
│➸ぁ ${prefix}metalg [text]
│➸ぁ ${prefix}metalg [text]
╰❒ 


╭─❒ 「 Others 」
│➸ぁ ${prefix}afk [alasan]
│➸ぁ ${prefix}translate kode_bahasa text
│➸ぁ ${prefix}kalkulator [query]
│➸ぁ ${prefix}smeme [text]
│➸ぁ ${prefix}smeme2 [text1|text2]
│➸ぁ ${prefix}memegen [text1|text2]
╰❒

╭─❒ 「 Game Menu 」
│➸ぁ ${prefix}kuismath
│➸ぁ ${prefix}tebak [option]
│➸ぁ ${prefix}tekateki
│➸ぁ ${prefix}susunkata
│➸ぁ ${prefix}caklontong
╰❒ 


╭─❒ 「 Asupan Menu 」
│➸ぁ ${prefix}chika
│➸ぁ ${prefix}delvira
│➸ぁ ${prefix}ayu
│➸ぁ ${prefix}bunga
│➸ぁ ${prefix}aura
│➸ぁ ${prefix}nisa
│➸ぁ ${prefix}ziva
│➸ぁ ${prefix}yana
│➸ぁ ${prefix}viona
│➸ぁ ${prefix}syania
│➸ぁ ${prefix}riri
│➸ぁ ${prefix}syifa
│➸ぁ ${prefix}mama_gina
│➸ぁ ${prefix}alcakenya
│➸ぁ ${prefix}mangayutri
│➸ぁ ${prefix}rikagusriani
│➸ぁ ${prefix}asupan
│➸ぁ ${prefix}bocil
│➸ぁ ${prefix}geayubi
│➸ぁ ${prefix}santuy
│➸ぁ ${prefix}ukhty
│➸ぁ ${prefix}syifa
╰❒ 


╭─❒ 「 Random Cewe 」
│➸ぁ ${prefix}china 
│➸ぁ ${prefix}indonesia 
│➸ぁ ${prefix}malaysia 
│➸ぁ ${prefix}thailand 
│➸ぁ ${prefix}korea 
│➸ぁ ${prefix}japan 
│➸ぁ ${prefix}vietnam 
│➸ぁ ${prefix}jenni 
│➸ぁ ${prefix}jiso 
│➸ぁ ${prefix}lisa  
│➸ぁ ${prefix}rose
╰❒ 

╭─❒ 「 TqTo 」 
│➸ぁ My God
│➸ぁ My Parents
│➸ぁ My Friends
│➸ぁ Hadi BOT
│➸ぁ F I R R A  B O T
│➸ぁ Mhankbarbar
│➸ぁ Nurutomo
│➸ぁ Rashid
│➸ぁ ZeeoneOfc
│➸ぁ Penyedia Module
│➸ぁ And All Creator BOT Indo
╰❒ 
    `
}

exports.rules = (prefix) => {
    return `
*── 「 RULES」 ──*

1. Jangan spam bot. ❌
(Nanti Lu Di Blok Mampus)

2. Jangan telepon bot. ❌
(Nnti Lu Di Blok Juga)

3. Jangan mengeksploitasi bot.😖
(Dikenai Hukuman Mati+Penggal Kepala)

🗯️ Bot tidak atau lambat merespon ?
➡️ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan. Tetap patuhi rules‼️

🗯️ Dimana saya bisa mendapatkan Script dari bot ini ?
➡️ Script ini masih private dan tidak pernah diperjual belikan ,bijaklah dalam mengetahui penipu.

🗯️ Boleh saya menambah ke grup?
➡️ Untuk sementara bot dalam status free to add.

🗯️ Prefixnya apa ya?
➡️ Bot ini menggunakan multi prefix. Berarti anda bisa menggunakan prefix #, . , Dan prefix wajar lainnya.

🗯️ Kak, kok syaa chat owner tidak direspon?
➡️ Owner hanya merespon pertanyaan seputar bot Dan kendala eror, tidak untuk kenalan ataupun mengemis script.


Jika sudah dipahami rules-nya, silakan ketik *${prefix}allmenu* untuk memulai!

⚠️ Segala kebijakan dan ketentuan DEFFBOTz di pegang oleh owner dan segala perubahan kebijakan, sewaktu waktu owner berhak mencabut, memblokir user(*﹏*) 

Arigatou Gozaimasu! Untuk kalian user ramah dan Beberapa orang yg Support gw dalam project codding DEFFBOTz
🙏
`
}
exports.welcome = () =>{
	return`╭─❒ Intro Dulu Yah Kack🙏
┌ 𝐍𝐚𝐦𝐚:
├ 𝐔𝐦𝐮𝐫:
├ 𝐀𝐬𝐚𝐥:
├ 𝐆𝐞𝐧𝐝𝐞𝐫:
╰❒ 𝖯𝖺𝗍𝗎𝗁𝗂 𝗋𝗎𝗅𝖾𝗌 𝗀𝗋𝗎𝗉 𝗒𝖺 𝗄𝖺k ~`
}
exports.leave = () =>{
	return`yahh Malah Out😔 Goodbye`
}
exports.source = () =>{
return`*------「 SOURCE CODE 」 ------*

sc Ini Punya DEFFBOTz Cuma Copas Dari zeeone Semua awokwokwok🤣
`
}
exports.tos = (ownernomer) => {
    return `
*-------「 DONATE 」 -------*

Hai kak ☺️ 
yakin Nih Mau Donasi?
Dikasih Syukur Ga Dikasih Juga Gapapa.😇

Berapapun donasi kalian akan sangat berarti Bagi Saya😊

Thanks!🙏

Kontak Owner:
wa.me/${ownernomer}

    `
}

exports.info = (prefix) =>{
	return`╭─❒ 「 Bot Info 」 
│➸ぁ ${prefix}owner
│➸ぁ ${prefix}rules
│➸ぁ ${prefix}sc
│➸ぁ ${prefix}ping
│➸ぁ ${prefix}runtime
│➸ぁ ${prefix}botstatus
│➸ぁ ${prefix}donate
╰❒ 
`}

exports.ownermenu = (prefix) =>{
return`╭─❒ 「 Owner 」 
│➸ぁ < evaluate
│➸ぁ > evaluate
│➸ぁ $ exec
│➸ぁ => exec
│➸ぁ ${prefix}setmenu [query]
│➸ぁ ${prefix}setmenu templateLocation
│➸ぁ ${prefix}setmenu templateTenor
│➸ぁ ${prefix}sendsesi
│➸ぁ ${prefix}listpc
│➸ぁ ${prefix}listgc
│➸ぁ ${prefix}broadcast [text]
│➸ぁ ${prefix}bc [text]
│➸ぁ ${prefix}bcgc [text]
│➸ぁ ${prefix}nsfw [on/off]
│➸ぁ ${prefix}autorespond [on/off]
│➸ぁ ${prefix}antiviewonce [on/off]
│➸ぁ ${prefix}join [link]
│➸ぁ ${prefix}self
│➸ぁ ${prefix}public [only bot]
│➸ぁ ${prefix}del [pesan bot]
│➸ぁ ${prefix}setppbot [reply image]
╰❒ 
`}

exports.database = (prefix) =>{
	return`╭─❒ 「 Database 」 
│➸ぁ ${prefix}setcmd [reply stiker]
│➸ぁ ${prefix}delcmd [reply stiker]
│➸ぁ ${prefix}listcmd
│➸ぁ ${prefix}absen
│➸ぁ ${prefix}cekabsen
│➸ぁ ${prefix}deleteabsen
│➸ぁ ${prefix}absenstart
│➸ぁ ${prefix}addmsg [nama file]
│➸ぁ ${prefix}getmsg [nama file]
│➸ぁ ${prefix}listmsg
│➸ぁ ${prefix}delmsg [nama File]
╰❒ 
`}

exports.group = (prefix) =>{
	return`╭─❒ 「 Group 」 
│➸ぁ ${prefix}listonline
│➸ぁ ${prefix}sider
│➸ぁ ${prefix}infochat
│➸ぁ ${prefix}setdesk [text]
│➸ぁ ${prefix}setppgrup [reply image]
│➸ぁ ${prefix}antilink [on/off]
│➸ぁ ${prefix}revoke
│➸ぁ ${prefix}leave
│➸ぁ ${prefix}add [62***]
│➸ぁ ${prefix}kick @tag
│➸ぁ ${prefix}leave
│➸ぁ ${prefix}linkgc
│➸ぁ ${prefix}group [open/close]
│➸ぁ ${prefix}tagall [text]
│➸ぁ ${prefix}hidetag [text]
╰❒ 
`}

exports.anime = (prefix) =>{
	return`╭─❒ 「 Anime 」 
│➸ぁ ${prefix}quotesanime
│➸ぁ ${prefix}anime [query]
│➸ぁ ${prefix}manga [query]
│➸ぁ ${prefix}character [query]
╰❒ 
`}

exports.tag = (prefix) =>{
	return`╭─❒ 「 Tag 」 
│➸ぁ ${prefix}stickertag
│➸ぁ ${prefix}videotag [query]
│➸ぁ ${prefix}vntag [query]
│➸ぁ ${prefix}imagetag
╰❒ 
`}

exports.stalk = (prefix) =>{
	return`╭─❒ 「 Stalking 」 
│➸ぁ ${prefix}igstalk [username]
│➸ぁ ${prefix}ghstalk [username]
│➸ぁ ${prefix}ytstalk [channel]
╰❒ 
`}

exports.search = (prefix) =>{
	return`╭─❒ 「 Search 」 
│➸ぁ ${prefix}ytsearch [query]
│➸ぁ ${prefix}wallpaper [query]
│➸ぁ ${prefix}wikimedia [query]
│➸ぁ ${prefix}hentai
│➸ぁ ${prefix}wattpad [query]
│➸ぁ ${prefix}webtoons [query]
│➸ぁ ${prefix}drakor [query]
│➸ぁ ${prefix}pinterest [query]
╰❒
`}

exports.converter = (prefix) =>{
	return`╭─❒ 「 Converter 」 
│➸ぁ ${prefix}stiker [reply image]
│➸ぁ ${prefix}tourl [image/video]
│➸ぁ ${prefix}togif [sticker]
│➸ぁ ${prefix}tomp4 [sticker]
│➸ぁ ${prefix}toimg [reply sticker]
╰❒
`}

exports.effect = (prefix) =>{
	return`╭─❒ 「 Image Effect 」 
│➸ぁ ${prefix}wanted [reply image/stiker]
│➸ぁ ${prefix}utatoo [reply image/stiker]
│➸ぁ ${prefix}unsharpen [reply image/stiker]
│➸ぁ ${prefix}thanos [reply image/stiker]
│➸ぁ ${prefix}sniper [reply image/stiker]
│➸ぁ ${prefix}sharpen [reply image/stiker]
│➸ぁ ${prefix}sepia [reply image/stiker]
│➸ぁ ${prefix}scary [reply image/stiker]
│➸ぁ ${prefix}rip [reply image/stiker]
│➸ぁ ${prefix}redple [reply image/stiker]
│➸ぁ ${prefix}rejected [reply image/stiker]
│➸ぁ ${prefix}posterize [reply image/stiker]
│➸ぁ ${prefix}ps4 [reply image/stiker]
│➸ぁ ${prefix}pixelize [reply image/stiker]
│➸ぁ ${prefix}missionpassed [reply image/stiker]
│➸ぁ ${prefix}moustache [reply image/stiker]
│➸ぁ ${prefix}lookwhatkarenhave [reply image/stiker]
│➸ぁ ${prefix}jail [reply image/stiker]
│➸ぁ ${prefix}invert [reply image/stiker]
│➸ぁ ${prefix}instagram [reply image/stiker]
│➸ぁ ${prefix}greyscale [reply image/stiker]
│➸ぁ ${prefix}glitch [reply image/stiker]
│➸ぁ ${prefix}gay [reply image/stiker]
│➸ぁ ${prefix}frame [reply image/stiker]
│➸ぁ ${prefix}fire [reply image/stiker]
│➸ぁ ${prefix}distort [reply image/stiker]
│➸ぁ ${prefix}dictator [reply image/stiker]
│➸ぁ ${prefix}deepfry [reply image/stiker]
│➸ぁ ${prefix}ddungeon [reply image/stiker]
│➸ぁ ${prefix}circle [reply image/stiker]
│➸ぁ ${prefix}challenger [reply image/stiker]
│➸ぁ ${prefix}burn [reply image/stiker]
│➸ぁ ${prefix}brazzers [reply image/stiker]
│➸ぁ ${prefix}beautiful [reply image/sticker]
╰❒ 
`}

//
exports.effect2 = (prefix) =>{
	return`╭─❒ 「 Sticker Effect 」 
│➸ぁ ${prefix}jail [reply image/stiker]
│➸ぁ ${prefix}red [reply image/stiker]
│➸ぁ ${prefix}gay [reply image/stiker]
│➸ぁ ${prefix}bloo [reply image/stiker]
│➸ぁ ${prefix}blue [reply image/stiker]
│➸ぁ ${prefix}sepia [reply image/stiker]
│➸ぁ ${prefix}green [reply image/stiker]
│➸ぁ ${prefix}glass [reply image/stiker]
│➸ぁ ${prefix}invert [reply image/stiker]
│➸ぁ ${prefix}blurple [reply image/stiker]
│➸ぁ ${prefix}blurple2 [reply image/stiker]
│➸ぁ ${prefix}wasted [reply image/stiker]
│➸ぁ ${prefix}passed [reply image/stiker]
│➸ぁ ${prefix}triggered [reply image/stiker]
│➸ぁ ${prefix}comrade [reply image/stiker]
│➸ぁ ${prefix}greyscale [reply image/stiker]
│➸ぁ ${prefix}threshold [reply image/stiker]
│➸ぁ ${prefix}brightness [reply image/stiker]
│➸ぁ ${prefix}invertgreyscale [reply image/sticker]
╰❒ 
`
}

exports.download = (prefix) =>{
return`╭─❒ 「 Download 」 
│➸ぁ ${prefix}tiktok [Link]
│➸ぁ ${prefix}tiktoknowm [Link]
│➸ぁ ${prefix}tiktokwm [Link]
│➸ぁ ${prefix}tiktokaudio [Link]
│➸ぁ ${prefix}ytdl [Link]
│➸ぁ ${prefix}play [judul]
│➸ぁ ${prefix}ytmp3 [Link]
│➸ぁ ${prefix}ytshortmp3 [Link]
│➸ぁ ${prefix}ytmp4 [Link]
│➸ぁ ${prefix}ytshorts [Link]
│➸ぁ ${prefix}facebook [Link]
│➸ぁ ${prefix}facebooksd [Link]
│➸ぁ ${prefix}facebookhd [Link]
│➸ぁ ${prefix}fbaudio [Link]
│➸ぁ ${prefix}igdl [Link]
│➸ぁ ${prefix}igphoto [Link]
│➸ぁ ${prefix}igvideo [Link]
│➸ぁ ${prefix}soundcloud [[Link]
│➸ぁ ${prefix}mediafire [Link]
│➸ぁ ${prefix}twitter [Link]
╰❒ 
`
}

exports.ranime = (prefix) =>{
	return`╭─❒ 「 Random Anime 」
│➸ぁ ${prefix}loli
│➸ぁ ${prefix}neko
│➸ぁ ${prefix}waifu
│➸ぁ ${prefix}shinobu
│➸ぁ ${prefix}megumin
│➸ぁ ${prefix}bully
│➸ぁ ${prefix}cuddle
│➸ぁ ${prefix}cry
│➸ぁ ${prefix}hug
│➸ぁ ${prefix}awoo
│➸ぁ ${prefix}kiss
│➸ぁ ${prefix}lick
│➸ぁ ${prefix}pat
│➸ぁ ${prefix}smug
│➸ぁ ${prefix}bonk
│➸ぁ ${prefix}yeet
│➸ぁ ${prefix}blush
│➸ぁ ${prefix}smile
│➸ぁ ${prefix}wave
│➸ぁ ${prefix}highfive
│➸ぁ ${prefix}handhold
│➸ぁ ${prefix}nom
│➸ぁ ${prefix}bite
│➸ぁ ${prefix}glomp
│➸ぁ ${prefix}slap
│➸ぁ ${prefix}kill
│➸ぁ ${prefix}happy
│➸ぁ ${prefix}wink
│➸ぁ ${prefix}poke
│➸ぁ ${prefix}dance
│➸ぁ ${prefix}cringe
╰❒ 
`
}

exports.nsfw = (prefix) =>{
	return`╭─❒ 「 Nsfw & Sfw 」
│➸ぁ ${prefix}ahegao
│➸ぁ ${prefix}ass
│➸ぁ ${prefix}bdsm
│➸ぁ ${prefix}blowjob
│➸ぁ ${prefix}cuckold
│➸ぁ ${prefix}cum
│➸ぁ ${prefix}ero
│➸ぁ ${prefix}femdom
│➸ぁ ${prefix}foot
│➸ぁ ${prefix}gangbang
│➸ぁ ${prefix}glasses
│➸ぁ ${prefix}jahy
│➸ぁ ${prefix}manga
│➸ぁ ${prefix}masturbation
│➸ぁ ${prefix}neko
│➸ぁ ${prefix}orgy
│➸ぁ ${prefix}panties
│➸ぁ ${prefix}pussy
│➸ぁ ${prefix}tentacles
│➸ぁ ${prefix}thighs
│➸ぁ ${prefix}yuri
│➸ぁ ${prefix}feet
│➸ぁ ${prefix}lewdkemo
│➸ぁ ${prefix}woof
│➸ぁ ${prefix}gasm
│➸ぁ ${prefix}solo
│➸ぁ ${prefix}8ball
│➸ぁ ${prefix}goose
│➸ぁ ${prefix}avatar
│➸ぁ ${prefix}hololewd
│➸ぁ ${prefix}gecg
│➸ぁ ${prefix}holo
│➸ぁ ${prefix}fox_girl
│➸ぁ ${prefix}tits
│➸ぁ ${prefix}eroyuri
│➸ぁ ${prefix}holoyero
│➸ぁ ${prefix}lizard
│➸ぁ ${prefix}keta
│➸ぁ ${prefix}eron
│➸ぁ ${prefix}erok
│➸ぁ ${prefix}kemonomimi
│➸ぁ ${prefix}cum_jpg
│➸ぁ ${prefix}nsfw_avatar
│➸ぁ ${prefix}erofeet
│➸ぁ ${prefix}meow
│➸ぁ ${prefix}wallpaper
│➸ぁ ${prefix}waifu
│➸ぁ ${prefix}trap
│➸ぁ ${prefix}lewd
│➸ぁ ${prefix}pussy_jpg
│➸ぁ ${prefix}futanari
│➸ぁ ${prefix}lewdk
│➸ぁ ${prefix}solog
│➸ぁ ${prefix}smug
│➸ぁ ${prefix}cum
│➸ぁ ${prefix}slap
│➸ぁ ${prefix}les
│➸ぁ ${prefix}erokemo
│➸ぁ ${prefix}bj
│➸ぁ ${prefix}pwankg
│➸ぁ ${prefix}pat
│➸ぁ ${prefix}poke
│➸ぁ ${prefix}feed
│➸ぁ ${prefix}nsfw_neko_gif
│➸ぁ ${prefix}pussy
│➸ぁ ${prefix}feetg
│➸ぁ ${prefix}baka
│➸ぁ ${prefix}hug
│➸ぁ ${prefix}kiss
│➸ぁ ${prefix}tickle
│➸ぁ ${prefix}spank
│➸ぁ ${prefix}kuni
│➸ぁ ${prefix}classic
│➸ぁ ${prefix}boobs
│➸ぁ ${prefix}anal
│➸ぁ ${prefix}ngif
│➸ぁ ${prefix}cuddle
│➸ぁ ${prefix}zettai
╰❒ 
`
}

exports.textpro = (prefix) =>{
	return`╭─❒ 「 Textpro Menu 」
│➸ぁ ${prefix}halloween2 [text1|text2]
│➸ぁ ${prefix}horror [text1|text2]
│➸ぁ ${prefix}game8bit [text1|text2]
│➸ぁ ${prefix}layered [text1|text2]
│➸ぁ ${prefix}glitch2 [text1|text2]
│➸ぁ ${prefix}coolg [text1|text2]
│➸ぁ ${prefix}coolwg [text1|text2]
│➸ぁ ${prefix}realistic [text1|text2]
│➸ぁ ${prefix}space3d [text1|text2]
│➸ぁ ${prefix}gtiktok [text1|text2]
│➸ぁ ${prefix}stone [text1|text2]
│➸ぁ ${prefix}marvel [text1|text2]
│➸ぁ ${prefix}marvel2 [text1|text2]
│➸ぁ ${prefix}pornhub [text1|text2]
│➸ぁ ${prefix}avengers [text1|text2]
│➸ぁ ${prefix}metalr [text1|text2]
│➸ぁ ${prefix}metalg [text1|text2]
│➸ぁ ${prefix}metalg2 [text1|text2]
│➸ぁ ${prefix}halloween2 [text1|text2]
│➸ぁ ${prefix}lion [text1|text2]
│➸ぁ ${prefix}wolf_bw [text1|text2]
│➸ぁ ${prefix}wolf_g [text1|text2]
│➸ぁ ${prefix}ninja [text1|text2]
│➸ぁ ${prefix}3dsteel [text1|text2]
│➸ぁ ${prefix}horror2 [text1|text2]
│➸ぁ ${prefix}lava [text1|text2]
│➸ぁ ${prefix}bagel [text1|text2]
│➸ぁ ${prefix}blackpink [text]
│➸ぁ ${prefix}rainbow2 [text]
│➸ぁ ${prefix}water_pipe [text]
│➸ぁ ${prefix}halloween [text]
│➸ぁ ${prefix}sketch [text]
│➸ぁ ${prefix}sircuit [text]
│➸ぁ ${prefix}discovery [text]
│➸ぁ ${prefix}metallic2 [text]
│➸ぁ ${prefix}fiction [text]
│➸ぁ ${prefix}demon [text]
│➸ぁ ${prefix}transformer [text]
│➸ぁ ${prefix}berry [text]
│➸ぁ ${prefix}thunder [text]
│➸ぁ ${prefix}magma [text]
│➸ぁ ${prefix}3dstone [text]
│➸ぁ ${prefix}neon [text]
│➸ぁ ${prefix}glitch [text]
│➸ぁ ${prefix}harry_potter [text]
│➸ぁ ${prefix}embossed [text]
│➸ぁ ${prefix}broken [text]
│➸ぁ ${prefix}papercut [text]
│➸ぁ ${prefix}gradient [text]
│➸ぁ ${prefix}glossy [text]
│➸ぁ ${prefix}watercolor [text]
│➸ぁ ${prefix}multicolor [text]
│➸ぁ ${prefix}neon_devil [text]
│➸ぁ ${prefix}underwater [text]
│➸ぁ ${prefix}bear [text]
│➸ぁ ${prefix}wonderfulg [text]
│➸ぁ ${prefix}christmas [text]
│➸ぁ ${prefix}neon_light [text]
│➸ぁ ${prefix}snow [text]
│➸ぁ ${prefix}cloudsky [text]
│➸ぁ ${prefix}luxury2 [text]
│➸ぁ ${prefix}gradient2 [text]
│➸ぁ ${prefix}summer [text]
│➸ぁ ${prefix}writing [text]
│➸ぁ ${prefix}engraved [text]
│➸ぁ ${prefix}summery [text]
│➸ぁ ${prefix}3dglue [text]
│➸ぁ ${prefix}metaldark [text]
│➸ぁ ${prefix}neonlight [text]
│➸ぁ ${prefix}oscar [text]
│➸ぁ ${prefix}minion [text]
│➸ぁ ${prefix}holographic [text]
│➸ぁ ${prefix}purple [text]
│➸ぁ ${prefix}glossyb [text]
│➸ぁ ${prefix}deluxe2 [text]
│➸ぁ ${prefix}glossyc [text]
│➸ぁ ${prefix}fabric [text]
│➸ぁ ${prefix}neonc [text]
│➸ぁ ${prefix}newyear [text]
│➸ぁ ${prefix}newyear2 [text]
│➸ぁ ${prefix}metals [text]
│➸ぁ ${prefix}xmas [text]
│➸ぁ ${prefix}blood [text]
│➸ぁ ${prefix}darkg [text]
│➸ぁ ${prefix}joker [text]
│➸ぁ ${prefix}wicker [text]
│➸ぁ ${prefix}natural [text]
│➸ぁ ${prefix}firework [text]
│➸ぁ ${prefix}skeleton [text]
│➸ぁ ${prefix}balloon [text]
│➸ぁ ${prefix}balloon2 [text]
│➸ぁ ${prefix}balloon3 [text]
│➸ぁ ${prefix}balloon4 [text]
│➸ぁ ${prefix}balloon5 [text]
│➸ぁ ${prefix}balloon6 [text]
│➸ぁ ${prefix}balloon7 [text]
│➸ぁ ${prefix}steel [text]
│➸ぁ ${prefix}gloss [text]
│➸ぁ ${prefix}denim [text]
│➸ぁ ${prefix}decorate [text]
│➸ぁ ${prefix}decorate2 [text]
│➸ぁ ${prefix}peridot [text]
│➸ぁ ${prefix}rock [text]
│➸ぁ ${prefix}glass [text]
│➸ぁ ${prefix}glass2 [text]
│➸ぁ ${prefix}glass3 [text]
│➸ぁ ${prefix}glass4 [text]
│➸ぁ ${prefix}glass5 [text]
│➸ぁ ${prefix}glass6 [text]
│➸ぁ ${prefix}glass7 [text]
│➸ぁ ${prefix}glass8 [text]
│➸ぁ ${prefix}captain_as2 [text]
│➸ぁ ${prefix}robot [text]
│➸ぁ ${prefix}equalizer [text]
│➸ぁ ${prefix}toxic [text]
│➸ぁ ${prefix}sparkling [text]
│➸ぁ ${prefix}sparkling2 [text]
│➸ぁ ${prefix}sparkling3 [text]
│➸ぁ ${prefix}sparkling4 [text]
│➸ぁ ${prefix}sparkling5 [text]
│➸ぁ ${prefix}sparkling6 [text]
│➸ぁ ${prefix}sparkling7 [text]
│➸ぁ ${prefix}decorative [text]
│➸ぁ ${prefix}chocolate [text]
│➸ぁ ${prefix}strawberry [text]
│➸ぁ ${prefix}koifish [text]
│➸ぁ ${prefix}bread [text]
│➸ぁ ${prefix}matrix [text]
│➸ぁ ${prefix}blood2 [text]
│➸ぁ ${prefix}neonligth2 [text]
│➸ぁ ${prefix}thunder2 [text]
│➸ぁ ${prefix}3dbox [text]
│➸ぁ ${prefix}neon2 [text]
│➸ぁ ${prefix}roadw [text]
│➸ぁ ${prefix}bokeh [text]
│➸ぁ ${prefix}gneon [text]
│➸ぁ ${prefix}advanced [text]
│➸ぁ ${prefix}dropwater [text]
│➸ぁ ${prefix}wall [text]
│➸ぁ ${prefix}chrismast [text]
│➸ぁ ${prefix}honey [text]
│➸ぁ ${prefix}drug [text]
│➸ぁ ${prefix}marble [text]
│➸ぁ ${prefix}marble2 [text]
│➸ぁ ${prefix}ice [text]
│➸ぁ ${prefix}juice [text]
│➸ぁ ${prefix}rusty [text]
│➸ぁ ${prefix}abstra [text]
│➸ぁ ${prefix}biscuit [text]
│➸ぁ ${prefix}wood [text]
│➸ぁ ${prefix}scifi [text]
│➸ぁ ${prefix}metalr [text]
│➸ぁ ${prefix}purpleg [text]
│➸ぁ ${prefix}shiny [text] 
│➸ぁ ${prefix}jewelry [text]
│➸ぁ ${prefix}jewelry2 [text]
│➸ぁ ${prefix}jewelry3 [text]
│➸ぁ ${prefix}jewelry4 [text]
│➸ぁ ${prefix}jewelry5 [text]
│➸ぁ ${prefix}jewelry6 [text]
│➸ぁ ${prefix}jewelry7 [text]
│➸ぁ ${prefix}jewelry8 [text]
│➸ぁ ${prefix}metalh [text]
│➸ぁ ${prefix}golden [text]
│➸ぁ ${prefix}glitter [text]
│➸ぁ ${prefix}glitter2 [text]
│➸ぁ ${prefix}glitter3 [text]
│➸ぁ ${prefix}glitter4 [text]
│➸ぁ ${prefix}glitter5 [text]
│➸ぁ ${prefix}glitter6 [text]
│➸ぁ ${prefix}glitter7 [text]
│➸ぁ ${prefix}metale [text]
│➸ぁ ${prefix}carbon [text]
│➸ぁ ${prefix}candy [text]
│➸ぁ ${prefix}metalb [text]
│➸ぁ ${prefix}gemb [text]
│➸ぁ ${prefix}3dchrome [text]
│➸ぁ ${prefix}metalb2 [text]
│➸ぁ ${prefix}metalg [text]
│➸ぁ ${prefix}metalg [text]
╰❒ 
`
}


exports.other = (prefix) =>{
return`╭─❒ 「 Others 」
│➸ぁ ${prefix}ttp [text]
│➸ぁ ${prefix}attp [text]
│➸ぁ ${prefix}afk [alasan]
│➸ぁ ${prefix}translate [kode_bahasa text]
│➸ぁ ${prefix}kalkulator [query]
│➸ぁ ${prefix}smeme [text1|text2]
│➸ぁ ${prefix}smeme2 [text1|text2]
│➸ぁ ${prefix}memegen [text1|text2]
╰❒ 
`
}
exports.game = (prefix) =>{
return`╭─❒ 「 Game Menu 」
│➸ぁ ${prefix}kuismath
│➸ぁ ${prefix}tebak [option]
│➸ぁ ${prefix}tekateki
│➸ぁ ${prefix}susunkata
│➸ぁ ${prefix}caklontong
╰❒ 
`
}
exports.asupan = (prefix) =>{
return`╭─❒ 「 Asupan Menu 」
│➸ぁ ${prefix}chika
│➸ぁ ${prefix}delvira
│➸ぁ ${prefix}ayu
│➸ぁ ${prefix}bunga
│➸ぁ ${prefix}aura
│➸ぁ ${prefix}nisa
│➸ぁ ${prefix}ziva
│➸ぁ ${prefix}yana
│➸ぁ ${prefix}viona
│➸ぁ ${prefix}syania
│➸ぁ ${prefix}riri
│➸ぁ ${prefix}syifa
│➸ぁ ${prefix}mama_gina
│➸ぁ ${prefix}alcakenya
│➸ぁ ${prefix}mangayutri
│➸ぁ ${prefix}rikagusriani
│➸ぁ ${prefix}asupan
│➸ぁ ${prefix}bocil
│➸ぁ ${prefix}geayubi
│➸ぁ ${prefix}santuy
│➸ぁ ${prefix}ukhty
│➸ぁ ${prefix}syifa
╰❒ 
`
}
exports.cecan = (prefix) =>{
return`╭─❒ 「 Random Cewe 」
│➸ぁ ${prefix}china 
│➸ぁ ${prefix}indonesia 
│➸ぁ ${prefix}malaysia 
│➸ぁ ${prefix}thailand 
│➸ぁ ${prefix}korea 
│➸ぁ ${prefix}japan 
│➸ぁ ${prefix}vietnam 
│➸ぁ ${prefix}jenni 
│➸ぁ ${prefix}jiso 
│➸ぁ ${prefix}lisa  
│➸ぁ ${prefix}rose
╰❒ 
`
}

exports.tqto = () =>{
	return`╭─❒ 「 TqTo 」 
│➸ぁ My God
│➸ぁ My Parents
│➸ぁ My Friends
│➸ぁ Hadi BOT
│➸ぁ F I R R A  B O T
│➸ぁ Mhankbarbar
│➸ぁ Nurutomo
│➸ぁ Rashid
│➸ぁ ZeeoneOfc
│➸ぁ Penyedia Module
│➸ぁ And All Creator BOT Indo
╰❒ And All Support
`
}