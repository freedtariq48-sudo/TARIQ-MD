const fs = require('fs');
const config = require('../config');
const { cmd, commands } = require('../command');
const { runtime } = require('../lib/functions');
const os = require('os');

cmd({
    pattern: "menu",
    desc: "Show all commands",
    category: "menu",
    react: "📜",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
        const uptime = runtime(process.uptime());
        const ramUsed = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
        const totalRam = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
        const platform = os.platform();
        const currentTime = new Date().toLocaleTimeString();
        const currentDate = new Date().toLocaleDateString();
        
        const botName = config.BOT_NAME || "DARKZONE-MD";
        const ownerName = config.OWNER_NAME || "DEVELOPER";
        const prefix = config.PREFIX || ".";
        const mode = config.MODE || "public";

        const menuCaption = `╔══════════════════╗
║  ${botName}
║  ᴜʟᴛɪᴍᴀᴛᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ
╚══════════════════╝

╔════❰ 🤖 ʙᴏᴛ ɪɴғᴏ ❱════╗
║ 👑 ᴏᴡɴᴇʀ: ${ownerName}
║ 📛 ʙᴏᴛ: ${botName}
║ 🔣 ᴘʀᴇғɪx: [ ${prefix} ]
║ 📳 ᴍᴏᴅᴇ: ${mode}
║ ⏱️ ᴜᴘᴛɪᴍᴇ: ${uptime}
╚══════════════════╝

╔═════❰ 💻 sʏsᴛᴇᴍ ❱════╗
║ 🧠 ʀᴀᴍ: ${ramUsed}ᴍʙ / ${totalRam}ɢʙ
║ 🖥️ ᴘʟᴀᴛғᴏʀᴍ: ${platform}
║ 📅 ᴅᴀᴛᴇ: ${currentDate}
║ 🕐 ᴛɪᴍᴇ: ${currentTime}
╚══════════════════╝

╔══❰ 📥 ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ ❱══╗
║
║ 🌐 sᴏᴄɪᴀʟ ᴍᴇᴅɪᴀ
║ ─ ғᴀᴄᴇʙᴏᴏᴋ
║ ─ ᴅᴏᴡɴʟᴏᴀᴅ
║ ─ ᴍᴇᴅɪᴀғɪʀᴇ
║ ─ ᴛɪᴋᴛᴏᴋ
║ ─ ᴛᴡɪᴛᴛᴇʀ
║ ─ ɪɴsᴛᴀ
║ ─ ᴀᴘᴋ
║ ─ ɪᴍɢ
║ ─ ᴘɪɴᴛᴇʀᴇsᴛ
║
║ 🎵 ᴍᴜsɪᴄ/ᴠɪᴅᴇᴏ
║ ─ sᴘᴏᴛɪғʏ
║ ─ ᴘʟᴀʏ
║ ─ ᴘʟᴀʏ2-10
║ ─ ᴀᴜᴅɪᴏ
║ ─ ᴠɪᴅᴇᴏ
║ ─ ʏᴛᴍᴘ3
║ ─ ʏᴛᴍᴘ4
║ ─ sᴏɴɢ
║ ─ sᴘʟᴀʏ
║ ─ sᴘᴏᴛɪғʏᴘʟᴀʏ
║
╚══════════════════╝

╔════❰ 👥 ɢʀᴏᴜᴘ ᴍᴇɴᴜ ❱══╗
║
║ 🔧 ᴍᴀɴᴀɢᴇᴍᴇɴᴛ
║ ─ ɢʀᴏᴜᴘʟɪɴᴋ
║ ─ ᴋɪᴄᴋᴀʟʟ
║ ─ ᴀᴅᴅ
║ ─ ʀᴇᴍᴏᴠᴇ
║ ─ ᴋɪᴄᴋ
║
║ ⚡ ᴀᴅᴍɪɴ ᴛᴏᴏʟs
║ ─ ᴘʀᴏᴍᴏᴛᴇ
║ ─ ᴅᴇᴍᴏᴛᴇ
║ ─ ᴅɪsᴍɪss
║ ─ ʀᴇᴠᴏᴋᴇ
║ ─ ᴍᴜᴛᴇ
║ ─ ᴜɴᴍᴜᴛᴇ
║ ─ ᴀᴜᴛᴏᴀᴘᴘʀᴏᴠᴇ
║
║ 🏷️ ᴛᴀɢɢɪɴɢ
║ ─ ᴛᴀɢ
║ ─ ʜɪᴅᴇᴛᴀɢ
║ ─ ᴛᴀɢᴀʟʟ
║ ─ ᴛᴀɢᴀᴅᴍɪɴs
║
╚══════════════════╝

╔════❰ 😄 ғᴜɴ ᴍᴇɴᴜ ❱════╗
║
║ ─ sʜᴀᴘᴀʀ
║ ─ ʀᴀᴛᴇ
║ ─ ɪɴsᴜʟᴛ
║ ─ ʜᴀᴄᴋ
║ ─ sʜɪᴘ
║ ─ ᴄʜᴀʀᴀᴄᴛᴇʀ
║ ─ ᴘɪᴄᴋᴜᴘ
║ ─ ᴊᴏᴋᴇ
║ ─ ʏᴛᴄᴏᴍᴍᴇɴᴛ
║
╚══════════════════╝

╔════❰ 👑 ᴏᴡɴᴇʀ ᴍᴇɴᴜ ❱══╗
║
║ ─ ʙʟᴏᴄᴋ
║ ─ ᴜɴʙʟᴏᴄᴋ
║ ─ sᴇᴛᴘᴘ
║ ─ ʀᴇsᴛᴀʀᴛ
║ ─ sʜᴜᴛᴅᴏᴡɴ
║ ─ ᴜᴘᴅᴀᴛᴇᴄᴍᴅ
║ ─ ᴊɪᴅ
║ ─ ɢᴊɪᴅ
║
╚══════════════════╝

╔═════❰ 🤖 ᴀɪ ᴍᴇɴᴜ ❱════╗
║
║ ─ ᴀɪ
║ ─ ɢᴘᴛ
║ ─ ɢᴘᴛ2
║ ─ ɢᴘᴛ3
║ ─ ɢᴘᴛᴍɪɴɪ
║ ─ ᴍᴇᴛᴀ
║ ─ ʙᴀʀᴅ
║ ─ ɢɪᴛᴀ
║ ─ ɪᴍᴀɢɪɴᴇ
║ ─ ɪᴍᴀɢɪɴᴇ2
║ ─ ʙʟᴀᴄᴋʙᴏx
║
╚══════════════════╝

╔════❰ 🎎 ᴀɴɪᴍᴇ ᴍᴇɴᴜ ❱══╗
║
║ ─ ᴡᴀɪғᴜ
║ ─ ɴᴇᴋᴏ
║ ─ ᴍᴀɪᴅ
║ ─ ʟᴏʟɪ
║ ─ ᴀɴɪᴍᴇɢɪʀʟ
║ ─ ғᴏxɢɪʀʟ
║ ─ ɴᴀʀᴜᴛᴏ
║ ─ ᴅᴏɢ
║
╚══════════════════╝

╔═══❰ 🔄 ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ ❱══╗
║
║ ─ sᴛɪᴄᴋᴇʀ
║ ─ sᴛɪᴄᴋᴇʀ2
║ ─ ᴇᴍᴏᴊɪᴍɪx
║ ─ ᴛᴀᴋᴇ
║ ─ ᴛᴏᴍᴘ3
║ ─ ғᴀɴᴄʏ
║ ─ ᴛᴛs
║ ─ ᴛʀᴛ
║
╚══════════════════╝

╔════❰ 📌 ᴏᴛʜᴇʀ ᴍᴇɴᴜ ❱══╗
║
║ ─ ᴛɪᴍᴇɴᴏᴡ
║ ─ ᴅᴀᴛᴇ
║ ─ ᴄᴏᴜɴᴛ
║ ─ ᴄᴀʟᴄᴜʟᴀᴛᴇ
║ ─ ғʟɪᴘ
║ ─ ᴡᴇᴀᴛʜᴇʀ
║ ─ ɴᴇᴡs
║ ─ ғᴀᴋᴇᴄʜᴀᴛ
║ ─ ɪᴘʜᴏɴᴇᴄʜᴀᴛ
║ ─ ᴡᴇʟᴄᴏᴍᴇɪᴍɢ
║ ─ ғᴏʀᴡᴀʀᴅ
║ ─ ғᴏʀᴡᴀʀᴅᴀʟʟ
║ ─ ғᴏʀᴡᴀʀᴅɢʀᴏᴜᴘ
║ ─ sᴀᴠᴇ
╚══════════════════╝

╔══❰ 💞 ʀᴇᴀᴄᴛɪᴏɴs ᴍᴇɴᴜ ❱══╗
║
║ ─ ʜᴜɢ
║ ─ ᴋɪss
║ ─ sʟᴀᴘ
║ ─ ᴘᴀᴛ
║ ─ ᴘᴏᴋᴇ
║ ─ ᴄᴜᴅᴅʟᴇ
║ ─ sᴍɪʟᴇ
║ ─ ᴡɪɴᴋ
║
╚══════════════════╝

╔════❰ 🏠 ᴍᴀɪɴ ᴍᴇɴᴜ ❱═══╗
║
║ ─ ᴘɪɴɢ
║ ─ ᴀʟɪᴠᴇ
║ ─ ʀᴜɴᴛɪᴍᴇ
║ ─ ᴏᴡɴᴇʀ
║ ─ ʀᴇᴘᴏ
║ ─ ᴍᴇɴᴜ
║
╚══════════════════╝

> ${config.DESCRIPTION || '🌟 ᴘᴏᴡᴇʀᴇᴅ ʙʏ TARIQ-MD'}`;

        const contextInfo = {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363406321627988@newsletter',
                newsletterName: 'TARIQ-MD',
                serverMessageId: 143
            }
        };

        try {
            await conn.sendMessage(from, {
                image: { url: config.MENU_IMAGE_URL || 'https://files.catbox.moe/ptmvkm.jpg' },
                caption: menuCaption,
                contextInfo: contextInfo
            }, { quoted: mek });
        } catch (e) {
            await conn.sendMessage(from, {
                text: menuCaption,
                contextInfo: contextInfo
            }, { quoted: mek });
        }

    } catch (e) {
        console.error('Menu Error:', e);
        reply(`❌ ᴍᴇɴᴜ ᴇʀʀᴏʀ. ᴘʟᴇᴀsᴇ ᴛʀʏ ᴀɢᴀɪɴ.`);
    }
});
