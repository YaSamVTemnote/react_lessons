import React from 'react';
import './App.css';
import List from './components/List/List';
import Form from './components/Form/Form';

class App extends React.Component {
  state = {
    rows: [
      {
        id: 1, title: 1, isCompleted: true, author: 'Test',
      },
      {
        id: 2, title: 2, isCompleted: false, author: 'Test',
      },
      {
        id: 3, title: 3, isCompleted: true, author: 'Test',
      },
    ],
  };

  addTodo = (newTodo) => {
    this.setState(
      {
        rows:
            [
              ...this.state.rows,
              {
                id: Math.random(),
                isCompleted: false,
                ...newTodo,
              }],
      },
    );
  };

  deleteTodo = (id) => {
    this.setState({ rows: this.state.rows.filter((todo) => todo.id !== id) });
  };

  toggleTodo = (id) => {
    const newTodos = this.state.rows.map((todo) => (todo.id !== id
      ? todo
      : { ...todo, isCompleted: !todo.isCompleted }));
    this.setState({ rows: newTodos });
  };

  render() {
    return (
      <>
        <span>
          Total todos:
          {this.state.rows.length}
        </span>
        <List rows={this.state.rows} onToggle={this.toggleTodo} onDeleteItem={this.deleteTodo} />
        <Form onAddElemnt={this.addTodo} />
      </>
    );
  }
}

export default App;

// rows: [{}, {}]
// toggle
// state > rows : [{}, {}, {}]
