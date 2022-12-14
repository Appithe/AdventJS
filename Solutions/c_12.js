function selectSleigh(distance, sleighs) { // fallan 3 test secretos

  const betterSleigh = sleighs.map((sleigh) => {
    let { name, consumption } = sleigh;
    let whats = consumption * distance;

    if (whats <= 20) {
      return name;
    }

  }).filter((sleigh) => sleigh !== undefined);

  if (betterSleigh.length > 1) {
    betterSleigh.shift();
  }

  return betterSleigh[0] || null;

}

const distance = 30;
const sleighs = [
  { name: "Dasher", consumption: 0.3 },
  { name: "Dancer", consumption: 0.5 },
  { name: "Rudolph", consumption: 0.7 },
  { name: "Midu", consumption: 1 },
];

console.log(selectSleigh(distance, sleighs)); // => "Dancer"
console.log('expected: Dancer\n')
