import { Message } from 'discord.js';
import { transformRoast } from '../utils/transformer';

export default {
  event: 'message',
  execute: async (message: Message): Promise<Message | void> => {
    const { channel, content, author, guild } = message;

    console.log('happens');

    if (
      !guild ||
      !channel.isText() ||
      author.bot ||
      !content.startsWith('s!')
    ) {
      return;
    }

    const arg = content.slice(2)[1].trim();
    const transformed = transformRoast(arg);

    return message.edit(transformed);
  },
};
