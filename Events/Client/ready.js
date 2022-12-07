const { loadCommands } = require("../../Handlers/commandHandler");
module.exports = {
  name: "ready",
  once: "true",
  execute(client) {
    console.log("The Client is Now ready.");

    loadCommands(client);
  },
};
