/* What funds are available post income/expenditure calculation */

import React from 'react';
import h from '../helpers';

var Available = React.createClass({
  render: function() {
    var totals = this.props.totals,
      monthly = totals.income - totals.expenditure;

    return(
      <div className="available">
        <h2>Run down</h2>
        <h3>Available Monthly Funds</h3>
        <div>{h.formatPrice(monthly)} monthly</div>
      </div>
    );
  }
});

export default Available;
