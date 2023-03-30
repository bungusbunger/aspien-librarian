import AspienLibrarianEngine from "../../AspienLibrarian";
import {Guild, NonThreadGuildBasedChannel} from 'discord.js';

export default class {
    async getGuildData(): Promise<Array<Guild>> {
        return await AspienLibrarianEngine.act(async (client) => {
            console.debug("API-COMMAND, START-READING");
            
            const requests: Array<Promise<Guild>> = [];

            await client.guilds.fetch().then( (response) => {
                response.forEach(guild => {
                    requests.push(guild.fetch());
                });
            });

            let response: Array<Guild> = [];

            await Promise.all(requests).then(responses => {
                console.log(
                    "AspienLibrarian: Finished reading all the guilds I am currently at, here they are: ",
                    responses
                );
                response = responses;
            })

            return response;
        })
    }
    async getChannels(guild: Guild) {

        const _channels: Record<string,NonThreadGuildBasedChannel> = {};

        await guild.channels.fetch().then(channels => {
            channels.forEach((channel) => {
                if (channel) {
                    _channels[channel.id] = channel;
                }
            });        
        });

        return _channels;
    }
}