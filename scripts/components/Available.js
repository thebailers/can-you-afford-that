import React from 'react';
import h from '../helpers';
import Transactions from './Transactions';

const Available = React.createClass({
  render: function() {
    const totals = this.props.totals,
          monthly = totals.income - totals.expenditure;

    return(
      <div className="available">
        <h2>Run down</h2>
        <h3>Available Monthly Funds</h3>
        <div>{h.formatPrice(monthly)} monthly</div>
        <Transactions addTransaction={this.props.addTransaction} available={monthly} />
      </div>
    );
  }
});

export default Available;
