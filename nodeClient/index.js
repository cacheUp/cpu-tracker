const os = require("os");

const cpus = os.cpus();
const freeMem = os.freemem();
const totalMem = os.totalmem();
const osType = os.type() == "Darwin" ? "Mac" : os.type();
const upTime = os.uptime();

const usedMem = totalMem - freeMem;

const memUsage = Math.floor(((usedMem / totalMem) * 100) / 100);

const cpuModel = cpus[0].model;
const numCores = cpus.length;
const cpuSpeed = cpus[0].speed;
