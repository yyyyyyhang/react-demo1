import React, {Component } from 'react';
// import logo from './favicon.ico';
import './App.css';
import HeadComponent from '../src/page/isHead/isHead'

class TextInputComponent extends Component{
    state={
        inputContent:""
    }
    inputChange=(event)=>{
        this.setState({
            inputContent: event.target.value,
        })
        event.preventDefault();
        event.stopPropagation()


    }
    render(){
        return(
            <div>
                <HeadComponent/>
                <input type="text" onChange={this.inputChange} />
                <hr/>
                <span>{this.state.inputContent}</span>
                <hr/>
            </div>
        )
    }
}

class App extends Component {
  render() {
    return (
      <div className="header">

          <TextInputComponent/>

      </div>
    );
  }
}

export default App;
