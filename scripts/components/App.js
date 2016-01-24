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
import Tabs from './Tabs';
import Pane from './Pane';

const App = React.createClass({

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

  addCashflow: function(cashflow, type) {
    var timestamp = (new Date()).getTime();
    // update state object
    this.state.cashbook[type][type + '-' + timestamp] = cashflow;
    // set state
    this.setState({
      cashbook: { [type]: this.state.cashbook[type] }
    });
  },
  removeCashflow: function(key, type) {
    this.state.cashbook[type][key] = null;
    this.setState({
      cashbook: { [type]: this.state.cashbook[type] }
    });
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

        <Tabs>
  				<Pane label="Expenditure">
            <div>
              <Expenditure
                cashbook={this.state.cashbook.expenditure}
                removeCashflow={this.removeCashflow} />

              <TotalCashflow
                type={this.state.cashbook.expenditure}
                addTotal={this.addTotal}
                identifier='expenditure'
                />

              <AddForm addCashflow={this.addCashflow} type={'expenditure'} />
            </div>
  				</Pane>
  				<Pane label="Income">
            <div>
              <Income
                cashbook={this.state.cashbook.income}
                removeCashflow={this.removeCashflow} />

              <TotalCashflow
                type={this.state.cashbook.income}
                addTotal={this.addTotal}
                identifier='income'
                />

              <AddForm addCashflow={this.addCashflow} type={'income'} />
            </div>
  				</Pane>
  				<Pane label="Available to spend">
  					<Available totals={this.state.totals} />
  				</Pane>
  			</Tabs>
      </div>
    );
  }
});

export default App;
