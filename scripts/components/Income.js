/* Income */
import React from 'react';

var Income = React.createClass({
  render: function() {
    return(
      <div className="income">
        <h2>Income</h2>
        <table id="income-table">
          <tbody>
            {Object.keys(this.props.cashbook).map(this.props.renderIncome)}
          </tbody>
        </table>
      </div>
    );
  }
});

export default Income;
