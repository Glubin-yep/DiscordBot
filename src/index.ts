import { Client, GatewayIntentBits } from 'discord.js';
import { config } from 'dotenv';
import { exec, spawn } from 'child_process';

config(); 

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user?.tag}`);
});

client.on('messageCreate', message => {
  if (message.author.bot) return;


if (message.content === '!launch') {
  const batFilePath = process.env.BATFILEPATH || "";

  try {
    const psCommand = `Start-Process -FilePath '${batFilePath}' -WindowStyle Normal`;

const child = spawn('explorer.exe', [batFilePath], {
  detached: true,
  stdio: 'ignore'
});
child.unref();

    message.reply('✅ Batch file launched via PowerShell.');
  } catch (err) {
    console.error(`Launch error: ${err}`);
    message.reply('❌ Failed to launch batch file.');
  }
}
});

client.login(process.env.DISCORD_TOKEN);
