import React from 'react';
import HomePage from './pages/Home/HomePage.jsx';
import Header from './components/header.component/header.component';
import Members from './pages/Members/Members'
import Trainers from './pages/Trainers/Trainers';
import './App.scss';
import {Switch, Route, Redirect} from 'react-router-dom';
import {fetchUserMember, deleteUserMember, fetchUserTrainer, deleteUserTrainer} from './API/firebase.dml';

class App extends React.Component {

    state = {
        authenticated: false,
        members: [],
        trainers: [],
        new: 0
    };

    updateUser = async () => {
        if(this.state.authenticated) {
            await fetchUserMember().then(user=> this.setState({members: user}));
            await fetchUserTrainer().then(user=> this.setState({trainers: user}))
        }
    }
    
    

    setAuthenticated = (authenticated) => {
        this.setState({authenticated}, () => {
            this.updateUser();
        })

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
    
    trainerDelete = async (id) => {
        await deleteUserTrainer(id);
        await this.updateUser();
    }

    render() {
        return (
            <div>
                <Header setAuthenticated={this.setAuthenticated} authenticated={this.state.authenticated}/>
                {this.renderRedirect()}
                <Switch>
                    <Route exact path='/' component={(props) => <HomePage onUserUpdate = {this.updateUser}/> }/>
                    <Route exact path='/home' component={(props) => <Members {...props} users = {this.state.members} onDelete = {this.memberDelete} onUserUpdate={this.updateUser} />} />
                    <Route exact path='/members' component={(props) => <Members {...props} users = {this.state.members} onDelete = {this.memberDelete} onUserUpdate={this.updateUser} />} />
                    <Route exct path='/trainers' component={(props) => <Trainers {...props} users = {this.state.trainers} onDelete = {this.trainerDelete} onUserUpdate={this.updateUser} />}/>
                </Switch>
            </div>
        );
    }
}
 

export default App;
