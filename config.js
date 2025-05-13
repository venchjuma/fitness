const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })



//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsu@gmail.com"
global.location="Lahore,Pakita"


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Tanzania";
global.github=process.env.GITHUB|| "";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Kalulu😎" 


global.devs = "255626753818" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255767886564";




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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.AUTO_REACT_STATUS = process.env.AUTO_REACT_STATUS || 'yes',
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255626753818,255xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_42_05_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODQsXG4gICAgICAgIDkyLFxuICAgICAgICAzOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDMwLFxuICAgICAgICA5MixcbiAgICAgICAgOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg0LFxuICAgICAgICA5LFxuICAgICAgICA0NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDY0LFxuICAgICAgICA2NSxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA4LFxuICAgICAgICA0MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDU2LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjA1LFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA1NixcbiAgICAgICAgMTcxLFxuICAgICAgICA5NixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjgsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzksXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDc4LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTYsXG4gICAgICAgIDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDQ1LFxuICAgICAgICA2MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5LFxuICAgICAgICAxNixcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDg4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTgwLFxuICAgICAgICA4NixcbiAgICAgICAgMTM0LFxuICAgICAgICAzMixcbiAgICAgICAgMTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI4LFxuICAgICAgICA4MCxcbiAgICAgICAgMzksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDg0LFxuICAgICAgICA4NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTgyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTc3LFxuICAgICAgICA1OSxcbiAgICAgICAgODUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTAzLFxuICAgICAgICA0NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTE2LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgODQsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODUsXG4gICAgICAgIDM1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDMwLFxuICAgICAgICA2NyxcbiAgICAgICAgNSxcbiAgICAgICAgOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDM4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDkxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTY5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTk4LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2LFxuICAgICAgICAxNCxcbiAgICAgICAgODUsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA5LFxuICAgICAgICA1NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTY1LFxuICAgICAgICA0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDk2LFxuICAgICAgICA1NCxcbiAgICAgICAgNSxcbiAgICAgICAgMTE5LFxuICAgICAgICA3NSxcbiAgICAgICAgODksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDksXG4gICAgICAgIDEzMSxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjIyLFxuICBcImFkdlNlY3JldEtleVwiOiBcImNEYUppeDhpNWVZcWhpdnM4T2J3YS9jYy9RT0RFN3A3b1dJbmc4d09rVk09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImk2enUwYzJTVG4taWtEa0pXQVNsNFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjlkY2M4ZDQtMDY4ZS00MDU2LTgxZWMtZDQxMTdmZDZhMmI0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MyxcbiAgICAgIDIyOSxcbiAgICAgIDE1NyxcbiAgICAgIDEyNCxcbiAgICAgIDMzLFxuICAgICAgMTk4LFxuICAgICAgMTUzLFxuICAgICAgMTI2LFxuICAgICAgMTQwLFxuICAgICAgNTcsXG4gICAgICAxODMsXG4gICAgICAxNDgsXG4gICAgICAxMzgsXG4gICAgICA2OCxcbiAgICAgIDE2MixcbiAgICAgIDExOCxcbiAgICAgIDEzNyxcbiAgICAgIDY1LFxuICAgICAgMjUwLFxuICAgICAgMTEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NCxcbiAgICAgIDEyOCxcbiAgICAgIDE3MyxcbiAgICAgIDI1LFxuICAgICAgNTYsXG4gICAgICA5LFxuICAgICAgMTgwLFxuICAgICAgMTcxLFxuICAgICAgOTAsXG4gICAgICAyNDMsXG4gICAgICAxMTIsXG4gICAgICA2NixcbiAgICAgIDU4LFxuICAgICAgOTksXG4gICAgICAxNzQsXG4gICAgICAxODksXG4gICAgICAxMDAsXG4gICAgICAzMyxcbiAgICAgIDI2LFxuICAgICAgNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKZUQrYjRJRU9qUWpjRUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjB6Rk1KRTRYV1N0bmJ4WWNIb1pLaEx5bzZzUXlIUSttUUJkMWZXMU4zQzg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiV1c0bDRKNElscjNZTDN2bElBaitXYlEwb0ZGK3l0dkwxa05KbWJuR0liTFNpeHdxa2d1Z0lrbXJJS2RLVzZENXJ5QXhsaE1aeHQ4ZktkWklQdVUrQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMStRNUFVWnpaUVVmOHFOY0pER2E4enVVV0dGRzRJQ0l5aWx4eVhVWjhiS0hKZ3VNanJycjJEcmlTNmwxZVljL3JlZ0RaZG9UakpiNG9oSExHaEhpRHc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU3Njc4ODY1NjQ6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjU2MTM5NzAyMDk1OTY2OjExQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NzY3ODg2NTY0OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA0N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDcxNTA5NTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLSlpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtKWi5qc29uIjogIntcImtleURhdGFcIjpcIk1Nd1oycXdhS3VZZGRIUnZsL0tlUk5VRE0wT1ZVcll6N3A5czZIUlRtb3M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjI3OTQ4OTk0MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQxOTkzNDE1NDY1XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS0phLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNGpZTGs2MmhHUUdVZkhmYVljd0tac0dJOTJXY1g2WGNTYjVlSnFkY0VrZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMjc5NDg5OTQzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDQ2MDU5NjIxNDhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "Kalulu 😎" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Kalulu - MD",
  ownername:process.env.OWNER_NAME|| "*KALULU*",


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
