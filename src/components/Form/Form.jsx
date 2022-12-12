import React, { Component } from 'react';

class Form extends Component {
  state = {
    author: '',
    title: '',
  };

  onInputChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onClick = (e) => {
    e.preventDefault();
    this.props.onAddElemnt(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.author}
          onChange={this.onInputChange}
          placeholder="Author"
          name="author"
        />
        <input
          type="text"
          value={this.state.title}
          onChange={this.onInputChange}
          placeholder="Title"
          name="title"
        />
        <button onClick={this.onClick}>Add element</button>
      </form>
    );
  }
}

export default Form;
