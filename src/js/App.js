import React from 'react';
import MediaQuery from 'react-responsive';
import Index from './Index';
import MobileIndex from './MobileIndex';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import NewsDetail from './container/NewsDetail';
import 'antd/dist/antd.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MediaQuery query="(min-device-width: 1224px)">
          <Router>
            <div>
            {/* exact When true, the active class/style will only be applied if the location is matched exactly. */}
              <Route exact path="/" component={Index}/>
              <Route path="/details/:uniquekey" component={NewsDetail}/>
            </div>
          </Router>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">
          <MobileIndex/>
        </MediaQuery>
      </div>
    );
  }
}

export default App;
