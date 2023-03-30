import clientReady from "./clientReady";
import interactionCreate from "./interactionCreate";
import {Client} from 'discord.js';
import typingStart from "./typingStart";

const listeners = [
    clientReady,
    interactionCreate,
    typingStart
];

const install = (client: Client) => {
    console.info('Loading discord listeners...');
    listeners.forEach(boot => boot(client));
};

export default install;