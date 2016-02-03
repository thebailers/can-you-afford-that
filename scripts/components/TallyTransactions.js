import React from 'react';
import h from '../helpers';

const TallyTransactions = React.createClass({
  month: h.monthNames[(new Date()).getMonth()],
  year: (new Date()).getFullYear(),
  render() {
    const totals = this.props.totals,
          monthly = totals.income - totals.expenditure;

    const transactions = Object.keys(this.props.transactions[this.year][this.month] || {});
    const total = transactions.reduce((prevTotal, key) => {
      const type = this.props.transactions[this.year][this.month][key];
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
