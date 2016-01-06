import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { createHistory } from 'history/lib/CreateBrowserHistory';

/* Import Components */
import App from './components/App';

// /* Not Found */
// var NotFound = React.createClass({
//   render: function() {
//     return <h1>Not Found!</h1>
//   }
// });

// /* Routes */
// var routes = (
//   <Router history={createHistory()}>
//     <Route path="/" component={App}/>
//     <Route path="*" component={NotFound}/>
//   </Router>
// );

ReactDOM.render(<App />, document.getElementById('main'));
