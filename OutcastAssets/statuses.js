module.exports = client => ({
playing1: {
  name: `with ${client.users.cache.size} users. | Outcast help`,
  type: `PLAYING`
},
watching1: {
  name: `${client.channels.cache.size} channels. | Outcast help`,
  type: `WATCHING`
},
watching2: {
  name: `${client.guilds.cache.size} guilds on 1 shard. | Outcast help`,
  type: `WATCHING`
},
watching3: {
  name: `https://outcastcorp.us/ | Outcast help`,
  type: `WATCHING`
},
});