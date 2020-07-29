import React from 'react';
import Feedback from './components/feedback';
import './App.css'
import MAPPTI from './components/map';
import { Switch, Route, BrowserRouter  as Router } from 'react-router-dom';
import PersonalPapers from './components/personal-papers';

function App() {
  return (
    <Router >
      <div className="App">
        <Switch>
          <Route exact path="/" component={Feedback} />
          <Route path="/personal/:id" component={PersonalPapers} />
          <Route path="/map" component={MAPPTI} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
