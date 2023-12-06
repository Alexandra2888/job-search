const interval = setInterval(() => {
  console.log("I will print every 2 seconds");
}, 2000);

setTimeout(() => {
  clearInterval(interval);
}, 10000);
