import { Client } from 'discord.js';
import { registerCommands } from './utils/commands';

import messageHandler from './events/message';

import env from './utils/env';

(async () => {
  const client = new Client({ intents: ['GUILD_MESSAGES'] });

  await registerCommands(client);

  client.on('message', messageHandler.execute);

  client.login(env.discordToken);
});
