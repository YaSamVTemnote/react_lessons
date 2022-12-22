import React, { PureComponent } from 'react';
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
        isShowVersion: true,
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

  // componentWillMount() {}
  // componentWillReceiveProps(nextProps, nextContext) {}
  // componentWillUpdate(nextProps, nextState, nextContext) {}

  render() {
    return (
      <>
        <span>
          Total todos:
          {this.state.rows.length}
        </span>
        <List rows={this.state.rows} onToggle={this.toggleTodo} onDeleteItem={this.deleteTodo} />
        <Form onAddElemnt={this.addTodo} />
        <button onClick={() => this.setState({ isShowVersion: !this.state.isShowVersion })}>{this.state.isShowVersion ? 'Hide' : 'Show'}</button>
        {this.state.isShowVersion && <ResponsiveComponent size={768} />}
        <Test>
          {(x, y) => (
            <div>
              <div>
                X:
                {x}
              </div>
              <div>
                Y:
                {y}
              </div>
            </div>
          )}
        </Test>
      </>
    );
  }
}

export default App;

class Test extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        {children(3, 4)}
      </div>
    );
  }
}

// rows: [{}, {}]
// toggle
// state > rows : [{}, {}, {}]

class ResponsiveComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: window.innerWidth < this.props.size,
    };
  }

  componentDidMount() {
    // this.setState({ isMobile: window.innerWidth < this.props.size });
    window.addEventListener('resize', this.onChangeWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onChangeWidth);
  }

  // static getDerivedStateFromProps(state, props) {
  //   console.log(state);
  //   console.log(props);
  //   return null;
  // }

  onChangeWidth = () => {
    this.setState({ isMobile: window.innerWidth < this.props.size });
  };

  render() {
    return (
      <div>
        {this.state.isMobile
          ? 'Mobile version'
          : 'Desktop Version'}
      </div>
    );
  }
}
