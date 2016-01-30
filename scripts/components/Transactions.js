import React from 'react';
import AddTransaction from './AddTransaction';
import ListTransactions from './ListTransactions';
import TallyTransactions from './TallyTransactions';
import h from '../helpers';

const Transactions = React.createClass({
  render() {
    return (
      <div>
        <AddTransaction addTransaction={this.props.addTransaction} />
        <ListTransactions
          transactions={this.props.transactions}
          removeTransaction={this.props.removeTransaction} />
        <TallyTransactions
          totals={this.props.totals}
          transactions={this.props.transactions} />
      </div>
    );
  }
});

export default Transactions;
