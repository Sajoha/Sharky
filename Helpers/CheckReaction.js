'use strict';

const path = require('path');

const output = require('./Output.js');

class CheckReaction {
	/**
	 * Checks the reactions applied to cached messages and responds if appropriate
	 *
	 * @param {Object} reaction - The reaction recieved from Discord
	 */
	static procReact(reaction) {
		// We don't want the bot responding to itself, could cause some messy loops
		if(reaction.message.author.username === 'Sharky') {
			return;
		};

		// If we recieve a poop emoji, respond with a message from the orangutan
		if(reaction.emoji.name === '💩') {
			const
				user = reaction.message.author.username,
				text = reaction.message.content;

			output.event(`Found a poop emoji on ${reaction.message.author.username}'s message`);
			reaction.message.channel.send(`Uh ohhh, poopy on:\n"[${user}] ${text}"`);
			output.response('Responded in the chat with a stinky response');
		}
	}
}

module.exports = CheckReaction;
