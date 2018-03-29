import config from './config';
import Discord from 'discord.js';
import MessageHandler from './message-handler';
import RegExpTrigger from './msg-triggers/regexp-trigger';

const client = new Discord.Client();
const messageHandler = new MessageHandler(
  new RegExpTrigger(/^(.*\s+)?da\s*$/i, 'Hui na'),
  new RegExpTrigger(/^(.*\s+)?nu\s*$/i, 'Hui na lbu'),
);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  messageHandler.handle(msg);
});

client.login(config.token);
