const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();

const prefix = '!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiels = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiels) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('FN&Gif Community Bot is online!');
    client.user.setActivity('FN&Gif Community :)', { type: 'WATCHING' }).catch(console.error);
});


client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;


    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'h') {
        client.commands.get('h').execute(message, args);
    } else if (command == 'clear') {
        client.commands.get('clear').execute(message, args);
    } else if (command == 'mute') {
        client.commands.get('mute').execute(message, args);
    } else if (command == 'unmute') {
        client.commands.get('unmute').execute(message, args);
    } else if (command == 'avatar') {
        client.commands.get('avatar').execute(message, args);




    }
});



client.login(process.env.token);