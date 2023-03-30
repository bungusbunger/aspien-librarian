import DataService from "../services/DataService";
import {NonThreadGuildBasedChannel, OAuth2Guild} from "discord.js";
import { ApiHandler } from "../ApiServer";
import InspectionControllerInterface from "./InspectionControllerInterface";
import express from 'express';

export default class InspectionController {
    static dataService = new DataService();

    static async allGuilds(request: express.Request, response: express.Response) {
        const guilds: Array<OAuth2Guild> = [];

        response.setHeader('content-type', 'application/json');
        response.send(await this.dataService.getGuildData());
    }

    static async allChannels(request: express.Request, response: express.Response) {
        const allChannels: Array<NonThreadGuildBasedChannel> = [];

        const guilds = await this.dataService.getGuildData();

        const guildChannels: Record<string,NonThreadGuildBasedChannel> = {};

        const requests: Array<Promise<Record<string, NonThreadGuildBasedChannel>>> = [];

        guilds.forEach(async (guild) => {
            requests.push(this.dataService.getChannels(guild));

            const channels = await this.dataService.getChannels(guild);
            Object.keys(channels).forEach((channel) => {
                guildChannels[channel] = channels[channel];
            });
        });

        await Promise.all(requests).then(responses => {
            responses.forEach((channelSet) => {
                Object.keys(channelSet).forEach( key => allChannels.push(channelSet[key]));
            });
        });

        response.setHeader('content-type', 'application/json');
        response.send(JSON.stringify(allChannels));
    }
}