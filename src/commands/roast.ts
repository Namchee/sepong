import {
  ApplicationCommand,
  InteractionHandler,
  Interaction,
  InteractionResponse,
  InteractionResponseType,
  ApplicationCommandOptionType,
  ApplicationCommandInteractionDataOption,
} from '@glenstack/cf-workers-discord-bot';

import { transformRoast } from '../utils/transformer';

export const roastCommand: ApplicationCommand = {
  name: 'roast',
  description: 'Transform a sentence into a mocking version of it',
  options: [
    {
      name: 'sentence',
      type: ApplicationCommandOptionType.STRING,
      required: true,
      description: 'Input sentence',
    },
  ],
};

export const roastHandler: InteractionHandler = async (
  interaction: Interaction,
): Promise<InteractionResponse> => {
  const arg = (interaction.data?.options as ApplicationCommandInteractionDataOption[])[0].value;
  const transformed = transformRoast(arg);

  return {
    type: InteractionResponseType.ChannelMessageWithSource,
    data: {
      content: transformed,
    },
  };
};

export default [roastCommand, roastHandler];
