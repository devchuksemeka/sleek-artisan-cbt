import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Landing from './components/landing/Landing';
import Login from './components/auth/Login';
import List from './components/question/List';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
           <Route exact path="/" component={Landing}/>
           <Route exact path="/login" component={Login}/>
           <Route exact path="/questions" component={List}/>
        </div>
      </Router>
      
    );
  }
}

export default App;
