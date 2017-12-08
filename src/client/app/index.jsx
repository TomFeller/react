import React from 'react';
import {render} from 'react-dom';
import Header from './Header.jsx';


class App extends React.Component {
  render() {
    return (
      <div>
        <p> Hey React!</p>
        <Header />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
