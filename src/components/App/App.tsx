import * as React from 'react';
import Nav from "../Nav/Nav"
import './App.css';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <>
        <Nav />
        { this.props.children}
      </>
    );
  }
}

export default App;
