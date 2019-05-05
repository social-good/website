import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import Homepage from './components/homepage/Homepage.js.jsx'
import About from './components/homepage/About.js.jsx'
import FeedCloseup from './components/homepage/FeedCloseup.js.jsx'

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserView >
          <Switch>
            <Route path='/feed/:feedId' component={FeedCloseup} />
            <Route path='/about' component={About} />
            <Route path='/' component={Homepage} />
          </Switch>
        </BrowserView>
        <MobileView>
          <div className="mobile-apology">
            <div className="mobile-apology-header">
              Sorry, this website isn't available on mobile.
            </div>
            <div className="mobile-apology-content">
              Unfortuately, this website isn't available on mobile. The mobile screen width messes with the charts, which are too complex to resize properly right now. Sorry for the inconvenience!
            </div>
          </div>
        </MobileView>
      </div>
    );
  }
}

export default App;
