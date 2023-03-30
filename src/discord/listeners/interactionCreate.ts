import {Client, Events} from 'discord.js';

export default function (client: Client) {
    client.on(Events.InteractionCreate, (c) => {
        console.debug('EVENT - InteractionCreate - Got interaction!', c);
    });
}