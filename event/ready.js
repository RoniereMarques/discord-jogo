const Discord = require('discord.js');
const client = require('../index');

client.on('ready', () => {
  console.log(`Protocolo de acesso: ${client.user.id}`);
  client.user.setActivity('Protecting the community since 2023');
});