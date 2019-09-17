import React from 'react';
import HomePage from './pages/HomePage/HomePage.jsx';
import Header from './components/header.component/header.component';
import UserData from './pages/user-data.page/user-data.page';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';



class App extends React.Component {

  constructor(props){
    super(props);
    
      this.state = {
        Login: false
      }
  }

  onLogIn = (state) => {
    this.setState({
      Login: state
    }, () => console.log(this.state.Login))
  }

  renderRedirect = () => {
    if (this.state.Login) {
      return <Redirect to='/home' />
    }
    else{
      return <Redirect to='/' />
    }
  }

  
    render() {      
      
      return (
        <div>
          <Header onLogIn = {this.onLogIn} onlogin ={this.state.Login} />
          {this.renderRedirect()}
          <Switch>
            <Route exact path='/' component ={ HomePage }/>
            <Route exact path='/home' component ={ UserData }/>
          </Switch>
        </div>
      );
    }
  }


export default App;
