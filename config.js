const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "H1QFyZjT#1SDKo_k2PcKOrH3SMKlex6mYS7TWEwKc11W6CX7v2xU",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/POdDA-MD-WABOT/PODDA-MD-TOOLS/blob/main/20250706_195750.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 PODDA-MD Is Alive Now😍 /n.menu to get all commands 👉👈*",
BOT_OWNER: '94717024813',  // Replace with the owner's phone number



};
