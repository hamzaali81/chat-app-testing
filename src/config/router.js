import React from 'react';
import Home from '../container/Home';
import Chat from '../container/Chat';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import { createBrowserHistory } from "history";
  const customHistory = createBrowserHistory();


export default function AppRouter() {
    return (
        <div>
            <Router history={customHistory}>
                <Route exact path='/' component={Home}/>
                <Route exact path="/chat" component={Chat}/>
            </Router>
        </div>
    )
}
