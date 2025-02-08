const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG:process.env.ALIVE_IMG||"https://drive.google.com/file/d/18BebL4DB8mNOJOMHtxK_7sdAuGnpJYJW/view?usp=drivesdk",
ALIVE_MSG:process.env.ALIVE_MSG||"HELLOW I'm Cyeber-Spex Bot🤭🔥 I'm ALIVE now👋🔥"
