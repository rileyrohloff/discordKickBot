const Discord = require('discord.js');
require('dotenv').config();
botKey = process.env.testingBotKey;


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
              const memberRoleList = member.roles;
              const rolesToRemove = memberRoleList.filter(role => {
                  if (role.name != "634808314995146774" || role.id != "634609153289093120") {
                    return true;
                  } else {
                      return false;
                  }
              });

              console.log(rolesToRemove.map(role => role.name));
              member.removeRoles(rolesToRemove).then(() => member.addRole("634808314995146774")
                  .then(() => setTimeout(() => {
                      member.addRoles(rolesToRemove);
                      member.removeRole('634808314995146774');
                      console.log("This ran");
                  }, 5000)));

              msg.reply(`${member.displayName} now has role of ${role.name}`);
          }
      }

  }
});


client.login(botKey);
// console.log(process.env.testingBotKey);