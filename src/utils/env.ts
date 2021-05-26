import { config } from 'dotenv';

if (process.env.NODE_ENV === 'development') {
  config();
}

export default {
  discordToken: process.env.DISCORD_TOKEN,
};
