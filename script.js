const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot('5485702189:AAGFCMHKkUGHxnWApVwfgRVj_5AwWudzq24', { polling: true });
const request = require('request');
const express = require('express');
const app = express();



bot.on('message', (msg) => {
    const chatId = msg.chat.id;
  
    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'Received your message');
  });

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log(`Server is running at port ${PORT}`);
});