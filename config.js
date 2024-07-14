const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_24_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDksXG4gICAgICAgIDY2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI4LFxuICAgICAgICA4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTEwLFxuICAgICAgICA2MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDU2LFxuICAgICAgICA2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjIyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTk1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDM0LFxuICAgICAgICAzNCxcbiAgICAgICAgNCxcbiAgICAgICAgMjIyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgNDQsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTkyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTcyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDExMyxcbiAgICAgICAgODcsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg0LFxuICAgICAgICA5MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTMyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjksXG4gICAgICAgIDY5LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTIyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTc3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMyxcbiAgICAgICAgMixcbiAgICAgICAgNjcsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjMxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE4LFxuICAgICAgICA5NixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDQ3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjIzLFxuICAgICAgICA4NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDksXG4gICAgICAgIDY2LFxuICAgICAgICA4MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDk0LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODQsXG4gICAgICAgIDkyLFxuICAgICAgICA3MixcbiAgICAgICAgMTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDc2LFxuICAgICAgICAxMixcbiAgICAgICAgMjQ1LFxuICAgICAgICA4MixcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAzNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQ1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibnFWUkJtQXNBS1pwY0xhaHNmZE1teWZaNlYzZUY2Wll2VExDOVNkTU5MOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTY3MDk3NTMzMjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkE0MDIwRTJFMjY4REYyRTZBOUNCQzc0NEFGMkQwMjg2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDk3NDI5NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI5NllGcXQyWlRRR2dXMzNoaWFMVmJ3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjYzNTFhMWVmLTZjMDYtNDJjYi1iODU2LTBiZmM4ZmM2YjYyNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NSxcbiAgICAgIDEyMSxcbiAgICAgIDExOSxcbiAgICAgIDMxLFxuICAgICAgNDksXG4gICAgICAzNixcbiAgICAgIDE2MyxcbiAgICAgIDEyOSxcbiAgICAgIDI0MyxcbiAgICAgIDc4LFxuICAgICAgMTEwLFxuICAgICAgMjA4LFxuICAgICAgMTcyLFxuICAgICAgMjMxLFxuICAgICAgMTAyLFxuICAgICAgMTY3LFxuICAgICAgMjI2LFxuICAgICAgMzIsXG4gICAgICAxMDMsXG4gICAgICAxMDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYsXG4gICAgICAyNDUsXG4gICAgICAxNTYsXG4gICAgICAyMTYsXG4gICAgICAyMDQsXG4gICAgICAxMTcsXG4gICAgICAxMzMsXG4gICAgICAxOTYsXG4gICAgICAxNzcsXG4gICAgICA3NyxcbiAgICAgIDE2LFxuICAgICAgOTYsXG4gICAgICAxNjksXG4gICAgICAyMTUsXG4gICAgICAxNCxcbiAgICAgIDExMCxcbiAgICAgIDU5LFxuICAgICAgNTUsXG4gICAgICAxMjAsXG4gICAgICA1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJMTEtROFdEQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU2NzA5NzUzMzIzOjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3Mzg3MzkwNzMxMDgwNToxOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLUHczQnNRelBmUHRBWVlCU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjBLS1hmTW40WEJ2NXJ1WUlyVzEzc1N3OVk5dkN2UXc4d0R0TndZK3pCRlU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQXJRNWJMOHU3YURJNDZtSVJnWnA5ZVpjc0NDV0VzUXY3N1ljVG1SUW9TWkZpcCtaM1JHV1F6YjFBYmRVNmZoOUxsNjU3VHp4VTJvZU1PcGxpb2NlREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVDAvUjR4WE5VVU5iZDZIRm5yV21ma2ZzVHEzYXFYcEQ1cHF0RHRDL1RIK3FwSnd6WFNNWmxPYVZYdHkrN1IxL3VqQ3FHT2ZlY3NhMEd4Vi8rNDFGZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU2NzA5NzUzMzIzOjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDk3NDI4OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5sVlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTmxWLmpzb24iOiAie1wia2V5RGF0YVwiOlwidnJtamtPc1FTampPd2hURDR2TjYzQTh3cG5uelAvZ1I5L3UyM2RuMFFyOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1ODE0NDgwMCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE4NTQ1MTY2MDU4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Shazakcamp",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
