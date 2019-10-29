import Discord from 'discord.js';
import fs from 'fs';

const client = new Discord.Client();

client.commands = new Discord.Collection();
