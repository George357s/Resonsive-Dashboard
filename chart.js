let lineChart;

const ctx =
   document.getElementById("lineChart").getContext("2d");

function chartSetup(accentColor) {
      lineChart = new Chart(ctx, {
      type: "line",
      data: {
         labels: [
            '11:00am', '12:00am', '1:00pm', '2:00pm', '3:00pm'
         ],
         datasets: [
            {
               label: "Views",
               data: [0, 2500, 1500, 2500, 2000, 1500, 2500, 3000],
               backgroundColor: accentColor,
               borderColor: accentColor,
            },
         ],
      },
      options: {
         maintainAspectRatio: false,
         radius: 5,
         hitRadius: 30,
         hoverRadius: 12,
      },
   });
}

chartSetup('#654ce5');

const darkToggleIcon = document.querySelector('#darkToggle');
const panels = document.querySelectorAll('.panel');

darkToggleIcon.addEventListener('click', e => {
   e.target.classList.toggle('fa-sun');
   document.body.classList.toggle('dark-mode');
});

const r = document.querySelector(':root');
const colors = document.querySelectorAll('.colors li');

colors.forEach(color => {
   color.addEventListener('click', () => {
      const element = window.getComputedStyle(color);
      let bg = element.getPropertyValue("background-color");

      r.style.setProperty('--accent', bg);

      lineChart.destroy();

      chartSetup(bg);
   });
});