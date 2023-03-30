import { Client, GatewayIntentBits } from 'discord.js';
import clientReady from './listeners/clientReady';
import listeners from './listeners';

const client = new Client({intents: [ GatewayIntentBits.Guilds ]});

listeners(client);

export default client;