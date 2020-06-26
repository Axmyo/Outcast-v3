const channel = 

    module.exports = {
    name: 'ping',
    description: "Check the bot's latency",
    cooldown: 5,
    async execute(client, message, args) {
        const m = await message.channel.send("ping");
        m.edit(`Pong! Response Took ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
    },
};
