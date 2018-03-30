import config from './config';
import Discord from 'discord.js';
import MessageHandler from './message-handler';
import RegExpTrigger from './msg-triggers/regexp-trigger';

const client = new Discord.Client();
const messageHandler = new MessageHandler(
  // ro
  new RegExpTrigger(/^(.*\s+)?d?a(\s*[?!.]\s*)*$/i, 'Hui na').addVariation('Dick na'),
  new RegExpTrigger(/^(.*\s+)?nu(\s*[?!.]\s*)*$/i, 'Hui na lbu').addVariation('Hui vo rtu'),
  new RegExpTrigger(/^(.*\s+)?shi(\s*[?!.]\s*)*$/i, 'Hui tashi'),

  // ru
  new RegExpTrigger(/^(.*\s+)?да(\s*[?!.]\s*)*$/i, 'Хуй на'),
  new RegExpTrigger(/^(.*\s+)?нет(\s*[?!.]\s*)*$/i, 'Пидора ответ').addVariation('Хуй в ответ'),

  // en
  new RegExpTrigger(/^(.*\s+)?no(\s*[?!.]\s*)*$/i, 'Hui v ochko'),

  // transliteration
  new RegExpTrigger(/^(.*\s+)?net(\s*[?!.]\s*)*$/i, 'Pidora otvet').addVariation('Hui v otvet'),
  new RegExpTrigger(/^(.*\s+)?nyet(\s*[?!.]\s*)*$/i, 'Pidora otvyet').addVariation('Hui v otvyet'),
  
  // memes :)
  new RegExpTrigger(/^(.*\s+)?pas(\s*[?!.]\s*)*$/i, 'http://i0.kym-cdn.com/entries/icons/original/000/024/703/weakness.jpg'),
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
