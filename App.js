import React, {Component} from 'react';
import Screen from './src/Screen'

export default class App extends Component {
  
  state ={
    screenFlag: true,
  }

  updateData = (value) => {
    this.setState({ screenFlag: value })
 }

  render(){
    const {screenFlag} = this.state;
    return (
      <Screen updateData={this.updateData} screen={screenFlag}/>
    );
  }
}
