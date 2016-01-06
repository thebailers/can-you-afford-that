/* Expenditure */
import React from 'react';
import AddForm from './AddForm';
import h from '../helpers';

var Expenditure = React.createClass({
  renderExpenditure: function(key) {
    var details = this.props.cashbook[key];
    return(
      <tr className="item" key={key}>
        <td><strong>{details.name}</strong></td>
        <td><strong>{h.formatPrice(details.amount)}</strong></td>
        <td>{details.category}</td>
        <td>{details.type}</td>
        <td>{details.date}</td>
        <td><button className="remove-item" onClick={this.props.removeExpenditure.bind(null, key)}>Remove</button></td>
      </tr>
    );
  },
  render: function() {
    return(
      <div className="expenditure">
        <table id="exp-table">
          <tbody>
            {Object.keys(this.props.cashbook).map(this.renderExpenditure)}
          </tbody>
        </table>
      </div>
    );
  }
});

export default Expenditure;
