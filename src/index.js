const discord = require('discord.js');

module.exports = {
	Client: require('./client'),
	Command: require('./command'),
	CommandArgument: require('./command-argument'),
	CommandGroup: require('./command-group'),
	CommandMessage: require('./command-message'),
	FriendlyError: require('./errors/friendly'),
	CommandFormatError: require('./errors/command-format'),

	util: require('./util'),
	version: require('../package').version
};

require('./extensions/guild').applyToClass(discord.Guild);

/**
 * @external Channel
 * @see {@link https://discord.js.org/#/docs/main/master/class/Channel}
 */
/**
 * @external Client
 * @see {@link https://discord.js.org/#/docs/main/master/class/Client}
 */
/**
 * @external ClientOptions
 * @see {@link https://discord.js.org/#/docs/main/master/typedef/ClientOptions}
 */
/**
 * @external Collection
 * @see {@link https://discord.js.org/#/docs/main/master/class/Collection}
 */
/**
 * @external Guild
 * @see {@link https://discord.js.org/#/docs/main/master/class/Guild}
 */
/**
 * @external GuildMember
 * @see {@link https://discord.js.org/#/docs/main/master/class/GuildMember}
 */
/**
 * @external GuildResolvable
 * @see {@link https://discord.js.org/#/docs/main/master/typedef/GuildResolvable}
 */
/**
 * @external MentionsObject
 * @see {@link https://discord.js.org/#/docs/main/master/class/Message?scrollTo=mentions}
 */
/**
 * @external Message
 * @see {@link https://discord.js.org/#/docs/main/master/class/Message}
 */
/**
 * @external MessageAttachment
 * @see {@link https://discord.js.org/#/docs/main/master/class/MessageAttachment}
 */
/**
 * @external MessageEmbed
 * @see {@link https://discord.js.org/#/docs/main/master/class/MessageEmbed}
 */
/**
 * @external MessageOptions
 * @see {@link https://discord.js.org/#/docs/main/master/typedef/MessageOptions}
 */
/**
 * @external Role
 * @see {@link https://discord.js.org/#/docs/main/master/class/Role}
 */
/**
 * @external StringResolvable
 * @see {@link https://discord.js.org/#/docs/main/master/typedef/StringResolvable}
 */
/**
 * @external User
 * @see {@link https://discord.js.org/#/docs/main/master/class/User}
 */
