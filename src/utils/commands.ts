import { ApplicationCommandData, Client } from 'discord.js';

export async function registerCommands(client: Client): Promise<void> {
  if (!client.application?.owner) {
    await client.application?.fetch();
  }

  // just manually register it for now
  const commands: ApplicationCommandData = {
    name: 'roast',
    description: 'Transform your message into a mocking version of it',
    options: [
      {
        name: 'sentence',
        type: 'STRING',
        required: true,
        description: 'Input sentence',
      },
    ],
  };

  await client.application?.commands.create(commands);
}
