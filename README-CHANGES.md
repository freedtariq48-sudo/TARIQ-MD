# TARIQ-HACKER-MD - WhatsApp Bot

## 🔄 Changes Made

This bot has been completely rebranded from ADEEL-AI-XD to TARIQ-HACKER-MD with the following updates:

### ✅ Configuration Updates

**config.js:**
- ✅ BOT_NAME: Changed to "TARIQ-HACKER-MD"
- ✅ OWNER_NAME: Changed to "TARIQ HACKER"
- ✅ OWNER_NUMBER: Changed to "923274699558"
- ✅ MENU_IMAGE_URL: Updated to "https://files.catbox.moe/ptmvkm.jpg"
- ✅ ALIVE_IMG: Updated to "https://files.catbox.moe/ptmvkm.jpg"
- ✅ STICKER_NAME: Changed to "TARIQ-HACKER"
- ✅ DESCRIPTION: Updated to "*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ TARIQ HACKER*"
- ✅ LIVE_MSG: Updated to "> I'ᗩᗰ *TARIQ-HACKER-MD*❤️‍🔥"
- ✅ AUTO_STATUS_MSG: Updated to "*SEEN YOUR STATUS BY TARIQ-HACKER-MD*"

**app.json:**
- ✅ name: "TARIQ-HACKER-MD"
- ✅ description: "Javascript WhatsApp bot made by TARIQ HACKER"
- ✅ logo: Updated to new image URL
- ✅ keywords: ["TARIQ-HACKER-MD"]
- ✅ All environment variables updated with new branding

**package.json:**
- ✅ name: "TARIQ-HACKER-MD"
- ✅ description: "A WhatsApp Bot Created By Tariq Hacker"
- ✅ PM2 process name updated to TARIQ-HACKER-MD

### ✅ Main Files Updated

**index.js:**
- ✅ Header comment updated
- ✅ Welcome message updated with new bot name and branding
- ✅ HTML title and heading updated
- ✅ Console startup message updated
- ✅ Owner number and branding throughout

**assets/autoreply.json:**
- ✅ Owner response updated to "TARIQ HACKER 👑"

### ✅ Plugin Updates

All plugins have been updated with the new branding:

**creator.js:**
- ✅ Owner info: TARIQ HACKER, +92 327 4699558
- ✅ Photo URL updated
- ✅ Bio updated to "Founder & Developer of TARIQ-HACKER-MD"
- ✅ All captions and newsletter info updated

**get-owner.js:**
- ✅ vCard organization updated to TARIQ-HACKER-MD
- ✅ All captions updated with new branding

**get-pair.js:**
- ✅ Description updated
- ✅ Pairing code message updated

**main-repo.js:**
- ✅ GitHub repo URL: https://github.com/TARIQ-HACKER/TARIQ-HACKER-MD
- ✅ All captions and branding updated
- ✅ Image URL updated

**group-tagall.js:**
- ✅ Footer updated

**images-fun.js:**
- ✅ Caption updated
- ✅ Comments updated

**sticker-maker.js:**
- ✅ Default pack name updated

**lib/groupevents.js:**
- ✅ Credits updated

### 🆕 New Features Added

**lib/admin-checker.js:**
- ✅ NEW FILE: Complete LID (Local Identifier) support for group admin checking
- ✅ Handles WhatsApp's new LID system for groups
- ✅ Functions:
  - `checkAdminStatus(conn, chatId, senderId)` - Check if bot and sender are admins
  - `isTargetBot(conn, targetId)` - Check if target is the bot
  - `isTargetOwner(conn, chatId, targetId)` - Check if target is group owner/superadmin
- ✅ Properly handles:
  - Phone numbers with/without country codes
  - LID format (local identifiers)
  - Multiple ID formats (@s.whatsapp.net, @lid, etc.)
  - Admin vs Superadmin distinction

### 🔧 Technical Improvements

1. **LID Support**: The admin-checker.js file now properly handles WhatsApp's LID system which is used in groups
2. **Multiple ID Format Support**: Bot can now match users across different identifier formats
3. **Robust Admin Detection**: Improved logic for detecting admins, superadmins, and bot permissions

### 📦 Owner Information

- **Bot Name**: TARIQ-HACKER-MD
- **Owner**: TARIQ HACKER
- **Owner Number**: +92 327 4699558
- **Image URL**: https://files.catbox.moe/ptmvkm.jpg
- **GitHub**: https://github.com/TARIQ-HACKER/TARIQ-HACKER-MD

### 🚀 How to Use

1. Upload this folder to your hosting service
2. Set your SESSION_ID in config.js or environment variables
3. Install dependencies: `npm install`
4. Start the bot: `npm start`

### 📝 Notes

- All ADEEL, MAFIA, FAIZAN references have been replaced
- Newsletter JID remains the same (can be updated if needed)
- Group commands now have proper LID support
- All images point to the new URL: https://files.catbox.moe/ptmvkm.jpg

### ⚙️ Group Commands LID Support

The new `admin-checker.js` module provides robust LID (Local Identifier) support for all group-related commands. This ensures:

- ✅ Accurate admin detection in groups
- ✅ Support for WhatsApp's new identifier system
- ✅ Protection against kick/promote/demote errors
- ✅ Proper owner/superadmin recognition

To use in your group commands:
```javascript
const { checkAdminStatus, isTargetBot, isTargetOwner } = require('../lib/admin-checker');

// Check if bot and sender are admins
const { isBotAdmin, isSenderAdmin } = await checkAdminStatus(conn, chatId, senderId);

// Check if target is the bot
if (isTargetBot(conn, targetId)) {
    return reply("❌ Cannot perform action on the bot!");
}

// Check if target is group owner
if (await isTargetOwner(conn, chatId, targetId)) {
    return reply("❌ Cannot perform action on group owner!");
}
```

---

**Powered by TARIQ HACKER** 💜
