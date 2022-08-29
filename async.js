console.log("starting");

//setTimeout(() => console.log("2 seconds Timer"), 2000);
setTimeout(() => console.log("0 second Timer"), 1000);
setTimeout(() => {
  for (let i = 0; i < 99999; i++) {
    for (let i = 0; i < 99999; i++) {}
  }
}, 0);

console.log("stopping");
