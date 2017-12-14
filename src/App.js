import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './components/display'
import Digit from './components/digit'
import Operation from './components/operation'
import {connect} from 'react-redux'

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            result: 'test'
        }
    }

    calculate=()=>{
        let result = 'result';
        this.setState({result:result});
    }

  render() {
    return (
        <div id="phone">

        <div id="calculator" className="App">
        <Display result={this.props.displayNumber} />
          <Digit number="1" />
          <Digit number="2" />
          <Digit number="3" />
          <Operation operation="+"/>
          <Digit number="4" />
          <Digit number="5" />
          <Digit number="6" />
          <Operation operation="-"/>
          <Digit number="7" />
          <Digit number="8" />
          <Digit number="9" />
          <Operation operation="÷"/>
          <Digit number="0" />
            <Operation operation="AC"/>
            <Operation operation="=" calculate={this.calculate}/>
            <Operation operation="x"/>

          <button id="home"></button>
      </div>
        </div>
    );
  }
}

function mapStateToProps(state) {

    return {
        displayNumber : state.reducer1[state.reducer1.displayNumber]
    }

}

function mapDispatchToProps(dispatch) {

    return {
        // numberToDisplay : function (digit) {
        //     dispatch(digitPressed(digit));
        //
        // }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
