import React from 'react'
import smile from'../smile.png';
import coolface from '../coolface.png';
class Button extends React.Component{
  constructor(props){
    super(props);
    this.state={isToggleOn: true};
    this.handleClick=this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  render() {
    
    return (
        <div>
          <ul id="nav">
            <li><a href="#"onClick={this.handleClick}>{this.state.isToggleOn ? <a href="#"><img 
            src={require('../smile.png')}
            width="30"
            height="30"/></a> : <a href="#"><img 
            src={require('../coolface.png')}
            width="30"
            height="30"/></a>}click me!</a></li>
          </ul>
        </div>
    );
}
}
export default Button