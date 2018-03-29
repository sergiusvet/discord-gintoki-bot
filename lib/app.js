import config from './config';
import Discord from 'discord.js';
import MessageHandler from './message-handler';
import RegExpTrigger from './msg-triggers/regexp-trigger';

const client = new Discord.Client();
const messageHandler = new MessageHandler(
  // ro
  new RegExpTrigger(/^(.*\s+)?da(\s*[?!.]\s*)*$/i, 'Hui na'),
  new RegExpTrigger(/^(.*\s+)?nu(\s*[?!.]\s*)*$/i, 'Hui na lbu'),
  
  // ru
  new RegExpTrigger(/^(.*\s+)?да(\s*[?!.]\s*)*$/i, 'Хуй на'),
  new RegExpTrigger(/^(.*\s+)?нет(\s*[?!.]\s*)*$/i, 'Пидора ответ'),
  
  // transliteration
  new RegExpTrigger(/^(.*\s+)?net(\s*[?!.]\s*)*$/i, 'Pidora otvet'),
  new RegExpTrigger(/^(.*\s+)?nyet(\s*[?!.]\s*)*$/i, 'Pidora otvyet'),
  
  // memes :)
  new RegExpTrigger(/^(.*\s+)?hui na(\s*[?!.]\s*)*$/i, 'no u')
    .addVariation('tebe pizda')
    .replyToAuthor(),
);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if(msg.author.bot) {
    return;
  }

  messageHandler.handle(msg);
});

client.login(config.token);
