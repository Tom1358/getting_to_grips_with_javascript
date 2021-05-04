

// data from https://data.giss.nasa.gov/gistemp/


async function getData() {
    const xs = [];
    const ys= [];
    const response = await fetch('NASA info.csv');
    const data = await response.text();

    const table = data.split('\n').slice(1);
    table.forEach(row => {
        const columns = row.split(',');
        const year = columns[0];
        xs.push(year);
        const temp = columns[1];
        ys.push(parseFloat(temp) + 14);
        console.log(year, temp);
    });
    return {xs, ys};
}

/*chartIt();
async function chartIt() {
    const data = await getData();
    const ctx = document.getElementById('chart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.xs,
            datasets: [{
                label: 'Combined Land-Surface Air and Sea-Surface Water Temperature in °C',
                data: data.ys,
                backgroundColor: 
                    ['rgba(255, 99, 132, 0.2)'],
                borderColor:
                    ['rgba(255, 99, 132, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    ticks: {
                        callback: function(value, index, values) {
                            return value + '°';
                        }
                    }
                }
            }
        }
    });
}
*/

