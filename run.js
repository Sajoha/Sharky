'use strict';

const
	path = require('path'),
	discord = require('discord.js');

const
	output = require('./Helpers/Output.js'),
	procMsg = require('./Helpers/CheckMessage.js').procMsg,
	procReact = require('./Helpers/CheckReaction.js').procReact;

require('dotenv').config({ path: path.join(__dirname, '.env') });

const client = new discord.Client();

client.on('ready', () => {
	output.info(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
	procMsg(message);
});

client.on('messageReactionAdd', reaction => {
	procReact(reaction);
});

client.login(process.env.BOT_TOKEN);
