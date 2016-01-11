/* Add new Cashflow */

import React from 'react';

var AddCashflow = React.createClass({
  createCashflow: function(e) {
    e.preventDefault();

    var type = this.props.type;

    // Take data from form and create an object
    var cashflow = {
      name: this.refs.name.value,
      amount: this.refs.amount.value,
      category: this.refs.category.value,
      type: this.refs.type.value,
      date: this.refs.date.value
    }

    // Add expenditure to App state
    this.props.addCashflow(cashflow, type);
    this.refs.cfform.reset();
  },
  render: function() {
    return(
      <form className="add-cashflow" ref="cfform" onSubmit={this.createCashflow}>
        <input type="text" ref="name" placeholder="Name" />
        <input type="text" ref="amount" placeholder="Amount" />
        <input type="text" ref="category" placeholder="Category" />
        <select ref="type">
          <option value="recurring">Recurring</option>
          <option value="one-off">One Off</option>
        </select>
        <input type="text" ref="date" placeholder="Date" />
        <button type="submit" className="button">+ Add Cashflow</button>
      </form>
    );
  }
});

export default AddCashflow;
