import React from 'react';

// Config
import config from '../config.js';

// Firebase
import Rebase from 're-base';
var base = Rebase.createClass(config.firebase);

import h from '../helpers';

import Expenditure from './Expenditure';
import Income from './Income';
import TotalCashflow from './TotalCashflow';
import AddForm from './AddForm';
import Available from './Available';

var App = React.createClass({

  // Part of React lifecycle
  getInitialState: function() {
    return {
      cashbook: {
        expenditure: {},
        income: {}
      },
      totals: {},
      available: {}
    }
  },

  componentDidMount: function() {
    // Two way data binding
    base.syncState('cashbook', {
      context: this,
      state: 'cashbook'
    });
  },

  addExpenditure: function(expenditure) {
    var timestamp = (new Date()).getTime();
    // update state object
    this.state.cashbook.expenditure['expenditure-' + timestamp] = expenditure;
    // set state
    this.setState({
      cashbook: { expenditure: this.state.cashbook.expenditure }
    });
  },
  addIncome: function(income) {
    var timestamp = (new Date()).getTime();
    // update state object
    this.state.cashbook.income['income-' + timestamp] = income;
    // set state
    this.setState({
      cashbook: { income: this.state.cashbook.income }
    });
  },
  removeExpenditure: function(key) {
    this.state.cashbook.expenditure[key] = null;
    this.setState({
      cashbook: { expenditure: this.state.cashbook.expenditure }
    });
  },
  // renderExpenditure: function(key) {
  //   var details = this.state.cashbook.expenditure[key];
  //   return(
  //     <tr className="item" key={key}>
  //       <td><strong>{details.name}</strong></td>
  //       <td><strong>{h.formatPrice(details.amount)}</strong></td>
  //       <td>{details.category}</td>
  //       <td>{details.type}</td>
  //       <td>{details.date}</td>
  //       <td><button className="remove-item" onClick={this.removeExpenditure.bind(null, key)}>Remove</button></td>
  //     </tr>
  //   );
  // },
  removeIncome: function(key) {
    this.state.cashbook.income[key] = null;
    this.setState({
      cashbook: { income: this.state.cashbook.income }
    });
  },
  renderIncome: function(key) {
    var details = this.state.cashbook.income[key];
    return(
      <tr className="item" key={key}>
        <td><strong>{details.name}</strong></td>
        <td><strong>{h.formatPrice(details.amount)}</strong></td>
        <td>{details.category}</td>
        <td>{details.type}</td>
        <td>{details.date}</td>
        <td><button className="remove-item" onClick={this.removeIncome.bind(null, key)}>Remove</button></td>
      </tr>
    );
  },
  listInventory: function() {
    return
  },
  addTotal: function(type, total) {
    this.state.totals[type] = total;
  },
  LoadSampleData: function() {
    this.setState({
      cashbook: require('../sample-data')
    });
  },
  render: function() {

    return(
      <div className="cashbook">

        <a className="button" onClick={this.LoadSampleData}>Load Sample Data</a>

        <Expenditure
          cashbook={this.state.cashbook.expenditure}
          removeExpenditure={this.removeExpenditure} />

        <TotalCashflow
          type={this.state.cashbook.expenditure}
          addTotal={this.addTotal}
          identifier='expenditure'
          />

        <AddForm addCashflow={this.addExpenditure} />

        <Income
          cashbook={this.state.cashbook.income}
          renderIncome={this.renderIncome} />

        <TotalCashflow
          type={this.state.cashbook.income}
          addTotal={this.addTotal}
          identifier='income'
          />

        <AddForm addCashflow={this.addIncome} />

        <Available totals={this.state.totals} />

      </div>
    );
  }
});

export default App;
