import React from 'react';
import './Toolbar.css';
import smile from'../smile.png';
class Toolbar extends React.Component{
  render() {
      return (
          <div>
            <ul id="nav">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Data</a></li>

              <a href="#"><img 
            src={require('../smile.png')}
            width="30"
            height="30"
            style={{float:'left'}} /></a>
            </ul>
          </div>
      );
  }
}
export default Toolbar;