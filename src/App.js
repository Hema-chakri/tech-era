import {Component} from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import Home from './components/Home'
import CourseDetail from './components/CourseDetail'
import FailureView from './components/FailureView'
import './App.css'

// Replace your code here
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/courses/:id" component={CourseDetail} />
          <Route path="/bad-path" component={FailureView} />
          <Redirect to="bad-path" />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
