import React from 'react';
import HomePage from './pages/HomePage/HomePage.jsx';
import Header from './components/header.component/header.component';
import './App.scss';
import { Switch, Route } from 'react-router-dom';



function App() {
  
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component ={ HomePage }/>
        </Switch>
      </div>
    );
  }


export default App;
