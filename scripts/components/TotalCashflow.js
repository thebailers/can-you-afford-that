/* Sum Total Cashflow */
import React from 'react';
import h from '../helpers';

/* Cashflow Running Total */
const TotalCashflow = React.createClass({
  render() {
    const expIds = Object.keys(this.props.type || {});
    const total = expIds.reduce((prevTotal, key) => {
      const type = this.props.type[key];
      return prevTotal + (parseFloat(type.amount));
    }, 0);

    this.props.addTotal(this.props.identifier, total);

    return(
      <h2 className="total">Total: {h.formatPrice(total)}</h2>
    );
  }
});

export default TotalCashflow;
