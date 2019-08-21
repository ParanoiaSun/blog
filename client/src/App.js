import React from 'react';

import MediaQuery from 'react-responsive';
import {Route, BrowserRouter as Router} from "react-router-dom";
import PCApp from "./containers/pc/PCApp";
import MobileApp from "./containers/mobile/MobileApp";

function App() {
  return (
    <div className="App">
        <Router>
            <MediaQuery query='(min-device-width: 1224px)'>
                <Route path='/' component={PCApp}/>
            </MediaQuery>
            <MediaQuery query='(max-device-width: 1224px)'>
                <Route path='/' component={MobileApp}/>
            </MediaQuery>
        </Router>
    </div>
  );
}

export default App;
