const os = require("os");
function performanceData() {
  return new Promise(async (res, reject) => {
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
    const cpuLoad = await getCpuLoad();
    res({
      freeMem,
      totalMem,
      usedMem,
      memUsage,
      osType,
      upTime,
      cpuModel,
      numCores,
      cpuSpeed,
      cpuLoad
    });
  });
}

function cpuAverage() {
  const cpus = os.cpus();
  let idleMs = 0;
  let totalMs = 0;
  cpus.forEach(aCore => {
    for (type in aCore.times) {
      totalMs += aCore.times[type];
    }
    idleMs += aCore.times.idle;
  });
  return {
    idle: idleMs / cpus.length,
    total: totalMs / cpus.length
  };
}

function getCpuLoad() {
  return new Promise((res, rej) => {
    const start = cpuAverage();
    setTimeout(() => {
      const end = cpuAverage();
      const idleDifference = end.idle - start.idle;
      const totalDifference = end.total - start.total;
      const percentageCpu =
        100 - Math.floor((100 * idleDifference) / totalDifference);
      res(percentageCpu);
    }, 100);
  });
}

performanceData().then(data => {
  console.log(data);
});
