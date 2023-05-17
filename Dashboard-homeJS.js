
function openNav() {
        document.getElementById("mySidenav").style.width = "250px"
      }

      function closeNav() {
        document.getElementById("mySidenav").style.width = "0"
      }
     

  document.addEventListener('DOMContentLoaded', function() {
    const donutChart = document.getElementById('donutChart').getContext('2d');
    const doughnutChart = new Chart(donutChart, {
      type: 'doughnut',
      data: {
        labels: ['Product 1', 'prod 2', 'prod 3', 'prod 4', 'prod 5'],
        datasets: [{
          data: [20, 20, 20, 20, 20],
          backgroundColor: [
            '#FF6384', '#36A2EB', '#FFCE56', '#33FF9E', '#B533FF'
          ],
        }]
      },
    });
  });

