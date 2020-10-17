import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './components/App/App';

import Index from './pages/Index/Index';
import Quiz from './pages/Quiz/Quiz';
import Stats from './pages/Stats/Stats';

const routeConfiguration = (
  <Router>
    <App>
      <Route exact path="/" component={Index} />
      <Route exact path="/quiz" component={Quiz} />
      <Route exact path="/stats" component={Stats} />
    </App>
  </Router>
);

export default routeConfiguration;