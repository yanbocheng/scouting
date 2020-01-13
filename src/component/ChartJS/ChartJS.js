import React from 'react';
import { Bar, Line} from 'react-chartjs-2';
import "./ChartJS.css";
class ChartJS extends React.Component{
  constructor(props){
    super(props);
    this.state={
      chartData:{
        labels: ['Team1', 'Team2', 'Team3', 'Team4', 'Team5', 'Team6'],
        datasets:[
          {
            label:'TEAM RANKINGS',
            data: props.data,
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
    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };
    return(
      <div className="chart">
        <Bar 
          data={this.state.chartData}
          height={400}
          width={650}
          options={{ maintainAspectRatio: true },{layout:{
            padding:{
              left:0,
              right:0,
              bottom:0,
              top:0
            }
          }}}/>
      </div>
    );
  }
}

export default ChartJS;