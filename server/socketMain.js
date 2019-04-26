const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(`${process.env.DB_CONFIG}`, { useNewUrlParser: True });

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

  socket.on("perfData", data => {
    console.log(data);
  });
}

module.exports = socketMain;
