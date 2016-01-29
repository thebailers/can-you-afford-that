import React from 'react';
import h from '../helpers';

const ListTransactions = React.createClass({
  renderTransactions(key) {
    const details = this.props.transactions["2016"]["january"][key];
    return(
      <tr className="item" key={key}>
        <td><strong>{details.name}</strong></td>
        <td><strong>{h.formatPrice(details.amount)}</strong></td>
        <td>{details.date}</td>
        {/*}<td><button className="remove-item" onClick={this.props.removeCashflow.bind(null, key, 'expenditure')}>Remove</button></td>*/}
      </tr>
    );
  },
  render() {
    return (
      <div className="transactions">
        <table id="exp-table">
          <tbody>
            {Object.keys(this.props.transactions["2016"]["january"] || {}).map(this.renderTransactions)}
          </tbody>
        </table>
      </div>
    );
  }
});

export default ListTransactions;
