/* Income */
import React from 'react';
import h from '../helpers';

var Income = React.createClass({
  renderIncome: function(key) {
    var details = this.props.cashbook[key];
    return(
      <tr className="item" key={key}>
        <td><strong>{details.name}</strong></td>
        <td><strong>{h.formatPrice(details.amount)}</strong></td>
        <td>{details.category}</td>
        <td>{details.type}</td>
        <td>{details.date}</td>
        <td><button className="remove-item" onClick={this.props.removeIncome.bind(null, key)}>Remove</button></td>
      </tr>
    );
  },
  render: function() {
    return(
      <div className="income">
        <h2>Income</h2>
        <table id="income-table">
          <tbody>
            {Object.keys(this.props.cashbook).map(this.renderIncome)}
          </tbody>
        </table>
      </div>
    );
  }
});

export default Income;
