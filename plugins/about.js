/*
created The Usman Modz 
contact 923117030492
© Copy coder alert ⚠
*/

const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `*╭┈───────────────•*

*👋𝙰𝚂𝚂𝙻𝙰𝙼 𝙾 𝙰𝙻𝙰𝙺𝚄𝙼 🌹${pushname}*

*╰┈───────────────•*
*╭┈───────────────•*
*│  ◦* *ᴡᴇʟᴄᴏᴍᴇ 𝚄𝚂𝙼𝙰𝙽-𝙼𝙳*
*│  ◦* *ᴄʀᴇᴀᴛᴇʀ 𝚄𝚂𝙼𝙰𝙽-𝙼𝙾𝙳𝚉*
*│  ◦* *ʀᴇᴀɪʟ ɴᴀᴍᴇ➠ ᴍ.𝚄𝚂𝙼𝙰𝙽*
*│  ◦* *ᴘᴜʙʟɪᴄ ɴᴀᴍᴇ➠ 𝚄𝚂𝙼𝙰𝙽-𝙼𝙾𝙳𝚉*
*│  ◦* *ᴀɢᴇ➠ ᴛᴡᴇɴᴛʏ ʏᴇᴀʀ*
*│  ◦* *ᴄɪᴛʏ➠ ᴘᴇʀsɴᴏʟ ʜᴀɪ*
*│  ◦* *ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ᴅᴇᴠᴇʟᴘᴏʀ*
*╰┈───────────────•*
> *◆◆◆◆◆◆◆◆◆◆◆◆*

*[ • USMAN-MD - TEAM • ]*
*╭┈───────────────•*
*│  ◦* *▢➠𝚄𝚂𝙼𝙰𝙽-𝙼𝙾𝙳𝚉*
*│  ◦* *▢➠sɪʟᴇɴᴛ ᴜsᴍᴀɴ*
*│  
*╰┈───────────────•*
*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ тнᴇ υѕмan мoᴅz
*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:about},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
