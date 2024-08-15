var count = 0;

function incCount() {
  count++;
  console.log(count);
  setTimeout(incCount, 1000);
}

setTimeout(incCount, 1000);
