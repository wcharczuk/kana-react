import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './components/App/App';

import Index from './pages/Index/Index';
import Stats from './pages/Stats/Stats';

const routeConfiguration = (
  <Router>
    <App>
      <Route exact path="/" component={Index} />
    </App>
  </Router>
);

export default routeConfiguration;