import React from 'react';
import {render} from 'react-dom';
import Header from './Header/header.jsx';
import Panel from './Panel/panel.jsx';
import {headerItems, headerSideItems} from './Header/mocks/mock.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header
          items={headerItems}
          logo='logo.png'
          sideLinks={headerSideItems} />
        <Panel
          title='Panel Title'
          content='Panel Content'
          footer='Panel Footer'
          />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
