

  StatChart(Stats[0],Stats[1],Stats[2],Stats[3],Stats[4],Stats[5]);



function StatChart(hp, attack, defense, spatt, spdef, speed) {



  const ctx = document.getElementById('statChart');

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
       responsive: false, // ✅ prevents auto-resizing
       maintainAspectRatio: false, // optional, allows custom height
    }
  });

}
