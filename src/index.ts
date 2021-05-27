import { createSlashCommandHandler } from '@glenstack/cf-workers-discord-bot';

import { roastCommand, roastHandler } from './commands/roast';
import env from './utils/env';

const slashCommandHandler = createSlashCommandHandler({
  applicationID: '847082684806987826',
  applicationSecret: env.discordToken || '', // You should store this in a secret
  publicKey: '28a1b05f8a3ff0ebc1f60045174af7eccbeefece09640d0373f5df23d38eaa38',
  commands: [[roastCommand, roastHandler]],
});

addEventListener('fetch', (event: any) => {
  event.respondWith(slashCommandHandler(event.request));
});
