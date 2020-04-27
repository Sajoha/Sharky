'use strict';

const path = require('path');

const output = require('./Output.js');

class CheckMessage {
	/**
	 * Reads message input and responds if appropriate
	 *
	 * @param {Object} message - The message recieved from Discord
	 */
	static procMsg(message) {
		// We don't want the bot responding to itself, could cause some messy loops
		if(message.author.username === 'Sharky') {
			return;
		};

		// Makes matching strings easier
		const text = message.content.toLowerCase();

		// The tayday command, responds with an image dependant on the day of the week
		if(text === 'tayday') {
			output.event(`Recieved "TayDay" request from ${message.author.username}`);
			message.channel.send('', { files: [path.join(__dirname, '..', 'Images', 'TayDay', tayday())] });
			output.response(`Responded with ${tayday()}`);
		}

		// Responds with a message from General Grievous
		if(text === 'hello there') {
			output.event(`Recieved "Hello There" request from ${message.author.username}`);
			message.channel.send(`General ${message.author.username}!`);
			output.response(`Responded with "General ${message.author.username}!"`);
		}

		// Kinda just a place holder for reacting to humour right now
		if(text === 'funny joke') {
			output.event(`Recieved "Funny Joke" request from ${message.author.username}`);
			message.react('😂');
			output.response('Reacted to the message with crying laughing emoji');
		}

		// Kinda just a place holder for responding to foul language right now
		if(text.includes('dingleberries')) {
			output.event(`Recieved "Dingleberries" request from ${message.author.username}`);
			message.reply('', { files: [path.join(__dirname, '..', 'Images', 'Language', 'Language.png')] });
			output.response('Responded with Language.png');
		}
	}
}

/**
 * Responds with the appropriate image dependant on what day of the week it is
 */
function tayday() {
	const images = [
		'SunTay.png',
		'MonTay.png',
		'TuesTay.png',
		'WednesTay.png',
		'ThursTay.png',
		'FriTay.png',
		'SaturTay.png'
	]

	const
		day = new Date().getDay(),
		image = images[day];

	return image;
}

module.exports = CheckMessage;
