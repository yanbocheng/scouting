import React from 'react';
import './App.css';
import { Component } from 'react';
import Toolbar from './component/Toolbar/Toolbar';
import ChartJS from './component/ChartJS/ChartJS';
import ChartJS2 from './component/ChartJS2/ChartJS2';
import Button from './component/Button/Button';
import GoogleLogin from './component/GoogleLogin/GoogelLogin';
import SortTB from './component/SortTB/SortTB';
import PieMenu from './component/PieMenu/PieMenu';
import HeatMap from './component/HeatMap/HeatMap';
import config from './component/config_dev';

const testdata = [
  117594,
  181045,
  153060,
  106519,
  105162,
  95072
];
class App extends Component{
  constructor(props){
    super(props);
    this.simpleHeatRef = React.createRef();
    // heatmap defaults
    this.defaultMaxOccurances = 18;
    this.defaultBlurValue = 10;
    this.defaultRadiusValue = 14;

    // component's state
    this.state = {
      data: [], // data array contains a list of sub-arrays with [x, y, occurances] values.  refer to data.js for example.
      maxOccurances: this.defaultMaxOccurances,
      blurValue: this.defaultBlurValue,
      radiusValue: this.defaultRadiusValue
    };

    this.handleWindowClose = this.handleWindowClose.bind(this);
  }

  componentWillMount() {
    console.log('App.componentWillMount() props: ', this.props);
    window.addEventListener('beforeunload', this.handleWindowClose);
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.handleWindowClose);
  }

  async handleWindowClose(e) {
    e.preventDefault();
    // dispatch a UNAUTH_USER action to invoke Cognito
  }

  render() {
    console.log('App.render() called');

    const { maxOccurances, blurValue, radiusValue } = this.state;

    return (
      <div className="app">
        <HeatMap
          ref={this.simpleHeatRef}
          width={config.HEATMAP_CANVAS_WIDTH}
          height={config.HEATMAP_CANVAS_HEIGTH}
          maxOccurances={maxOccurances}
          blur={blurValue}
          radius={radiusValue}
          // uncomment to send real data in
          // data={data}
        />
      </div>
    );
  }

  
  render() {
    return (
      <div className="App">
        <Toolbar/>
        <Button/>
        <GoogleLogin/>
        <PieMenu/>
        <HeatMap/>
      <table>
        <thead>
          <tr>
          <th>Name</th>
          <th>Name2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><ChartJS data={testdata}/></td>
            <td><ChartJS2/></td>
          </tr>
          <tr>
            <td>team1:{testdata[0]},  team2:{testdata[1]},  team3{testdata[2]},  team4{testdata[3]},  team5{testdata[4]},  team6{testdata[5]}</td>
            <td>team1: Shows why data should be in App.js instead of its components</td>
          </tr>
        </tbody>  
      </table>
      <SortTB/>
      </div>
      
    );
  }
}
export default App;
