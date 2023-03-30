import {Client, Events} from 'discord.js';

export default function (client: Client) {
    console.debug('installing TypingStart listeners');
    client.on(Events.TypingStart, (c) => {
        console.debug('EVENT - TypingStart - Got someone typiiiing!', c);
    });
}