const mongoose = require("mongoose");
const dbconfig = require("../../dbconfig");
const Machine = require("./models/Machine");

mongoose.connect(`${dbconfig}`, { useNewUrlParser: true });

function socketMain(io, socket) {
  let macA;
  socket.on("clientAuth", key => {
    if (key === "adsfasdaf0804285") {
      socket.join("clients");
    } else if (key === "safasdfasdfsa") {
      socket.join("ui");
      console.log("a react client has joined");
    } else {
      socket.disconnect(true);
    }
  });

  socket.on("initPerfData", async data => {
    macA = data.macA;
    const mongooseResponse = await checkAndAdd(data);
    console.log(mongooseResponse);
  });

  socket.on("perfData", data => {
    console.log("Tick");
    io.to("ui").emit("data", data);
  });
}

const checkAndAdd = data => {
  return new Promise((res, rej) => {
    Machine.findOne({ macA: data.macA }, (err, doc) => {
      if (err) {
        throw err;
        rej(err);
      } else if (doc === null) {
        let newMachine = new Machine(data);
        newMachine.save();
        res("added");
      } else {
        res("found");
      }
    });
  });
};

module.exports = socketMain;
