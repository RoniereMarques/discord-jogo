const Discord = require("discord.js")
const fs = require('fs')
const { token } = require('./config.json')
const client = new Discord.Client({
  intents: [ 
    Discord.IntentsBitField.Flags.Guilds,
    Discord.IntentsBitField.Flags.GuildMembers,
    Discord.IntentsBitField.Flags.GuildModeration,
    Discord.IntentsBitField.Flags.GuildIntegrations,
    Discord.IntentsBitField.Flags.GuildWebhooks,
    Discord.IntentsBitField.Flags.GuildInvites,
    Discord.IntentsBitField.Flags.GuildVoiceStates,
    Discord.IntentsBitField.Flags.GuildMessages,
    Discord.IntentsBitField.Flags.GuildPresences,
    Discord.IntentsBitField.Flags.GuildMessageReactions,
    Discord.IntentsBitField.Flags.GuildMessageTyping,
    Discord.IntentsBitField.Flags.DirectMessages,
    Discord.IntentsBitField.Flags.DirectMessageReactions,
    Discord.IntentsBitField.Flags.DirectMessageTyping,
    Discord.IntentsBitField.Flags.MessageContent
  ]
})
// exportando o cliente para outras pastas.
module.exports = client
// bloqueia o app de parar se ouver erro no console 'catch'.
process.on('uncaughtException', (err, origin) => { console.log(err, origin) })
// slash commands Discord.js@14.0.1
client.login(token)
fs.readdir('./event', (err, file) => {
  file.forEach(event => {
    require(`./event/${event}`)
  })
})