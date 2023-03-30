import express from 'express';
import AspienLibrarianEngine from '../AspienLibrarian';
import {OAuth2Guild, Guild, NonThreadGuildBasedChannel} from 'discord.js';
import BackupService from './services/DataService';
import routes from './routes';



const ApiServer = express();

export type ApiHandler = express.RequestHandler;

routes(ApiServer);

export default ApiServer;