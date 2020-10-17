import * as React from 'react';
import './App.css';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div id="app">
        <div id="app-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
