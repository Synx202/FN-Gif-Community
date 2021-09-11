module.exports = {
    name: 'clear',
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES", "CONNECT"],
    description: "Clear messages!",
   async execute(client, message, args) {
        if(!args[0]) return message.reply("!בבקשה תרשום את כמות הודעות שאתה רוצה למחוק")
        if(isNaN(args[0])) return message.reply('!בבקשה תרשום מספר אמיתי')

        if(args[0] > 100) return message.reply ("!אתה לא יכול למחוק יותר מ 100 הודעות")
        if(args[0] < 1) return message.reply("!אתה חייב למחוק הודעה אחת לפחות")

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }
}