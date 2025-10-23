
console.log(globint);

function StatChart(hp, attack, defense, spatt, spdef, speed) {

  console.log("HERE BITCH");

  const ctx = document.getElementById('graph');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['HP', 'Attack', 'Defense', 'Special Attack', 'Special Defense', 'Speed'],
      datasets: [{
        label: 'Stats',
        backgroundColor: ["green", "yellow", "orange", "red", "blue", "green" ],
        data: [hp, attack, defense, spatt, spdef, speed],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

}
