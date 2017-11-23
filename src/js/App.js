import React from 'react';
import MediaQuery from 'react-responsive';
import Index from './Index';
import MobileIndex from './MobileIndex';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import 'antd/dist/antd.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MediaQuery query="(min-device-width: 1224px)">
          <Index/>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">
          <MobileIndex/>
        </MediaQuery>
      </div>
    );
  }
}

export default App;
