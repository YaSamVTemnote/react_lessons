import React from "react";
import Name from "./components/Name";
import './App.css';

class App extends React.Component {
    state = {
        userName: 'Bob',
        count: 0,
        rows: [
            {id: 1, title: 1},
            {id: 2, title: 2},
            {id: 3, title: 3},
        ],
        inputValue: 'Hello react'
        }

    onButtonClick = () => {
        this.setState({count: this.state.count + 1})
    }
    onAddElement = () => {
        this.setState({rows: [...this.state.rows, {id: Math.random(), title: 123}]})
    }

    onInputValueChange = (e) => {
        this.setState({inputValue: e.target.value})
    }


  render() {
    return (
        <>
            <Name userName={this.state.name}/>
            {this.state.count}
            <button onClick={this.onButtonClick}>Click me</button>
            <ul>
                {this.state.rows.map(item => <li key={item.id}>{item.title}</li>)}
            </ul>
            <button onClick={this.onAddElement}>Add element</button>
            <input type='text' value={this.state.inputValue} onChange={this.onInputValueChange}/>
        </>
    )
  }
}

export default App;
