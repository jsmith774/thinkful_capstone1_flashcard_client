import React, { Component } from 'react';
import './ItemList.css';

export default class ItemList extends Component {
  //todo implement this for basic edit/delete funtionality?
  handleButtonClick(itemId) {
    return;
  }

  renderSelectOptions(selectOptions) {
    //const selectOptions = this.props.items;
    const displayProp = this.props.displayProp || 'name';
    return selectOptions.map((option) => (
      <option
        key={option.id}
        value={option.id}
        onClick={() => this.handleButtonClick(option.id)}
      >
        {option[displayProp]}
      </option>
    ));
  }

  render() {
    const { name, items, id } = this.props;
    return (
      <div className="ItemList__div" id={`ItemList_div_${id}`}>
        <label htmlFor={id} className="ItemList__label">
          {name} &nbsp; <button> Add (+)</button>
        </label>
        <select id={id} className="itemList" size="4">
          {this.renderSelectOptions(items)}
        </select>
      </div>
    );
  }
}

// export function Section({ className, list, ...props }) {
//   const classes = ['Section', list && 'Section--list', className]
//     .filter(Boolean)
//     .join(' ');
//   return <section className={classes} {...props} />;
// }
// <option value="FC1">and</option>
// <option value="FC2">at</option>
// <option value="FC3">bunny</option>
// <option value="FC4">but</option>
// <option value="FC5">he</option>
// <option value="FC6">on</option>
// <option value="FC7">she</option>
// <option value="FC8">the</option>
