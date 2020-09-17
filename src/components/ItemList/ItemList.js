import React, { Component } from 'react';
import './ItemList.css';

export default class ItemList extends Component {
  // handleItemClick(itemId) {
  //  implementation passed in as prop from using components EducatorDashboard and StudentDashboard
  // }

  static defaultProps = {
    selectOptions: [],
    items: [],
    multiple: false,
    location: {},
    history: {
      push: () => {},
    },
  };

  renderSelectOptions(selectOptions) {
    //const selectOptions = this.props.items;
    const displayProp = this.props.displayProp || 'name';
    return selectOptions.map((option) => (
      <option
        key={option.id}
        value={option.id}
        onClick={() =>
          this.props.handleItemClick(option.id, option[displayProp])
        }
      >
        {option[displayProp]}
      </option>
    ));
  }

  renderTitleButton(buttonText, buttonAction) {
    if (buttonText) {
      return <button onClick={() => buttonAction()}>{buttonText}</button>;
    } else {
      return '';
    }
  }

  renderSelect() {
    const { items, id, multiple } = this.props;

    if (multiple === 'multiple') {
      return (
        <select id={id} className="itemList" size="4" multiple>
          {this.renderSelectOptions(items)}
        </select>
      );
    } else {
      return (
        <select id={id} className="itemList" size="4">
          {this.renderSelectOptions(items)}
        </select>
      );
    }
  }

  render() {
    const { name, id, buttonText, buttonAction } = this.props;
    return (
      <div className="ItemList__div" id={`ItemList_div_${id}`}>
        <label htmlFor={id} className="ItemList__label">
          {name} &nbsp; {this.renderTitleButton(buttonText, buttonAction)}
        </label>
        {this.renderSelect()}
      </div>
    );
  }
}
