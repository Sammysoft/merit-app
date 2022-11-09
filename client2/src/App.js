import React, { Component, Suspense } from 'react';
import {Spinner} from 'reactstrap'
import Home from './Components/Home';
import ExamPage from './Components/ExamPage';
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Login from './Components/Login';
import Dashboard from './Components/Dashboard/Dashboard'
import Result from './Components/Dashboard/Result';
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path="/add-ques" component={Home}/>
        <Route path="/test-page" component={ExamPage}/>
        <Route path="/" component={Login} exact/>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/result" component={Result}/>
      </Switch>
      </BrowserRouter>
    )
  }
}
