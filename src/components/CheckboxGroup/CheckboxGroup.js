import React, { Component, Fragment } from 'react';
import './CheckboxGroup.css';

export default class CheckboxGroup extends Component {
  static defaultProps = {
    groupTitle: 'Select all that apply:',
    inputName: 'checkboxGroup',
    items: [],
  };

  renderItems(items) {
    const displayProp = this.props.displayProp || 'name';
    return items.map((item) => (
      <Fragment key={`frag_${item.id}`}>
        <div key={`div_${item.id}`}>
          <input
            key={item.id}
            type="checkbox"
            name={this.props.inputName}
            value={item.id}
            id={item.id}
            onChange={(e) =>
              this.props.handleItemChange(e.target.checked, e.target.value)
            }
          />
          <label key={`label_${item.id}`} htmlFor={item.id}>
            {item[displayProp]}
          </label>
          <br />
        </div>
      </Fragment>
    ));
  }

  render() {
    const { groupTitle, items } = this.props;

    return (
      <>
        <fieldset>
          <legend>{groupTitle}</legend>
          <div className="itemGroupContainer">{this.renderItems(items)}</div>
        </fieldset>
      </>
    );
  }
}
