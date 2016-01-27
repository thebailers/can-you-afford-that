/* Add new transaction */
import React from 'react';

const AddTransaction = React.createClass({
  createTransaction(e) {
    e.preventDefault();

    const transaction = {
      name: this.refs.name.value,
      amount: this.refs.amount.value,
      date: this.refs.date.value
    }

    // Add transaction to App state
    this.props.addTransaction(transaction);
    this.refs.transactionform.reset();
  },
  render() {
    return(
      <form className="add-transaction" ref="transactionform" onSubmit={this.createTransaction}>
        <input type="text" ref="name" placeholder="Name" />
        <input type="text" ref="amount" placeholder="Amount" />
        <input type="text" ref="date" placeholder="Date" />
        <button type="submit" className="button">+ Add Transaction</button>
      </form>
    );
  }
});

export default AddTransaction;
