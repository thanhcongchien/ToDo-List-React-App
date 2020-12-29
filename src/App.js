import React from 'react';
import './App.css';
import AccountAction from './containers/AccountAction/AccountAction';
import { Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';  
import history from './history/history';

function App() {
  // const history = createBrowserHistory({forceRefresh: true});
  return (
    <Router history={history}>
        <div className="App"> 
          <Switch>
            <Route path="/account" component={AccountAction}/>
            <Route path="/" component={HomePage}/>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
