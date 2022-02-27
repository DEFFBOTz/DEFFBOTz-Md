const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	alfa: 'https://api-alphabot.herokuapp.com',
}

// Free apikey
global.APIKeys = {
	'https://api-alphabot.herokuapp.com': 'Alphabot',
}

// setting 
global.autoread = false // auto read pesan / message
global.autorecording = false //status auto merekam ( auto record )
global.autoketik = true //status auto mengetik (auto typing)
global.available = false //status online (online)

// Other
global.botname = "DEFFBOTz" //namabot
global.ownername= "Deffri Gans" //nama owner
global.myweb ="https://github.com/zeeone-ofc/"
global.youtube = "https://youtube.com/channel/UCx6TnPIwwnMJM59XoUUInIw"
global.github = "https://github.com/DEFFBOTz/"
global.ownernomer = "6285954993954" //nomor owner
global.ownernomerr = "+6285954993954" // nmr owner
global.thumbnail = "./image/deff.jpg" //foto bot ubah di folder image
global.donasi = "./image/donasi.jpg"
global.background_welcome="https://telegra.ph/file/c2c9b56d819d15cba3ab5.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.owner = ["6285954993954","6285954993954","6285954993954"] //ganti agar fitur owner bisa di gunakan
global.packname = 'DEFFBOTz-MD' //sticker wm
global.author = 'By:Deffri Gans' //sticker wm
global.sessionName = 'session'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: 'Sukses',
    admin: 'fitur Ini Hanya Tersedia Untuk Admin Group!',
    botAdmin: 'fitur Ini Hanya Tersedia Ketika BOT Menjadi Admin!',
    owner: 'Fitur Ini Hanya Tersedia Untuk Owner!',
    group: 'Fitur Ini Hanya Tersedia Di Dalam Group !',
    private: 'Fitur Ini Hanya Tersedia Di Private !',
	bot: 'Fitur Ini Hanya Tersedia Untuk Pengguna Nomor Bot',
    errtoimg: 'Error Kak Soalnya Stiker Tersebut Adalah Gif!',
    wait: '*Screaping Metadata* . . .',
	lockCmd: 'Fitur Ini Telah Di Nonaktifkan Oleh Owner!',
	example1: 'Welcome @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
