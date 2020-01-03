const Discord = require('discord.js');
require('dotenv').config();
botKey = process.env.testingBotKey;


const client = new Discord.Client();
const base_url = 'https://discordapp.com/api/v6';
const dsGlobalRoleId = '634609153289093120';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
  else if (msg.content.startsWith('/slap')) {
      const guild = client.guilds.get('634609153289093120');
      const role = guild.roles.find(role => role.name === 'Peasant');
      const member = msg.mentions.members.first()
      if (role && member) {
          if (member.displayName === 'rrohloff22') {
              msg.reply('Lol, nice try...')
          }
          else {
              const beforeIds = [];
              const rolesToRemove = member.roles.filter(role => role.id != dsGlobalRoleId);
              rolesToRemove.forEach(role => {
                  beforeIds.push(role.id);
              });
              member.removeRoles(beforeIds).then(member => member.addRole(role)).then(() => {
                  setTimeout(() => {
                      member.removeRole(role).then(() => member.addRoles(beforeIds));
                  }, 5000)
              });
          }
      }

  }
});


client.login(botKey);
// console.log(process.env.testingBotKey);