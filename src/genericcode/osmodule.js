const osmodule=require("os")


console.log(osmodule.networkInterfaces());

console.log('Host Name:', os.hostname());
console.log('Platform:', os.platform());
console.log('Architecture:', os.arch());
console.log('Total Memory:', os.totalmem() / (1024 * 1024), 'MB');
console.log('Free Memory:', os.freemem() / (1024 * 1024), 'MB');
console.log('CPU Info:', os.cpus().length, 'cores');
console.log('User Info:', os.userInfo());


