'use strict';

// Colours to be used in the console logging
const
	Red = '\x1b[31m',
	Cyan = '\x1b[36m',
	Grey = '\x1b[37m',
	Reset = '\x1b[0m',
	Green = '\x1b[32m',
	Yellow = '\x1b[33m',
	Magenta = '\x1b[35m';

class Output {
	/**
	 * Writes a message with a green info tag.
	 *
	 * @param {String} message - A string to be output after the info tag
	 */
	static info(message) {
		timestamp();
		process.stdout.write(`${Green}[INFO]${Reset} ${timestamp()} - ${message}\n`);
	}

	/**
	 * Writes a message with a magenta event tag.
	 *
	 * @param {String} message - A string to be output after the event tag
	 */
	static event(message) {
		process.stdout.write(`${Magenta}[EVENT]${Reset} ${timestamp()} - ${message}\n`);
	}

	/**
	 * Writes a message with a cyan response tag.
	 *
	 * @param {String} message - A string to be output after the response tag
	 */
	static response(message) {
		process.stdout.write(`${Cyan}[RESPONSE]${Reset} ${timestamp()} - ${message}\n`);
	}
}

/**
 * Generate a current timestamp to be displayed in the log message, in the correct date format
 */
function timestamp() {
	const
		date = new Date(),
		strTime = date.toLocaleTimeString('en-GB'),
		strDate = date.toLocaleDateString('en-GB', { year: '2-digit', month: 'numeric', day: 'numeric' });

	return `${strDate} ${strTime}`;
}

module.exports = Output;
