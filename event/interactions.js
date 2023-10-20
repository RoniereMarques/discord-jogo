const Discord = require('discord.js');
const client = require('../index');
const fs = require('fs');

function corAleatoria() {
  const vermelho = Math.floor(Math.random() * 2); // Gere 0 ou 1 para vermelho
  if (vermelho === 0) {
    return 'verde'; // 0 representa verde
  } else {
    return 'vermelho'; // 1 representa vermelho
  }
}

client.on('interactionCreate', async (interaction) => {
  if (interaction.customId === 'red' || interaction.customId === 'green') {
    const resultado = corAleatoria();
    if ((interaction.customId === 'red' && resultado === 'vermelho') ||
        (interaction.customId === 'green' && resultado === 'verde')) {
      interaction.reply({ content: `Você ganhou! A cor sorteada foi ${resultado}.`, ephemeral: true });
    } else {
      interaction.reply({ content: `Você perdeu! A cor sorteada foi ${resultado}.`, ephemeral: true });
    }
  }
});
