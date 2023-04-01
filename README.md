# Telegram Bot for Retrieving Celestia Node Data

This is a Node.js application that implements a Telegram bot that retrieves node data from an API when a user inputs a wallet address. The bot is designed to work in a group chat and will only respond to messages that start with node ID.

## Requirements

To run this application, you will need:

- Node.js
- A Telegram bot token

## Installation

1. Clone this repository: `git clone https://github.com/silinh66/CelestiaNodeTrackingBot`
2. Install the dependencies: `npm install`
3. Rename `.env.example` to `.env` and set the value of `TELEGRAM_BOT_TOKEN` to your Telegram bot token.
4. Start the application: `npm start`

## Usage

To use the bot, simply add it to a group chat and start a message with the nodeID. Once you enter a valid node ID, the bot will send a message with the uptime and information for the specified node ID.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
