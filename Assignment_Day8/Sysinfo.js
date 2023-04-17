const os = require('os');

console.log(
  `System Information:
  Type: ${os.type()}
  Release: ${os.release()}
  Architecture: ${os.arch()}
  CPU Cores: ${os.cpus().length}
  Total Memory: ${os.totalmem()} bytes
  Free Memory: ${os.freemem()} bytes`);
