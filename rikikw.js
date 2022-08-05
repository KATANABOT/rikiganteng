const fs = require('fs')
const chalk = require('chalk')

global.wlcm = []
global.ntnsfw = []
global.ntnsfww = []
global.autorecording = false //status auto merekam ( auto record )
global.autoketik = false //status auto mengetik (auto typing)
global.available = false //status online (online)
//gausah di apa² in!
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
//=================================================//
//—————「 Set Kebutuhan Button & Kontak 」—————//
//ubah aja kalau ada yang gapunya gsh di hps anggap aja credits :), note tanda ' gausah di hapus!
global.youtube = 'https://youtube.com/c/katanamods'
global.ig = 'https://www.instagram.com/ryarllh_01/?hl=id'
global.mygc = 'wa.me/6287741097274'
global.myweb = 'https://eclass.iainsalatiga.ac.id/app/upload/users/1/10892/my_files/XhiroMhonshine.html'
global.linkgrupss = "https://chat.whatsapp.com/HEJge02HnttLLCW0seeYoC"
global.linkpro = 'mailto:support@whatsapp.com?subject=Deactivate%20My%20Account%20Number&body=Please%20Deactivate%20The%20My%20Account%20Number%20%2B62XXXXXXXX%20Immediately%20Because%20The%20Number%20Has%20Been%20Lost'
global.email = 'rickytewolan02@gmail.com'
global.region = 'indonesia'
//—————「 Set Nama Own & Bot 」—————//
global.ownername = '𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.botname = '𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.footer = '𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.nomor = ["@s.whatsapp.net"]
//=================================================//
// Other
global.owner = ["6287741097274@s.whatsapp.net"]
global.wame = 'https://wa.me/6287741097274'
global.premium = ['6287741097274']
global.packname = '𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳'
global.ownerr = ['𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳']
global.lolkey = 'BloodSword'
global.dapkey = 'Kirbotz123'
global.kirkey = 'KirBotz'
global.author = '087741097274'
global.sessionName = 'bingung'
global.prefa = ['','!','.',',','🐤','🗿']
global.sp = '⭔'
global.mess = {
    nsfw: '*Fitur NSFW tidak diaktifkan, chat admin grup supaya diaktifkan*_',
    wait: '_*Loading... Sabar Kawan*_',
    success: '```Success✅```',
    admin: '```Fitur Khusus Admin Group!!!```',
    botAdmin: '```Bot Harus Menjadi Admin Terlebih Dahulu!!!```',
        owner: '```Fitur Khusus Owner Bot!!!```',
        error: '```Mungkin Lagi Error Kak Harap Lapor Owner Biar Langsung Di Benerin🙏```',
    group: '```Fitur Digunakan Hanya Untuk Group!!!```',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
    verif: '_Maaf Kakak Belum Jadi User RIK_OHHz Silahkan Register Terlebih Dahulu Klik Di Bawah_',
}
//=================================================//
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'
global.f1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.f2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.f3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.f4 = 'application/zip'
global.f5 = 'application/pdf'
global.f6 = 'application/vnd.android.package-archive'
//=================================================//
global.limitawal = {
    premium: "Infinity",
    free: 100
}
   global.rpg = {
   darahawal: 100,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}
//=================================================//
global.thumb = fs.readFileSync("./rikilah/image/rk.jpg")
global.visoka = fs.readFileSync("./rikilah/video/rikgif.gif")
global.log0 = fs.readFileSync("./rikilah/image/riki.jpg")
global.menuimg = 'https://g.top4top.io/p_2407xr09q0.jpg'
global.ggikal = fs.readFileSync("./rikilah/video/rikibos.mp4")
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
