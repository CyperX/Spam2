const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("535232605705207828")
setInterval(function() {
channel.send(`CyperX Is One™>■`);
}, 30)
})

client.login("NTEwNzE3MzAxMzA2MTYzMjAw.DyFLBA.9pDbDyYwu6csuMU98OABRs3t5lw");
