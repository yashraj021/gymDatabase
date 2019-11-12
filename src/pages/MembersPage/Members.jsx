import React, { Component } from 'react'
import './style.Members.scss';
import MemberList from '../../components/MemberList/MemberList';
import users from './users'

class Members extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: users,
            searchfield: ''
        }
    }
    
    onChangeHandler = (event) => {
        this.setState({searchfield: event.target.value},()=> console.log(this.state.searchfield))
    }

    render() {
        const filteredUsers = this.state.users.filter(user =>{
            return user.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
          })
        return(
            <div className = 'parent'>
                <div className = 'header'>
                    <div className = 'Topic'>
                        Members
                    </div> 
                    <div className = 'SearchArea'>
                        <div>
                            <input className = 'SearchBox' placeholder = 'Search' onChange = {this.onChangeHandler}/>
                        </div>
                        <button className = 'button'>
                            Search
                        </button>
                    </div>
                </div>
                <MemberList users = {filteredUsers}/>
            </div>
        )
    }
}

export default Members;