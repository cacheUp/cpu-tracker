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
      Machine.find({}, (err, docs) => {
        docs.forEach(aMachine => {
          aMachine.isActive = false;
          io.to("ui").emit("data", aMachine);
        });
      });
    } else {
      socket.disconnect(true);
    }
  });

  socket.on("disconnect", () => {
    Machine.find({ macA: macA }, (err, docs) => {
      if (docs.length > 0) {
        // send one last emit to React
        docs[0].isActive = false;
        io.to("ui").emit("data", docs[0]);
      }
    });
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
