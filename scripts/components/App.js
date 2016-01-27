import React from 'react';

// Config
import config from '../config.js';

// Firebase
import Rebase from 're-base';
const base = Rebase.createClass(config.firebase);

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
  getInitialState() {
    return {
      cashbook: {
        expenditure: {},
        income: {},
        transactions: {}
      },
      totals: {},
      available: {}
    }
  },

  componentDidMount() {
    base.syncState('cashbook', {
      context: this,
      state: 'cashbook'
    });
  },
  addTransaction(transaction) {
    const timestamp = (new Date()).getTime();
    const monthNames = ["january", "february", "march", "april", "may", "june",
"july", "august", "september", "october", "november", "december"];
    const year = (new Date()).getFullYear();
    const month = monthNames[(new Date()).getMonth()];

    const transactions = this.state.cashbook.transactions || {};
    const yearObject = transactions[year] || {};
    const monthObject = yearObject[month] || {};
    const transactionId = 'transaction-' + timestamp;

    const newTransactions = {
        ...transactions,
        [year]: {
            ...yearObject,
            [month]: {
                ...monthObject,
                [transactionId]: transaction
            }
        }
    };
    this.setState({ cashbook: { transactions: newTransactions } });
  },
  addCashflow(cashflow, type) {
    const timestamp = (new Date()).getTime();
    this.state.cashbook[type][type + '-' + timestamp] = cashflow;
    this.setState({
      cashbook: { [type]: this.state.cashbook[type] }
    });
  },
  removeCashflow(key, type) {
    this.state.cashbook[type][key] = null;
    this.setState({
      cashbook: { [type]: this.state.cashbook[type] }
    });
  },
  addTotal(type, total) {
    this.state.totals[type] = total;
  },
  LoadSampleData() {
    this.setState({
      cashbook: require('../sample-data')
    });
  },
  render() {

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
  					<Available totals={this.state.totals} addTransaction={this.addTransaction} />
  				</Pane>
  			</Tabs>
      </div>
    );
  }
});

export default App;
