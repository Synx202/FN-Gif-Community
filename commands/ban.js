module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    permissions: ["ADMINISTRATOR"],
    execute(client, message, args){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send("User has been banned");
        }else{
        }
    }
}