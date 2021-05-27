import { Message } from 'discord.js';
import { transformRoast } from '../utils/transformer';

export default {
  event: 'message',
  execute: async (message: Message): Promise<Message | void> => {
    const { channel, content, author, guild } = message;

    if (
      !guild ||
      !channel.isText() ||
      author.bot ||
      !content.startsWith('s!')
    ) {
      return;
    }

    const arg = content.slice(2).trim();
    const transformed = transformRoast(arg);

    await Promise.all([
      message.delete(),
      message.channel.send(transformed),
    ]);
  },
};
