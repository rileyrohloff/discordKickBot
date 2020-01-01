const Discord = require('discord.js');
const fetch = require('node-fetch');


const client = new Discord.Client();
const base_url = 'https://discordapp.com/api/v6'

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
              const roleID = role.id;
              member.addRole(roleID).catch(console.error);
              // console.log(msg.member.permissions);
              msg.reply(`${member.displayName} now has role of ${role.name}`);
          }
      }

  }
});


client.login('secretKeyGoesHere');
