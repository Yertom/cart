import React,{Component} from 'react';
import './App.css';
import { Doughnut, Bar, Pie, Radar } from 'react-chartjs-2';

class App extends Component {
  render() {
    const data = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [{
              label: 'Dataset',
              backgroundColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              data: [0, 10, 5, 2, 20, 30, 45]
          }]
    };
    const options= {
        maintainAspectRatio: true,
        responsive: true,
        events: ['click'],
        onClick: (event) => {console.log(event)},
        tooltips: {
            mode: 'nearest',
            callbacks: {
                label: function(tooltipItem, data) {
                    let label = data.labels[tooltipItem.index];

                    return label + ': some custom text';
                }
            }
        }
    };
      
    return (
        <div className="App">
            <div style={{width: '100%', maxWidth: 500}}>
                <div className='chart'>
                    <Doughnut data={data} options={options}/>
                </div>
                <div className='chart'>
                    <Bar data={data} options={options}/>
                </div>
                <div className='chart'>
                    <Pie data={data} options={options}/>
                </div>
                <div className='chart'>
                    <Radar data={data} options={options}/>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
