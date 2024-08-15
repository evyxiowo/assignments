let count = 0;

setInterval(() => {
  const t = new Date();

  let machineTime = t.getTime();
  let humanDate = new Date(machineTime);

  let humanReadableTime = humanDate.toString();
  console.log(humanReadableTime);
}, 1000);

//run code to display current time
