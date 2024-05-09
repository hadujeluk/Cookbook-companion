import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage'; 

function Home() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default Home;
