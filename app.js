const TelegramBot = require("node-telegram-bot-api");
const fetch = require("node-fetch");
const moment = require("moment");
require("dotenv").config();
let TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

const bot = new TelegramBot(TELEGRAM_TOKEN, {
  polling: true,
});

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const nodeID = msg.text;

  if (nodeID.indexOf("12D3") !== -1 && nodeID.length === 52) {
    try {
      let response = await fetch(
        `https://leaderboard.celestia.tools/api/v1/nodes/${nodeID}`,
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "accept-language":
              "en-US,en;q=0.9,vi-VN;q=0.8,vi;q=0.7,ru-RU;q=0.6,ru;q=0.5",
            "sec-ch-ua":
              '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"Windows"',
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            Referer: "https://tiascan.com/",
            "Referrer-Policy": "strict-origin-when-cross-origin",
          },
          body: null,
          method: "GET",
        }
      );
      let data = await response.json();
      console.log("data: ", data);
      let nodeId = data.node_id;
      let uptime = data.uptime;
      let type = data.node_type_str;
      let total_synced_headers = data.total_synced_headers;
      let node_runtime_counter_in_seconds =
        data.node_runtime_counter_in_seconds;
      let network_height = data.network_height;
      let lastRestart = data.last_restart_time;
      let icon = uptime >= 80 ? "🟢" : uptime >= 40 ? "🟡" : "🔴";

      const message = `🚀 Node ID: ${nodeId}\n\n${icon} Uptime: ${uptime}\n\n💡 Type: ${type}\n\n💎 Total Sync Headers: ${total_synced_headers}\n\n⏰ Node runtime counter in seconds: ${node_runtime_counter_in_seconds}\n\n📈 Network height: ${network_height}\n\n🕑 Last Restart: ${moment(
        lastRestart
      ).format("DD/MM/YYYY HH:mm:ss")}`;

      bot.sendMessage(chatId, message);
    } catch (error) {
      console.error(error);

      bot.sendMessage(
        chatId,
        "Sorry, there was an error retrieving data for that wallet."
      );
    }
  }
});
