const client = require('../index');

client.on('interactionCreate', async (interaction) => {
  if (interaction.customId === 'red' || interaction.customId === 'green') {
    const resultado = Math.random() < 0.5 ? 'verde' : 'vermelho';
    const mensagem = resultado === (interaction.customId === 'green') ?
      `Você ganhou! A cor sorteada foi ${resultado}.` :
      `Você perdeu! A cor sorteada foi ${resultado}.`;

    interaction.reply({ content: mensagem, ephemeral: true });
  }
});
