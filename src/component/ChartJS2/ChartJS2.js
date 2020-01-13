import React from 'react';
import { Bar} from 'react-chartjs-2';
import "./ChartJS2.css";

class ChartJS2 extends React.Component{
  constructor(props){
    super(props);
    this.state={
      chartData2:{
        labels: ['Team1', 'Team2', 'Team3', 'Team4', 'Team5', 'Team6'],
        datasets:[
          {
            label:'test',
            data:[
              1917594,
              181045,
              153060,
              106519,
              105162,
              95072
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    }
  }
  render() {
    return(
      <div className="chart">
          <Bar
          data={this.state.chartData2}
          height={400}
          width={650}
          options={{ maintainAspectRatio: true },{layout:{
            padding:{
              left:0,
              right:0,
              bottom:0,
              top:0
            }
          }}}
          />
      </div>
    );
  }
}

export default ChartJS2;