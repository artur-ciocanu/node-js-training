const spawn = require("child_process").spawn;
const cp = spawn("node", ["child"]);

cp.stdout.on("data", data => {
  
  console.log(`STDOUT: ${data}`);
 
});

cp.on("close", () => {
    process.exit();
});


setTimeout(() => {
  
  cp.stdin.write("exit");
 
}, 3000);
