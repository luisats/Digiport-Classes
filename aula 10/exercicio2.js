const totalDonuts = 10;

for (let i = 1; i <= totalDonuts; i++) {
  if (i % 3 === 0) {
    console.log("Donut " + i + " recebe recheio de chocolate");
  } else {
    console.log("Donut " + i + " recebe recheio de baunilha");
  }
}