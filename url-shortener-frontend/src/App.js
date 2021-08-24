import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Landing from './Components/Landing';

const App = () => {
 
  return (
    <div className="App">
    <Router>
      <Route exact path='/' component={Landing} />
    </Router>
  </div>
  );
}

export default App;