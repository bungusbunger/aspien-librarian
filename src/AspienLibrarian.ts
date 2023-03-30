import {Client} from 'discord.js';
import ApiServer from './api/ApiServer';
import Config from './Config';
import client from "./discord/Client";

client.login(process.env.DISCORD_TOKEN);

ApiServer.listen(Config.API_PORT, () => {
    console.log(`Librarian API server is running and listening on port ${Config.API_PORT}.`);
});

export default class AspienLibrarianEngine {
    static discordClient: Client
    static discordReady(client: Client) {
        AspienLibrarianEngine.discordClient = client;
    }
    static act<T>(callback: (client: Client) => T, notReady: () => unknown = () => {}): T {
        if (AspienLibrarianEngine.discordClient) {
            return callback(AspienLibrarianEngine.discordClient);
        } else {
            notReady();
            throw Error('Discord is not connected yet.');
        }
    }
}