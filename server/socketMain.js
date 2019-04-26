const mongoose = require("mongoose");
const dbconfig = require("../../dbconfig");
const Machine = require("./models/Machine");

mongoose.connect(`${dbconfig}`, { useNewUrlParser: true });

function socketMain(io, socket) {
  socket.on("clientAuth", key => {
    if (key === "adsfasdaf0804285") {
      socket.join("clients");
    } else if ((key = "safasdfasdfsa")) {
      socket.join("ui");
    } else {
      socket.disconnect(true);
    }
  });

  socket.on("initPerfData", data => {
    console.log(data);
  });

  socket.on("perfData", data => {
    // console.log(data);
  });
}

module.exports = socketMain;
