const telegramBot = require('node-telegram-bot-api')

const TOKEN = '5485702189:AAGFCMHKkUGHxnWApVwfgRVj_5AwWudzq24'

const bot = new telegramBot(TOKEN, {polling: true})

bot.on('message', (message) => {
    console.log(message.text)
    const chatId = message.from.id
    let messageText = message.text
    let finalMessage = `Halo kak ${messageText}, mohon maaf mengganggu waktunya`


    bot.sendMessage(chatId, finalMessage)
})