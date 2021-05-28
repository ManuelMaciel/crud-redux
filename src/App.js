import React from "react";
import Header from "./components/Header";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <div className='container'>
        <Switch>
          <Route exact path='/' component={Products} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
