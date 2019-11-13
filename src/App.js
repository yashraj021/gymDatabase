import React from 'react';
import HomePage from './pages/Home/HomePage.jsx';
import Header from './components/header.component/header.component';
import UserData from './pages/UserData/user-data.page';
import Members from './pages/Members/Members'
import Trainers from './pages/Trainers/Trainers';
import './App.scss';
import {Switch, Route, Redirect} from 'react-router-dom';

class App extends React.Component {

    state = {
        authenticated: false,
        users: [],
    };

    setAuthenticated = (authenticated) => {
        this.setState({authenticated})
    };

    renderRedirect = () => {
        if (this.state.authenticated) {
            return <Redirect to='/home'/>
        } else {
            return <Redirect to='/'/>
        }
    };

    render() {
        return (
            <div>
                <Header setAuthenticated={this.setAuthenticated} authenticated={this.state.authenticated}/>
                {this.renderRedirect()}
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/home' component={UserData}/>
                    <Route exact path='/members' component={Members}/>
                    <Route exct path='/trainers' component={Trainers}/>
                </Switch>
            </div>
        );
    }
}


export default App;
