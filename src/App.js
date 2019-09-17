import React from 'react';
import HomePage from './pages/HomePage/HomePage.jsx';
import Header from './components/header.component/header.component';
import './App.scss';
import { Switch, Route } from 'react-router-dom';



class App extends React.Component {

  constructor(props){
    super(props);
    
      this.state = {
        Login: false
      }
  }

  onLogIn = () => {
    this.setState({
      Login: true
    })
  }
  
    render() {      
      
      return (
        <div>
          <Header onLogIn = {this.onLogIn} OnLogIn ={this.state.LogIn} />
          <Switch>
            <Route exact path='/' component ={ HomePage }/>
          </Switch>
        </div>
      );
    }
  }


export default App;
