# Telegram Bot for Retrieving Node Data

This is a Node.js application that implements a Telegram bot that retrieves node data from an API when a user inputs a wallet address. The bot is designed to work in a group chat and will only respond to messages that start with the command "/uptime".

## Requirements

To run this application, you will need:

- Node.js
- A Telegram bot token

## Installation

1. Clone this repository: `git clone https://github.com/silinh66/CelestiaNodeTrackingBot`
2. Navigate to the project directory: `cd CelestiaNodeTrackingBot`
3. Install the dependencies: `npm install`
4. Rename `.env.example` to `.env` and set the value of `TELEGRAM_BOT_TOKEN` to your Telegram bot token.
5. Start the application: `npm start`

## Usage

To use the bot, simply add it to a group chat and start a message with the command "/uptime". The bot will respond with a message asking you to enter a wallet address after the command. Once you enter a valid wallet address, the bot will send a message with the node ID and uptime for the specified wallet.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
