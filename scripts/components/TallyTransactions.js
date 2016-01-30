import React from 'react';
import h from '../helpers';

const TallyTransactions = React.createClass({
  render() {
    const totals = this.props.totals,
          monthly = totals.income - totals.expenditure;

    const transactions = Object.keys(this.props.transactions['2016']['january'] || {});
    const total = transactions.reduce((prevTotal, key) => {
      const type = this.props.transactions['2016']['january'][key];
      return prevTotal + (parseFloat(type.amount));
    }, 0)


    return (
      <div>
        TallyTransactions Total: {h.formatPrice(monthly - total)}
      </div>
    );
  }
});

export default TallyTransactions;
