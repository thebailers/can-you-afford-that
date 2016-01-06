/* AddForm */

import React from 'react';
import AddCashflow from './AddCashflow';

var AddForm = React.createClass({
  render: function() {
    return (
      <div className="expenditure">
        <AddCashflow {...this.props} />
      </div>
    );
  }
});

export default AddForm;
