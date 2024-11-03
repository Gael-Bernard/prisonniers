import { Client, Events, GatewayIntentBits } from "discord.js";
import CONFIG from "../shared/config/config.service.js";

export default function mainDiscord() {

  const client = new Client({ intents: [GatewayIntentBits.Guilds] });

  client.once(Events.ClientReady, readyClient => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
  });

  client.login(CONFIG.token);

}
