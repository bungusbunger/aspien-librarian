import {Client, Events} from 'discord.js';
import AspienLibrarianEngine from '../../AspienLibrarian';

export default function (client: Client) {
    client.on(Events.ClientReady, (c) => {
        console.debug('EVENT - ClientReady - Discord bot client finished connecting.');
        AspienLibrarianEngine.discordReady(client);
    });
}