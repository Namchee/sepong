import { Client } from 'discord.js';
import { registerCommands } from './utils/commands';

import interactionHandler from './events/interaction';
import messageHandler from './events/message';

import env from './utils/env';

(async () => {
  const client = new Client({ intents: ['GUILD_MESSAGES', 'GUILDS'], partials: ['MESSAGE'] });

  await registerCommands(client);

  client.on('message', messageHandler.execute);
  client.on('interaction', interactionHandler.execute);

  client.once('ready', () => console.log('Ready to roast!'));

  client.login(env.discordToken);
})();
