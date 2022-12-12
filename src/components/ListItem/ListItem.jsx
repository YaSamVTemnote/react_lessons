import React, { Component } from 'react';
import './ListItem.css';

class ListItem extends Component {
  onClickDelete = (e) => {
    e.stopPropagation();
    this.props.onDeleteItem(this.props.item.id);
  };

  render() {
    const { item, onToggle } = this.props;
    return (
      <div
        className={`todo-item ${item.isCompleted ? 'done' : ''}`}
        onClick={() => onToggle(item.id)}
      >
        {item.author}
        :
        {item.title}
        <span className="delete-button" onClick={this.onClickDelete}>X</span>
      </div>
    );
  }
}

export default ListItem;
