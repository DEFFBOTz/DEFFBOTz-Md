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
    return `Done BOSzð`
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
    return `*ââ ã Kontak TerBlokir ã ââ*
    
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
	return`Hai kak ${pushname} ð selamat ${salam} , 
saya Adalah DEFFBOTz-MD Yang Baru Rilis, 
BOT Ini Merupakan Codingan Alphabot-MD Jadi Sama Dengan Script AlphaBot-MD by zeeone ofc.
BOT ini Juga Masih Dalam Tahap Uji Coba, 
JadiJika Menemukan Bug Atau Error Silahkan Lapor Ke Owner Yah Kak.
`
}
exports.listMenu = (time, salam, pushname, prefix) => {
    return `*Selamat ${salam} ${pushname}*
*âTime Server : ${time}*

â­ââ ã Bot Info ã 
ââ¸ã ${prefix}owner
ââ¸ã ${prefix}rules
ââ¸ã ${prefix}sc
ââ¸ã ${prefix}ping
ââ¸ã ${prefix}runtime
ââ¸ã ${prefix}botstatus
ââ¸ã ${prefix}donate
â°â 


â­ââ ã Owner ã 
ââ¸ã < evaluate
ââ¸ã > evaluate
ââ¸ã $ exec
ââ¸ã => exec
ââ¸ã ${prefix}setmenu [query]
ââ¸ã ${prefix}setmenu templateLocation
ââ¸ã ${prefix}setmenu templateTenor
ââ¸ã ${prefix}sendsesi
ââ¸ã ${prefix}listpc
ââ¸ã ${prefix}listgc
ââ¸ã ${prefix}broadcast [text]
ââ¸ã ${prefix}bc [text]
ââ¸ã ${prefix}bcgc [text]
ââ¸ã ${prefix}nsfw [on/off]
ââ¸ã ${prefix}autorespond [on/off]
ââ¸ã ${prefix}antiviewonce [on/off]
ââ¸ã ${prefix}join [link]
ââ¸ã ${prefix}self
ââ¸ã ${prefix}public [only bot]
ââ¸ã ${prefix}del [reply pesan bot]
ââ¸ã ${prefix}setppbot]
â°â 


â­ââ ã Database ã 
ââ¸ã ${prefix}setcmd [reply stiker]
ââ¸ã ${prefix}delcmd [reply stiker]
ââ¸ã ${prefix}listcmd
ââ¸ã ${prefix}absen
ââ¸ã ${prefix}cekabsen
ââ¸ã ${prefix}deleteabsen
ââ¸ã ${prefix}absenstart
ââ¸ã ${prefix}addmsg [nama file]
ââ¸ã ${prefix}getmsg [nama file]
ââ¸ã ${prefix}listmsg
ââ¸ã ${prefix}delmsg [nama File]
â°â 


â­ââ ã Group ã 
ââ¸ã ${prefix}listonline
ââ¸ã ${prefix}sider
ââ¸ã ${prefix}infochat
ââ¸ã ${prefix}setdesk [text]
ââ¸ã ${prefix}setppgrup [reply image]
ââ¸ã ${prefix}antilink [on/off]
ââ¸ã ${prefix}revoke
ââ¸ã ${prefix}leave
ââ¸ã ${prefix}add [62***]
ââ¸ã ${prefix}kick @tag
ââ¸ã ${prefix}leave
ââ¸ã ${prefix}linkgc
ââ¸ã ${prefix}group [open/close]
ââ¸ã ${prefix}tagall [text]
ââ¸ã ${prefix}hidetag [query]
â°â 

â­ââ ã Anime ã 
ââ¸ã ${prefix}quotesanime
ââ¸ã ${prefix}anime [query]
ââ¸ã ${prefix}manga [query]
ââ¸ã ${prefix}character [query]
â°â 

â­ââ ã Tag ã 
ââ¸ã ${prefix}stickertag
ââ¸ã ${prefix}videotag [query]
ââ¸ã ${prefix}vntag [query]
ââ¸ã ${prefix}imagetag [query]
â°â 

â­ââ ã Stalking ã 
ââ¸ã ${prefix}igstalk [username]
ââ¸ã ${prefix}ghstalk [username]
ââ¸ã ${prefix}ytstalk [channel]
â°â 


â­ââ ã Search ã 
ââ¸ã ${prefix}ytsearch [query]
ââ¸ã ${prefix}wallpaper [query]
ââ¸ã ${prefix}wikimedia [query]
ââ¸ã ${prefix}hentai
ââ¸ã ${prefix}wattpad [query]
ââ¸ã ${prefix}webtoons [query]
ââ¸ã ${prefix}drakor [query]
ââ¸ã ${prefix}pinterest [query]
â°â 


â­ââ ã Converter ã 
ââ¸ã ${prefix}stiker [reply image]
ââ¸ã ${prefix}tourl [image/video]
ââ¸ã ${prefix}togif [sticker]
ââ¸ã ${prefix}tomp4 [sticker]
ââ¸ã ${prefix}toimg [reply sticker]
â°â


â­ââ ã Image Effect ã 
ââ¸ã ${prefix}wanted [reply image/stiker]
ââ¸ã ${prefix}utatoo [reply image/stiker]
ââ¸ã ${prefix}unsharpen [reply image/stiker]
ââ¸ã ${prefix}thanos [reply image/stiker]
ââ¸ã ${prefix}sniper [reply image/stiker]
ââ¸ã ${prefix}sharpen [reply image/stiker]
ââ¸ã ${prefix}sepia [reply image/stiker]
ââ¸ã ${prefix}scary [reply image/stiker]
ââ¸ã ${prefix}rip [reply image/stiker]
ââ¸ã ${prefix}redple [reply image/stiker]
ââ¸ã ${prefix}rejected [reply image/stiker]
ââ¸ã ${prefix}posterize [reply image/stiker]
ââ¸ã ${prefix}ps4 [reply image/stiker]
ââ¸ã ${prefix}pixelize [reply image/stiker]
ââ¸ã ${prefix}missionpassed [reply image/stiker]
ââ¸ã ${prefix}moustache [reply image/stiker]
ââ¸ã ${prefix}lookwhatkarenhave [reply image/stiker]
ââ¸ã ${prefix}jail [reply image/stiker]
ââ¸ã ${prefix}invert [reply image/stiker]
ââ¸ã ${prefix}instagram [reply image/stiker]
ââ¸ã ${prefix}greyscale [reply image/stiker]
ââ¸ã ${prefix}glitch [reply image/stiker]
ââ¸ã ${prefix}gay [reply image/stiker]
ââ¸ã ${prefix}frame [reply image/stiker]
ââ¸ã ${prefix}fire [reply image/stiker]
ââ¸ã ${prefix}distort [reply image/stiker]
ââ¸ã ${prefix}dictator [reply image/stiker]
ââ¸ã ${prefix}deepfry [reply image/stiker]
ââ¸ã ${prefix}ddungeon [reply image/stiker]
ââ¸ã ${prefix}circle [reply image/stiker]
ââ¸ã ${prefix}challenger [reply image/stiker]
ââ¸ã ${prefix}burn [reply image/stiker]
ââ¸ã ${prefix}brazzers [reply image/stiker]
ââ¸ã ${prefix}beautiful [reply image/sticker]
â°â 


â­ââ ã Sticker Effect ã 
ââ¸ã ${prefix}jail [reply image/stiker]
ââ¸ã ${prefix}red [reply image/stiker]
ââ¸ã ${prefix}gay [reply image/stiker]
ââ¸ã ${prefix}bloo [reply image/stiker]
ââ¸ã ${prefix}blue [reply image/stiker]
ââ¸ã ${prefix}sepia [reply image/stiker]
ââ¸ã ${prefix}green [reply image/stiker]
ââ¸ã ${prefix}glass [reply image/stiker]
ââ¸ã ${prefix}invert [reply image/stiker]
ââ¸ã ${prefix}blurple [reply image/stiker]
ââ¸ã ${prefix}blurple2 [reply image/stiker]
ââ¸ã ${prefix}wasted [reply image/stiker]
ââ¸ã ${prefix}passed [reply image/stiker]
ââ¸ã ${prefix}triggered [reply image/stiker]
ââ¸ã ${prefix}comrade [reply image/stiker]
ââ¸ã ${prefix}greyscale [reply image/stiker]
ââ¸ã ${prefix}threshold [reply image/stiker]
ââ¸ã ${prefix}brightness [reply image/stiker]
ââ¸ã ${prefix}invertgreyscale [reply image/sticker]
â°â 


â­ââ ã Download ã 
ââ¸ã ${prefix}tiktok [Link]
ââ¸ã ${prefix}tiktoknowm [Link]
ââ¸ã ${prefix}tiktokwm [Link]
ââ¸ã ${prefix}tiktokaudio [Link]
ââ¸ã ${prefix}ytdl [Link]
ââ¸ã ${prefix}play [judul]
ââ¸ã ${prefix}ytmp3 [Link]
ââ¸ã ${prefix}ytshortmp3 [Link]
ââ¸ã ${prefix}ytmp4 [Link]
ââ¸ã ${prefix}ytshorts [Link]
ââ¸ã ${prefix}facebook [Link]
ââ¸ã ${prefix}facebooksd [Link]
ââ¸ã ${prefix}facebookhd [Link]
ââ¸ã ${prefix}fbaudio [Link]
ââ¸ã ${prefix}igdl [Link]
ââ¸ã ${prefix}igphoto [Link]
ââ¸ã ${prefix}igvideo [Link]
ââ¸ã ${prefix}soundcloud [[Link]
ââ¸ã ${prefix}mediafire [Link]
ââ¸ã ${prefix}twitter [Link]
â°â 


â­ââ ã Random Anime ã
ââ¸ã ${prefix}loli
ââ¸ã ${prefix}neko
ââ¸ã ${prefix}waifu
ââ¸ã ${prefix}shinobu
ââ¸ã ${prefix}megumin
ââ¸ã ${prefix}bully
ââ¸ã ${prefix}cuddle
ââ¸ã ${prefix}cry
ââ¸ã ${prefix}hug
ââ¸ã ${prefix}awoo
ââ¸ã ${prefix}kiss
ââ¸ã ${prefix}lick
ââ¸ã ${prefix}pat
ââ¸ã ${prefix}smug
ââ¸ã ${prefix}bonk
ââ¸ã ${prefix}yeet
ââ¸ã ${prefix}blush
ââ¸ã ${prefix}smile
ââ¸ã ${prefix}wave
ââ¸ã ${prefix}highfive
ââ¸ã ${prefix}handhold
ââ¸ã ${prefix}nom
ââ¸ã ${prefix}bite
ââ¸ã ${prefix}glomp
ââ¸ã ${prefix}slap
ââ¸ã ${prefix}kill
ââ¸ã ${prefix}happy
ââ¸ã ${prefix}wink
ââ¸ã ${prefix}poke
ââ¸ã ${prefix}dance
ââ¸ã ${prefix}cringe
â°â 

â­ââ ã Nsfw & Sfw ã
ââ¸ã ${prefix}ahegao
ââ¸ã ${prefix}ass
ââ¸ã ${prefix}bdsm
ââ¸ã ${prefix}blowjob
ââ¸ã ${prefix}cuckold
ââ¸ã ${prefix}cum
ââ¸ã ${prefix}ero
ââ¸ã ${prefix}femdom
ââ¸ã ${prefix}foot
ââ¸ã ${prefix}gangbang
ââ¸ã ${prefix}glasses
ââ¸ã ${prefix}jahy
ââ¸ã ${prefix}manga
ââ¸ã ${prefix}masturbation
ââ¸ã ${prefix}neko
ââ¸ã ${prefix}orgy
ââ¸ã ${prefix}panties
ââ¸ã ${prefix}pussy
ââ¸ã ${prefix}tentacles
ââ¸ã ${prefix}thighs
ââ¸ã ${prefix}yuri
ââ¸ã ${prefix}feet
ââ¸ã ${prefix}lewdkemo
ââ¸ã ${prefix}woof
ââ¸ã ${prefix}gasm
ââ¸ã ${prefix}solo
ââ¸ã ${prefix}8ball
ââ¸ã ${prefix}goose
ââ¸ã ${prefix}avatar
ââ¸ã ${prefix}hololewd
ââ¸ã ${prefix}gecg
ââ¸ã ${prefix}holo
ââ¸ã ${prefix}fox_girl
ââ¸ã ${prefix}tits
ââ¸ã ${prefix}eroyuri
ââ¸ã ${prefix}holoyero
ââ¸ã ${prefix}lizard
ââ¸ã ${prefix}keta
ââ¸ã ${prefix}eron
ââ¸ã ${prefix}erok
ââ¸ã ${prefix}kemonomimi
ââ¸ã ${prefix}cum_jpg
ââ¸ã ${prefix}nsfw_avatar
ââ¸ã ${prefix}erofeet
ââ¸ã ${prefix}meow
ââ¸ã ${prefix}wallpaper
ââ¸ã ${prefix}waifu
ââ¸ã ${prefix}trap
ââ¸ã ${prefix}lewd
ââ¸ã ${prefix}pussy_jpg
ââ¸ã ${prefix}futanari
ââ¸ã ${prefix}lewdk
ââ¸ã ${prefix}solog
ââ¸ã ${prefix}smug
ââ¸ã ${prefix}cum
ââ¸ã ${prefix}slap
ââ¸ã ${prefix}les
ââ¸ã ${prefix}erokemo
ââ¸ã ${prefix}bj
ââ¸ã ${prefix}pwankg
ââ¸ã ${prefix}pat
ââ¸ã ${prefix}poke
ââ¸ã ${prefix}feed
ââ¸ã ${prefix}nsfw_neko_gif
ââ¸ã ${prefix}pussy
ââ¸ã ${prefix}feetg
ââ¸ã ${prefix}baka
ââ¸ã ${prefix}hug
ââ¸ã ${prefix}kiss
ââ¸ã ${prefix}tickle
ââ¸ã ${prefix}spank
ââ¸ã ${prefix}kuni
ââ¸ã ${prefix}classic
ââ¸ã ${prefix}boobs
ââ¸ã ${prefix}anal
ââ¸ã ${prefix}ngif
ââ¸ã ${prefix}cuddle
ââ¸ã ${prefix}zettai
â°â 

â­ââ ã Textpro Menu ã
ââ¸ã ${prefix}halloween2 [text1|text2]
ââ¸ã ${prefix}horror [text1|text2]
ââ¸ã ${prefix}game8bit [text1|text2]
ââ¸ã ${prefix}layered [text1|text2]
ââ¸ã ${prefix}glitch2 [text1|text2]
ââ¸ã ${prefix}coolg [text1|text2]
ââ¸ã ${prefix}coolwg [text1|text2]
ââ¸ã ${prefix}realistic [text1|text2]
ââ¸ã ${prefix}space3d [text1|text2]
ââ¸ã ${prefix}gtiktok [text1|text2]
ââ¸ã ${prefix}stone [text1|text2]
ââ¸ã ${prefix}marvel [text1|text2]
ââ¸ã ${prefix}marvel2 [text1|text2]
ââ¸ã ${prefix}pornhub [text1|text2]
ââ¸ã ${prefix}avengers [text1|text2]
ââ¸ã ${prefix}metalr [text1|text2]
ââ¸ã ${prefix}metalg [text1|text2]
ââ¸ã ${prefix}metalg2 [text1|text2]
ââ¸ã ${prefix}halloween2 [text1|text2]
ââ¸ã ${prefix}lion [text1|text2]
ââ¸ã ${prefix}wolf_bw [text1|text2]
ââ¸ã ${prefix}wolf_g [text1|text2]
ââ¸ã ${prefix}ninja [text1|text2]
ââ¸ã ${prefix}3dsteel [text1|text2]
ââ¸ã ${prefix}horror2 [text1|text2]
ââ¸ã ${prefix}lava [text1|text2]
ââ¸ã ${prefix}bagel [text1|text2]
ââ¸ã ${prefix}blackpink [text]
ââ¸ã ${prefix}rainbow2 [text]
ââ¸ã ${prefix}water_pipe [text]
ââ¸ã ${prefix}halloween [text]
ââ¸ã ${prefix}sketch [text]
ââ¸ã ${prefix}sircuit [text]
ââ¸ã ${prefix}discovery [text]
ââ¸ã ${prefix}metallic2 [text]
ââ¸ã ${prefix}fiction [text]
ââ¸ã ${prefix}demon [text]
ââ¸ã ${prefix}transformer [text]
ââ¸ã ${prefix}berry [text]
ââ¸ã ${prefix}thunder [text]
ââ¸ã ${prefix}magma [text]
ââ¸ã ${prefix}3dstone [text]
ââ¸ã ${prefix}neon [text]
ââ¸ã ${prefix}glitch [text]
ââ¸ã ${prefix}harry_potter [text]
ââ¸ã ${prefix}embossed [text]
ââ¸ã ${prefix}broken [text]
ââ¸ã ${prefix}papercut [text]
ââ¸ã ${prefix}gradient [text]
ââ¸ã ${prefix}glossy [text]
ââ¸ã ${prefix}watercolor [text]
ââ¸ã ${prefix}multicolor [text]
ââ¸ã ${prefix}neon_devil [text]
ââ¸ã ${prefix}underwater [text]
ââ¸ã ${prefix}bear [text]
ââ¸ã ${prefix}wonderfulg [text]
ââ¸ã ${prefix}christmas [text]
ââ¸ã ${prefix}neon_light [text]
ââ¸ã ${prefix}snow [text]
ââ¸ã ${prefix}cloudsky [text]
ââ¸ã ${prefix}luxury2 [text]
ââ¸ã ${prefix}gradient2 [text]
ââ¸ã ${prefix}summer [text]
ââ¸ã ${prefix}writing [text]
ââ¸ã ${prefix}engraved [text]
ââ¸ã ${prefix}summery [text]
ââ¸ã ${prefix}3dglue [text]
ââ¸ã ${prefix}metaldark [text]
ââ¸ã ${prefix}neonlight [text]
ââ¸ã ${prefix}oscar [text]
ââ¸ã ${prefix}minion [text]
ââ¸ã ${prefix}holographic [text]
ââ¸ã ${prefix}purple [text]
ââ¸ã ${prefix}glossyb [text]
ââ¸ã ${prefix}deluxe2 [text]
ââ¸ã ${prefix}glossyc [text]
ââ¸ã ${prefix}fabric [text]
ââ¸ã ${prefix}neonc [text]
ââ¸ã ${prefix}newyear [text]
ââ¸ã ${prefix}newyear2 [text]
ââ¸ã ${prefix}metals [text]
ââ¸ã ${prefix}xmas [text]
ââ¸ã ${prefix}blood [text]
ââ¸ã ${prefix}darkg [text]
ââ¸ã ${prefix}joker [text]
ââ¸ã ${prefix}wicker [text]
ââ¸ã ${prefix}natural [text]
ââ¸ã ${prefix}firework [text]
ââ¸ã ${prefix}skeleton [text]
ââ¸ã ${prefix}balloon [text]
ââ¸ã ${prefix}balloon2 [text]
ââ¸ã ${prefix}balloon3 [text]
ââ¸ã ${prefix}balloon4 [text]
ââ¸ã ${prefix}balloon5 [text]
ââ¸ã ${prefix}balloon6 [text]
ââ¸ã ${prefix}balloon7 [text]
ââ¸ã ${prefix}steel [text]
ââ¸ã ${prefix}gloss [text]
ââ¸ã ${prefix}denim [text]
ââ¸ã ${prefix}decorate [text]
ââ¸ã ${prefix}decorate2 [text]
ââ¸ã ${prefix}peridot [text]
ââ¸ã ${prefix}rock [text]
ââ¸ã ${prefix}glass [text]
ââ¸ã ${prefix}glass2 [text]
ââ¸ã ${prefix}glass3 [text]
ââ¸ã ${prefix}glass4 [text]
ââ¸ã ${prefix}glass5 [text]
ââ¸ã ${prefix}glass6 [text]
ââ¸ã ${prefix}glass7 [text]
ââ¸ã ${prefix}glass8 [text]
ââ¸ã ${prefix}captain_as2 [text]
ââ¸ã ${prefix}robot [text]
ââ¸ã ${prefix}equalizer [text]
ââ¸ã ${prefix}toxic [text]
ââ¸ã ${prefix}sparkling [text]
ââ¸ã ${prefix}sparkling2 [text]
ââ¸ã ${prefix}sparkling3 [text]
ââ¸ã ${prefix}sparkling4 [text]
ââ¸ã ${prefix}sparkling5 [text]
ââ¸ã ${prefix}sparkling6 [text]
ââ¸ã ${prefix}sparkling7 [text]
ââ¸ã ${prefix}decorative [text]
ââ¸ã ${prefix}chocolate [text]
ââ¸ã ${prefix}strawberry [text]
ââ¸ã ${prefix}koifish [text]
ââ¸ã ${prefix}bread [text]
ââ¸ã ${prefix}matrix [text]
ââ¸ã ${prefix}blood2 [text]
ââ¸ã ${prefix}neonligth2 [text]
ââ¸ã ${prefix}thunder2 [text]
ââ¸ã ${prefix}3dbox [text]
ââ¸ã ${prefix}neon2 [text]
ââ¸ã ${prefix}roadw [text]
ââ¸ã ${prefix}bokeh [text]
ââ¸ã ${prefix}gneon [text]
ââ¸ã ${prefix}advanced [text]
ââ¸ã ${prefix}dropwater [text]
ââ¸ã ${prefix}wall [text]
ââ¸ã ${prefix}chrismast [text]
ââ¸ã ${prefix}honey [text]
ââ¸ã ${prefix}drug [text]
ââ¸ã ${prefix}marble [text]
ââ¸ã ${prefix}marble2 [text]
ââ¸ã ${prefix}ice [text]
ââ¸ã ${prefix}juice [text]
ââ¸ã ${prefix}rusty [text]
ââ¸ã ${prefix}abstra [text]
ââ¸ã ${prefix}biscuit [text]
ââ¸ã ${prefix}wood [text]
ââ¸ã ${prefix}scifi [text]
ââ¸ã ${prefix}metalr [text]
ââ¸ã ${prefix}purpleg [text]
ââ¸ã ${prefix}shiny [text] 
ââ¸ã ${prefix}jewelry [text]
ââ¸ã ${prefix}jewelry2 [text]
ââ¸ã ${prefix}jewelry3 [text]
ââ¸ã ${prefix}jewelry4 [text]
ââ¸ã ${prefix}jewelry5 [text]
ââ¸ã ${prefix}jewelry6 [text]
ââ¸ã ${prefix}jewelry7 [text]
ââ¸ã ${prefix}jewelry8 [text]
ââ¸ã ${prefix}metalh [text]
ââ¸ã ${prefix}golden [text]
ââ¸ã ${prefix}glitter [text]
ââ¸ã ${prefix}glitter2 [text]
ââ¸ã ${prefix}glitter3 [text]
ââ¸ã ${prefix}glitter4 [text]
ââ¸ã ${prefix}glitter5 [text]
ââ¸ã ${prefix}glitter6 [text]
ââ¸ã ${prefix}glitter7 [text]
ââ¸ã ${prefix}metale [text]
ââ¸ã ${prefix}carbon [text]
ââ¸ã ${prefix}candy [text]
ââ¸ã ${prefix}metalb [text]
ââ¸ã ${prefix}gemb [text]
ââ¸ã ${prefix}3dchrome [text]
ââ¸ã ${prefix}metalb2 [text]
ââ¸ã ${prefix}metalg [text]
ââ¸ã ${prefix}metalg [text]
â°â 


â­ââ ã Others ã
ââ¸ã ${prefix}afk [alasan]
ââ¸ã ${prefix}translate kode_bahasa text
ââ¸ã ${prefix}kalkulator [query]
ââ¸ã ${prefix}smeme [text]
ââ¸ã ${prefix}smeme2 [text1|text2]
ââ¸ã ${prefix}memegen [text1|text2]
â°â

â­ââ ã Game Menu ã
ââ¸ã ${prefix}kuismath
ââ¸ã ${prefix}tebak [option]
ââ¸ã ${prefix}tekateki
ââ¸ã ${prefix}susunkata
ââ¸ã ${prefix}caklontong
â°â 


â­ââ ã Asupan Menu ã
ââ¸ã ${prefix}chika
ââ¸ã ${prefix}delvira
ââ¸ã ${prefix}ayu
ââ¸ã ${prefix}bunga
ââ¸ã ${prefix}aura
ââ¸ã ${prefix}nisa
ââ¸ã ${prefix}ziva
ââ¸ã ${prefix}yana
ââ¸ã ${prefix}viona
ââ¸ã ${prefix}syania
ââ¸ã ${prefix}riri
ââ¸ã ${prefix}syifa
ââ¸ã ${prefix}mama_gina
ââ¸ã ${prefix}alcakenya
ââ¸ã ${prefix}mangayutri
ââ¸ã ${prefix}rikagusriani
ââ¸ã ${prefix}asupan
ââ¸ã ${prefix}bocil
ââ¸ã ${prefix}geayubi
ââ¸ã ${prefix}santuy
ââ¸ã ${prefix}ukhty
ââ¸ã ${prefix}syifa
â°â 


â­ââ ã Random Cewe ã
ââ¸ã ${prefix}china 
ââ¸ã ${prefix}indonesia 
ââ¸ã ${prefix}malaysia 
ââ¸ã ${prefix}thailand 
ââ¸ã ${prefix}korea 
ââ¸ã ${prefix}japan 
ââ¸ã ${prefix}vietnam 
ââ¸ã ${prefix}jenni 
ââ¸ã ${prefix}jiso 
ââ¸ã ${prefix}lisa  
ââ¸ã ${prefix}rose
â°â 

â­ââ ã TqTo ã 
ââ¸ã My God
ââ¸ã My Parents
ââ¸ã My Friends
ââ¸ã Hadi BOT
ââ¸ã F I R R A  B O T
ââ¸ã Mhankbarbar
ââ¸ã Nurutomo
ââ¸ã Rashid
ââ¸ã ZeeoneOfc
ââ¸ã Penyedia Module
ââ¸ã And All Creator BOT Indo
â°â 
    `
}

exports.rules = (prefix) => {
    return `
*ââ ã RULESã ââ*

1. Jangan spam bot. â
(Nanti Lu Di Blok Mampus)

2. Jangan telepon bot. â
(Nnti Lu Di Blok Juga)

3. Jangan mengeksploitasi bot.ð
(Dikenai Hukuman Mati+Penggal Kepala)

ð¯ï¸ Bot tidak atau lambat merespon ?
â¡ï¸ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan. Tetap patuhi rulesâ¼ï¸

ð¯ï¸ Dimana saya bisa mendapatkan Script dari bot ini ?
â¡ï¸ Script ini masih private dan tidak pernah diperjual belikan ,bijaklah dalam mengetahui penipu.

ð¯ï¸ Boleh saya menambah ke grup?
â¡ï¸ Untuk sementara bot dalam status free to add.

ð¯ï¸ Prefixnya apa ya?
â¡ï¸ Bot ini menggunakan multi prefix. Berarti anda bisa menggunakan prefix #, . , Dan prefix wajar lainnya.

ð¯ï¸ Kak, kok syaa chat owner tidak direspon?
â¡ï¸ Owner hanya merespon pertanyaan seputar bot Dan kendala eror, tidak untuk kenalan ataupun mengemis script.


Jika sudah dipahami rules-nya, silakan ketik *${prefix}allmenu* untuk memulai!

â ï¸ Segala kebijakan dan ketentuan DEFFBOTz di pegang oleh owner dan segala perubahan kebijakan, sewaktu waktu owner berhak mencabut, memblokir user(*ï¹*) 

Arigatou Gozaimasu! Untuk kalian user ramah dan Beberapa orang yg Support gw dalam project codding DEFFBOTz
ð
`
}
exports.welcome = () =>{
	return`â­ââ Intro Dulu Yah Kackð
â ððð¦ð:
â ðð¦ð®ð«:
â ðð¬ðð¥:
â ððð§ððð«:
â°â ð¯ðºðððð ðððð¾ð ðððð ððº ððºk ~`
}
exports.leave = () =>{
	return`yahh Malah Outð Goodbye`
}
exports.source = () =>{
return`*------ã SOURCE CODE ã ------*

sc Ini Punya DEFFBOTz Cuma Copas Dari zeeone Semua awokwokwokð¤£
`
}
exports.tos = (ownernomer) => {
    return `
*-------ã DONATE ã -------*

Hai kak âºï¸ 
yakin Nih Mau Donasi?
Dikasih Syukur Ga Dikasih Juga Gapapa.ð

Berapapun donasi kalian akan sangat berarti Bagi Sayað

Thanks!ð

Kontak Owner:
wa.me/${ownernomer}

    `
}

exports.info = (prefix) =>{
	return`â­ââ ã Bot Info ã 
ââ¸ã ${prefix}owner
ââ¸ã ${prefix}rules
ââ¸ã ${prefix}sc
ââ¸ã ${prefix}ping
ââ¸ã ${prefix}runtime
ââ¸ã ${prefix}botstatus
ââ¸ã ${prefix}donate
â°â 
`}

exports.ownermenu = (prefix) =>{
return`â­ââ ã Owner ã 
ââ¸ã < evaluate
ââ¸ã > evaluate
ââ¸ã $ exec
ââ¸ã => exec
ââ¸ã ${prefix}setmenu [query]
ââ¸ã ${prefix}setmenu templateLocation
ââ¸ã ${prefix}setmenu templateTenor
ââ¸ã ${prefix}sendsesi
ââ¸ã ${prefix}listpc
ââ¸ã ${prefix}listgc
ââ¸ã ${prefix}broadcast [text]
ââ¸ã ${prefix}bc [text]
ââ¸ã ${prefix}bcgc [text]
ââ¸ã ${prefix}nsfw [on/off]
ââ¸ã ${prefix}autorespond [on/off]
ââ¸ã ${prefix}antiviewonce [on/off]
ââ¸ã ${prefix}join [link]
ââ¸ã ${prefix}self
ââ¸ã ${prefix}public [only bot]
ââ¸ã ${prefix}del [pesan bot]
ââ¸ã ${prefix}setppbot [reply image]
â°â 
`}

exports.database = (prefix) =>{
	return`â­ââ ã Database ã 
ââ¸ã ${prefix}setcmd [reply stiker]
ââ¸ã ${prefix}delcmd [reply stiker]
ââ¸ã ${prefix}listcmd
ââ¸ã ${prefix}absen
ââ¸ã ${prefix}cekabsen
ââ¸ã ${prefix}deleteabsen
ââ¸ã ${prefix}absenstart
ââ¸ã ${prefix}addmsg [nama file]
ââ¸ã ${prefix}getmsg [nama file]
ââ¸ã ${prefix}listmsg
ââ¸ã ${prefix}delmsg [nama File]
â°â 
`}

exports.group = (prefix) =>{
	return`â­ââ ã Group ã 
ââ¸ã ${prefix}listonline
ââ¸ã ${prefix}sider
ââ¸ã ${prefix}infochat
ââ¸ã ${prefix}setdesk [text]
ââ¸ã ${prefix}setppgrup [reply image]
ââ¸ã ${prefix}antilink [on/off]
ââ¸ã ${prefix}revoke
ââ¸ã ${prefix}leave
ââ¸ã ${prefix}add [62***]
ââ¸ã ${prefix}kick @tag
ââ¸ã ${prefix}leave
ââ¸ã ${prefix}linkgc
ââ¸ã ${prefix}group [open/close]
ââ¸ã ${prefix}tagall [text]
ââ¸ã ${prefix}hidetag [text]
â°â 
`}

exports.anime = (prefix) =>{
	return`â­ââ ã Anime ã 
ââ¸ã ${prefix}quotesanime
ââ¸ã ${prefix}anime [query]
ââ¸ã ${prefix}manga [query]
ââ¸ã ${prefix}character [query]
â°â 
`}

exports.tag = (prefix) =>{
	return`â­ââ ã Tag ã 
ââ¸ã ${prefix}stickertag
ââ¸ã ${prefix}videotag [query]
ââ¸ã ${prefix}vntag [query]
ââ¸ã ${prefix}imagetag
â°â 
`}

exports.stalk = (prefix) =>{
	return`â­ââ ã Stalking ã 
ââ¸ã ${prefix}igstalk [username]
ââ¸ã ${prefix}ghstalk [username]
ââ¸ã ${prefix}ytstalk [channel]
â°â 
`}

exports.search = (prefix) =>{
	return`â­ââ ã Search ã 
ââ¸ã ${prefix}ytsearch [query]
ââ¸ã ${prefix}wallpaper [query]
ââ¸ã ${prefix}wikimedia [query]
ââ¸ã ${prefix}hentai
ââ¸ã ${prefix}wattpad [query]
ââ¸ã ${prefix}webtoons [query]
ââ¸ã ${prefix}drakor [query]
ââ¸ã ${prefix}pinterest [query]
â°â
`}

exports.converter = (prefix) =>{
	return`â­ââ ã Converter ã 
ââ¸ã ${prefix}stiker [reply image]
ââ¸ã ${prefix}tourl [image/video]
ââ¸ã ${prefix}togif [sticker]
ââ¸ã ${prefix}tomp4 [sticker]
ââ¸ã ${prefix}toimg [reply sticker]
â°â
`}

exports.effect = (prefix) =>{
	return`â­ââ ã Image Effect ã 
ââ¸ã ${prefix}wanted [reply image/stiker]
ââ¸ã ${prefix}utatoo [reply image/stiker]
ââ¸ã ${prefix}unsharpen [reply image/stiker]
ââ¸ã ${prefix}thanos [reply image/stiker]
ââ¸ã ${prefix}sniper [reply image/stiker]
ââ¸ã ${prefix}sharpen [reply image/stiker]
ââ¸ã ${prefix}sepia [reply image/stiker]
ââ¸ã ${prefix}scary [reply image/stiker]
ââ¸ã ${prefix}rip [reply image/stiker]
ââ¸ã ${prefix}redple [reply image/stiker]
ââ¸ã ${prefix}rejected [reply image/stiker]
ââ¸ã ${prefix}posterize [reply image/stiker]
ââ¸ã ${prefix}ps4 [reply image/stiker]
ââ¸ã ${prefix}pixelize [reply image/stiker]
ââ¸ã ${prefix}missionpassed [reply image/stiker]
ââ¸ã ${prefix}moustache [reply image/stiker]
ââ¸ã ${prefix}lookwhatkarenhave [reply image/stiker]
ââ¸ã ${prefix}jail [reply image/stiker]
ââ¸ã ${prefix}invert [reply image/stiker]
ââ¸ã ${prefix}instagram [reply image/stiker]
ââ¸ã ${prefix}greyscale [reply image/stiker]
ââ¸ã ${prefix}glitch [reply image/stiker]
ââ¸ã ${prefix}gay [reply image/stiker]
ââ¸ã ${prefix}frame [reply image/stiker]
ââ¸ã ${prefix}fire [reply image/stiker]
ââ¸ã ${prefix}distort [reply image/stiker]
ââ¸ã ${prefix}dictator [reply image/stiker]
ââ¸ã ${prefix}deepfry [reply image/stiker]
ââ¸ã ${prefix}ddungeon [reply image/stiker]
ââ¸ã ${prefix}circle [reply image/stiker]
ââ¸ã ${prefix}challenger [reply image/stiker]
ââ¸ã ${prefix}burn [reply image/stiker]
ââ¸ã ${prefix}brazzers [reply image/stiker]
ââ¸ã ${prefix}beautiful [reply image/sticker]
â°â 
`}

//
exports.effect2 = (prefix) =>{
	return`â­ââ ã Sticker Effect ã 
ââ¸ã ${prefix}jail [reply image/stiker]
ââ¸ã ${prefix}red [reply image/stiker]
ââ¸ã ${prefix}gay [reply image/stiker]
ââ¸ã ${prefix}bloo [reply image/stiker]
ââ¸ã ${prefix}blue [reply image/stiker]
ââ¸ã ${prefix}sepia [reply image/stiker]
ââ¸ã ${prefix}green [reply image/stiker]
ââ¸ã ${prefix}glass [reply image/stiker]
ââ¸ã ${prefix}invert [reply image/stiker]
ââ¸ã ${prefix}blurple [reply image/stiker]
ââ¸ã ${prefix}blurple2 [reply image/stiker]
ââ¸ã ${prefix}wasted [reply image/stiker]
ââ¸ã ${prefix}passed [reply image/stiker]
ââ¸ã ${prefix}triggered [reply image/stiker]
ââ¸ã ${prefix}comrade [reply image/stiker]
ââ¸ã ${prefix}greyscale [reply image/stiker]
ââ¸ã ${prefix}threshold [reply image/stiker]
ââ¸ã ${prefix}brightness [reply image/stiker]
ââ¸ã ${prefix}invertgreyscale [reply image/sticker]
â°â 
`
}

exports.download = (prefix) =>{
return`â­ââ ã Download ã 
ââ¸ã ${prefix}tiktok [Link]
ââ¸ã ${prefix}tiktoknowm [Link]
ââ¸ã ${prefix}tiktokwm [Link]
ââ¸ã ${prefix}tiktokaudio [Link]
ââ¸ã ${prefix}ytdl [Link]
ââ¸ã ${prefix}play [judul]
ââ¸ã ${prefix}ytmp3 [Link]
ââ¸ã ${prefix}ytshortmp3 [Link]
ââ¸ã ${prefix}ytmp4 [Link]
ââ¸ã ${prefix}ytshorts [Link]
ââ¸ã ${prefix}facebook [Link]
ââ¸ã ${prefix}facebooksd [Link]
ââ¸ã ${prefix}facebookhd [Link]
ââ¸ã ${prefix}fbaudio [Link]
ââ¸ã ${prefix}igdl [Link]
ââ¸ã ${prefix}igphoto [Link]
ââ¸ã ${prefix}igvideo [Link]
ââ¸ã ${prefix}soundcloud [[Link]
ââ¸ã ${prefix}mediafire [Link]
ââ¸ã ${prefix}twitter [Link]
â°â 
`
}

exports.ranime = (prefix) =>{
	return`â­ââ ã Random Anime ã
ââ¸ã ${prefix}loli
ââ¸ã ${prefix}neko
ââ¸ã ${prefix}waifu
ââ¸ã ${prefix}shinobu
ââ¸ã ${prefix}megumin
ââ¸ã ${prefix}bully
ââ¸ã ${prefix}cuddle
ââ¸ã ${prefix}cry
ââ¸ã ${prefix}hug
ââ¸ã ${prefix}awoo
ââ¸ã ${prefix}kiss
ââ¸ã ${prefix}lick
ââ¸ã ${prefix}pat
ââ¸ã ${prefix}smug
ââ¸ã ${prefix}bonk
ââ¸ã ${prefix}yeet
ââ¸ã ${prefix}blush
ââ¸ã ${prefix}smile
ââ¸ã ${prefix}wave
ââ¸ã ${prefix}highfive
ââ¸ã ${prefix}handhold
ââ¸ã ${prefix}nom
ââ¸ã ${prefix}bite
ââ¸ã ${prefix}glomp
ââ¸ã ${prefix}slap
ââ¸ã ${prefix}kill
ââ¸ã ${prefix}happy
ââ¸ã ${prefix}wink
ââ¸ã ${prefix}poke
ââ¸ã ${prefix}dance
ââ¸ã ${prefix}cringe
â°â 
`
}

exports.nsfw = (prefix) =>{
	return`â­ââ ã Nsfw & Sfw ã
ââ¸ã ${prefix}ahegao
ââ¸ã ${prefix}ass
ââ¸ã ${prefix}bdsm
ââ¸ã ${prefix}blowjob
ââ¸ã ${prefix}cuckold
ââ¸ã ${prefix}cum
ââ¸ã ${prefix}ero
ââ¸ã ${prefix}femdom
ââ¸ã ${prefix}foot
ââ¸ã ${prefix}gangbang
ââ¸ã ${prefix}glasses
ââ¸ã ${prefix}jahy
ââ¸ã ${prefix}manga
ââ¸ã ${prefix}masturbation
ââ¸ã ${prefix}neko
ââ¸ã ${prefix}orgy
ââ¸ã ${prefix}panties
ââ¸ã ${prefix}pussy
ââ¸ã ${prefix}tentacles
ââ¸ã ${prefix}thighs
ââ¸ã ${prefix}yuri
ââ¸ã ${prefix}feet
ââ¸ã ${prefix}lewdkemo
ââ¸ã ${prefix}woof
ââ¸ã ${prefix}gasm
ââ¸ã ${prefix}solo
ââ¸ã ${prefix}8ball
ââ¸ã ${prefix}goose
ââ¸ã ${prefix}avatar
ââ¸ã ${prefix}hololewd
ââ¸ã ${prefix}gecg
ââ¸ã ${prefix}holo
ââ¸ã ${prefix}fox_girl
ââ¸ã ${prefix}tits
ââ¸ã ${prefix}eroyuri
ââ¸ã ${prefix}holoyero
ââ¸ã ${prefix}lizard
ââ¸ã ${prefix}keta
ââ¸ã ${prefix}eron
ââ¸ã ${prefix}erok
ââ¸ã ${prefix}kemonomimi
ââ¸ã ${prefix}cum_jpg
ââ¸ã ${prefix}nsfw_avatar
ââ¸ã ${prefix}erofeet
ââ¸ã ${prefix}meow
ââ¸ã ${prefix}wallpaper
ââ¸ã ${prefix}waifu
ââ¸ã ${prefix}trap
ââ¸ã ${prefix}lewd
ââ¸ã ${prefix}pussy_jpg
ââ¸ã ${prefix}futanari
ââ¸ã ${prefix}lewdk
ââ¸ã ${prefix}solog
ââ¸ã ${prefix}smug
ââ¸ã ${prefix}cum
ââ¸ã ${prefix}slap
ââ¸ã ${prefix}les
ââ¸ã ${prefix}erokemo
ââ¸ã ${prefix}bj
ââ¸ã ${prefix}pwankg
ââ¸ã ${prefix}pat
ââ¸ã ${prefix}poke
ââ¸ã ${prefix}feed
ââ¸ã ${prefix}nsfw_neko_gif
ââ¸ã ${prefix}pussy
ââ¸ã ${prefix}feetg
ââ¸ã ${prefix}baka
ââ¸ã ${prefix}hug
ââ¸ã ${prefix}kiss
ââ¸ã ${prefix}tickle
ââ¸ã ${prefix}spank
ââ¸ã ${prefix}kuni
ââ¸ã ${prefix}classic
ââ¸ã ${prefix}boobs
ââ¸ã ${prefix}anal
ââ¸ã ${prefix}ngif
ââ¸ã ${prefix}cuddle
ââ¸ã ${prefix}zettai
â°â 
`
}

exports.textpro = (prefix) =>{
	return`â­ââ ã Textpro Menu ã
ââ¸ã ${prefix}halloween2 [text1|text2]
ââ¸ã ${prefix}horror [text1|text2]
ââ¸ã ${prefix}game8bit [text1|text2]
ââ¸ã ${prefix}layered [text1|text2]
ââ¸ã ${prefix}glitch2 [text1|text2]
ââ¸ã ${prefix}coolg [text1|text2]
ââ¸ã ${prefix}coolwg [text1|text2]
ââ¸ã ${prefix}realistic [text1|text2]
ââ¸ã ${prefix}space3d [text1|text2]
ââ¸ã ${prefix}gtiktok [text1|text2]
ââ¸ã ${prefix}stone [text1|text2]
ââ¸ã ${prefix}marvel [text1|text2]
ââ¸ã ${prefix}marvel2 [text1|text2]
ââ¸ã ${prefix}pornhub [text1|text2]
ââ¸ã ${prefix}avengers [text1|text2]
ââ¸ã ${prefix}metalr [text1|text2]
ââ¸ã ${prefix}metalg [text1|text2]
ââ¸ã ${prefix}metalg2 [text1|text2]
ââ¸ã ${prefix}halloween2 [text1|text2]
ââ¸ã ${prefix}lion [text1|text2]
ââ¸ã ${prefix}wolf_bw [text1|text2]
ââ¸ã ${prefix}wolf_g [text1|text2]
ââ¸ã ${prefix}ninja [text1|text2]
ââ¸ã ${prefix}3dsteel [text1|text2]
ââ¸ã ${prefix}horror2 [text1|text2]
ââ¸ã ${prefix}lava [text1|text2]
ââ¸ã ${prefix}bagel [text1|text2]
ââ¸ã ${prefix}blackpink [text]
ââ¸ã ${prefix}rainbow2 [text]
ââ¸ã ${prefix}water_pipe [text]
ââ¸ã ${prefix}halloween [text]
ââ¸ã ${prefix}sketch [text]
ââ¸ã ${prefix}sircuit [text]
ââ¸ã ${prefix}discovery [text]
ââ¸ã ${prefix}metallic2 [text]
ââ¸ã ${prefix}fiction [text]
ââ¸ã ${prefix}demon [text]
ââ¸ã ${prefix}transformer [text]
ââ¸ã ${prefix}berry [text]
ââ¸ã ${prefix}thunder [text]
ââ¸ã ${prefix}magma [text]
ââ¸ã ${prefix}3dstone [text]
ââ¸ã ${prefix}neon [text]
ââ¸ã ${prefix}glitch [text]
ââ¸ã ${prefix}harry_potter [text]
ââ¸ã ${prefix}embossed [text]
ââ¸ã ${prefix}broken [text]
ââ¸ã ${prefix}papercut [text]
ââ¸ã ${prefix}gradient [text]
ââ¸ã ${prefix}glossy [text]
ââ¸ã ${prefix}watercolor [text]
ââ¸ã ${prefix}multicolor [text]
ââ¸ã ${prefix}neon_devil [text]
ââ¸ã ${prefix}underwater [text]
ââ¸ã ${prefix}bear [text]
ââ¸ã ${prefix}wonderfulg [text]
ââ¸ã ${prefix}christmas [text]
ââ¸ã ${prefix}neon_light [text]
ââ¸ã ${prefix}snow [text]
ââ¸ã ${prefix}cloudsky [text]
ââ¸ã ${prefix}luxury2 [text]
ââ¸ã ${prefix}gradient2 [text]
ââ¸ã ${prefix}summer [text]
ââ¸ã ${prefix}writing [text]
ââ¸ã ${prefix}engraved [text]
ââ¸ã ${prefix}summery [text]
ââ¸ã ${prefix}3dglue [text]
ââ¸ã ${prefix}metaldark [text]
ââ¸ã ${prefix}neonlight [text]
ââ¸ã ${prefix}oscar [text]
ââ¸ã ${prefix}minion [text]
ââ¸ã ${prefix}holographic [text]
ââ¸ã ${prefix}purple [text]
ââ¸ã ${prefix}glossyb [text]
ââ¸ã ${prefix}deluxe2 [text]
ââ¸ã ${prefix}glossyc [text]
ââ¸ã ${prefix}fabric [text]
ââ¸ã ${prefix}neonc [text]
ââ¸ã ${prefix}newyear [text]
ââ¸ã ${prefix}newyear2 [text]
ââ¸ã ${prefix}metals [text]
ââ¸ã ${prefix}xmas [text]
ââ¸ã ${prefix}blood [text]
ââ¸ã ${prefix}darkg [text]
ââ¸ã ${prefix}joker [text]
ââ¸ã ${prefix}wicker [text]
ââ¸ã ${prefix}natural [text]
ââ¸ã ${prefix}firework [text]
ââ¸ã ${prefix}skeleton [text]
ââ¸ã ${prefix}balloon [text]
ââ¸ã ${prefix}balloon2 [text]
ââ¸ã ${prefix}balloon3 [text]
ââ¸ã ${prefix}balloon4 [text]
ââ¸ã ${prefix}balloon5 [text]
ââ¸ã ${prefix}balloon6 [text]
ââ¸ã ${prefix}balloon7 [text]
ââ¸ã ${prefix}steel [text]
ââ¸ã ${prefix}gloss [text]
ââ¸ã ${prefix}denim [text]
ââ¸ã ${prefix}decorate [text]
ââ¸ã ${prefix}decorate2 [text]
ââ¸ã ${prefix}peridot [text]
ââ¸ã ${prefix}rock [text]
ââ¸ã ${prefix}glass [text]
ââ¸ã ${prefix}glass2 [text]
ââ¸ã ${prefix}glass3 [text]
ââ¸ã ${prefix}glass4 [text]
ââ¸ã ${prefix}glass5 [text]
ââ¸ã ${prefix}glass6 [text]
ââ¸ã ${prefix}glass7 [text]
ââ¸ã ${prefix}glass8 [text]
ââ¸ã ${prefix}captain_as2 [text]
ââ¸ã ${prefix}robot [text]
ââ¸ã ${prefix}equalizer [text]
ââ¸ã ${prefix}toxic [text]
ââ¸ã ${prefix}sparkling [text]
ââ¸ã ${prefix}sparkling2 [text]
ââ¸ã ${prefix}sparkling3 [text]
ââ¸ã ${prefix}sparkling4 [text]
ââ¸ã ${prefix}sparkling5 [text]
ââ¸ã ${prefix}sparkling6 [text]
ââ¸ã ${prefix}sparkling7 [text]
ââ¸ã ${prefix}decorative [text]
ââ¸ã ${prefix}chocolate [text]
ââ¸ã ${prefix}strawberry [text]
ââ¸ã ${prefix}koifish [text]
ââ¸ã ${prefix}bread [text]
ââ¸ã ${prefix}matrix [text]
ââ¸ã ${prefix}blood2 [text]
ââ¸ã ${prefix}neonligth2 [text]
ââ¸ã ${prefix}thunder2 [text]
ââ¸ã ${prefix}3dbox [text]
ââ¸ã ${prefix}neon2 [text]
ââ¸ã ${prefix}roadw [text]
ââ¸ã ${prefix}bokeh [text]
ââ¸ã ${prefix}gneon [text]
ââ¸ã ${prefix}advanced [text]
ââ¸ã ${prefix}dropwater [text]
ââ¸ã ${prefix}wall [text]
ââ¸ã ${prefix}chrismast [text]
ââ¸ã ${prefix}honey [text]
ââ¸ã ${prefix}drug [text]
ââ¸ã ${prefix}marble [text]
ââ¸ã ${prefix}marble2 [text]
ââ¸ã ${prefix}ice [text]
ââ¸ã ${prefix}juice [text]
ââ¸ã ${prefix}rusty [text]
ââ¸ã ${prefix}abstra [text]
ââ¸ã ${prefix}biscuit [text]
ââ¸ã ${prefix}wood [text]
ââ¸ã ${prefix}scifi [text]
ââ¸ã ${prefix}metalr [text]
ââ¸ã ${prefix}purpleg [text]
ââ¸ã ${prefix}shiny [text] 
ââ¸ã ${prefix}jewelry [text]
ââ¸ã ${prefix}jewelry2 [text]
ââ¸ã ${prefix}jewelry3 [text]
ââ¸ã ${prefix}jewelry4 [text]
ââ¸ã ${prefix}jewelry5 [text]
ââ¸ã ${prefix}jewelry6 [text]
ââ¸ã ${prefix}jewelry7 [text]
ââ¸ã ${prefix}jewelry8 [text]
ââ¸ã ${prefix}metalh [text]
ââ¸ã ${prefix}golden [text]
ââ¸ã ${prefix}glitter [text]
ââ¸ã ${prefix}glitter2 [text]
ââ¸ã ${prefix}glitter3 [text]
ââ¸ã ${prefix}glitter4 [text]
ââ¸ã ${prefix}glitter5 [text]
ââ¸ã ${prefix}glitter6 [text]
ââ¸ã ${prefix}glitter7 [text]
ââ¸ã ${prefix}metale [text]
ââ¸ã ${prefix}carbon [text]
ââ¸ã ${prefix}candy [text]
ââ¸ã ${prefix}metalb [text]
ââ¸ã ${prefix}gemb [text]
ââ¸ã ${prefix}3dchrome [text]
ââ¸ã ${prefix}metalb2 [text]
ââ¸ã ${prefix}metalg [text]
ââ¸ã ${prefix}metalg [text]
â°â 
`
}


exports.other = (prefix) =>{
return`â­ââ ã Others ã
ââ¸ã ${prefix}ttp [text]
ââ¸ã ${prefix}attp [text]
ââ¸ã ${prefix}afk [alasan]
ââ¸ã ${prefix}translate [kode_bahasa text]
ââ¸ã ${prefix}kalkulator [query]
ââ¸ã ${prefix}smeme [text1|text2]
ââ¸ã ${prefix}smeme2 [text1|text2]
ââ¸ã ${prefix}memegen [text1|text2]
â°â 
`
}
exports.game = (prefix) =>{
return`â­ââ ã Game Menu ã
ââ¸ã ${prefix}kuismath
ââ¸ã ${prefix}tebak [option]
ââ¸ã ${prefix}tekateki
ââ¸ã ${prefix}susunkata
ââ¸ã ${prefix}caklontong
â°â 
`
}
exports.asupan = (prefix) =>{
return`â­ââ ã Asupan Menu ã
ââ¸ã ${prefix}chika
ââ¸ã ${prefix}delvira
ââ¸ã ${prefix}ayu
ââ¸ã ${prefix}bunga
ââ¸ã ${prefix}aura
ââ¸ã ${prefix}nisa
ââ¸ã ${prefix}ziva
ââ¸ã ${prefix}yana
ââ¸ã ${prefix}viona
ââ¸ã ${prefix}syania
ââ¸ã ${prefix}riri
ââ¸ã ${prefix}syifa
ââ¸ã ${prefix}mama_gina
ââ¸ã ${prefix}alcakenya
ââ¸ã ${prefix}mangayutri
ââ¸ã ${prefix}rikagusriani
ââ¸ã ${prefix}asupan
ââ¸ã ${prefix}bocil
ââ¸ã ${prefix}geayubi
ââ¸ã ${prefix}santuy
ââ¸ã ${prefix}ukhty
ââ¸ã ${prefix}syifa
â°â 
`
}
exports.cecan = (prefix) =>{
return`â­ââ ã Random Cewe ã
ââ¸ã ${prefix}china 
ââ¸ã ${prefix}indonesia 
ââ¸ã ${prefix}malaysia 
ââ¸ã ${prefix}thailand 
ââ¸ã ${prefix}korea 
ââ¸ã ${prefix}japan 
ââ¸ã ${prefix}vietnam 
ââ¸ã ${prefix}jenni 
ââ¸ã ${prefix}jiso 
ââ¸ã ${prefix}lisa  
ââ¸ã ${prefix}rose
â°â 
`
}

exports.tqto = () =>{
	return`â­ââ ã TqTo ã 
ââ¸ã My God
ââ¸ã My Parents
ââ¸ã My Friends
ââ¸ã Hadi BOT
ââ¸ã F I R R A  B O T
ââ¸ã Mhankbarbar
ââ¸ã Nurutomo
ââ¸ã Rashid
ââ¸ã ZeeoneOfc
ââ¸ã Penyedia Module
ââ¸ã And All Creator BOT Indo
â°â And All Support
`
}