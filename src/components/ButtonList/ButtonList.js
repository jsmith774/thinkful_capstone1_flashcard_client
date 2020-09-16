import React, { Component } from 'react';
import './ButtonList.css';

export default class ButtonList extends Component {
  static defaultProps = {
    items: [],
  };

  renderItems(items) {
    const displayProp = this.props.displayProp || 'name';
    return items.map((item) => (
      <li key={item.id} className="ButtonList__li">
        <button
          className="ButtonList__button"
          onClick={() => this.props.handleItemClick(item)}
        >
          {item[displayProp]}
        </button>
      </li>
    ));
  }

  render() {
    const { listTitle, items } = this.props;

    return (
      <>
        <h3>{listTitle}</h3>
        <ul className="ButtonList__ul">{this.renderItems(items)}</ul>
      </>
    );
  }
}
