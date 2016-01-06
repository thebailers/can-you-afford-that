/* Sum Total Cashflow */
import React from 'react';
import h from '../helpers';

/* Cashflow Running Total */
var TotalCashflow = React.createClass({
  componentDidMount: function() {

  },
  addTotal: function() {

  },
  render: function() {
    var expIds = Object.keys(this.props.type);
    var total = expIds.reduce((prevTotal, key) => {
      var type = this.props.type[key];
      return prevTotal + (parseFloat(type.amount));
    }, 0);

    this.props.addTotal(this.props.identifier, total);

    return(
      <h2 className="total">Total: {h.formatPrice(total)}</h2>
    );
  }
});

export default TotalCashflow;
