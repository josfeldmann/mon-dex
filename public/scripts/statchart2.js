 function drawStatChart(stats) {
      const ctx = document.getElementById("statChart");

      const statColors = [
        "#ff5959", // HP
        "#f5ac78", // Attack
        "#fae078", // Defense
        "#9db7f5", // Sp. Atk
        "#a7db8d", // Sp. Def
        "#fa92b2"  // Speed
      ];

      new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["HP", "Attack", "Defense", "Sp. Atk", "Sp. Def", "Speed"],
          datasets: [{
            label: "Base Stat",
            data: stats,
            backgroundColor: statColors,
            borderColor: "#333",
            borderWidth: 1,
          }]
        },
        options: {
          layout: {
            padding: {
              right: 40 // add space for labels on the right
            }
          },
          responsive: false,
          indexAxis: "y", // ✅ Flip axes
          scales: {
            x: {
              beginAtZero: true,
              max: 250,
              ticks: {
                stepSize: 25,
              },
              grid: {
                color: "rgba(0,0,0,0.05)",
              },
            },
            y: {
              grid: {
                display: false,
              },
            },
          },
          plugins: {
            legend: { display: false },
            datalabels: {
              clip: false, 
              anchor: 'end',
              align: 'right',
              color: '#333',
              font: {
                weight: 'bold'
              },
              formatter: (value) => value
            }
          },
          animation: {
            duration: 1000,
            easing: "easeOutCubic",
          },
        },
        plugins: [ChartDataLabels], // ✅ Register plugin
      });
    }

    // ✅ Example usage:
    
    drawStatChart(Stats);