require('dotenv').config();
const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply(`Привет, ${ctx.from.first_name || 'друг'}! 👋\n\nЭто бонусное колесо магазина техники. Здесь ты можешь выиграть призы и скидки!`);
});

bot.help((ctx) => {
  ctx.reply('Используй /start чтобы начать. В будущем здесь появятся новые команды!');
});

bot.launch();
console.log('Бот запущен!');
