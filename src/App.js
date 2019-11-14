import React from 'react';
import HomePage from './pages/Home/HomePage.jsx';
import Header from './components/header.component/header.component';
import Members from './pages/Members/Members'
import Trainers from './pages/Trainers/Trainers';
import './App.scss';
import {Switch, Route, Redirect} from 'react-router-dom';
import {fetchUserMember, deleteUserMember} from './API/firebase.dml';

class App extends React.Component {

    state = {
        authenticated: false,
        users: [],
        new: 0
    };

    updateUser = async () => {
        await fetchUserMember().then(user=> this.setState({users: user}));
    }
    
    componentDidMount() {
        this.updateUser();
    }

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

    memberDelete = async (id) => {
        await deleteUserMember(id);
        await this.updateUser();

    } 

    render() {
        return (
            <div>
                <Header setAuthenticated={this.setAuthenticated} authenticated={this.state.authenticated}/>
                {this.renderRedirect()}
                <Switch>
                    <Route exact path='/' component={(props) => <HomePage onUserUpdate = {this.updateUser}/> }/>
                    <Route exact path='/home' component={(props) => <Members {...props} users = {this.state.users} onDelete = {this.memberDelete}  />} />
                    <Route exact path='/members' component={Members}/>
                    <Route exct path='/trainers' component={Trainers}/>
                </Switch>
            </div>
        );
    }
}


export default App;
