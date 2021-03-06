"use strict";

const {HELP_MESSAGE} = require(`../../constants`);
const chalk = require(`chalk`);

module.exports = {
  name: `--help`,
  run() {
    console.log(chalk.gray(HELP_MESSAGE));
  },
};
