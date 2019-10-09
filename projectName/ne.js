const pidusage = require('pidusage')

// setInterval(()=>{
 
 
// },2000)

setInterval(function () {
    pidusage(process.pid, function (err, stats) {
    //   console.log(stats)    
      // console.log(stats.cpu*10)
      // console.log('内存使用'+Math.round(100-stats.memory/1024/1024)+'%')
      // => {
      //   cpu: 10.0,            // percentage (from 0 to 100*vcore)
      //   memory: 357306368,    // bytes
      //   ppid: 312,            // PPID
      //   pid: 727,             // PID
      //   ctime: 867000,        // ms user + system time
      //   elapsed: 6650000,     // ms since the start of the process
      //   timestamp: 864000000  // ms since epoch
      // }
      return stats
    })
  }, 1000)