import React from 'react';
import h from '../helpers';

const ListTransactions = React.createClass({
  month: h.monthNames[(new Date()).getMonth()],
  year: (new Date()).getFullYear(),
  renderTransactions(key, year, month) {
    const details = this.props.transactions[this.year][this.month][key];
    return(
      <tr className="item" key={key}>
        <td><strong>{details.name}</strong></td>
        <td><strong>{h.formatPrice(details.amount)}</strong></td>
        <td>{details.date}</td>
        <td><button className="remove-item" onClick={this.props.removeTransaction.bind(null, key, 'transactions', this.year, this.month)}>Remove</button></td>
      </tr>
    );
  },
  render() {

    return (
      <div className="transactions">
        <table id="exp-table">
          <tbody>
            {Object.keys(this.props.transactions[this.year][this.month] || {}).map(this.renderTransactions)}
          </tbody>
        </table>
      </div>
    );
  }
});

export default ListTransactions;
