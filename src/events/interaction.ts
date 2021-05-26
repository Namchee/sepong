import { Interaction, Message } from 'discord.js';

import { transformRoast } from '../utils/transformer';

export default {
  event: 'interaction',
  execute: async (interaction: Interaction): Promise<Message | void> => {
    const { channel, user, guild } = interaction;

    if (
      !guild ||
      !channel ||
      !channel.isText() ||
      user.bot ||
      !interaction.isCommand() ||
      interaction.commandName !== 'roast'
    ) {
      return;
    }

    const arg = interaction.options[0];

    if (arg.name !== 'input' || !arg.value || typeof arg.value !== 'string') {
      return;
    }

    const sentence = transformRoast(arg.value);

    return channel.send(sentence);
  },
};
