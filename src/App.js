import React from 'react';
import HomePage from './pages/HomePage/HomePage.jsx';
import Header from './components/header.component/header.component';
import UserData from './pages/user-data.page/user-data.page';
import Members from './pages/MembersPage/Members'
import Trainers from './pages/TrainersPage/Trainers';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';



class App extends React.Component {

  constructor(props){
    super(props);
    
      this.state = {
        Login: false,
        users: [],
      }
  }

  onLogIn = (state) => {
    this.setState({
      Login: state
    })
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
            <Route exact path='/members' component = { Members }/>
            <Route exct path='/trainers' component = { Trainers }/>
          </Switch>
        </div>
      );
    }
  }


export default App;
