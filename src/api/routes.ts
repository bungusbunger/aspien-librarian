import {Express} from 'express';
import InspectionController from './controllers/InspectionController';

export default (server: Express) => {
    server.get('/all-channels', (req,res) => InspectionController.allChannels(req,res));
    server.get('/all-guilds', (req,res) => InspectionController.allGuilds(req,res));
}